<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventDetailResource;
use App\Http\Resources\EventsResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Type;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function getAllEvents()
    {
        return EventsResource::collection(Event::all());
    }

    public function getEventById($id)
    {
        $event = Event::where('id', $id)
                ->with(['category', 'type'])
                ->get();
        return new EventDetailResource($event);
    }

    public function findEventsByTitle($title)
    {
        if($title)
        {
            $events = Event::where('title', 'like', "%$title%")->get();
            return EventsResource::collection($events);
        }
    }

    public function orderEvents($type)
    {
        if($type === 'ASC' || $type === 'DESC') {
            return EventsResource::collection(Event::orderBy('title', $type)->get());
        } elseif ($type === 'CITY') {
            return EventsResource::collection(Event::orderBy('location', 'DESC')->get());
        }
        return $this->getAllEvents();
    }

    public function filterEventsByCategoryOrType($filter, $id)
    {
        $events = [];
        if($filter === 'category') {
            $category = Category::find($id);
            $events = $category->events;

        } elseif ($filter === 'type') {
            $type = Type::find($id);
            $events = $type->events;
        }

        return EventsResource::collection($events);
    }
}

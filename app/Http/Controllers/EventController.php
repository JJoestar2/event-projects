<?php

namespace App\Http\Controllers;

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
        return view('event-details', ['event' => $event]);
    }

    public function findEventsByTitle($title)
    {
            $events = Event::where('title', 'like', "%$title%")->get();
            return EventsResource::collection($events);
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

<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventsResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Type;
use Illuminate\Http\Request;
use Auth;

class EventController extends Controller
{
    public function getAllEvents()
    {
        return EventsResource::collection(Event::all());
    }

    public function getEventById($id)
    {
        $event = Event::find($id);
        $item =  $event->where('id', $id)->with(['category', 'type'])->get();
        $member = $this->checkIfUserInEvent($event, Auth::user()->getAuthIdentifier());

        return view('event-details', ['event' => $item, 'member' => $member]);
    }

    public function findEventsByTitle($title)
    {
        $events = Event::where('title', 'like', "%$title%")->get();

        return EventsResource::collection($events);
    }

    public function createEvent()
    {
        $category = Category::all();
        $type = Type::all();

        return view('create-event', ['category' => $category, 'type' => $type]);
    }

    public function saveEvent(Request $request)
    {
        Event::create([
            'category_id' => $request->input('category'),
            'type_id' => $request->input('type'),
            'users_id' => $request->input('userId'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'date_start' => $request->input('date_start'),
            'date_end' => $request->input('date_end'),
            'status' => $request->input('status'),
            'location' => $request->input('location'),
        ]);

        return redirect("/create");
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

    public function registerInEvent($userId, $eventId)
    {
        $event = Event::find($eventId);
        $event->users()->attach($userId);

        return redirect("/event/$eventId");
    }

    public function leaveFromEvent($userId, $eventId)
    {
        $event = Event::find($eventId);
        $event->users()->detach($userId);

        return redirect("/event/$eventId");
    }

    private function checkIfUserInEvent($event, $userId)
    {
        $member = $event->users($userId)->select('user_id')->get();

        return sizeof($member) == 0;
    }
}

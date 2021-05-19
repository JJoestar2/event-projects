<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventsResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Type;
use App\Http\Requests\EventCreateRequest;

use App\Models\User;
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
        $users = $event->users()->select(['name', 'surname'])->get();

        if(!Auth::user()) {
            return view('event-details', ['event' => $item, 'participants' => $users]);
        } else {
            $member = $this->checkIfUserInEvent($event, Auth::id());
            return view('event-details', ['event' => $item, 'member' => $member, 'participants' => $users]);
        }
    }

    public function getUserEvents($id)
    {
        $user = User::find($id);
        $events = $user->events()->get();

        return EventsResource::collection($events);
    }

    public function getCreatedEvents($id)
    {
        $events = Event::where('users_id', $id)->get();

        return EventsResource::collection($events);
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

    public function editEvent($id)
    {
        $category = Category::all();
        $type = Type::all();
        $event = Event::where('id', $id)->get();

        return view('edit-event', ['event'=> $event, 'category' => $category, 'type' => $type]);
    }

    public function eventUpdate(Request $request, $id)
    {
        /*$category = Category::all();
        $type = Type::all();
        $event = Event::where('id', $id)->get();

        return view('edit-event', ['event'=> $event, 'category' => $category, 'type' => $type]);*/
        return dd($request->all());
    }

    public function saveEvent(EventCreateRequest $request)
    {
        Event::create($request->validated());
        return redirect("/event/create");
    }

    public function filterEvents(Request $request)
    {
        if(sizeof($request->data) == 0) {
            return EventsResource::collection(Event::all());
        }

        $events = [];

        foreach ($request->data as $item)
        {
             if($item['type'] == 'category')
             {
                 if($events) $events->where('category_id', $item['value']);
                 $events = Event::where('category_id', $item['value']);
             }

             if($item['type'] == 'type')
             {
                 if($events) $events->where('type_id', $item['value']);
                 $events = Event::where('type_id', $item['value']);
             }
        }

        return EventsResource::collection($events->get());
    }

    public function registerInEvent($userId, $eventId)
    {
        $event = Event::find($eventId);
        $palcesCount = $event->count;

        if(!is_null($palcesCount))
        {
            if($palcesCount != 0)
            {
                $event->update([
                    'count' => $palcesCount - 1
                ]);
                $event->users()->attach($userId);
            } else return redirect("/event/$eventId");
        } else $event->users()->attach($userId); // places are unlimited so we can register our user in event

        return redirect("/event/$eventId");
    }

    public function leaveFromEvent($userId, $eventId)
    {
        $event = Event::find($eventId);
        $palcesCount = $event->count;

        if(!is_null($palcesCount))
        {
            $event->update([
                'count' => $palcesCount + 1
            ]);
            $event->users()->detach($userId);
        } else $event->users()->detach($userId); // places are unlimited so we can delete our user from event

        return redirect("/event/$eventId");
    }

    private function checkIfUserInEvent($event, $userId)
    {
        $member = $event->users($userId)->select('user_id')->get();

        return sizeof($member) == 0;
    }
}

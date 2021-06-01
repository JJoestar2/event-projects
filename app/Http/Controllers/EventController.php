<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventsResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Type;
use App\Http\Requests\EventCreateRequest;
use App\Http\Requests\EventEditRequest;

use App\Models\User;
use Illuminate\Http\Request;

use Auth;
class EventController extends Controller
{
    public function getAllEvents()
    {
        return EventsResource::collection(Event::paginate(3));
    }

    public function getEventById($id)
    {
        $event = Event::find($id);
        $item =  $event->where('id', $id)->with(['category', 'type'])->get();
        $users = $event->users()->select(['name', 'surname'])->get();

        if(!Auth::user()) {
            return view('event-details', ['event' => $item, 'participants' => $users, 'eventObj' => $event]);
        } else {
            $member = $this->checkIfUserInEvent($event, Auth::id());
            return view('event-details', ['event' => $item, 'member' => $member, 'participants' => $users, 'eventObj' => $event]);
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

    public function eventUpdate(EventEditRequest $request, $id)
    {
        if($request->validated())
        {
            Event::where('id', $id)
                ->update([
                    'category_id' => $request->input('category_id'),
                    'type_id' => $request->input('type_id'),
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'date_start' => $request->input('date_start'),
                    'date_end' => $request->input('date_end'),
                    'status' => $request->input('status'),
                    'location' => $request->input('location'),
                    'count' => $request->input('count'),
                ]);

            return redirect("/home");
        } else {
            return redirect("/event/edit/$id");
        }
    }

    public function saveEvent(EventCreateRequest $request)
    {
        $event = Event::create($request->validated());
        if($event)
        {
            $event->users()->attach($request->input('users_id'));
            return redirect("/event/create");
        }

        return redirect("/event/create");
    }

    public function filterEvents(Request $request)
    {
        if(!$request->data) {
            return EventsResource::collection(Event::all());
        }

        $eventQuery = Event::query();

        foreach ($request->data as $item)
        {
            if($item['type'] == 'category')
            {
                $eventQuery = $eventQuery->where('category_id', $item['value']);
            }

            if($item['type'] == 'type')
            {
                $eventQuery = $eventQuery->where('type_id', $item['value']);
            }
        }

        $results = $eventQuery->get();
        return EventsResource::collection($results);
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
        $member = $event->users()->select('user_id')->where('user_id', $userId)->get();

        return count($member) > 0;
    }
}

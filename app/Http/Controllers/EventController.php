<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventsResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Type;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\EventCreateRequest;
use App\Http\Requests\EditUserDataRequest;

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

    public function saveEvent(EventCreateRequest $request)
    {
        Event::create($request->validated());
        return redirect("/event/create");
    }

    public function editUser()
    {
        $user = User::select(['id', 'name', 'surname', 'email', 'phone', 'country', 'city'])
                    ->where('id', Auth::id())
                    ->get();
        return view('edit-user', ['user' => $user]);
    }

    public function saveUser(EditUserDataRequest $request, $id)
    {
        if($request->validated())
        {
             User::where('id', $id)
                    ->update([
                          'name' => $request->input('name'),
                          'surname' => $request->input('surname'),
                          'email' => $request->input('email'),
                          'phone' => $request->input('phone'),
                          'country' => $request->input('country'),
                          'city' => $request->input('city')
                    ]);
        }

        return redirect("/user/edit");
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
                 if($events) $events = $events->where('type_id', $item['value']);
                 $events = Event::where('category_id', $item['value']);
             }

             if($item['type'] == 'type')
             {
                 if($events) $events = $events->where('category_id', $item['value']);
                 $events = Event::where('type_id', $item['value']);
             }
        }

        return EventsResource::collection($events->get());
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

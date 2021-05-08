@extends('layouts.app')

@section('content')
    @foreach($event as $item)
    <div class="event-block">
        <div class="event-block__top">
            <a href="/">Back</a>
            <div class="d-flex justify-content-between">
                <div class="event-iamge">
                    <img src="{{asset('img_lights.jpg')}}" alt="#">
                </div>
                <div class="event-heading">
                    <span>{{ date("F", strtotime($item->date_start)) }} {{  date("d", strtotime($item->date_start)) }} </span>
                    <h1> {{ $item->title }} </h1>

                    @if(!Auth::user())
                        <span>Log-in or Register</span>
                    @endif

                    @isset($member)
                        @if(Auth::id() !== $item->users_id) <!--- check if user is creator of event --->
                            @if($member)
                                <a href="{{"/event/register/" . Auth::user()->getAuthIdentifier(). "/" . $item->id }}" class="btn-member btn-register">Register</a>
                            @else
                                <a href="{{"/event/leave/" . Auth::user()->getAuthIdentifier(). "/" . $item->id }}" class="btn-member btn-register">Leave Event</a>
                            @endif
                        @endif
                    @endisset
                </div>
            </div>
        </div>
        <div class="event-block__content">
            <span class="event-description-header">About this Event</span>
            <div class="d-flex justify-content-between">
                <div class="event-description">
                    {!! $item->description !!}
                </div>
                <div class="event-aside">
                    <span><span class="event-place">Location<span class="event-locations"> {{$item->location}} </span></span></span>
                    <span><span class="event-date-time">Date and Time<span class="event-dates"> {{ $item->date_start }} - {{$item->date_end}} </span> </span></span>
                    <a href="#" class="google-notify-link">Add to Google Calendar</a>
                    <span class="event-type">
                        <span class="event-type-category">Category: <span>{{$item->category->category}}</span></span>
                        <span class="event-type-format">Format: <span>{{$item->type->type}}</span> </span>
                    </span>
                </div>
            </div>
            @endforeach
        </div>
    </div>
@endsection

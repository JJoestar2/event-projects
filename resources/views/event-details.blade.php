@extends('layouts.app')

@section('content')
    <a href="/" class="back btn btn-back"> <span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back</a>
    @foreach($event as $item)
    <div class="event-block">
        <div class="event-block__top">
            <div class="d-flex justify-content-between">
                <div class="event-iamge">
                    <img src="{{asset('img_lights.jpg')}}" alt="#">
                </div>
                <div class="event-heading">
                    <span>{{ date("F", strtotime($item->date_start)) }} {{  date("d", strtotime($item->date_start)) }} </span>
                    <h1> {{ $item->title }} </h1>
                </div>
            </div>
        </div>
        <div class="event-block__content">
            <div class="event-description-header px-3 d-flex justify-content-between align-items-center">
                <span>About this Event</span>

                @if(!Auth::user())
                    <span>Log-in or Register</span>
                @endif

                @isset($member)
                    @if(Auth::id() !== $item->users_id) <!--- check if user is creator of event --->
                        @if($member)
                            <a href="{{"/event/register/" . Auth::id(). "/" . $item->id }}" class="btn-member btn-register">Register</a>
                        @else
                            <a href="{{"/event/leave/" . Auth::id(). "/" . $item->id }}" class="btn-member btn-register">Leave Event</a>
                        @endif
                    @endif
                @endisset
            </div>
            <div class="d-flex justify-content-between mt-3 px-3">
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
                    @if(sizeof($participants) !== 0)
                        <div>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Members of event
                            </button>
                            {{ count($participants) }}
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    @foreach($participants as $item)
                                        {{ $item->name . ' ' . $item->surname }}
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
            @endforeach
        </div>
    </div>
@endsection

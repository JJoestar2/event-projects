@extends('layouts.app')

@section('content')
    <a href="/" class="back btn btn-back"> <span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back</a>
    @foreach($event as $item)
    <div class="event-block">
        <div class="event-block__top">
            <div class="d-flex justify-content-between">
                <div class="event-image">
                    <img src="{{asset('img_lights.jpg')}}" alt="#">
                </div>
                <div class="event-heading">
                    <span>{{ date("F", strtotime($item->date_start)) }} {{  date("d", strtotime($item->date_start)) }} </span>
                    <h1> {{ $item->title }} </h1>
                    @isset($member)
                            <livewire:product-ratings :event="$eventObj" :userId="Auth::id()" :member="$member" />
                        @else
                            <livewire:product-ratings :event="$eventObj" :userId="Auth::id()" :member="false" />
                    @endisset
                    @if(!is_null($item->count))
                        <span> Places remained:
                            <span class="places px-2">{{ $item->count }}</span>
                        </span>
                    @endif
                </div>
            </div>
        </div>
        <div class="event-block__content">
            <div class="event-description-header px-3 d-flex justify-content-between align-items-center">
                <span>About this Event</span>

                @if(!Auth::user())
                    <span>
                        <a href="/login"> Log-in</a> or <a href="/register">Register</a>
                    </span>
                @endif

                @isset($member)
                    @if(Auth::id() !== $item->users_id) <!--- check if user is creator of event --->
                        @if($member)
                            <a href="{{"/event/leave/" . Auth::id(). "/" . $item->id }}" class="btn-member btn-register">Leave Event</a>
                        @else
                            @if(!is_null($item->count))
                                @if($item->count != 0)
                                    <a href="{{"/event/register/" . Auth::id(). "/" . $item->id }}" class="btn-member btn-register">Register</a>
                                @else($item->count == 0)
                                    <span> No More Places </span>
                                @endif
                            @else <!--- it means places are unlimited --->
                                <a href="{{"/event/register/" . Auth::id(). "/" . $item->id }}" class="btn-member btn-register">Register</a>
                            @endif
                        @endif
                    @endif
                @endisset
            </div>
            <div class="d-flex justify-content-between mt-3 px-3 pb-4">
                <div class="event-description">
                    {!! $item->description !!}
                </div>
                <div class="event-aside">
                    <span>
                        <span class="event-place"><i class="fa fa-map-marker" aria-hidden="true"></i> Location
                            <span class="event-locations"> {{$item->location}} </span>
                        </span>
                    </span>
                    <span>
                        <span class="event-date-time">Date and Time
                            <span class="event-dates"> <i class="fa fa-play" aria-hidden="true"></i> {{ $item->date_start }}</span>
                            <span class="event-dates"> <i class="fa fa-flag-checkered" aria-hidden="true"></i> {{ $item->date_end }} </span>
                        </span>
                    </span>
                    <a href="#" class="google-notify-link">Add to Google Calendar</a>
                    <span class="event-type">
                        <span class="event-type-category">Category: <span>{{$item->category->category}}</span></span>
                        <span class="event-type-format">Format: <span>{{$item->type->type}}</span> </span>
                    </span>
                    @if(sizeof($participants) !== 0)
                        <div class="participants">
                            <div class="participants-item mb-2">
                                <button class="btn btn-primary" type="button" data-toggle="collapse"
                                        data-target="#collapseExample" aria-expanded="false"
                                        aria-controls="collapseExample">
                                    Members of event
                                </button>
                                <span class="participants-count">
                                    <i class="fa fa-users" aria-hidden="true"></i>
                                    <span>{{ count($participants) }}</span>
                                </span>
                            </div>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body participants-block">
                                    <ul class="participants-list">
                                        @foreach($participants as $participant)
                                            <li class="participants-list-item">{{$participant->name . ' ' . $participant->surname }} {!! $item->users_id == $participant->user_id ? '<i class="fa fa-star" aria-hidden="true"></i>' : ""  !!}</li>
                                        @endforeach
                                    </ul>
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

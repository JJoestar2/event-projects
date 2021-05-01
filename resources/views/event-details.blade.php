@extends('layouts.app')

@section('content')
    @foreach($event as $item)
    <div class="event-block">
        <div class="event-block__top">
            <div class="d-flex justify-content-between">
                <div class="event-iamge">
                    <img src="{{asset('img_lights.jpg')}}" alt="#">
                </div>
                <div class="event-heading">
                    <span>APR 14</span>
                    <h1> {{ $item->title }} </h1>
                    <button class="btn btn-register">Register</button>
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
            <button class="btn-member btn-register">Register</button>
            @endforeach
        </div>
    </div>
@endsection

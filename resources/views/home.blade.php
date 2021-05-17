@extends('layouts.app')

@section('content')
   <div id="home-page" data={{ Auth::id() }}></div>
@endsection

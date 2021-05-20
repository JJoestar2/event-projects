@extends('layouts.app')

@section('content')
    <a href="/" class="back btn btn-back"> <span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back</a>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Create Event') }}</div>

                    <div class="card-body">
                        <form method="POST" action="/event/save">
                            @csrf

                            <div class="form-group row">
                                <label for="title"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Title') }}</label>

                                <div class="col-md-6">
                                    <input id="title" type="text"
                                           class="form-control @error('title') is-invalid @enderror" name="title"
                                           value="{{ old('title') }}" autocomplete="title" autofocus>

                                    @error('title')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="category"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Category') }}</label>

                                <div class="col-md-6">
                                    <select id="category" class="form-control" name="category_id">
                                        @foreach($category as $item)
                                            <option value="{{$item->id}}">{{$item->category}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="type"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Format') }}</label>

                                <div class="col-md-6">
                                    <select id="type" class="form-control" name="type_id">
                                        @foreach($type as $item)
                                            <option value="{{$item->id}}">{{$item->type}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="description"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Description') }}</label>
                                <div class="col-md-6">
                                    <textarea id="description-editor" name="description"
                                              class="form-control @error('description') is-invalid @enderror"
                                              rows="5" value="{{ old('description') }}"
                                              autocomplete="description">
                                        @error('description')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="status"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Status') }}</label>

                                <div class="col-md-6">
                                    <select id="status" class="form-control" name="status">
                                        <option value="Planing">Planing</option>
                                        <option value="In Process">In Process</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="location"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Location') }}</label>

                                <div class="col-md-6">
                                    <input id="location" type="text"
                                           class="form-control @error('location') is-invalid @enderror" name="location"
                                           value="{{ old('location') }}" autocomplete="location" autofocus>

                                    @error('location')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="date_start"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Date Start') }}</label>

                                <div class="col-md-6">
                                    <input id="date_start" type="datetime-local"
                                           class="form-control @error('date_start') is-invalid @enderror"
                                           name="date_start" value="{{ old('date_start') }}"
                                           autocomplete="date_start" autofocus>

                                    @error('date_start')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="date_end"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Date End') }}</label>

                                <div class="col-md-6">
                                    <input id="date_end" type="datetime-local"
                                           class="form-control @error('date_end') is-invalid @enderror" name="date_end"
                                           value="{{ old('date_end') }}" autocomplete="date_end" autofocus>

                                    @error('date_end')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <input id="users_id" type="hidden"
                                           class="form-control" name="users_id"
                                           value="{{ Auth::user()->getAuthIdentifier() }}" >
                                </div>
                            </div>

                            <div class="d-flex justify-content-center">
                                   <div class="form-group form-check">
                                       <input type="checkbox" class="form-check-input" id="showCount">
                                       <label class="form-check-label" for="showCount">Restrict Places?</label>
                                   </div>
                            </div>
                            <div id="countBlock">
                                <div class="form-group row">
                                    <label for="count"
                                           class="col-md-4 col-form-label text-md-right">{{ __('Places Count') }}</label>

                                    <div class="col-md-6">
                                        <input id="count" type="text"
                                               class="form-control @error('count') is-invalid @enderror" name="count"
                                               value="{{ old('count') }}" autocomplete="count" autofocus>

                                        @error('count')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Create') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            let showCountCheckBox = document.getElementById('showCount');
            let countBlock = document.getElementById('countBlock');

            countBlock.style.display = "none";

            showCountCheckBox.addEventListener('click', function () {
                if(showCountCheckBox.checked) countBlock.style.display = "block";
                else countBlock.style.display = "none";
            });

            ClassicEditor
                .create(document.querySelector('#description-editor'), {
                    removePlugins: ['Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'EasyImage', 'CKFinder']
                })
                .catch(error => {
                    console.error(error);
                });
        });
    </script>
@endsection

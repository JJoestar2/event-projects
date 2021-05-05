@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Create Event') }}</div>

                    <div class="card-body">
                        <form method="POST" action="/event-save">
                            @csrf

                            <div class="form-group row">
                                <label for="title"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Title') }}</label>

                                <div class="col-md-6">
                                    <input id="title" type="text"
                                           class="form-control @error('title') is-invalid @enderror" name="title"
                                           value="{{ old('title') }}" required autocomplete="title" autofocus>

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
                                    <select id="category" class="form-control @error('category') is-invalid @enderror"
                                            name="category" required autocomplete="category">
                                        @foreach($category as $item)
                                            <option value="{{$item->id}}">{{$item->category}}</option>
                                        @endforeach
                                    </select>

                                    @error('category')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="type"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Format') }}</label>

                                <div class="col-md-6">
                                    <select id="type" class="form-control @error('type') is-invalid @enderror"
                                            name="type" required autocomplete="type">
                                        @foreach($type as $item)
                                            <option value="{{$item->id}}">{{$item->type}}</option>
                                        @endforeach
                                    </select>

                                    @error('type')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="description"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Description') }}</label>

                                <div class="col-md-6">
                                    <textarea id="description-editor" class="form-control" name="description" rows="5"></textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="status"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Status') }}</label>

                                <div class="col-md-6">
                                    <select id="status" class="form-control @error('status') is-invalid @enderror"
                                            name="status" required autocomplete="status">
                                        <option value="Planing">Planing</option>
                                        <option value="In Process">In Process</option>
                                        <option value="Done">Done</option>
                                    </select>

                                    @error('status')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="location"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Location') }}</label>

                                <div class="col-md-6">
                                    <input id="location" type="text"
                                           class="form-control @error('location') is-invalid @enderror" name="location"
                                           value="{{ old('location') }}" required autocomplete="location" autofocus>

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
                                           name="date_start" value="{{ old('date_start') }}" required
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
                                           value="{{ old('date_end') }}" required autocomplete="date_end" autofocus>

                                    @error('date_end')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <input id="userId" type="hidden"
                                           class="form-control" name="userId"
                                           value="{{ Auth::user()->getAuthIdentifier() }}" >
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
        ClassicEditor
            .create(document.querySelector('#description-editor'), {
                removePlugins: ['Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'EasyImage', 'CKFinder']
            })
            .catch(error => {
                console.error(error);
            });
    </script>
@endsection

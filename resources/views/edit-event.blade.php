@extends('layouts.app')

@section('content')
    <a href="/" class="back btn btn-back"> <span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back</a>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Edit Event') }}</div>
                    <div class="card-body">
                        @foreach($event as $item)
                        <form method="POST" action="/event/update/{{ $item->id }}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group row">
                                <label for="title"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Title') }}</label>

                                <div class="col-md-6">
                                    <input id="title" type="text"
                                           class="form-control @error('title') is-invalid @enderror" name="title"
                                           value="{{ $item->title }}" autocomplete="title" autofocus>

                                    @error('title')
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
                                           value="{{$item->location}}" autocomplete="location" autofocus>

                                    @error('location')
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
                                    <textarea id="description-editor" name="description"
                                              class="form-control @error('description') is-invalid @enderror"
                                              rows="5"
                                              autocomplete="description">
                                        @error('description')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                        {{ $item->description }}
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
                                <label for="date_start"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Date Start') }}</label>

                                <div class="col-md-6">
                                    <input id="date_start" type="datetime-local"
                                           class="form-control @error('date_start') is-invalid @enderror"
                                           name="date_start" value="{{ date('Y-m-d\TH:i:s', strtotime($item->date_start)) }}"
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
                                           value="{{ date('Y-m-d\TH:i:s', strtotime($item->date_end)) }}" autocomplete="date_end" autofocus />

                                    @error('date_end')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="count"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Count') }}</label>

                                <div class="col-md-6">
                                    <input id="count" type="text"
                                           class="form-control @error('count') is-invalid @enderror" name="count"
                                           value="{{ $item->count }}" autocomplete="location" autofocus>

                                    @error('count')
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
                                        @foreach($category as $cat)
                                            <option value="{{$cat->id}}" {{$cat->id == $item->category_id ? "selected" : '' }}>
                                                {{$cat->category}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="type"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Format') }}</label>

                                <div class="col-md-6">
                                    <select id="type" class="form-control" name="type_id">
                                        @foreach($type as $ty)
                                            <option value="{{$ty->id}}" {{$ty->id == $item->type_id ? "selected" : '' }}>
                                                {{$ty->type}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="upload"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Preview') }}</label>

                                <div class="col-md-6">
                                    <div class="input-group mb-3 px-2 py-2 rounded-pill bg-gradient-lightblue shadow-sm">
                                        <input id="upload" type="file" name="preview" class="@error('preview') is-invalid @enderror form-control border-0"
                                               autocomplete="preview" autofocus>
                                        <label id="upload-label" for="upload" class="font-weight-light text-white">Choose preview</label>
                                        <div class="input-group-append">
                                            <label for="upload" class="btn btn-light m-0 rounded-pill px-4">
                                                <i class="fa fa-cloud-upload mr-2 text-muted"></i>
                                                <small class="text-uppercase font-weight-bold text-muted">Choose preview</small>
                                            </label>
                                        </div>
                                        @error('preview')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <input id="old_preview" type="hidden"
                                           class="form-control" name="old_preview"
                                           value="{{ count($item->photos) > 0 ? $item->photos[0]->path : '' }}" >
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Edit') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                        @endforeach
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

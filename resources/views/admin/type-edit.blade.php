@extends('admin.layout.admin')

@section('content')
    <div class="container">
        <a href="/admin/types" class="text-white">
            <button class="btn btn-outline-info mt-2">
                <span class="mr-3"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back
            </button>
        </a>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Edit Type') }}</div>

                    <div class="card-body">
                        @foreach($type as $item)
                        <form method="POST" action="/admin/type/{{ $item->id }}/update">
                            @csrf

                            <div class="form-group row">
                                <label for="category"
                                       class="col-md-4 col-form-label text-md-right">{{ __('Type') }}</label>

                                <div class="col-md-6">
                                    <input id="type" type="text"
                                           class="form-control @error('type') is-invalid @enderror" name="type"
                                           value="{{ $item->type }}" autocomplete="type" autofocus required>

                                    @error('type')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
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

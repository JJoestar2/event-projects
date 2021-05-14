@extends('layouts.app')

@section('content')
    <a href="/" class="back btn btn-back"> <span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>Back</a>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="wrap-contact2">
                    @foreach($user as $item)
                    <form class="contact2-form" method="POST" action="/user/save/{{ $item['id'] }}" >
                        @csrf
                        <span class="contact2-form-title">Personal Info</span>


                            <div class="wrap-input2">
                                <input class="input2 @error('name') is-invalid @enderror"
                                       value="{{ $item['name'] }}" type="text" name="name" autocomplete="name"
                                       autofocus>
                                <span class="focus-input2" data-placeholder="NAME"></span>

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>

                            <div class="wrap-input2">
                                <input class="input2 @error('surname') is-invalid @enderror"
                                       value="{{ $item['surname'] }}" type="text" name="surname"
                                       autocomplete="surname" autofocus>
                                <span class="focus-input2" data-placeholder="SURNAME"></span>

                                @error('surname')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>

                            <div class="wrap-input2">
                                <input class="input2 @error('email') is-invalid @enderror"
                                       value="{{ $item['email'] }}" type="text" name="email"
                                       autocomplete="email" autofocus>
                                <span class="focus-input2" data-placeholder="EMAIL"></span>

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>

                            <div class="wrap-input2">
                                <input class="input2 @error('phone') is-invalid @enderror" type="text"
                                       name="phone" value="{{ $item['phone'] }}"
                                       autocomplete="phone" autofocus>
                                <span class="focus-input2" data-placeholder="PHONE"></span>

                                @error('phone')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                 </span>
                                @enderror
                            </div>

                            <div class="wrap-input2">
                                <input class="input2 @error('country') is-invalid @enderror" type="text"
                                       name="country" value="{{ $item['country'] }}"
                                       autocomplete="country" autofocus>
                                <span class="focus-input2" data-placeholder="COUNTRY"></span>

                                @error('country')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>

                            <div class="wrap-input2">
                                <input class="input2 @error('city') is-invalid @enderror" type="text"
                                       name="city" value="{{ $item['city'] }}"
                                       autocomplete="city" autofocus>
                                <span class="focus-input2" data-placeholder="CITY"></span>

                                @error('city')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <button type="submit" class="contact2-form-btn">
                                Save Changes
                            </button>
                        </form>
                    @endforeach
                </div>
                <div class="wrap-contact2">
                    <form class="contact2-form" method="POST" action="/user/change-password/{{ $item['id'] }}">
                        @csrf
                        <span class="contact2-form-title">Password Change</span>

                        <div class="wrap-input2">
                            <input class="input2 @error('password') is-invalid @enderror" type="password" name="password"
                                   autocomplete="password" autofocus>
                            <span class="focus-input2" data-placeholder="NEW PASSWORD"></span>

                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="wrap-input2">
                            <input class="input2 @error('password_confirmation') is-invalid @enderror" type="password" name="password_confirmation"
                                   autocomplete="password_confirmation" autofocus>
                            <span class="focus-input2" data-placeholder="REPEAT PASSWORD"></span>

                            @error('password_confirmation')
                            <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <button class="contact2-form-btn" type="submit">
                            Save New Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", function () {

            let forms = [...document.getElementsByClassName('contact2-form')];
            let inputs = [...document.getElementsByClassName('input2')];

            let setEffect = (form) => {
                form.addEventListener('click', function (event) {
                    let target = event.target;
                    if (!target.classList.contains('input2')) return;
                    setOnBlur(target);
                });
            }

            let setOnBlur = (target) => {
                target.addEventListener('blur', function () {
                    checkVal(target);
                });
            }

            let checkVal = (item) => {
                if (item.value.trim() != "") item.classList.add('has-val');
                else item.classList.remove('has-val');
            }

            forms.forEach((item) => {
                setEffect(item);
            });

            inputs.forEach((item) => {
                checkVal(item);
            });
        });
    </script>
@endsection

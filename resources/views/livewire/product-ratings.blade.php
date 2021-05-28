<div>
    {{-- The whole world belongs to you. --}}
            <div class="d-flex justify-content-between mt-2">
                <span>Average Rating: </span>
                <span class="rating px-2">{{ $avgRating }}</span>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-1">
                <span class="small">Your rating:</span>
                <div class="ml-2">
                    @for ($i = 0; $i < $this->rating; $i++)
                        <svg wire:click="setRating({{ $i+1 }})" class="star star-filled"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z">
                            </path>
                        </svg>
                    @endfor

                    @for ($i = $this->rating; $i < 5; $i++)
                        <svg wire:click="setRating({{ $i+1 }})" class="star star-not-filled"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z">
                            </path>
                        </svg>
                    @endfor
                </div>
            </div>
</div>

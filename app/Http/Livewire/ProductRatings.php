<?php

namespace App\Http\Livewire;

use App\Models\Event;
use Livewire\Component;

class ProductRatings extends Component
{
    public $rating;
    public $avgRating;
    public $event;
    public $userId;

    public function mount($eventId, $userId)
    {
        $this->userId = $userId;

        $event = Event::find($eventId);
        $this->event = $event;

        $userRating = $this->event->users()
            ->where('user_id', $this->userId)->first();

        if(!$userRating) {
            $this->rating = 0;
        } else {
            $this->rating = $userRating->pivot->rating;
        }

        $this->calculateAverageRating();
    }

    private function calculateAverageRating() {
        $this->avgRating = round($this->event->users()->avg('rating'), 1);
    }

    public function setRating($val)
    {
        if ($this->rating == $val) {    // user can click on the same rating to reset the value
            $this->rating = 0;
        } else {
            $this->rating = $val;
        }

        $userRating = $this->event->users()->where('user_id', $this->userId)->first();

        if (!$userRating) {
            $userRating = $this->event->users()->attach($this->userId, [
                'rating' => $val
            ]);
        } else {
            $this->event->users()->updateExistingPivot($this->userId, [
                'rating' => $val
            ], false);
        }

        $this->calculateAverageRating();
    }

    public function render()
    {
        return view('livewire.product-ratings');
    }
}

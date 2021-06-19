<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'date_start' => $this->date_start,
            'date_end' => $this->date_end,
            'preview' => $this->preview,
            'users_id' => $this->users_id,
            'status' => $this->status,
            'location' => $this->location,
            'photos' => $this->photos,
        ];
    }
}

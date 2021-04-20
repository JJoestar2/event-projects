<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventDetailResource extends JsonResource
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
            'id' => $this->resource[0]->id,
            'title' => $this->resource[0]->title,
            'category' => $this->resource[0]->category->category,
            'type' => $this->resource[0]->type->type,
            'description' => $this->resource[0]->description,
            'date_start' => $this->resource[0]->date_start,
            'date_end' => $this->resource[0]->date_end,
            'location' => $this->resource[0]->location,
            'preview' => $this->resource[0]->preview,
        ];
    }
}

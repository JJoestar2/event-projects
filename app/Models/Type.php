<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperType
 */
class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
    ];

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}

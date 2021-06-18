<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

/**
 * @mixin IdeHelperEvent
 */
class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'type_id',
        'users_id',
        'title',
        'description',
        'date_start',
        'date_end',
        'status',
        'location',
        'preview',
        'count',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('rating');
    }

    public function photos()
    {
        return $this->hasMany(EventPhoto::class);
    }

    public function changeStatus()
    {
        /*Event::where('status', 'like','%Planing%')
             ->where(function ($q) {
               $q->whereDate('date_start', '<=', date('Y-m-d H:i'))
                   ->update(['status' => 'In Process']);
             });*/
    }
}

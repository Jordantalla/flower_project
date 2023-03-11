<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenstrualCycle extends Model
{
    use HasFactory;

    protected $fillable=[
        'start_date',
        'end_date',
        'cycle_length'
    ];

    protected $casts=[
        'start_date'=>'datetime',
        'end_date'=>'datetime',
    ];
}

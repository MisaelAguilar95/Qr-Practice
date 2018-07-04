<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
    protected $table = 'blablabla';
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The materials that belong to the user.
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'user_loans_material');
    }
}

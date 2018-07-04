<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use \YaroslavMolchan\Rbac\Traits\Rbac;

class User extends Authenticatable
{
    use Notifiable, Rbac;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The user that belong to the materials.
     */
    public function materials()
    {
        return $this->belongsToMany('App\Material', 'user_loans_material')->withPivot(['notes', 'delivered_at']);
    }
}

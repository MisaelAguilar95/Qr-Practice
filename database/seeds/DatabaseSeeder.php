<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	if (!App\User::count()) {
    		factory(App\User::class, 10)->create();
    	}
    	if (!App\Material::count()) {
    		factory(App\Material::class, 10)->create();
    	}
    	foreach (App\User::all() as $user) {
    		$user->materials()->attach(rand(1, App\Material::count()), ['notes' => 'ta bueno']);
    	}
        // $this->call(UsersTableSeeder::class);
    }
}

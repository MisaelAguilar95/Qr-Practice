<?php

use Illuminate\Database\Seeder;
use \YaroslavMolchan\Rbac\Models\Role;

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
        if (!Role::count()) {
            $adminRole = Role::create([
                'name' => 'Administrator',
                'slug' => 'admin'
            ]);
            $lenderRole = Role::create([
                'name' => 'Lender',
                'slug' => 'lender'
            ]);
            //Probably will change to debtor
            $debtorRole = Role::create([
                'name' => 'Debtor',
                'slug' => 'debtor'
            ]);
            $adminUser = factory(App\User::class)->create([
                'email' => 'admin@admin.admin'

            ]);
            $lenderUser = factory(App\User::class)->create([
                'email' => 'lender@lender.lender'

            ]);
            $debtorUser = factory(App\User::class)->create([
                'email' => 'debtor@debtor.debtor'

            ]);
            $adminUser->attachRole($adminRole);
            //or you can insert only id
            $lenderUser->attachRole($lenderRole);
            $debtorUser->attachRole($debtorRole);
        }
        // $this->call(UsersTableSeeder::class);
    }
}

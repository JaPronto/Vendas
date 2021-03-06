<?php

use Faker\Generator as Faker;

$factory->define(App\Client::class, function (Faker $faker) {
    return [
        'user_id' => function() {
            return create(\App\User::class)->id;
        },
        'active' => true
    ];
});

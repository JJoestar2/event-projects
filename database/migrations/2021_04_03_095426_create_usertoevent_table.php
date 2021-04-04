<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsertoeventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usertoevent', function (Blueprint $table) {
            $table->unsignedBigInteger('id', true);
            $table->foreignId('users_id')->constrained('users');
            $table->foreignId('event_id')->constrained('events');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usertoevent');
    }
}

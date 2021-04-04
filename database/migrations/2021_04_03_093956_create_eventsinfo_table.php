<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventsinfo', function (Blueprint $table) {
            $table->unsignedBigInteger('id', true);
            $table->string('title', 120);
            $table->text('description');
            $table->dateTime('date_start');
            $table->dateTime('date_end');
            $table->string('status', 15);
            $table->string('location', 150);
            $table->text('preview');
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
        Schema::dropIfExists('eventsinfo');
    }
}

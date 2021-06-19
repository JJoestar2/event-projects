<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MoveEventsinfoColumnsToEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('eventsinfo');

        Schema::table('events', function (Blueprint $table) {
            $table->string('title', 128)->after('users_id');
            $table->text('description')->after('title');
            $table->dateTime('date_start')->after('description');
            $table->dateTime('date_end')->after('date_start');
            $table->string('status', 128)->after('date_end');
            $table->string('location', 128)->after('status');
            $table->integer('count')->nullable(true)->after('location');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('title');
            $table->dropColumn('description');
            $table->dropColumn('date_start');
            $table->dropColumn('date_end');
            $table->dropColumn('status');
            $table->dropColumn('location');
        });

        Schema::create('eventsinfo', function (Blueprint $table) {
            $table->unsignedBigInteger('id', true);
            $table->string('title', 120);
            $table->text('description');
            $table->dateTime('date_start');
            $table->dateTime('date_end');
            $table->string('status', 15);
            $table->string('location', 150);
            $table->foreignId('event_id')->constrained('events');
            $table->timestamps();
        });
    }
}

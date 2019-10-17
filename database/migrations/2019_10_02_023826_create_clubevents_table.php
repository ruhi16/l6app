<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubeventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubevents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('club_id')->unsigned();
            $table->foreign('club_id')->reference('id')->on('clubs')->onDelete('cascade');
            $table->string('desc');
            $table->string('status');
            $table->string('remarks');
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
        Schema::dropIfExists('clubevents');
    }
}

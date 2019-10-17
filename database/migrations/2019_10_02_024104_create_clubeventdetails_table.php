<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubeventdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubeventdetails', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('clubevent_id')->unsigned();
            $table->foreign('clubevent_id')->reference('id')->on('clubevents')->onDelete('cascade');
            $table->string('name');
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
        Schema::dropIfExists('clubeventdetails');
    }
}

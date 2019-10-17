<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubimagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubimages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('club_id')->unsigned();
            $table->foreign('club_id')->reference('id')->on('clubs')->onDelete('cascade');
            $table->string('table_name');
            $table->integer('table_id');
            $table->string('image_url');
            $table->string('image_size');
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
        Schema::dropIfExists('clubimages');
    }
}

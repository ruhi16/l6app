<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubofficialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubofficials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('club_id')->unsigned();
            $table->foreign('club_id')->reference('id')->on('clubs')->onDelete('cascade');
            $table->string('name');
            $table->string('fname');
            $table->string('addr');
            $table->string('mob1');
            $table->string('mob2');
            $table->date('dob');
            $table->string('desig');
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
        Schema::dropIfExists('clubofficials');
    }
}

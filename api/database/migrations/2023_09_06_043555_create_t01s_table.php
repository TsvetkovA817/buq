<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('t01s', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('ИД');
            $table->string('title')->comment('Название');
            $table->string('author')->comment('Автор');
            $table->string('categ')->comment('Папка категории');
            $table->integer('ctg_id')->default(0)->comment('ИД Категория');        
            $table->decimal('price', 10, 2)->comment('Цена');
            $table->text('desc')->nullable()->comment('Описание');
            $table->timestamps();        

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t01s');
    }
};

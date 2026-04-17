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
    Schema::create('ventas', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); // El admin que vende
        $table->foreignId('cliente_id')->constrained(); // El fan que compra
        $table->decimal('total', 10, 2);
        $table->string('metodo_pago');
        $table->decimal('impuesto', 10, 2)->default(0);
        $table->text('notas')->nullable();
        $table->string('estado')->default('COMPLETADA');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};

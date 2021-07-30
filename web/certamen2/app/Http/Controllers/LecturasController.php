<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lectura;
class LecturaController extends Controller
{
    

    public function getLecturas(){
        return Lectura::all();
    }

    public function save(Request $request){
        $input = $request->all();
        $fecha = $input["fecha"];
        $hora = $input["hora"];
        $medidor = $input["medidor"];
        $direccion = $input["direccion"];
        $valor = $input["valor"];
        $medida = $input["medida"]; 

        $lectura = new Lectura();
        $lectura->fecha = $fecha;
        $lectura->hora = $hora;
        $lectura->medidor = $medidor;
        $lectura->direccion = $direccion;
        $lectura->valor = $valor;
        $lectura->medida = $medida;
        $lectura->save();
        return $lectura;


    }

    public function remove(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $juego = Lectura::findOrFail($id);
        $juego->delete();
        return "ok";
    }
}

<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categoria;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller
{
    public function index()
    {
        $data = Categoria::orderBy("orden")->get(["id", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = new Categoria($request->all());

        // subir imagen (base64 en urlfoto)
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = "/img/categoria/";
            $image_parts = explode(";base64,", $img);

            if (count($image_parts) === 2) {
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1] ?? 'png';
                $image_base64 = base64_decode($image_parts[1]);

                $filename = Str::slug($request->nombre) . '.' . $image_type;
                $file = $folderPath . $filename;

                file_put_contents(public_path($file), $image_base64);

                $data->urlfoto = $filename;
            }
        }

        $data->slug = Str::slug($request->nombre);
        $data->save();

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Categoria::findOrFail($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Categoria::findOrFail($id);
        $data->fill($request->all());

        // si cambia nombre, actualizo slug
        if ($request->filled('nombre')) {
            $data->slug = Str::slug($request->nombre);
        }

        // subir imagen (base64 en urlfoto)
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = "/img/categoria/";
            $image_parts = explode(";base64,", $img);

            if (count($image_parts) === 2) {
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1] ?? 'png';
                $image_base64 = base64_decode($image_parts[1]);

                $nombreParaArchivo = $request->filled('nombre') ? $request->nombre : $data->nombre;
                $filename = Str::slug($nombreParaArchivo) . '.' . $image_type;
                $file = $folderPath . $filename;

                file_put_contents(public_path($file), $image_base64);

                $data->urlfoto = $filename;
            }
        }

        $data->save();
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Categoria::findOrFail($id);
        $data->delete();

        return response()->json("categoria borrada", 204);
    }
}

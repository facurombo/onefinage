<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Models\Empresa;
use App\Models\Categoria;
use App\Models\User;



class EmpresaController extends Controller
{
    public function index()
    {
        $data = Empresa::orderBy("orden")->get(["id", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = new Empresa($request->all());

        // subir imagen (base64 en urlfoto)
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = "/img/empresa/";
            $image_parts = explode(";base64,", $img);

            if (count($image_parts) === 2) {
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1] ?? 'png';
                $image_base64 = base64_decode($image_parts[1]);

                $filename = Str::slug($request->nombre) . '.' . $image_type;
                $file = $folderPath . $filename;

                file_put_contents(public_path($file), $image_base64);

                // guardás solo el nombre del archivo
                $data->urlfoto = $filename;
            }
        }

        $data->save();
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Empresa::findOrFail($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Empresa::findOrFail($id);
        $data->fill($request->all());

        // subir imagen (base64 en urlfoto)
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = "/img/empresa/"; // ✅ era /img/categoria/
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
        $data = Empresa::findOrFail($id);
        $data->delete();

        return response()->json(null, 204);
    }
}

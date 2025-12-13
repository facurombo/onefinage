<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;    
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
   public function register(Request $request)
{
    $response = ["success" => "false"];

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
    ]);

    if ($validator->fails()) {
        $response["errors"] = $validator->errors();
        return response()->json($response, 400);
    }


    $input = $request->all();
    $input["password"] = bcrypt($input['password']);

    $user = User::create($input);
    $user->syncRoles(['client']); // (si existe el rol y el User tiene HasRoles)

    $response["success"] = "true";
    $response["token"] = $user->createToken("Code")->plainTextToken;

    return response()->json($response, 200);
}

}

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
    $response = ["success" => false];

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

    public function login(Request $request)
    {
        $response = ["success" => false ];
        //validacion

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required', 
               ]); 

        if ($validator->fails()) {
            $response["errors"] = $validator->errors();
            return response()->json($response, 200);
        }
        
      if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = auth()->user();
            $user->hasRole('client'); // add rol

            $response['token'] = $user->createToken('codea.app')->plainTextToken;
            $response['user'] = $user;
            $response['success'] = true;
        }

        return response()->json($response, 200);
      


    }


    public function logout()
        {
            $response['success'] = false;

            auth()->user()->tokens()->delete();

            $response = [
                'success' => true,
                'message' => 'Sesión cerrada'
            ];

            return response()->json($response, 200);
        }



}

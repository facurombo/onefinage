<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\client\EmpresaController as ClientEmpresaController;
use App\Http\Controllers\Api\admin\UserController;
use App\Http\Controllers\Api\admin\CategoriaController;
use App\Http\Controllers\Api\admin\EmpresaController as AdminEmpresaController;



Route::prefix('v1')->group(function(){
//Rutas publicas
//::public
Route::get('/public/{slug}', [FrontController::class,'categoria']);
//::auth
Route::get('/auth/register', [AuthController::class,'register']);
Route::get('/auth/login', [AuthController::class,'login']);
 
 

// //Rutas privadas fundamental
Route::group (['middleware'=>'auth:sanctum'], function (){
    //:auth
    Route::post('/auth/logout', [AuthController::class,'logout']);

    //::rol client
    Route::apiResource('/client/empresa', ClientEmpresaController::class);

    //:rol admin
    Route::apiResource('/admin/user', UserController::class);
    Route::apiResource('/admin/categoria', CategoriaController::class);
    Route::apiResource('/admin/empresa', AdminEmpresaController::class);

});

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

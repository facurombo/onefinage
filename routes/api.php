<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\client\EmpresaClient; 
use App\Http\Controllers\Api\admin\UserController;
use App\Http\Controllers\Api\admin\CategoriaController;
use App\Http\Controllers\Api\admin\EmpresaController;



Route::prefix('v1')->group(function(){
//Rutas publicas
//::public
Route::get('/public/{slug}', [FrontController::class,'categoria']);
//::auth
Route::post('/auth/register', [AuthController::class,'register']);
Route::post('/auth/login', [AuthController::class,'login']);
 
 

// //Rutas privadas fundamental
Route::group (['middleware'=>'auth:sanctum'], function (){
    //:auth
    Route::post('/auth/logout', [AuthController::class,'logout']);

    //::rol client
    Route::apiResource('/client/empresa', EmpresaClient::class);

    //:rol admin
    Route::apiResource('/admin/user', UserController::class);
    Route::apiResource('/admin/categoria', CategoriaController::class);
    Route::apiResource('/admin/empresa', EmpresaController::class);

});

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

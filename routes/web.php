<?php
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Rutas públicas
|--------------------------------------------------------------------------
*/

//Role::firstOrCreate(['name' => 'admin']);
//Role::firstOrCreate(['name' => 'client']);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/inicio', function () {
    return view('welcome');
});

Route::get('/quienesSomos', function () {
    return view('quienesSomos');
});

Route::get('/contacto', function () {
    return view('contacto');
});

/*
|--------------------------------------------------------------------------
| Rutas protegidas (auth)
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Rutas de autenticación
|--------------------------------------------------------------------------
*/

//require __DIR__.'/auth.php';

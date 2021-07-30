@extends('layout.master')
@section('contenido')
    <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 mx-auto mt-5">
            <div class="card">
                <div class="card-header bg-warning text-dark">
                    <span>Registrar Lectura</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="fecha-txt">Fecha</label>
                        <input type="date" id="fecha-date" class="form-control">
                    </div>
                    <div>
                        <label for="hora-txt">Hora</label>
                        <input type="text" id="hora-txt" class="form-control">
                    </div>
                    <div>
                        <label for="medidor-select">Medidor</label>                           
                        <select id="medidor-select" class="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div>
                        <label for="direccio-txt">Direccion</label>
                        <input type="text" id="direccion-txt" class="form-control">
                    </div>
                    <div>
                        <label for="valor-txt">Valor</label>
                        <input type="number" id="valor-txt" class="form-control">
                    </div>
                    <div>
                        <label for="medida-select">Tipo de medida</label>
                        <select id="medida-select" class="form-control" required>
                            <option value="KiloWatts">KiloWatts</option>
                            <option value="Watts">Watts</option>
                            <option value="Temperatura">Temperatura</option> 
                        </select>
                    </div>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button type="button" id="registrar-btn" class="btn btn-primary">Registrar</button>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/lecturaService.js')}}"></script>
    <script src="{{asset('js/agregar_registro.js')}}"></script>
@endsection
@extends('layouts.app')

@section('content')
<table class="table">
	<thead>
		<tr>
			<th>nombre</th>
			<th>descripcion</th>
			<th>Qr Code</th>
		</tr>
	</thead>
	<tbody>
		@foreach(\App\Material::all() as $material)
		<tr>
			<td>{{ $material->name }}</td>
			<td>{{ $material->description }}</td>
			<td>{{ \QRCode::text($material)->svg() }}</td>
		</tr>
		@endforeach
	</tbody>
</table>

@endsection
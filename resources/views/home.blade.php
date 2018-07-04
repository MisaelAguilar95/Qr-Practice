@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <pre>
                        {{ auth()->user()->roles }}
                    </pre>
                    You are logged in! Check out the <a href="{{ route('materials.index') }}">materials!</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

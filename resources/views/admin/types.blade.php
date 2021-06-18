@extends('admin.layout.admin')

@section('content')
    <div class="col-lg-12">
        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Event Types</h3>
                <div class="card-tools">
                    <div class="input-group input-group-md" style="width: 150px;">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-primary">
                                <a href="/admin/type/create" class="text-white">Create Event Type</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Options:</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($types as $type)
                        <tr>
                            <td>{{ $type['id'] }}</td>
                            <td>{{ $type['type'] }}</td>
                            <td>Options:
                                <a href="/admin/type/{{ $type['id'] }}" class="ml-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        {{ $types->links() }}
        <!-- /.card -->
    </div>
@endsection

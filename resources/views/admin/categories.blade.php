@extends('admin.layout.admin')

@section('content')
    <div class="col-lg-12">
        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">Categories </h3>
                <div class="card-tools">
                    <div class="input-group input-group-md" style="width: 150px;">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-primary">
                                <a href="/admin/category/create" class="text-white">Create Category</a>
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
                            <th>Category</th>
                            <th>Options:</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($categories as $category)
                        <tr>
                            <td>{{ $category['id'] }}</td>
                            <td>{{ $category['category'] }}</td>
                            <td>Options:
                                <a href="/admin/category/{{ $category['id'] }}" class="ml-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
        </div>
        {{ $categories->links() }}
        <!-- /.card -->
    </div>
@endsection

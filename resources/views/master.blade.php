<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{config('app.name')}}</title>
    <link rel="icon" href="{{ asset('/images/favico.ico') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
</head>
<body>
    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>
</html>

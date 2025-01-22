<!DOCTYPE html>
<html>
<head>
    <title>Новое сообщение с контактной формы</title>
</head>
<body>
<h1>Новое сообщение</h1>
<table>
    <tbody>
    @foreach($data as $key => $value)
        <tr>
            <td>{{ $key }}</td>
            <td>
                @if(is_array($value) || is_object($value))
                    <pre>{{ json_encode($value, JSON_PRETTY_PRINT) }}</pre>
                @else
                    {{ $value }}
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>

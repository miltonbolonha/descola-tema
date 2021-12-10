<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {!! isset($class) && !empty($class) ? 'class="' . $class . '"' : '' !!}
    {!! isset($width) && !empty($width) ? 'width="' . $width . '"' : '' !!}
    {!! isset($height) && !empty($height) ? 'height="' . $height . '"' : '' !!}
>
    <path fill="{{ isset($fill) && !empty($fill) ? $fill : constant('ICONS_COLOR') }}" d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"/>
</svg>
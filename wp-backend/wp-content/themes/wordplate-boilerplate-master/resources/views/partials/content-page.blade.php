@php(the_content())
{!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'wordplate'), 'after' => '</p></nav>']) !!}

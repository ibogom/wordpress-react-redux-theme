<?php
add_action('wp_enqueue_scripts', 'load_client_scripts', 100);

function load_client_scripts() {
    wp_enqueue_style('reactwp_css', get_template_directory_uri() . '/dist/main.css', false, NULL);
    wp_enqueue_script('reactwp_js', get_template_directory_uri() . '/dist/main.min.js', [], NULL, true);
}
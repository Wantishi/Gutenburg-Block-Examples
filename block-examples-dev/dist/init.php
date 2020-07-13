<?php
 
defined( 'ABSPATH' ) || exit;
 
function block_examples_scalable_enqueue_block_assets() {
 
    wp_register_style(
        'block-examples-scalable-block-style',
        plugins_url( 'style.build.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.build.css' )
    );
 
    wp_register_script(
        'block-examples-scalable-block-editor-script',
        plugins_url( 'blocks.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'blocks.build.js' )
    );
 
    wp_register_style(
        'block-examples-scalable-block-editor-style',
        plugins_url( 'editor.build.css', __FILE__ ),
        array('wp-edit-blocks'),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.build.css' )
    );
 
    register_block_type( 'block-examples/block-examples-scalable-block', array(
        'style' => 'block-examples-scalable-block-style',
        'editor_script' => 'block-examples-scalable-block-editor-script',
        'editor_style' => 'block-examples-scalable-block-editor-style'
    ));
}
 
//add_action enqueue_block_assets
add_action( 'init', 'block_examples_scalable_enqueue_block_assets');

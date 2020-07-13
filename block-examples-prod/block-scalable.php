<?php 

/**
 * Plugin Name: Block Examples Scalable - Production
 * Description: This is a plugin demonstrating how to build basic blocks for Gutenberg.
 * Text Domain: block-scalable
 * Version: 0.1.0
 **/

 //Prevent direct access to this file
 defined( 'ABSPATH' ) || exit;

 function block_examples_scalable_loader() {
     /* Load the blocks */
     require_once plugin_dir_path(__FILE__) . 'dist/init.php';
 }

 add_action('plugins_loaded', 'block_examples_scalable_loader');
<?php

/*
Plugin name: Meta Dates Blocks
Author: cagrimmett
Description: Blocks to output the published date and last updated date for your posts
Plugin URI: https://github.com/cagrimmett/meta-dates-blocks
Version: 0.0.1
*/

add_action( 'init', 'register_meta_dates_block' );
function register_meta_dates_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'meta-dates-block',
		plugins_url( 'blocks/meta-dates.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-components',
		)
	);

	register_block_type( 'meta-dates-block/meta-published-date', array(
		'editor_script' => 'meta-dates-block',
		'style' => 'meta-dates-block',
	) );
}

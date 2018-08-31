<?php
/**
 * Functions for configuring demo importer.
 *
 * @package Importer/Functions
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Setup demo importer config.
 *
 * @deprecated 1.5.0
 *
 * @param  array $demo_config Demo config.
 * @return array
 */
function esteem_demo_importer_packages( $packages ) {
	$new_packages = array(
		'esteem-free' => array(
			'name'    => esc_html__( 'Esteem', 'esteem' ),
			'preview' => 'https://demo.themegrill.com/esteem/',
		),
		'esteem-pro'  => array(
			'name'     => esc_html__( 'Esteem Pro', 'esteem' ),
			'preview'  => 'https://demo.themegrill.com/esteem-pro/',
			'pro_link' => 'https://themegrill.com/themes/esteem/',
		),
	);

	return array_merge( $new_packages, $packages );
}

add_filter( 'themegrill_demo_importer_packages', 'esteem_demo_importer_packages' );

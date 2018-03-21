<?php
/**
 * Functions for configuring demo importer.
 *
 * @author   ThemeGrill
 * @category Admin
 * @package  Importer/Functions
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Setup demo importer packages.
 *
 * @param  array $packages
 *
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

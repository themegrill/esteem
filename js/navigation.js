/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'h3' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += 'nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'main-small-navigation' ) ) {
			container.className = container.className.replace( 'main-small-navigation', 'main-navigation' );
		} else {
			container.className = container.className.replace( 'main-navigation', 'main-small-navigation' );
		}
	};

} )();

jQuery( document ).ready( function () {
	/**
	 * New responsive sub menu toggle
	 */
	// Add caret icon
	jQuery( '.better-responsive-menu #site-navigation .menu-item-has-children' ).append( '<span class="sub-toggle"> <i class="icon-caret-down"></i> </span>' );

	// Handle clicking on caret
	jQuery( '.better-responsive-menu #site-navigation .sub-toggle' ).click( function () {
		jQuery( this ).parent( '.menu-item-has-children' ).children( 'ul.sub-menu' ).first().slideToggle( '1000' );
		jQuery( this ).children( '.icon-caret-down' ).first().toggleClass( 'icon-caret-up' );
		jQuery( this ).toggleClass( 'active' );
	} );
} );
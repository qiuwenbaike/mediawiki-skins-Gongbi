/**
 * Gongbi Skin
 * © 2015-2021 Issara
 * © 2022-2025 WaitSpring
 *
 * @license GPL-2.0-or-later
 */
/* Popout menus (header) */

'use strict';

$( () => {
	const toggleTime = 150;

	// Open the various menus
	$( '#user-tools h2' ).on( 'click', () => {
		if ( $( window ).width() < 851 ) {
			$( '#personal-inner' ).css(
				'left',
				$( '#personal h2' ).offset().left - $( '#personal-inner' ).width()
			);
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#personal-inner' ).fadeToggle( toggleTime );
		}
	} );
	$( '#sidebar-tools h2' ).on( 'click', () => {
		if ( $( window ).width() < 851 ) {
			$( '#site-navigation .sidebar-inner' ).css(
				'left',
				$( '#sidebar-tools h2' ).offset().left
			);
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#site-navigation .sidebar-inner' ).fadeToggle( toggleTime );
		}
	} );
	$( '#search-button h2' ).on( 'click', () => {
		if ( $( window ).width() < 851 ) {
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#p-search .sidebar-inner' ).fadeToggle( toggleTime );
		}
	} );
	$( '#ca-more' ).on( 'click', () => {
		$( '#page-more .sidebar-inner' ).css( 'top', $( '#ca-more' ).offset().top + 25 );
		if ( $( window ).width() < 851 ) {
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#page-more .sidebar-inner' ).fadeToggle( toggleTime );
		}
	} );
	$( '#ca-tools' ).on( 'click', () => {
		$( '#page-tools .sidebar-inner' ).css(
			'top',
			$( '#ca-tools' ).offset().top + 25
		);
		if ( $( window ).width() < 851 ) {
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#page-tools .sidebar-inner' ).fadeToggle( toggleTime );
		}
	} );
	$( '#ca-languages' ).on( 'click', () => {
		$( '#other-languages .sidebar-inner' ).css(
			'top',
			$( '#ca-languages' ).offset().top + 25
		);
		if ( $( window ).width() < 851 ) {
			$( '#menus-cover' ).fadeToggle( toggleTime );
			$( '#other-languages .sidebar-inner' ).fadeToggle( toggleTime );
		}
	} );

	// Close menus on click outside
	$( document ).on( 'click touchstart', ( e ) => {
		if (
			$( e.target ).closest( '#menus-cover' ).length > 0
		) {
			$( '#personal-inner' ).fadeOut( toggleTime );
			$( '.sidebar-inner' ).fadeOut( toggleTime );
			$( '#menus-cover' ).fadeOut( toggleTime );
		}
	} );
} );

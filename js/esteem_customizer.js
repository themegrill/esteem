/* global esteem_customizer_obj */

jQuery(document).ready(function() {

	/**
	 * Theme Customizer related js
	 */
	jQuery('.wp-full-overlay-sidebar-content').prepend('<a style="margin-top: 5px;margin-bottom: 5px; margin-left: 87px;"href="http://themegrill.com/themes/esteem-pro/" class="button" target="_blank">{pro}</a>'.replace('{pro}',esteem_customizer_obj.pro));
	jQuery('.wp-full-overlay-sidebar-content').prepend('<a style="margin-top: 5px;margin-bottom: 5px; margin-left: 106px;"href="http://themegrill.com/themes/esteem/" class="button" target="_blank">{info}</a>'.replace('{info}',esteem_customizer_obj.info));

});

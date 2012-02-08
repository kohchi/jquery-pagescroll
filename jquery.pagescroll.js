/**
 * scroll to id or name attribute smoothly within the page.
 *
 * This is the jquery plugin that the page scrolls smoothly to
 * specified id or name attribute.
 *
 * for example:
 *  $('a[href*="#"]').pagescroll();
 *  or
 *  $('a[href*="#"]').pagescroll({duration: 1200});
 *  or
 *  $('a[href*="#"]').pagescroll({
 *    duration: 1200,
 *    easing: 'easeOutQuart'
 *  });
 *
 * If you want to set the easing option name to the option, you require
 * including jQuery Easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/).
 *
 * You may use this under the terms of either MIT License or
 * GNU General Public License (GPL) Version 2. (same as jQuery).
 *
 * Copyright (c) MIYAGINO.net. All Rights Reserved.
 */
(function($) {
	$.fn.pagescroll = function(opts) {
		var default_opts = {
			duration: 1200,
			easing: null
		};

		opts = $.extend(default_opts, opts || {});

		if (opts.easing == null) {
			/* default is easeOutQuart by jQuery Easing plugin. */
			opts.easing = function (x, t, b, c, d) {
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
			};
		}

		return this.click(function(i) {
			if (location.pathname.replace(/^\//,'') ==
				this.pathname.replace(/^\//,'') &&
				location.hostname == this.hostname) {
				var t = $(this.hash);
				var pt = t.length ? t :
					$('[name="'+this.hash.slice(1)+'"]');

				if (pt.length) {
					var targetOffset = pt.offset().top;
					$('html,body').animate(
						{scrollTop: targetOffset},
						opts.duration, opts.easing);
					return false;
				}
			}
		}); 
	}
})(jQuery);

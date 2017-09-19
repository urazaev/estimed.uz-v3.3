(function ($, window, document, undefined) {
	'use strict';

	var gridContainer = $('#grid-container'),
		filtersContainer = $('#filters-container'),
		wrap, filtersCallback;


	/*********************************
	 init cubeportfolio
	 *********************************/
	gridContainer.cubeportfolio({
		defaultFilter: '*',
		animationType: 'boxShadow',
		gapHorizontal: 20,
		gapVertical: 20,
		gridAdjustment: 'responsive',
		caption: '',
		displayType: 'sequentially',
		displayTypeSpeed: 100,


		// singlePage popup
		singlePageDelegate: '.cbp-singlePage',
		singlePageDeeplinking: true,
		singlePageStickyNavigation: true,
		singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
		singlePageCallback: function (url, element) {
			// to update singlePage content use the following method: this.updateSinglePage(yourContent)
		},

		// singlePageInline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'below',
		singlePageInlineInFocus: true,
		singlePageInlineCallback: function (url, element) {

			// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
			var t = this;

			$.ajax({
					url: url,
					type: 'GET',
					dataType: 'html',
					timeout: 5000
				})
				.done(function (result) {

					t.updateSinglePageInline(result);

				})
				.fail(function () {
					t.updateSinglePageInline("Error! Please refresh the page!");
				});
		}
	});


	/*********************************
	 add listener for filters
	 *********************************/
	if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

		wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

		wrap.on({
			'mouseover.cbp': function () {
				wrap.addClass('cbp-l-filters-dropdownWrap-open');
			},
			'mouseleave.cbp': function () {
				wrap.removeClass('cbp-l-filters-dropdownWrap-open');
			}
		});

		filtersCallback = function (me) {
			wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

			wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

			me.addClass('cbp-filter-item-active');

			wrap.trigger('mouseleave.cbp');
		};

	} else {
		filtersCallback = function (me) {
			me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
		};
	}

	filtersContainer.on('click.cbp', '.cbp-filter-item', function () {

		var me = $(this);

		if (me.hasClass('cbp-filter-item-active')) {
			return;
		}

		// get cubeportfolio data and check if is still animating (reposition) the items.
		if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
			filtersCallback.call(null, me);
		}

		// filter the items
		gridContainer.cubeportfolio('filter', me.data('filter'), function () {});

	});




	/*********************************
	 add listener for load more
	 *********************************/
	$('.cbp-l-loadMore-button-link').on('click.cbp', function (e) {

		e.preventDefault();

		var clicks, me = $(this),
			oMsg;

		if (me.hasClass('cbp-l-loadMore-button-stop')) {
			return;
		}

		// get the number of times the loadMore link has been clicked
		clicks = $.data(this, 'numberOfClicks');
		clicks = (clicks) ? ++clicks : 1;
		$.data(this, 'numberOfClicks', clicks);

		// set loading status
		oMsg = me.text();
		me.text('...');

		// perform ajax request
		$.ajax({
			url: me.attr('href'),
			type: 'GET',
			dataType: 'HTML'
		}).done(function (result) {
			var items, itemsNext;

			// find current container
			items = $(result).filter(function () {
				return $(this).is('div' + '.cbp-loadMore-block' + clicks);
			});

			gridContainer.cubeportfolio('appendItems', items.html(),
				function () {
					// put the original message back
					me.text(oMsg);

					// check if we have more works
					itemsNext = $(result).filter(function () {
						return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
					});

					if (itemsNext.length === 0) {
						me.text('ВСЁ');
						me.addClass('cbp-l-loadMore-button-stop');
					}


					$('.cbp-item-wrapper').hover(
						function () {
							$(this).find('.cbp-caption-activeWrap').css('background-color', '#000');
							$(this).find('.cbp-l-caption-title').css('color', '#fff');
						},
						function () {
							$(this).find('.cbp-caption-activeWrap').css('background-color', '#fff');
							$(this).find('.cbp-l-caption-title').css('color', '#000');
						}
					);




				});

		}).fail(function () {
			// error
		});
		// App.init();
	});

})(jQuery, window, document);

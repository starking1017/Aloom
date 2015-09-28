(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#grid-container').cubeportfolio({
        filters: '#filters-container',
        loadMore: '#loadMore-container',
        loadMoreAction: 'auto',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 45,
        gapVertical: 45,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1600,
            cols: 2
        }, {
            width: 1200,
            cols: 2
        }, {
            width: 800,
            cols: 2
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'overlayBottom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

})(jQuery, window, document);

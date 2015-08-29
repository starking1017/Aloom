(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#grid-container2').cubeportfolio({
        filters: '#filters-container',
        loadMore: '#loadMore-container',
        loadMoreAction: 'auto',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1600,
            cols: 3
        }, {
            width: 1200,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 3
        }, {
            width: 320,
            cols: 3
        }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

})(jQuery, window, document);

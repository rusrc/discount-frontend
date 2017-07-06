window.runMasonry = function () {

    $("img.img-lazy").lazyload({
        //effect: 'fadeIn',
        //effectspeed: 500
        //threshold: 200
    });

    $('img.img-lazy').load(function () {
        masonryUpdate();
    });

    function masonryUpdate() {
        var $container = $('.masonry');
        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: '.post-box',
                columnWidth: '.post-box',
                transitionDuration: 0
            });
        });
    }
}





$('#carouselAction').carousel({
    interval: false
})

$('#carouselComedy').carousel({
    interval: false
})

$('#carouselAnimation').carousel({
    interval: false
})

$('#carouselThriller').carousel({
    interval: false
})

$('#carouselRomance').carousel({
    interval: false
})
  
$('.carousel .carousel-item').each(function(){
    var minPerSlide = 6;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0; i<minPerSlide; i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
    }
});

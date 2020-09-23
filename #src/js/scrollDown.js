$(function(){
    
    let pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;
    
    //Map the sections:
    $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

    // Bind to scroll
    $(window).bind('scroll',upPos);
    
    //Move on click:
    $('#scroll_down_id').click(function(e){
        if (pagePositon+1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 300);
        } 
        // if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
        //     pagePositon--;
        //     $('html, body').stop().animate({ 
        //           scrollTop: $scrollItems.eq(pagePositon).offset().top
        //       }, 300);
        //     return false;
        // }
    });
    
    //Update position func:
    function upPos(){
       let fromTop = $(this).scrollTop();
       let $cur = null;
        $scrollItems.each(function(index,ele){
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
       if ($cur != null && pagePositon != $cur.data('pos')) {
           pagePositon = $cur.data('pos');
       }                   
    }

    //Hide the button at the end of the last section
    $(window).on('scroll',function(){
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom > 100) //px from the bottom where button fadeOut
        $('#scroll_down_id').fadeIn();
        else
        $('#scroll_down_id').fadeOut();
    }).trigger('scroll');

});

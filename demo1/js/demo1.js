$(function(){
    $('#owl-demo').owlCarousel({
      autoPlay: true,
      pagination:false
    });
    
    $(function(){
    var time = 5;    //进度条时间，以秒为单位，越小越快
    
    var $progressBar, $bar, $elem, isPause, tick, percentTime;
 
    $('#owl-latest').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging,
        pagination:false,
    });
 
    function progressBar(elem){
        $elem = elem;
        buildProgressBar();
        start();
    }
 
    function buildProgressBar(){
        $progressBar = $('<div>',{
            id:'progressBar'
        });
        $bar = $('<div>',{
            id:'bar'
        });
        $progressBar.append($bar).insertAfter($elem.children().eq(0));
    }
 
    function start(){
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
 
    function interval(){
        if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
                width: percentTime+'%'
            });
            if(percentTime >= 100){
                $elem.trigger('owl.next')
            }
        }
    }
 
    function pauseOnDragging(){
        isPause = true;
    }
 
    function moved(){
        clearTimeout(tick);
        start();
    }
 
    $elem.on('mouseover',function(){
        isPause = true;
    })
 
    $elem.on('mouseout',function(){
        isPause = false;
    });
});

    $('.totop').hide();
   $(window).scroll(function(){
   	if($(window).scrollTop()>300)
    	   $('.totop').show();
        else{
       	   $('.totop').hide();
       }
   })
    	
   
    
    $('.totop').click(function(){
    	$('html,body').animate({scrollTop:0},1000);
    })
       var flag1=true;
	$('.menu span').click(function(){
		if(flag1){$('.menu ul li').animate({top:0},1000);flag1=false;}
		else{$('.menu ul li').animate({top:'-84px'},1000);flag1=true;}
		
	   })

});



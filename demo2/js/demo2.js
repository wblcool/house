var header=document.getElementById('header');
      	header.style.height=window.innerHeight+'px';

$(function(){
    $('#owl-phone').owlCarousel({
        items: 5,
        lazyLoad: true,
        autoPlay:true,
        pagination:false,
    }); 
    $('#intro-carousel span:eq(0)').click(function(){
      $('#owl-phone').trigger('owl.prev');
    });
    $('#intro-carousel span:eq(1)').click(function(){
      $('#owl-phone').trigger('owl.next');
    });
    var i=1;
    $('#owl-speak').owlCarousel({
        items: 1,
        autoPlay:true,
        pagination:false,
        itemsDesktop:false,
        itemsDesktopSmall:false,
        itemsTablet:false,
       beforeMove:function(){
       if(i>2)i=0;
       $('.test li span img').removeClass('bgopacity');
       $('.test li span img').eq(i).addClass('bgopacity');
       	i+=1;
       	
       }
    }); 
    $('.test li span').click(function(){
    	var a=$('.test li span').index($(this));
        $('#owl-speak').trigger('owl.goTo',a);
        $('.test li span img').removeClass('bgopacity');
        $('.test li span img').eq(a).addClass('bgopacity');
        i=a+1;

    });
    $('.totop').click(function(){
    	$('html,body').animate({scrollTop:0},1000)
    })
    $(window).scroll(function(){
       
        $('#features').animatePlus('h2','zoomZ');
        $('.lucyImg').animatePlus('img','jump');
        $('.phonecenter').animatePlus('img','zoomZ');    
        $('.text-introL .text-intro').each(function(){
            $(this).animatePlus('h3','enterL');
            $(this).animatePlus('p','enterL');
             $(this).animatePlus('span','enterL');

        })    
         $('.text-introR .text-intro').each(function(){
            $(this).animatePlus('h3','enterR');
            $(this).animatePlus('p','enterR');
             $(this).animatePlus('span','enterR');  
        })
         $('#special').animatePlus('h2','zoomZ'); 
         $('#special').animatePlus('.animated:eq(1)','enterL'); 
         $('#special').animatePlus('.animated:eq(2)','zoomZ'); 
         $('#special').animatePlus('.animated:eq(3)','enterR'); 
         $('#special-intro .row').each(function(){
            $(this).animatePlus('.col-md-6:eq(0)','enterL');
            $(this).animatePlus('.col-md-6:eq(1)','enterR');
         }); 

         $('#intro-carousel').animatePlus('.item','pageturnY');

         $('#develop').animatePlus('h2','zoomZ');
         $('#develop').animatePlus('.person:eq(0)','enterL');
         $('#develop').animatePlus('.person:eq(1)','zoomZ');
         $('#develop').animatePlus('.person:eq(2)','enterR');

         $('#price').animatePlus('.price-tag','pageturnY');

         $('#contact').animatePlus('.contact-way:lt(2)','enterL');
         $('#contact').animatePlus('.contact-way:gt(1)','enterR');
         $('#footer').animatePlus('h3','zoomZ');
         $('#footer').animatePlus('li:odd()','enterL');
         $('#footer').animatePlus('li:even()','enterR');

    	if($(this).scrollTop()>600){
    		if($('.toplogo').hasClass('toplogo-fixed')) return ;
    		$('.totop').css('display','block');
    		$('.toplogo').addClass('toplogo-fixed');

    	}
    	else{
    		$('.totop').css('display','none');
    		$('.toplogo').removeClass('toplogo-fixed');
    	}
    })
});
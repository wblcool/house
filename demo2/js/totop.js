;(function($){

    $.fn.scrollA=function(goal){
     var goalId=$(this).attr('href');
     var goalOffset=$(goalId).offset();
     $('html,body').animate({scrollTop:goalOffset.top},1000)
    };//点击a元素滚动到相应版块

    $.fn.animatePlus=function(ele,classname){
       var $this=$(this);
       var $ele=$this.find(ele);    
       var distance=$ele[0].getBoundingClientRect().top;
          if(distance<($(window).height())*0.9){
            $ele.addClass(classname);
            }
    }//随窗口滚动给相应版块添加动画


})(jQuery);
$(function(){
  $('.overlay a').on('click.scroll',function(){ $(this).scrollA();});

  $('.overlay a,.overlay-close').click(function(){
  	 $('.overlay ul li').addClass('closelay');
     $('.overlay').animate({'opacity':0},1000,function(){
         $(this).css('display','none');
         $('.overlay ul li').removeClass('closelay');
     });
  	 return false;
  });

  $('#openbtn').click(function(){
     $('.overlay').css('display','block').animate({'opacity':1},1000,function(){
        $('.overlay ul li').removeClass('openlay');
     });
     $('.overlay ul li').addClass('openlay');     
  });

 
 
})
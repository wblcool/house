;(function($){
    $.fn.scrollA=function(goal){
     var goalId=$(this).attr('href');
     var goalOffset=$(goalId).offset();
     $('html,body').animate({scrollTop:goalOffset.top},1000)
    }


})(jQuery);
$(function(){
  $('.scroll').click(function(){
  	 $(this).scrollA();
  	 return false;
  })
 


})

$(".single-acco h2").click(function(){
   
    if($(this).next(".accodion-body").hasClass("active")){
      $(this).next(".accodion-body").removeClass("active").slideUp();
     
      $(this).children("span").html('+');   
    }
    else{
      $(".accodion-body").removeClass("active").slideUp();
      
      $(".single-acco h2 span").html('+');
  
      $(this).next(".accodion-body").addClass("active").slideDown();
      
      $(this).children("span").html('-');
    }
  })
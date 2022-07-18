
$(".question-middle-inder h2").click(function(){
   
    if($(this).next(".question-middle-on").hasClass("active")){
      $(this).next(".question-middle-on").removeClass("active").slideUp();
     
      $(this).children("span").html('+');   
    }
    else{
      $(".question-middle-on").removeClass("active").slideUp();
      
      $(".question-middle-inder span").html('+');
  
      $(this).next(".question-middle-on").addClass("active").slideDown();
      
      $(this).children("span").html('-');
      // console.log(this);
    }
  })
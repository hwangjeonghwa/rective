// $(document).ready(function(){

//   $(".trigger").click(function(){
//     $(this).toggleClass("active");
//     $(".gnb").slideToggle();
//   });

//   $(window).resize(function(){
//     let w =$(window).width();

//     if(w>768){
//       $(".gnb").removeAttr("style");
//     }
//   });

// });


$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb, .sns").slideToggle();
  });

  $(window).resize(function(){

    let w = $(window).width();

  if(w>768){
    $(".gnb, .sns").removeAttr("style");
  }

    /*  if(w>768){
      $('.gnb, .sns').css({"display":"flex"});
    }else{
      $('.gnb, .sns').css({"display":"none"});
    }
 */

  });






});
$(document).ready(function(){
  //set these variables
  var noOfTriangles = 11;

  //prepare calc vars and calc the animation
  function calctri(){
    var bodyH = $('body').height(), 
        windowH = $(window).height(), 
        single = (bodyH - windowH) / (noOfTriangles - 2), 
        position = $(window).scrollTop(), 
        index = Math.ceil(position / single );
    
    $('.active-odd, .active-even').removeClass('active-odd active-even');
    var classToAdd = (index % 2 == 1) ? "active-even" : "active-odd";
    $('#triangles li').eq(index).addClass(classToAdd);
  }

  calctri();
  $(window).on('scroll', calctri);

  //draw the triangles
  for (var i = 0; i < noOfTriangles; i++) {
    $('<li>').appendTo('#triangles');
  }
  
 
});




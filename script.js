$(document).ready(function(){
    $("#junior-button").click(function(){
        $(".junior").show();
        $(".math").hide();
        $(".project").hide();
    });

    $("#project-button").click(function(){
        $(".project").show();
        $(".math").hide();
        $(".junior").hide();
    });
  
    $("#math-button").click(function(){
        $(".math").show();
        $(".junior").hide();
        $(".project").hide();
    });

    $("#all-button").click(function(){
        $(".math").show()
        $(".junior").show()
        $(".project").show()
    });
  });
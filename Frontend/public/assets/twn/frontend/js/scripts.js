$(document).ready(function(){
	
	setBindings();
    $("#Login").click(function(){
        $("#myModal").modal();
    });
    
    $("#signup").click(function(){
		 $("#myModal1").modal();
		 $("#myModal").modal("hide");
	});

});

function setBindings(){
		
	/*$("#FAQs").on('click', function(e){
	e.preventDefault();
    $path=$(".FAQs").offset().top;
    $("body").animate({scrollTop:$path},1500);
  });*/
  /*
  	 $("#Contact").on('click', function(e){  
	e.preventDefault();
    $path=$(".Contact").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
  */
  
    $("#How").on('click', function(e){
	e.preventDefault();
    $path=$(".How").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
  
    $("#Repair").on('click', function(e){  
	e.preventDefault();
    $path=$(".Repair").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });
  
    $("#Servicing").on('click', function(e){ 
	e.preventDefault();
    $path=$(".Servicing").offset().top;
      $("body").animate({scrollTop:$path},1500);
  });

}


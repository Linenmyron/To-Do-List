//Document have to be "ready" so all the functionality will work when the event start to happend
$(document).ready(function(){
  //This function will show the NewTask div
  $("#CreateTask").click(function(){
    $("#NewTask").show();
  });

  //This Cancel button function will cancel and hide the NewTask div
  $("#cancel").click(function(){
    $("#NewTask").hide();
  });

  //This create button will add a div to first article when pressed and hide NewTask div
  $("#ok").click(function(){
    var idNr = 1;
    var str = $("input").val();
    $('#start').append('<div id='+idNr+' class='+'task'+'>'+str+'</div>');
    $("input").val("");
    idNr = idNr+1;
    $("#NewTask").hide();
  });


//End of the document ready function
});

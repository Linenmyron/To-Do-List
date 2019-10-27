//Document have to be "ready" so all the functionality will work when the event start to happend
$(document).ready(function(){
  //This function will show the NewTask div
  $("#CreateTask").click(function(){
    $("#NewTask").show();
  });

  $("#add").click(function(event){
    event.preventDefault();
    var task = $("#task");
    var taskID = 1;
    var circleDone ="<img id='done' src='img/done_symbol.png'></img>"
    var circleDelete = "<img id='delete'src='img/close.png'></img>"
    var bgnArticle = "<article id="+taskID+" class='ToDo'>"
    var endArticle = "</article>"
    if(task.val().length > 0){
      $("#addTask").before(bgnArticle+circleDone+task.val()+circleDelete+endArticle);
      taskID++;
    }else{
      alert("Can't create an empty task");
    }
  });


//End of the document ready function
});

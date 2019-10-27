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
    var circleDone ="<div id='done' class='circle'></div>"
    var circleDelete = "<div id='delete' class='circle'></div>"
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

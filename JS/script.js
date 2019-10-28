//Document have to be "ready" so all the functionality will work when the event start to happend
$(document).ready(function(){
  var taskID = 1;

  //This function adds a new article above itself
  $("#add").click(function(event){
    event.preventDefault();
    var task = $("#task");
    if(task.val().length > 0){
      var list = "<li>"+task.val()+"</li>";
      $("#sortable").append(list);
      task.val('');
      taskID++;
    }else{
      alert("Can't create an empty task");
    }
  });

  //this code is from https://jqueryui.com/sortable/
  $(function(){
    $("#sortable").sortable({
      placeholder:"ui-state-highlight"
    });
  });

  $(document).on('dblclick','li', function(){
    $(this).toggleClass('remove').fadeOut('slow', function(){
      $(this).remove();
    });
  });



//End of the document ready function
});

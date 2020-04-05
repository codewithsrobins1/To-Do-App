//Check Off Specific Todos by clicking
//When an li is clicked inside the code, run the function
$("ul").on("click", "li", function(){ //Need to use on vs click; on is for potential elements; click is just current
  $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();   //removes the entire li; parent element of span is li
  });
  event.stopPropagation();  //Stop the bubbling up effect (the event going up to the parent element)
});

//Adding a todo in the input
$("input[type='text']").keypress(function(event){
  if(event.which === 13){   //When you hit enter
    //Grabbing new todo text from input
    var todoText = $(this).val();    //Grabbing the value of the input
    $(this).val("");  //Adds empty space after hitting enter
    //create a new li and add to ul using append
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText +"</li>")
  }
});

//Fade the todo input in or out
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(); //Input bars
})

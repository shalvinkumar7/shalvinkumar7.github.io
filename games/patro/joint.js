function control(){
  {
    hard = 10000;
    var delay = setInterval(function(){
      current_width = $("#joint").css("width");
      current_width = current_width.slice(0,-2);
      current_width = parseInt(current_width);
      current_width = current_width-20;
      $("#joint").css("width",current_width.toString());

    }, hard);
  }
}
$(document).ready(function(){
    $("#start_button").click(function(){
        //$(this).hide();
        control();
    });
});

$(document).ready(function(){

});
//To check the boundaries
function check_left(){
  var current_position = $("#joint").css("left");
  var temp = "";
  for(var i=0;i<current_position.length-2;i+=1)
  {
    temp = temp + current_position[i];
  }
  temp = parseInt(temp);
  if(temp>0){
    return true;
  }
  else{
    return false;
  }
}
function check_right(){
  var current_position = $("#joint").css("left");
  var temp = "";
  for(var i=0;i<current_position.length-2;i+=1)
  {
    temp = temp + current_position[i];
  }
  temp = parseInt(temp);
  if(temp<760){
    return true;
  }
  else{
    return false;
  }
}
//Simulate Keyboard events
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            {
              if(check_left()){
                var current_position = $("#joint").css("left");
                var temp = "";
                for(var i=0;i<current_position.length-2;i+=1)
                {
                  temp = temp + current_position[i];
                }
                temp = parseInt(temp);
                temp = temp-20;
                temp_str = temp.toString()+"px";
                //alert(temp_str);
                $("#joint").css("left", temp_str);
              }
              else{
                //alert("Boundary");
              }
            }
            break;
        case 39:
            {
              if(check_right()){
                var current_position = $("#joint").css("left");
                var temp = "";
                for(var i=0;i<current_position.length-2;i+=1)
                {
                  temp = temp + current_position[i];
                }
                temp = parseInt(temp);
                temp = temp+20;
                temp_str = temp.toString()+"px";
                //alert(temp_str);
                $("#joint").css("left", temp_str);
              }
              else{
                //alert("Boundary");
              }
            }
            break;
    }
};

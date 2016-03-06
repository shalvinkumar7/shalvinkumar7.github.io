var glo1=0;
function set(){
  $("#weed").css("top","30px");
  remaining_temp = $("#remaining_num").text();
  remaining_temp = parseInt(remaining_temp);
  if(remaining_temp>0){
    control();
  }
  else{
    //alert("Game over! Total Score = "+glo1);
    var str = "./gameend/?score="+glo1
    window.location.href=str;
  }
}

function check_boundary(){
  var weed_top = $("#weed").css("top");
  weed_top = weed_top.slice(0,-2);
  weed_top = parseInt(weed_top);

  if(weed_top>=570) {
    return false;
  }
  else return true;
}

function check(){

  var weed_left = $("#weed").css("left");
  var weed_top = $("#weed").css("top");
  weed_left = weed_left.slice(0,-2);
  weed_top = weed_top.slice(0,-2);
  weed_left = parseInt(weed_left);
  weed_top = parseInt(weed_top);

  var joint_left = $("#joint").css("left");
  var joint_top = $("#joint").css("top");
  joint_left = joint_left.slice(0,-2);
  joint_top = joint_top.slice(0,-2);
  joint_left = parseInt(joint_left)+150;
  joint_top = parseInt(joint_top);
  //alert("Joint = "+joint_left+" and Weed left = "+weed_left);
  var width_weed = 50;
  //console.log("Joint positions: "+joint_top+" and "+joint_left);
  //console.log("Weed positions: "+weed_top+" and "+weed_left);
  if(((weed_left>=joint_left&&weed_left<=(joint_left+245))||((weed_left+width_weed)>=joint_left&&(weed_left+width_weed)<=(joint_left+245))) && weed_top>joint_top-20){
    //alert("Weed = "+weed_left+" Joint = "+joint_left);
    return false;
  }
  else{
    return true;
  }

}
function control(){
  //Generate a random number between 150 and 1070
  var random_num = Math.floor((Math.random() * 920+150));
  //Set the weed's position
  var temp_num = random_num.toString()+"px";
  $("#weed").css("left",random_num);
  //Determine the hardness
  hard = 100 - 7*glo1;
  //Animate the weed's position to down
  {
    var delay = setInterval(function(){
      //alert("position going to change");
      if(check() && check_boundary()){
        var current_height = $("#weed").css("top");
        //Making it readable
        var temp = "";
        for(var i=0;i<current_height.length-2;i+=1)
        {
          temp = temp + current_height[i];
        }
        temp = parseInt(temp);
        temp = temp+5;
        temp_str = temp.toString()+"px";
        //alert(temp_str);
        $("#weed").css("top", temp_str);
      }
      else {
        //alert("Out");
        if(!check()){
          //document.getElementById("score_num").innerHTML="1";
          score_temp = $("#score_num").text();
          //alert(score_temp);
          score_temp = parseInt(score_temp);
          //alert(score_temp);
          score_temp += 1;
          glo1 = score_temp;
          remaining_temp = $("#remaining_num").text();
          if(remaining_temp<=80) remaining_temp = parseInt(remaining_temp)+20;
          if(remaining_temp<=40) $("#remaining_num").css("color", "red");
          document.getElementById("remaining_num").innerHTML=remaining_temp.toString();
          document.getElementById("score_num").innerHTML=score_temp.toString();
        }
        else if (!check_boundary()) {
          remaining_temp = $("#remaining_num").text();
          remaining_temp = parseInt(remaining_temp)-20;
          if(remaining_temp<=40) $("#remaining_num").css("color", "red");
          document.getElementById("remaining_num").innerHTML=remaining_temp.toString();
        }
        //alert("Weed = "+glo1+" Joint = "+glo2);
        clearInterval(delay);
        set();
        //control();

      }

    }, hard);
  }
}
$(document).ready(function(){
    $("#start_button").click(function(){
        $(this).hide();
        $("#weed").css("visibility", "visible");
        $("#weed").css("top","30px");
        //$("#weed").css("left","1070px");
        control();
    });
});

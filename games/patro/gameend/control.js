$(document).ready(function(){
    $("#playagain").click(function(){
      var str = "../"
      window.location.href=str;
    });
});
var curr = window.location.href;
var index = curr.indexOf("?score=")
var temp = "";
for(var i = index+7;i<curr.length;i++) {
  temp= temp+curr[i];
  //alert(curr);
}
alert("Your score = "+temp);
$("#text_num").val(parseInt(temp));

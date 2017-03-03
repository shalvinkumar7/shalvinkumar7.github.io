function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}


preload([
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
]);



$(document).ready(function(){	
    console.log("This is working");
    /*setTimeout(function(){
        var elem = document.getElementById("player1");
        elem.style.top = '-100px';
        elem.style.left = '600px';
    }, 3000);*/
    var chance = 1;

    var curr_position_player1 = 0;
    var curr_position_player2 = 0;

    var horizontal_pointer_player1 = 1;
    var horizontal_pointer_player2 = 1;
 
    var horizontal_player1 = 22-4.75;
    var horizontal_player2 = 22-4.75;

    var vertical_player1 = 83.8;
    var vertical_player2 = 80.5;

    $("#player1").hide();
    $("#player2").hide();

    $("#roll_button").click(function(){
        if(chance == 1){
            var dice_roll = Math.floor((Math.random() * 6) + 1);
            var destination_string = '"images/'+dice_roll.toString()+'.png"';
            $('#dice').html('<img width="80px" height="80px" src='+destination_string+'/>');
            console.log("Dice roll "+dice_roll.toString());
            /*Moving Player1*/
            var end = endCheck(dice_roll);
            if(!end){
                for(var j=1;j<=dice_roll;j++){
                    console.log("j is "+j.toString());

                    var mov = curr_position_player1 + j;
                    console.log("Mov is "+mov.toString());
                    if(mov%10==0){
                        console.log("Loop1");
                        horizontal_player1 = horizontal_player1 + 4.75 * horizontal_pointer_player1;
                        horizontal_pointer_player1 *= -1;
                        console.log("Horizontal Pointer "+horizontal_pointer_player1.toString());
                    }else if( (mov - parseInt(mov/10)*10) == 1 && mov != 1){
                        console.log("Loop2");
                        vertical_player1 = vertical_player1 - 8.5;
                        console.log(vertical_player1);
                    }else{
                        console.log("Loop3");
                        horizontal_player1 = horizontal_player1 + 4.75 * horizontal_pointer_player1;
                    }
                    var vertical_player1_str = vertical_player1.toString()+"%";
                    var horizontal_player1_str = horizontal_player1.toString()+"%";
                    $("#player1").css("top",vertical_player1_str);
                    $("#player1").css("left",horizontal_player1_str);
                    $("#player1").show();
                }
                curr_position_player1 += dice_roll;
            }
            winCheck();
            chance = 2;
            setTimeout(function(){
                cpu_play();
            },1000);
        }
    });

    function cpu_play(){
        if(chance == 2){
            var dice_roll = Math.floor((Math.random() * 6) + 1);
            var destination_string = '"images/'+dice_roll.toString()+'.png"';
            $('#dice').html('<img width="80px" height="80px" src='+destination_string+'/>');
            //console.log("Dice roll "+dice_roll.toString());
            /*Moving Player2*/
            var end = endCheck(dice_roll);
            if(!end){
                for(var j=1;j<=dice_roll;j++){
                    //console.log("j is "+j.toString());

                    var mov = curr_position_player2 + j;
                    //console.log("Mov is "+mov.toString());
                    if(mov%10==0){
                        //console.log("Loop1");
                        horizontal_player2 = horizontal_player2 + 4.75 * horizontal_pointer_player2;
                        horizontal_pointer_player2 *= -1;
                        //console.log("Horizontal Pointer "+horizontal_pointer_player1.toString());
                    }else if( (mov - parseInt(mov/10)*10) == 1 && mov != 1){
                        //console.log("Loop2");
                        vertical_player2 = vertical_player2 - 8.5;
                        //console.log(vertical_player1);
                    }else{
                        //console.log("Loop3");
                        horizontal_player2 = horizontal_player2 + 4.75 * horizontal_pointer_player2;
                    }
                    var vertical_player2_str = vertical_player2.toString()+"%";
                    var horizontal_player2_str = horizontal_player2.toString()+"%";
                    $("#player2").css("top",vertical_player2_str);
                    $("#player2").css("left",horizontal_player2_str);
                    $("#player2").show();
                    
                }
                curr_position_player2 += dice_roll;
            }
            winCheck();
            chance = 1;
        }
    }

    function endCheck(dice){
        if(chance == 2){
            if(curr_position_player2 + dice <= 100){
                return false;
            }
            else return true;
        }
        else{
            if(curr_position_player1 + dice <= 100){
                return false;
            }
            else return true;
        }
    }

    function winCheck(){
        if(curr_position_player1 == 100) alert("Player1 Wins!");
        if(curr_position_player2 == 100) alert("Player2 Wins!");
    }

});
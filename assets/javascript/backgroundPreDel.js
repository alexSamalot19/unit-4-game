//Template

$(document).on('click', "crystal", function (){
    var num parseInt($(this.attr('data-random')); //turn into a number
    previous += num;


    $("#previous").html("Total Score is:  " + previous);
    console.log(previous);


    if(previous > random_result) {

        lost ++;

        $("lost").html("You lost! Sorry so far: " + lost);


        previous = 0;

        resetAndStart();

    } elseif (previous===random_result) {
        win++;

        $("#win").html("You win:  " + win);


        previous = 0;

        resetAndStart();

    }



})
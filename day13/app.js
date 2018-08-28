

$(document).ready(function () {

    var choice  = ['rock','scissors','paper'];
    var comChoice,userChoice;


    $('.btn').on('click',op);


    // $('.btn').on('click',function () {
    //     showTime(3);
    // })

function op() {

    // $('.btn').off('click');
    $('.result').hide();
    $('.fist').show();
    $('.shaker').addClass('shake');
    showTime(3);


    comChoice = choice[Math.floor(Math.random()*3)];
    userChoice = $(this).attr('id');

    // result();

}


    function showTime(t) {

        if(t == 0){
            $('.fist').hide();
            $('.center').text('shoot!');
            result();
            // return;
        }else{
            $('.center').text(t);
            t -= 1;
            setTimeout(function () {
                showTime(t);
            },500);
        }
    }


    function result() {

        $('.shaker').removeClass('shake');
        $('.result.left.' + comChoice).show();
        $('.result.right.' + userChoice).show();

        if(userChoice == comChoice){
            $('.center').text('Tie!');
        }else if(userChoice == 'rock' && comChoice == 'scissors' || userChoice == 'paper' && comChoice == 'rock' || userChoice == 'scissors' && comChoice =='paper'){
            $('.center').text('You Win!');
        }else{
            $('.center').text('You Lose!');
        }


    }

})
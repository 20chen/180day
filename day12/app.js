


$(document).ready(function () {
    $('.spot4').hide();


    $('#shaker').on('click',function () {
        $('.tit').text('Shake,shake,shake...');
        $('.tit').addClass('shake');
        
        setTimeout(function () {
            var roll1 = makeDieFace('#dice1');
            var roll2 = makeDieFace('#dice2');

            $('.tit').removeClass('shake');

            if(roll1 + roll2 == 2){
                $('.tit').text('Snake eye!');
            }else{
                $('.tit').text(roll1 + roll2);
            }
        },1000);
    });

    function makeDieFace(dieId) {
        var roll = Math.floor(Math.random() * 6 + 1);
        var all = dieId + ' .spot';//$('#dice1 > .dice')
        var dice_1 = dieId + '_spot_1';
        var dice_2 = dieId + '_spot_2';
        var dice_3 = dieId + '_spot_3';
        var dice_4 = dieId + '_spot_4';
        var dice_5 = dieId + '_spot_5';
        var dice_6 = dieId + '_spot_6';
        var dice_7 = dieId + '_spot_7';

        if(roll == 1){
            $(all).hide();
            $(dice_4).show();
        }

        if(roll == 2){
            $(all).hide();
            $(dice_1 + ',' + dice_7).show();
        }

        if(roll == 3){
            $(all).hide();
            $(dice_1 + ',' + dice_4 + ',' + dice_7).show();
        }

        if(roll == 4){
            $(all).show();
            $(dice_2 + ',' + dice_4 + ',' + dice_6).hide();
        }

        if(roll == 5){
            $(all).show();
            $(dice_2 + ',' + dice_6).hide();
        }
        if(roll == 6){
            $(all).show();
            $(dice_4).hide();
        }

        return roll;
    }

});
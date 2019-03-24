const shapes = {
    Circle:{
        className:'circle',
        id:'circleShape'
    },
    Square:{
        className:'square',
        id:'squareShape'
    },
    Triangle:{
        className:'square',
        id:'squareShape'
    }
};

$(document).on('change.shape', '#shape', function(e){
    const shapeVal = $(this).val();
    if (shapes[shapeVal]){
        $("#newShape").removeClass().addClass(shapes[shapeVal].className);  
    }
});
$(document).on('change.input', 'input[type=text]', function(e){
    const thisVal = $(this).val(),
        thisID = $(this).attr('id');
    if (thisID.indexOf('border') > -1){
        $('#newShape').css('borderColor', thisVal)
    } else if (thisID.indexOf('background') > -1){
        $('#newShape').css('backgroundColor', thisVal)
    }
});

//轮播图
var num = 0;
var sum = 0;
var timer = setInterval(function () {
    if (num == 5) {
        num = 1;
        $('.Innerimg').css('margin-left', -(num * 590));
    }
    num++;
    $('.Innerimg').animate({ marginLeft: -(num * 590) + 'px' });
    sum++;
    if (sum == 4) {
        sum = 0;
    }
    $('.dian span').removeClass('active');
    $('.dian span').eq(sum).addClass('active');

}, 5000);
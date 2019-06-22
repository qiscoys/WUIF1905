$(function () {
    let leftBtn=$('.leftBtn'),
        rightBtn=$('.rightBtn'),
        imgs=$('.bannerImg > li'),
        btns=$('.btnList > li'),
        bannerLeft=$('.photo1')
    let imgWidth=imgs.width();
    let current=0,next=0,flag=true;

    imgs.css({left:imgWidth}).eq(0).css({left:0});
    rightBtn.click(function () {
        if(!flag){
            return
        }
        flag=false;
        next++;
        if (next==imgs.length){
            next=0;
        }
        $(imgs[next]).css('left',imgWidth);
        imgs.eq(current).animate({left:-imgWidth});
        imgs.eq(next).animate({left:0},function () {
            flag=true;
        })
        btns.eq(current).removeClass('hot');
        btns.eq(next).addClass('hot');
        current=next;
    })
    let t=setInterval(function () {
        rightBtn.triggerHandler('click')
    },1000);
    bannerLeft.mouseenter(function () {
        clearInterval(t)
    });
    bannerLeft.mouseleave(function () {
        t=setInterval(function () {
            rightBtn.triggerHandler('click')
        },1000)
    })
});
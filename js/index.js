window.onload=function () {
    let btnList=document.getElementsByClassName('btnList');


/*个人博客日志导航栏*/
    let nav1=document.getElementsByClassName('nav11')[0];
    let nav1black=nav1.getElementsByTagName('li')
    for (let i=0;i<nav1black.length;i++){
        nav1black[i].onclick=function () {
            for (let j=0;j<nav1black.length;j++){
                nav1black[j].style.borderBottom='none'
            }
            this.style.borderBottom='1px solid #000';
        }
    }
    /*隐藏博文*/
    // let tableList=document.querySelector('.nav2-word > li')
    let tableLists=document.querySelectorAll('.nav2-word >li')

    tableLists.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            for (let i=0;i<tableLists.length;i++){
                tableLists[i].classList.remove('hot')
            }
            this.classList.add('hot')
        }
    })

    /*轮播点*/

    let bannerPointer=btnList[0].getElementsByTagName('li');
    // for (var i=0;i<bannerPointer.length;i++) {
    //     bannerPointer[i].onmouseenter=function () {
    //         this.style.background='#04b680'
    //     };
    //     bannerPointer[i].onmouseleave=function () {
    //         this.style.background="#fff"
    //     };
    // }

/*轮播图*/
    let current=0,next=0;
    let rightBtn=document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg=document.querySelectorAll('.bannerImg > li');
    let w=bannerImg[0].offsetWidth;
    let flag=true;
    // rightBtn.onclick=function () {
    //     index++;
    //     if (index==bannerImg.length){
    //         index=0
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     })
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //             elem.classList.remove('hot')
    //     })
    //     bannerPointer[index].classList.add('hot')
    //     bannerImg[index].style.zIndex=999;
    // }

    // leftBtn.onclick = function () {
    //     index--;
    //     if(index < 0){
    //         index=bannerImg.length - 1;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     })
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //         elem.classList.remove('hot')
    //     })
    //     bannerPointer[index].classList.add('hot')
    //     bannerImg[index].style.zIndex = 999;
    // }

    rightBtn.onclick=function(){
        if (!flag) {
            return
        }
        flag=false
        next++;
        if (next==bannerImg.length){
            next=0;
        }
        bannerImg[next].style.left=w+'px';
        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0},function(){
            flag=true
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current=next;

    };
    leftBtn.onclick=function(){
        if (!flag) {
            return
        }
        flag=false;
        next--;
        if (next<0){
            next=bannerImg.length-1;
        }
        bannerImg[next].style.left=-w+'px';
        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left:0},function () {
            flag=true;
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current=next;

    };

    let bannerLeft=document.querySelector('.photo1');
    let t=setInterval(rightBtn.onclick,3000);
    bannerLeft.onmouseenter=function () {
        console.log(1);
        clearInterval(t);
    };
    bannerLeft.onmouseleave=function () {
        t=setInterval(rightBtn.onclick,3000)
    }

    for (let i=0;i<bannerPointer.length;i++){
        // bannerPointer[i].shuqi=i;
        bannerPointer[i].onclick=function () {
            if (current==i){
                return;
            }
            next=i;
            if (next>current) {
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current], {left: -w});
                animate(bannerImg[next], {left: 0});
            }else{
                bannerImg[next].style.left = -w + 'px';
                animate(bannerImg[current], {left: w});
                animate(bannerImg[next], {left: 0});
            }
            bannerPointer[current].classList.remove('hot');
            bannerPointer[next].classList.add('hot');
            current=next;
            // Array.prototype.forEach.call(bannerPointer,function (elem) {
            //     elem.classList.remove('left')
            // })
            // bannerImg.forEach(function (ele) {
            //     bannerImg[ele].style.left = -w;
            // })
            // this.classList.add('left')
            // bannerImg[this.shuqi].style.left = 0;
        }
    }

    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyLoad');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop);
        // positionArr.push(ele.offsetTop);

    })

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for (let i = 0 ; i<positionArr.length;i++){
            if (scrolltop + viewH >=positionArr[i] + 50) {

                if (!imgs[i].src) {
                    console.log(i);
                    imgs[i].src = imgs[i].getAttribute('aa');
                }

            }
        }
    }

};

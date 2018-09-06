window.onload = function () {
    var Headercar = document.querySelector('header .nav .right .car a');
    var Righttext = document.querySelector('header .nav .right-text span');
    var NavLi = document.querySelectorAll('main .nav ul li');
    var Div = document.querySelectorAll('main .nav-text0 div ul');
    console.log(NavLi)
    Headercar.onmouseover = function () {
        Righttext.style.display = 'block';
    }
    Headercar.onmouseout = function () {
        Righttext.style.display = 'none';
    }
    /*******************************下拉*******************************/
    var Lilen = NavLi.length;
    var Divlen = Div.length;
    for (var i = 1;i<9;i++) {
        NavLi[i].index = i;
        NavLi[i].onmouseover = function () {
            for (var j = 0; j < Divlen; j++) {
                Div[j].style.display = 'none';
            }
            Div[this.index].style.display = 'block';
            console.log(Div[this.index])
        }
    }
    /***********************轮播*********************/
    var Photo = document.querySelectorAll('main .photo img')
    var Radio = document.querySelectorAll('main .radio a')
    var prev = document.querySelector('main .photo a')[0];
    var next = document.querySelector('main .photo a')[1];
}
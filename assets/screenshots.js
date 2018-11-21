function changeImage()
{
    /*
    $("#screenshot").animate({
      opacity: 0.2,
      color: "white"
    }, "fast", function () {
      $(this).attr('data-marked', 'yes');
    });
    */
    $("#screenshot").fadeOut(125);
    var img = document.getElementById("screenshot");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    }

    setTimeout("changeImage()", 2500);
    /*
    $("#screenshot").animate({
      opacity: 1
    }, "fast", function () {
      $(this).attr('data-marked', 'yes');
    });
    */
    $("#screenshot").fadeIn(125);
}

/*
function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 100);
    }
}
*/

var images = [],
x = 0;

images[0] = "https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Resources/Screenshot-2.PNG?token=AlyO4wXUInR6oHEgx0Tg31ri0t1q91frks5bx5ZbwA%3D%3D";
images[1] = "https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Resources/Screenshot-1.PNG?token=AlyO4wXUInR6oHEgx0Tg31ri0t1q91frks5bx5ZbwA%3D%3D";
images[2] = "https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Resources/Screenshot-3.PNG?token=AlyO4wXUInR6oHEgx0Tg31ri0t1q91frks5bx5ZbwA%3D%3D";
setTimeout("changeImage()", 2500);

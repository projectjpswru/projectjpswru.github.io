window.onscroll = function showHeader() {
    var header = document.querySelector('.character1');
    if(window.pageYOffset > 250){
        header.classList.add('character1_fixed');
    } else{
        header.classList.remove('character1_fixed');
    }
   



    var header = document.querySelector('.navbar');
    if(window.pageYOffset > 150){
        header.classList.add('navbar_fixed');
    } else{
        header.classList.remove('navbar_fixed');
    }
}





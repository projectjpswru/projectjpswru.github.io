window.onscroll = function showHeader() 

{
    var header = document.querySelector('.navbar');
    if(window.pageYOffset > 150){
        header.classList.add('navbar_fixed');
    } else{
        header.classList.remove('navbar_fixed');
    }

}




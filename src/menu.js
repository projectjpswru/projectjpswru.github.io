
document.querySelector('#js-menu').innerHTML = `
<div class="menu">
<div class="menu-logo">

</div>

<div class="menu-burger">
    <div id="burger-line" class="line1"></div>
    <div id="burger-line" class="line2"></div>
    <div id="burger-line" class="line3"></div>
</div>
<ul class="menu-list">
    <a href="${link.news}"><li>Новости</li></a>
    <a href="${link.char}"><li>Персонажи</li></a>
</ul>
<a href="${link.ofsite}">
<div class="menu-ofsite">
    Оф.сайт
</div>
</a>
</div>
<div class="pod-menu">
<ul class="pod-menu-list">
    <div style="height: 100px;"></div>
    <a href="${link.patcher}"><li>пачтер</li></a>
    <a href="${link.vk}"><li>группа вк</li></a>
    <a href="${link.donat}"><li>донат</li></a>
    <a href="${link.author}"><li>авторы</li></a>
    <a href="${link.blagodar}"><li>благодарность</li></a>
    <a href="${link.bugReport}"><li>сообщить об ошибке</li></a>
</ul>
<div class="menu-main-info">
    <p style="padding-bottom:20px;">${copyright}</p>
    <p>Project by <a href="https://github.io/TheFynnyDay">TheFunnyDay</a> | <a href="https://github.com/projectjpswru">GitHub</a> | <a href="/cookie">Cookie</a></p>
</div>
</div>

`
document.querySelector('.menu-burger').addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains('.burger-active')) {
        this.classList.remove('.burger-active');
        document.querySelector('.pod-menu').style.left = "-400px";
        document.querySelector('.line1').style.width =  '';
        document.querySelector('.line2').style.width =  '';
        document.querySelector('.line1').style.backgroundColor =  '';
        document.querySelector('.line2').style.backgroundColor =  '';
        document.querySelector('.line3').style.backgroundColor =  '';
    }
    else {
        this.classList.add('.burger-active');
        document.querySelector('.pod-menu').style.left = "0px";
        document.querySelector('.line1').style.width =  '40px';
        document.querySelector('.line2').style.width =  '40px';
        document.querySelector('.line1').style.backgroundColor =  'var(--main-red)';
        document.querySelector('.line2').style.backgroundColor =  'var(--main-red)';
        document.querySelector('.line3').style.backgroundColor =  'var(--main-red)';
    }
})

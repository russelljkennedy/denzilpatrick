const menu=document.getElementsByClassName("pop"),popMenu=document.getElementsByClassName("pop-menu"),logo=document.getElementsByClassName("rj-logo-container");function getCookie(o){const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const i=t[e].split("=");if(o==i[0].trim())return decodeURIComponent(i[1])}return null}menu[0].onclick=function(){this.classList.toggle("is-open");let e=this.nextElementSibling;"visible"==e.style.visibility?(e.style.visibility="hidden",e.style.opacity="0",logo[0].style.zIndex="1"):(e.style.visibility="visible",e.style.opacity="1",logo[0].style.zIndex="4")};const cookieBar=document.getElementById("rj-cookie-bar"),cookieLink=document.getElementById("rj-cookie-agree");cookieLink.onclick=function(e){e.preventDefault(),document.cookie="cookieAgree=True; path=/; max-age=3600",cookieBar.style.visibility="hidden",cookieBar.style.opacity="0",logo[0].style.transition="bottom 0.9s linear",logo[0].style.bottom="1.7vh"},window.onload=function(){popMenu[0].style.display="block",null!=getCookie("cookieAgree")?(cookieBar.remove(),logo[0].style.bottom="1.7vh",logo[0].style.display="block"):(logo[0].style.bottom="60px",logo[0].style.display="block",cookieBar.style.display="grid")};
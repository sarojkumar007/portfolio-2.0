// NAV HANDLER
let nav_input = document.querySelector('.nav-input');
let nav_btn = document.querySelector('.nav-btn');
$(".nav-input").on("change", function() {
    if(nav_input.checked){
        $('.nav-icon use').attr("xlink:href","img/sprite.svg#icon-cross");
        nav_btn.classList.remove('nav-menu');
        nav_btn.classList.add('nav-cross');
    }
    else{
        $('.nav-icon use').attr("xlink:href","img/sprite.svg#icon-menu");
        nav_btn.classList.remove('nav-cross');
        nav_btn.classList.add('nav-menu');
    }
});
let navLink = document.querySelectorAll('.nav-links a');
navLink.forEach(el =>{
    el.addEventListener('click',(e)=>{
        nav_input.checked = false;
        $('.nav-icon use').attr("xlink:href","img/sprite.svg#icon-menu");
        nav_btn.classList.remove('nav-cross');
        nav_btn.classList.add('nav-menu');
    });
});

// FORM HANDLER
let form = document.getElementById('contact-form');
let submit_btn = document.getElementById('contact-form-submit');
let popup = document.getElementById('popup');
let ok = document.getElementById('popup-ok');

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.forms[0][0].value;
    let email = document.forms[0][1].value;
    let sub = document.forms[0][2].value;
    let msg = document.forms[0][3].value;
    if(name == '' || email == '' || sub == '' || msg == ''){
        document.querySelector('#popup p').innerHTML = 'Please fill all the fields to Submit!';
        popup.style.display = 'block';
        setTimeout(()=>{
            popup.style.opacity=1;
            popup.style.transform = "translate(-50%,-50%) scale(1)";
        },100);
    }else{
        document.querySelector('#popup p').innerHTML = 'Thank You!<br>You message has been sent.';
        popup.style.display = 'block';
        setTimeout(()=>{
            popup.style.opacity=1;
            popup.style.transform = "translate(-50%,-50%) scale(1)";
        },100);
    }
});
ok.addEventListener('click',()=>{
    setTimeout(()=>{
        form.reset();
        popup.style.opacity=0;
        popup.style.transform = "translate(-50%,-50%) scale(.5)";
    },100);
    setTimeout(()=>{
        popup.style.display = 'none';
    },200);
});

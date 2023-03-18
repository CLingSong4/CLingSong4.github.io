function navbar_side() {
    var side_width = document.getElementById('navbar_sidebox').style.width;
    var width_box;

    if (window.innerWidth > 400 || window.innerWidth > "400px"){
        width_box = '400px';
    }
    else {
        width_box = '100%';
    }   
    if (side_width == 0 || side_width == '0px'){
        navbar_sidebox.style.width = width_box;
    }
    else{
        navbar_sidebox.style.width = 0;
    }
}

const headerline = document.querySelectorAll(".head2_line")

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("head2_line_active", entry.isIntersecting)
    })
}, {
    threshold: 0.5,
})

headerline.forEach(head2_line => {
    observer1.observe(head2_line)
})


const header2 = document.querySelectorAll('.head2')

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("head2_active", entry.isIntersecting)
    })
}, {
    threshold: 0.5,
})

header2.forEach(head2 => {
    observer2.observe(head2)
})

const bodycontent = document.querySelectorAll('.body')

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("body_active", entry.isIntersecting)
    })
}, {
    threshold: 0.25,
})

bodycontent.forEach(body => {
    observer3.observe(body)
})


window.onscroll = function() {navbar_scroll(); up_arrow()};
function navbar_scroll(){
    //document.getElementById('navbar_container').style.justifyContent;
    if (document.documentElement.scrollTop < 300) {
        navbar_container.style.backgroundColor = "transparent";
        navbar_logo.style.fontSize = "300%";
    } 
    else {
        navbar_container.style.backgroundColor = "#1f1f1fd6";
        navbar_logo.style.fontSize = "200%";
    }
}

function up_arrow(){
    if (document.documentElement.scrollTop < 1000) {
        upbox.style.opacity = "0%"
    } 
    else {
        upbox.style.opacity = "100%"
    }
}


var slidesindex = 1;
var dotnumber;
var textindex;
var texts = document.getElementsByClassName('slideshow_text');
var icons = document.getElementsByClassName('slideshow_box');
function dotsclick(dotnumber){
    slidesindex = dotnumber;
}
function slidescount() {
    if (slidesindex > 3) {
        slidesindex = 1;
    }
    if (slidesindex < 1){
        slidesindex = 3;
    }

    for (x = 0; x < texts.length; x++){
        texts[x].style.opacity = '0%';
    }
    for (x = 0; x < 4; x++){
        icons[x].style.backgroundColor = "transparent";
    }

    var slides = document.getElementsByClassName('slideshow');
    var dots = document.getElementsByClassName('slideshow_dot');

    for (x = 0; x < slides.length; x++){
        slides[x].style.opacity = '0%';
        dots[x].style.backgroundColor = "transparent";
    }

    slides[slidesindex - 1].style.opacity = '100%';
    dots[slidesindex - 1].style.backgroundColor = "#ffffff";
}

function slides_text(textindex){
    var i = textindex + 4*(slidesindex - 1) - 1;

    for (x = 0; x < texts.length; x++){
        texts[x].style.opacity = '0%';
    }
    for (x = 0; x < 4; x++){
        icons[x].style.backgroundColor = "transparent";
    }
    
    texts[i].style.opacity = "100%";
    icons[textindex - 1].style.backgroundColor = '#59cbda';

    //document.getElementById('count').innerHTML = textindex;
}

var skills_number;
function skillsopen(skills_number){
    var skills_active = document.getElementsByClassName('skills_picbox_active');
    var skills_bottomtext = document.getElementsByClassName('skills_bottomtext');
    var skillsi = skills_number - 1;
    var skills_bar = document.getElementsByClassName('skills_bar_on');
    var skills_bar_number = document.getElementsByClassName('skills_bar_number');
    var skills_percent = ["55%", "38%", "63%", "76%", "27%"];

    if (skills_active[skillsi].style.maxHeight == 0 || skills_active[skills_number - 1].style.maxHeight == "0px"){
        skills_active[skillsi].style.maxHeight = skills_active[skills_number - 1].scrollHeight + "px";
        skills_bottomtext[skillsi].innerHTML = "Click to Close";
        for (i=0; i<skills_bar.length; i++){
            skills_bar[i].style.width = skills_percent[i];
            skills_bar_number[i].style.opacity = "100%";
            skills_bar_number[i].style.marginLeft = skills_percent[i];
            skills_bar_number[i].innerHTML = skills_percent[i];
        }
    }
    else{
        skills_active[skillsi].style.maxHeight = "0";
        skills_bottomtext[skillsi].innerHTML = "Click to Expand";
        for (i=0; i<skills_bar.length; i++){
            skills_bar[i].style.width = "0%";
            skills_bar_number[i].style.opacity = "0%";
            skills_bar_number[i].style.marginLeft = skills_percent[i];
        }
    }

}


function submit_form(){
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comment').value = "";

    var plane_active = document.getElementById("submit_pic");
    var form_button_active = document.getElementById("form_button");
    var text_active = document.getElementById("submit_text");
    plane_active.classList.toggle("submit_pic_active");
    form_button_active.classList.toggle("form_button_active");
    text_active.classList.toggle("submit_text_active");


    document.getElementById('count').innerHTML = xpos;  
}

// 圖片上榜定完成後 兩個圖片綁一起
function zoom_in(e){
    
    let overlay_el = document.getElementById("overlay");
    let img_zoom_el = document.getElementById("img_zoom");

    
    if(overlay_el.style.backgroundImage == ""){
        overlay_el.style.backgroundImage = `url("${img_zoom_el.src}")`;
    }
    
    overlay_el.style.backgroundPosition = `${overlay_el.clientWidth / 2 - e.offsetX * 2}px ${overlay_el.clientHeight / 2 - e.offsetY * 2}px `
    
    overlay_el.classList.add("-on");
    
    overlay_el.style.left = e.offsetX + "px";
    overlay_el.style.top = e.offsetY + "px";
}

function zoom_out(){
    document.getElementById("overlay").classList.remove("-on");
}

function zoom_event(){
    let img_zoom_el = document.getElementById("img_zoom");
    
    img_zoom_el.removeEventListener("mousemove", zoom_in);
    img_zoom_el.removeEventListener("mouseout", zoom_out);
    if(window.innerWidth >= 768){
    img_zoom_el.addEventListener("mousemove", zoom_in);
    img_zoom_el.addEventListener("mouseout", zoom_out);
    }
    
}

window.addEventListener("load", function(){
    zoom_event();
});

window.addEventListener("resize", function(){
    zoom_event();
});
// =========================================

function zoom_in2(e){
    
    let overlay_el2 = document.getElementById("overlay2");
    let img_zoom_el2 = document.getElementById("img_zoom2");

    
    if(overlay_el2.style.backgroundImage == ""){
        overlay_el2.style.backgroundImage = `url("${img_zoom_el2.src}")`;
    }
    
    overlay_el2.style.backgroundPosition = `${overlay_el2.clientWidth / 2 - e.offsetX * 2}px ${overlay_el2.clientHeight / 2 - e.offsetY * 2}px `
    
    overlay_el2.classList.add("-on");
    
    overlay_el2.style.left = e.offsetX + "px";
    overlay_el2.style.top = e.offsetY + "px";
}

function zoom_out2(){
    document.getElementById("overlay2").classList.remove("-on");
}

function zoom_event2(){
    let img_zoom_el2 = document.getElementById("img_zoom2");
    
    img_zoom_el2.removeEventListener("mousemove", zoom_in2);
    img_zoom_el2.removeEventListener("mouseout", zoom_out2);
    if(window.innerWidth >= 768){
    img_zoom_el2.addEventListener("mousemove", zoom_in2);
    img_zoom_el2.addEventListener("mouseout", zoom_out2);
    }
    
}

window.addEventListener("load", function(){
    zoom_event2();
});

window.addEventListener("resize", function(){
    zoom_event2();
});

// ===================================================

function zoom_in3(e){
    
    let overlay_el3 = document.getElementById("overlay3");
    let img_zoom_el3 = document.getElementById("img_zoom3");

    
    if(overlay_el3.style.backgroundImage == ""){
        overlay_el3.style.backgroundImage = `url("${img_zoom_el3.src}")`;
    }
    
    overlay_el3.style.backgroundPosition = `${overlay_el3.clientWidth / 2 - e.offsetX * 2}px ${overlay_el3.clientHeight / 2 - e.offsetY * 2}px `
    
    overlay_el3.classList.add("-on");
    
    overlay_el3.style.left = e.offsetX + "px";
    overlay_el3.style.top = e.offsetY + "px";
}

function zoom_out3(){
    document.getElementById("overlay3").classList.remove("-on");
}

function zoom_event3(){
    let img_zoom_el3 = document.getElementById("img_zoom3");
    
    img_zoom_el3.removeEventListener("mousemove", zoom_in3);
    img_zoom_el3.removeEventListener("mouseout", zoom_out3);
    if(window.innerWidth >= 768){
    img_zoom_el3.addEventListener("mousemove", zoom_in3);
    img_zoom_el3.addEventListener("mouseout", zoom_out3);
    }
    
}

window.addEventListener("load", function(){
    zoom_event3();
});

window.addEventListener("resize", function(){
    zoom_event3();
});
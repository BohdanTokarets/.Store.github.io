//copy menu for mobile 
function copyMenu(){
    //copy inside .dpt-cat to .departaments
    const dptCategory = document.querySelector(".dpt-cat"); 
    const dptPlace = document.querySelector(".departaments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    const mainNav = document.querySelector(".header-nav nav");
    const navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    const topNav = document.querySelector(".header-top .wrapper");
    const topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu()

//show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addClass = document.querySelector(".site");


menuButton.addEventListener("click", () =>{
    addClass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", () =>{
    addClass.classList.remove("showmenu");
});






//show sub menu on mobile
const submenu = document.querySelector(".has-child");
const submenu2 = document.querySelector(".has-child2");
const submenu3 = document.querySelector(".has-child3");
const submenu4= document.querySelector(".has-child4");

if(submenu){
    submenu.addEventListener("click", () =>{
        submenu.classList.add("expand");
    });
}
document.addEventListener('mousedown', function(e){
    if(e.target.closest('submenu') === null){
        submenu.classList.remove('expand');
    }
});

if(submenu2){
    submenu2.addEventListener("click", () =>{
        submenu2.classList.add("expand");
    });
}

document.addEventListener('mousedown', function(e){
    if(e.target.closest('submenu2') === null){
        submenu2.classList.remove('expand');
    }
});

if(submenu3){
    submenu3.addEventListener("click", () =>{
        submenu3.classList.add("expand");
    });
}

document.addEventListener('mousedown', function(e){
    if(e.target.closest('submenu3') === null){
        submenu3.classList.remove('expand');
    }
});

if(submenu4){
    submenu4.addEventListener("click", () =>{
        submenu4.classList.add("expand");
    });
}

document.addEventListener('mousedown', function(e){
    if(e.target.closest('submenu4') === null){
        submenu4.classList.remove('expand');
    }
});

//Show Search
const SearchButton = document.querySelector(".t-search");
const TClose = document.querySelector(".search-close");
const ShowClass = document.querySelector(".site");


SearchButton.addEventListener("click", function(){
    ShowClass.classList.toggle("showsearch");
});

TClose.addEventListener("click", function(){
    ShowClass.classList.remove("showsearch");
});


//Show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".page-single");

dptButton.addEventListener("click", function(){
    dptClass.classList.toggle("showdpt");
});


// console.log("script running....");
if(screen.width<1058){
// if(window.innerWidth<1058){
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    setTimeout(() => {   
        document.querySelector(".ham").style.visibility = "visible";
    }, 300);
    document.querySelector(".cross").style.visibility = "hidden";
});

document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  setTimeout(() => {   
    document.querySelector(".cross").style.visibility = "visible";
}, 300);
  document.querySelector(".ham").style.visibility = "hidden";
});
}

else{
document.querySelector(".sidebar").classList.toggle("sidebarGo");
document.querySelector(".cross").style.visibility="visible";
document.querySelector(".ham").style.visibility = "hidden"

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    setTimeout(() => {   
    document.querySelector(".ham").style.visibility = "visible";
    }, 300);
    document.querySelector(".cross").style.visibility = "hidden";
});

document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  setTimeout(() => {   
    document.querySelector(".cross").style.visibility = "visible";
}, 300);
  document.querySelector(".ham").style.visibility = "hidden";
});
}

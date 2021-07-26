let up =document.querySelector(".UP");
window.onscroll=()=>{
  if (this.scrollY >= 1000) {
      up.classList.add("show");
  } else {
      up.classList.remove("show");
  }
}
up.onclick=()=>{
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })  
}


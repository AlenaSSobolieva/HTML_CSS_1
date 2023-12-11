const btns = document.querySelectorAll(".btn");
const info = document.querySelectorAll(".more__info");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".callback-form");

// console.log(overlay);
// console.dir(overlay);

btns.forEach(function(btn){
  btn.addEventListener("click", function(){
    overlay.style.display = 'flex';
    // body.style.overflow = 'hidden';
  })
})

info.forEach(function (more__info) {
  more__info.addEventListener("click", function () {
    overlay.style.display = "flex";
  });
});

form.addEventListener('click', function (e) {
  e.stopPropagation()
})

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});
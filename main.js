var btnElement = document.getElementsByClassName("btn");
var activeClass = document.getElementsByClassName("active");
var demoElement = document.getElementById("demo");
for (let i = 0; i < btnElement.length; i++) {
  btnElement[i].addEventListener("click", (e) => {
    if (activeClass.length == 0) {
      e.target.classList.add("active");
      demoElement.innerHTML = "your selected number is " + e.target.innerHTML;
    } else {
      activeClass[0].classList.remove("active");
      e.target.classList.add("active");
      demoElement.innerHTML = "your selected number is " + e.target.innerHTML;
    }
  });
}

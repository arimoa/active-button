const btnElement = document.getElementsByClassName("btn");
const activeClass = document.getElementsByClassName("active");
const demoElement = document.getElementById("demo");
for (let i = 0; i < btnElement.length; i++) {
  btnElement[i].addEventListener("click", (e) => {
    if (activeClass.length == 0) {
      e.target.classList.add("active");
      demoElement.innerHTML = "Your selected number is " + e.target.innerHTML;
    } else {
      activeClass[0].classList.remove("active");
      e.target.classList.add("active");
      demoElement.innerHTML = "Your selected number is " + e.target.innerHTML;
    }
  });
}

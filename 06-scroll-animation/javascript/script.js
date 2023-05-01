console.log("test");
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(`trigger Bottom: ${triggerBottom}`)

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

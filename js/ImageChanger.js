var images = [];
var imagesSelectors = [];
var currentImageIndex = 0;
var timer = 0;
var imagesChangersContainer = document.getElementById("imagesChangersContainer");
var timerIsOff = true;

function changeVisibility(element) {
  element.classList.toggle("imagesChangerVisible");
}

function changeSelectorBackground(element) {
  element.classList.toggle("imageChangersSelectorChecked");
}

function changer() {
  if (timerIsOff == false) {
      changeVisibility(images[currentImageIndex]);
      changeSelectorBackground(imagesSelectors[currentImageIndex]);
      currentImageIndex = (currentImageIndex != images.length - 1) ? (currentImageIndex + 1) : 0;
      console.log(currentImageIndex);
      changeVisibility(images[currentImageIndex]);
      changeSelectorBackground(imagesSelectors[currentImageIndex]);
    }
}

function timerOn() {
  timer = setInterval(changer, 5000);
  console.log("Timer is on");
  timerIsOff = false;
}

function timerOff() {
  clearInterval(timer);
  console.log("Timer is off");
  timerIsOff = true;
}

function handlerMouseDownEvent(event) {
  if (event.target.tagName == "IMG") timerOff();
}

function handlerMouseUpEvent(event) {
  if (event.target.tagName == "IMG") timerOn();
}

function handlerMouseOut(event) {
  console.log("Mouse out");
  if (timerIsOff) {
    if (event.target.tagName == "IMG") timerOn();
    timerOn();
  }
}

images = document.getElementsByClassName("imagesChanger");
images = Array.from(images);
imagesSelectors = document.getElementsByClassName("imageChangersSelectorItem");
imagesSelectors = Array.from(imagesSelectors);
timerOn();
imagesChangersContainer.addEventListener("mousedown", handlerMouseDownEvent);
imagesChangersContainer.addEventListener("mouseup", handlerMouseUpEvent);
imagesChangersContainer.addEventListener("mouseout", handlerMouseOut);

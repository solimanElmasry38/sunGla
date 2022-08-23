let imgArr = Array.from(document.getElementsByClassName("slide")),
  imgArrLen = imgArr.length,
  currentImg = 1,
  leftBt = document.getElementById("lb"),
  rightBt = document.getElementById("rb");

checker();

leftBt.onclick = () => {
  if (leftBt.classList.contains("dis")) {
    console.log("dis");
  } else {
    currentImg--;
    checker();
  }
};

rightBt.onclick = () => {
  if (rightBt.classList.contains("dis")) {
    console.log("dis");
  } else {
    currentImg++;
    checker();
  }
};

function checker() {
  remove();
  imgArr[currentImg - 1].classList.add("active");

  currentImg == 1
    ? leftBt.classList.add("dis")
    : leftBt.classList.remove("dis");

  currentImg == imgArrLen
    ? rightBt.classList.add("dis")
    : rightBt.classList.remove("dis");
}

function remove() {
  for (let i = 0; i < imgArrLen; i++) {
    imgArr[i].classList.remove("active");
  }
}

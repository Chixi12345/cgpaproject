"use strict";
// let getSelectValue;
const ndOptions = document.querySelector(".nd1");
const hndOptions = document.querySelector(".hnd1");
const ndOptionsLay = document.querySelector(".ndoptionslay");
const hndOptionsLay = document.querySelector(".hndoptionslay");
const ndInputOne = document.querySelector(".num1");
const ndInputTwo = document.querySelector(".num2");
const ndInputThree = document.querySelector(".num3");
const ndInputFour = document.querySelector(".num4");
const ndInputFive = document.querySelector(".num5");
const ndInputSix = document.querySelector(".num6");
const hndInputOne = document.querySelector(".hnum1");
const hndInputTwo = document.querySelector(".hnum2");
const hndInputThree = document.querySelector(".hnum3");
const hndInputFour = document.querySelector(".hnum4");
const hndInputFive = document.querySelector(".hnum5");
const hndInputSix = document.querySelector(".hnum6");
const colorButton = document.querySelector(".colorbutton");
const colorButton1 = document.querySelector(".colorbutton1");

const ndFirstGpa = document.querySelector(".ndfirstgpa1");
const ndSecondGpa = document.querySelector(".ndsecondgpa");
const ndThirdGpa = document.querySelector(".ndthirdgpa");
const ndForthGpa = document.querySelector(".ndforthgpa");
const ndFifthGpa = document.querySelector(".ndfifthgpa");
const ndSixthGpa = document.querySelector(".ndsixthgpa");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
const hndForm = document.querySelector(".hndform");
const ndForm = document.querySelector(".ndform");
const yabatechLogo = document.querySelector(".yabatech-logo");
const selectSchool = document.querySelector(".select-school");
const polytechnics = document.querySelector(".polytechnics");

// const ndSecondGpaValue = Number(document.querySelector(".ndsecondgpa2").value);
const getSelectValue = document.querySelector(".inputtype");

selectSchool.addEventListener("change", (event) => {
  if (selectSchool.value === "yabatech") {
    yabatechLogo.classList.remove("hidden");
    polytechnics.classList.remove("hidden");
  }

  if (selectSchool.value === "unilag") {
    yabatechLogo.classList.add("hidden");
    polytechnics.classList.add("hidden");
  }

  if (selectSchool.value === "ui") {
    yabatechLogo.classList.add("hidden");
    polytechnics.classList.add("hidden");
  }
});

btnOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);

// modal.addEventListener('click', closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
getSelectValue.addEventListener("change", (event) => {
  if (getSelectValue.value === "0") {
    ndOptionsLay.classList.remove("hidden");
    hndInputOne.classList.add("hidden");
    hndInputTwo.classList.add("hidden");
    hndInputThree.classList.add("hidden");
    hndInputFour.classList.add("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    colorButton1.classList.add("hidden");
  } else {
    ndOptionsLay.classList.add("hidden");
  }

  if (getSelectValue.value === "1") {
    hndOptionsLay.classList.remove("hidden");
    ndInputOne.classList.add("hidden");
    ndInputTwo.classList.add("hidden");
    ndInputThree.classList.add("hidden");
    ndInputFour.classList.add("hidden");
    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
    colorButton.classList.add("hidden");
    // ndForm.classList.add('hidden')
  } else {
    hndOptionsLay.classList.add("hidden");
  }
});

const getSelectValueOne = document.querySelector(".inputtype--one");
getSelectValueOne.addEventListener("change", (event) => {
  if (getSelectValueOne.value === "empty--value") {
    ndInputOne.classList.add("hidden");
    ndInputTwo.classList.add("hidden");
    ndInputThree.classList.add("hidden");
    ndInputFour.classList.add("hidden");
    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
    colorButton.classList.add("hidden");
  }
  if (getSelectValueOne.value === "nd1first") {
    ndInputOne.classList.remove("hidden");
    colorButton.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    ndInputTwo.classList.add("hidden");
    ndInputThree.classList.add("hidden");
    ndInputFour.classList.add("hidden");
    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
    // }
  }
  if (getSelectValueOne.value === "nd1second") {
    ndInputOne.classList.remove("hidden");
    ndInputTwo.classList.remove("hidden");
    colorButton.classList.remove("hidden");
    // } else {
    // ndInputTwo.classList.add("hidden");
    ndInputThree.classList.add("hidden");
    ndInputFour.classList.add("hidden");
    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
  }
  if (getSelectValueOne.value === "nd2first") {
    ndInputOne.classList.remove("hidden");
    ndInputTwo.classList.remove("hidden");
    ndInputThree.classList.remove("hidden");
    colorButton.classList.remove("hidden");
    // } else {
    // ndInputTwo.classList.add("hidden");
    // ndInputThree.classList.add("hidden");
    ndInputFour.classList.add("hidden");
    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
  }
  if (getSelectValueOne.value === "nd2second") {
    ndInputOne.classList.remove("hidden");
    ndInputTwo.classList.remove("hidden");
    ndInputThree.classList.remove("hidden");
    ndInputFour.classList.remove("hidden");
    colorButton.classList.remove("hidden");
    // } else {
    // ndInputTwo.classList.add("hidden");
    // ndInputThree.classList.add("hidden");

    ndInputFive.classList.add("hidden");
    ndInputSix.classList.add("hidden");
  }
  if (getSelectValueOne.value === "nd3first") {
    ndInputOne.classList.remove("hidden");
    ndInputTwo.classList.remove("hidden");
    ndInputThree.classList.remove("hidden");
    ndInputFour.classList.remove("hidden");
    ndInputFive.classList.remove("hidden");
    colorButton.classList.remove("hidden");
    // } else {
    // ndInputTwo.classList.add("hidden");
    // ndInputThree.classList.add("hidden");

    ndInputSix.classList.add("hidden");
  }
  if (getSelectValueOne.value === "nd3second") {
    ndInputOne.classList.remove("hidden");
    ndInputTwo.classList.remove("hidden");
    ndInputThree.classList.remove("hidden");
    ndInputFour.classList.remove("hidden");
    ndInputFive.classList.remove("hidden");
    ndInputSix.classList.remove("hidden");
    colorButton.classList.remove("hidden");
  }
  // else {
  //   // ndInputTwo.classList.add("hidden");
  //   // ndInputThree.classList.add("hidden");
  // }
});

const getSelectValueTwo = document.querySelector(".inputtype--two");
getSelectValueTwo.addEventListener("change", (event) => {
  if (getSelectValueTwo.value === "empty--value2") {
    hndInputOne.classList.add("hidden");
    hndInputTwo.classList.add("hidden");
    hndInputThree.classList.add("hidden");
    hndInputFour.classList.add("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    colorButton1.classList.add("hidden");
  }
  if (getSelectValueTwo.value === "hnd1first") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.add("hidden");
    hndInputThree.classList.add("hidden");
    hndInputFour.classList.add("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    // }
  }

  if (getSelectValueTwo.value === "hnd1second") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.remove("hidden");
    hndInputThree.classList.add("hidden");
    hndInputFour.classList.add("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    // }
  }

  if (getSelectValueTwo.value === "hnd2first") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.remove("hidden");
    hndInputThree.classList.remove("hidden");
    hndInputFour.classList.add("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    // }
  }
  if (getSelectValueTwo.value === "hnd2second") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.remove("hidden");
    hndInputThree.classList.remove("hidden");
    hndInputFour.classList.remove("hidden");
    hndInputFive.classList.add("hidden");
    hndInputSix.classList.add("hidden");
    // }
  }

  if (getSelectValueTwo.value === "hnd3first") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.remove("hidden");
    hndInputThree.classList.remove("hidden");
    hndInputFour.classList.remove("hidden");
    hndInputFive.classList.remove("hidden");
    hndInputSix.classList.add("hidden");
    // }
  }

  if (getSelectValueTwo.value === "hnd3second") {
    hndInputOne.classList.remove("hidden");
    colorButton1.classList.remove("hidden");

    // else {
    //   console.log("i am ");
    hndInputTwo.classList.remove("hidden");
    hndInputThree.classList.remove("hidden");
    hndInputFour.classList.remove("hidden");
    hndInputFive.classList.remove("hidden");
    hndInputSix.classList.remove("hidden");
    // }
  }
});

// let additionw = ndSecondGpaValue + ndFirstGpa.value;
const displayCgpa = function (message) {
  return (document.querySelector(".result").textContent = message);
};
colorButton.addEventListener("click", function () {
  if (getSelectValueOne.value === "nd1first") {
    displayCgpa(`${ndFirstGpa.value / 1}`);
  } else if (
    getSelectValueOne.value === "nd1first" ||
    getSelectValueOne.value === "nd1second"
  ) {
    displayCgpa(
      `${(Number(ndFirstGpa.value) + Number(ndSecondGpa.value)) / 2}`
    );
  } else if (
    getSelectValueOne.value === "nd1first" ||
    getSelectValueOne.value === "nd1second" ||
    getSelectValueOne.value === "nd2first"
  ) {
    displayCgpa(
      `${
        (Number(ndFirstGpa.value) +
          Number(ndSecondGpa.value) +
          Number(ndThirdGpa.value)) /
        3
      }`
    );
  } else if (
    getSelectValueOne.value === "nd1first" ||
    getSelectValueOne.value === "nd1second" ||
    getSelectValueOne.value === "nd2first" ||
    getSelectValueOne.value === "nd2second"
  ) {
    displayCgpa(
      `${
        (Number(ndFirstGpa.value) +
          Number(ndSecondGpa.value) +
          Number(ndThirdGpa.value) +
          Number(ndForthGpa.value)) /
        4
      }`
    );
  } else if (
    getSelectValueOne.value === "nd1first" ||
    getSelectValueOne.value === "nd1second" ||
    getSelectValueOne.value === "nd2first" ||
    getSelectValueOne.value === "nd2second" ||
    getSelectValueOne.value === "nd3first"
  ) {
    displayCgpa(
      `${
        (Number(ndFirstGpa.value) +
          Number(ndSecondGpa.value) +
          Number(ndThirdGpa.value) +
          Number(ndForthGpa.value) +
          Number(ndFifthGpa.value)) /
        5
      }`
    );
  } else if (
    getSelectValueOne.value === "nd1first" ||
    getSelectValueOne.value === "nd1second" ||
    getSelectValueOne.value === "nd2first" ||
    getSelectValueOne.value === "nd2second" ||
    getSelectValueOne.value === "nd3first" ||
    getSelectValueOne.value === "nd3second"
  ) {
    displayCgpa(
      `${
        (Number(ndFirstGpa.value) +
          Number(ndSecondGpa.value) +
          Number(ndThirdGpa.value) +
          Number(ndForthGpa.value) +
          Number(ndFifthGpa.value) +
          Number(ndSixthGpa.value)) /
        6
      }`
    );
  }
});

// cgpaCalc();

// Calculation for HND
colorButton1.addEventListener("click", function () {
  if (getSelectValueTwo.value === "hnd1first") {
    displayCgpa(`${hndInputOne.value / 1}`);
  } else if (
    getSelectValueTwo.value === "hnd1first" ||
    getSelectValueTwo.value === "hnd1second"
  ) {
    displayCgpa(
      `${(Number(hndInputOne.value) + Number(hndInputTwo.value)) / 2}`
    );
  } else if (
    getSelectValueTwo.value === "hnd1first" ||
    getSelectValueTwo.value === "hnd1second" ||
    getSelectValueTwo.value === "hnd2first"
  ) {
    displayCgpa(
      `${
        (Number(hndInputOne.value) +
          Number(hndInputTwo.value) +
          Number(hndInputThree.value)) /
        3
      }`
    );
  } else if (
    getSelectValueTwo.value === "hnd1first" ||
    getSelectValueTwo.value === "hnd1second" ||
    getSelectValueTwo.value === "hnd2first" ||
    getSelectValueTwo.value === "hnd2second"
  ) {
    displayCgpa(
      `${
        (Number(hndInputOne.value) +
          Number(hndInputTwo.value) +
          Number(hndInputThree.value) +
          Number(hndInputFour.value)) /
        4
      }`
    );
  } else if (
    getSelectValueTwo.value === "hnd1first" ||
    getSelectValueTwo.value === "hnd1second" ||
    getSelectValueTwo.value === "hnd2first" ||
    getSelectValueTwo.value === "hnd2second" ||
    getSelectValueTwo.value === "hnd3first"
  ) {
    displayCgpa(
      `${
        (Number(hndInputOne.value) +
          Number(hndInputTwo.value) +
          Number(hndInputThree.value) +
          Number(hndInputFour.value) +
          Number(hndInputFive.value)) /
        5
      }`
    );
  } else if (
    getSelectValueTwo.value === "hnd1first" ||
    getSelectValueTwo.value === "hnd1second" ||
    getSelectValueTwo.value === "hnd2first" ||
    getSelectValueTwo.value === "hnd2second" ||
    getSelectValueTwo.value === "hnd3first" ||
    getSelectValueTwo.value === "hnd3second"
  ) {
    displayCgpa(
      `${
        (Number(hndInputOne.value) +
          Number(hndInputTwo.value) +
          Number(hndInputThree.value) +
          Number(hndInputFour.value) +
          Number(hndInputFive.value) +
          Number(hndInputSix.value)) /
        6
      }`
    );
  }
});

const changeButton = document.getElementById("change-button");
const infoButton = document.getElementById("info-button");
const demoDiv = document.getElementById("js-demo-div");

let changeClicked = false;
let numberOfClicks = 0;

changeButton.addEventListener("click", function () {
  if (!changeClicked) {
    demoDiv.style.cssText = `
      padding: 1rem;
      background: #43a6dd;
      text-align: justify;
      transition: all 2s;
    `;
  } else {
    demoDiv.style.cssText = `
      padding: 0;
      background: none;
      text-align: left;
      transition: all 2s;
    `;
  }
  changeClicked = !changeClicked;
});

infoButton.addEventListener("click", function () {
  alert(`
    Clicks: \t\t\t ${(numberOfClicks += 1)}

    Latest click: \t\t ${new Date(Date.now()).toUTCString()}

    Platform: \t\t ${navigator.oscpu}

    Screen width: \t ${screen.width}px

    Window width: \t ${window.innerWidth}px
  `);
});

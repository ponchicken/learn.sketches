const notes = {
  do: document.getElementById("note_do"),
  re: document.getElementById("note_re"),
  mi: document.getElementById("note_mi"),
  fa: document.getElementById("note_fa"),
  sol: document.getElementById("note_sol"),
  lya: document.getElementById("note_lya"),
  si: document.getElementById("note_si")
};

let buttons = document.querySelector(".buttons-piano");

const recButton = document.getElementById("rec");
//const playButton = document.getElementById("play");
//const stopButton = document.getElementById("stop");
const playlistEl = document.querySelector(".control-playlist");

recButton.addEventListener("click", recordMusic);
//playButton.addEventListener("click", playMusic);
//stopButton.addEventListener("click", stopMusic);

let isRec = false;
let buttonIsActive = false;

const storagePlaylist = localStorage.getItem("playlist");
let playlist = storagePlaylist ? JSON.parse(storagePlaylist) : [];

function displayPlaylist() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
  playlistEl.innerHTML = "";

  for (let melody of playlist) {
    const el = document.createElement("li");
    el.textContent = melody;
    playlistEl.appendChild(el);

    const buttonplay = document.createElement("button");
    buttonplay.textContent = ">";
    buttonplay.classList.add("ButtonPlay");
    el.appendChild(buttonplay);
  }
}

function pause(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

playlistEl.addEventListener("click", playStopButton);

function playStopButton(e) {
  if (e.target.classList.contains("ButtonPlay")) {
    let Mass = e.target.previousSibling;
    let arr1 = Mass.textContent.split(",");
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      console.log(arr1[i]);

      if (arr1[i] == "do") {
        notes["do"].play();
        pause(200);
      } else if (arr1[i] == "re") {
        notes["re"].play();
        pause(200);
      } else if (arr1[i] == "mi") {
        notes["mi"].play();
        pause(200);
      } else if (arr1[i] == "fa") {
        notes["fa"].play();
        pause(200);
      } else if (arr1[i] == "sol") {
        notes["sol"].play();
        pause(200);
      } else if (arr1[i] == "lya") {
        notes["lya"].play();
        pause(200);
      } else if (arr1[i] == "si") {
        notes["si"].play();
        pause(200);
      }
    }
  }
}
// buttonIsActive = !buttonIsActive;
// if (buttonIsActive) {
//   //почему не работает?
//   // buttonplay.textContent = "||";
//   // console.log(buttonplay.textContent);
//   // e.target.playlist.contains("ButtonPlay");
//   // console.log();
// } else {
//   // buttonplay.textContent = ">";
// }
displayPlaylist();

function recordMusic() {
  console.log("REC");
  isRec = !isRec;
  if (isRec) {
    recButton.style.backgroundColor = "rgb(172, 49, 90)";
    playlist.push([]);
  } else {
    recButton.style.backgroundColor = "#ddd";
    displayPlaylist();
  }
}

//function playMusic() {
//console.log("PLAY");}

//function stopMusic() {
//console.log("STOP");}

buttons.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.dataset.id);
    notes[e.target.dataset.id].play();

    if (isRec) {
      playlist[playlist.length - 1].push(e.target.dataset.id);
    }

    console.log(playlist);
  }
});

function some(key) {
  switch (key) {
    case "a":
      return notes["do"].play();
    case "s":
      return notes["re"].play();
    case "d":
      return notes["mi"].play();
    case "f":
      return notes["fa"].play();
    case "g":
      return notes["sol"].play();
    case "h":
      return notes["lya"].play();
    case "j":
      return notes["si"].play();
  }
}

window.addEventListener("keydown", function(event) {
  console.log(event);

  console.log(some(event.key));
});

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

playlistEl.addEventListener("click", playStopButton);

function playStopButton(e) {
  if (e.target.classList.contains("ButtonPlay")) {
    console.log(e.target.previousSibling);
    let Mass = e.target.previousSibling;
    for (let i = 0; i < Mass.length; i++) {
      console.log(Mass[i]);
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
    recButton.style.backgroundColor = "red";
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

const notes = {
  do: document.getElementById("note_do"),
  re: document.getElementById("note_re"),
  mi: document.getElementById("note_mi"),
  fa: document.getElementById("note_fa"),
  sol: document.getElementById("note_sol"),
  lya: document.getElementById("note_lya"),
  si: document.getElementById("note_si")
};

// const buttonPlayDo = document.querySelector('[data-id]="do"');
// const buttonPlayRe = document.querySelector("re");
// const buttonPlayMi = document.querySelector("mi");
// const buttonPlayFa = document.querySelector("fa");
// const buttonPlaySol = document.querySelector("sol");
// const buttonPlayLya = document.querySelector("lya");
// const buttonPlaySi = document.querySelector("si");

let buttons = document.querySelector(".buttons-piano");

buttons.addEventListener("click", e => {
  //console.log(e.target)
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.dataset.id);
    // document.getElementById(`note_${e.target.dataset.id}`).play()
    notes[e.target.dataset.id].play();
  }
  //   let resultSound = buttonPlayDo
  //     ? noteDo.play()
  //     : buttonPlayRe
  //     ? noteRe.play()
  //     : buttonPlayMi
  //     ? noteMi.play()
  //     : buttonPlayFa
  //     ? noteFa.play()
  //     : buttonPlaySol
  //     ? noteSol.play()
  //     : buttonPlayLya
  //     ? noteLya.play()
  //     : buttonPlaySi
  //     ? noteSi.play()
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

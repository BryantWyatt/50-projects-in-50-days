const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    const song = document.getElementById(sound);
    song.play();

  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach(sounds => {
    const song = document.getElementById(sounds);
    song.pause();
    song.currentTime = 0;
  })
}

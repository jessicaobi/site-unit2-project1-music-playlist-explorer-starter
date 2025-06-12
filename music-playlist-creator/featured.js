//Added stuff from Devarsh

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-container");
});

fetch("data.json").then((response) => {
  if (!response.ok) {
    throw new Error("Network error");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("featured-container");
    const featuredPlaylist = document.getElementById("featured-playlist");
    const shuffleBtn = featuredPlaylist.querySelector(".shuffle-button");
  const featuredArt = document.getElementById("featured-art");
  const featuredName = document.getElementById("featured-name");
  const featuredAuthor = document.getElementById("featured-author");
  const featuredSongs = document.getElementById("featured-songs");

  // 1) Load playlists via fetch().then() chaining
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
    console.log(data.playlists);
    let randomPlaylist = featuredPlaylistFunction(data.playlists);
      openModal(randomPlaylist);
    })
    .catch((err) => {
      console.error("Failed to load playlists:", err);
    });

  // 2) Create each card
  function createStaticModal(pl) {
    const featuredTile = document.createElement("div");
    featuredTile.className = "playlist";
    featuredTile.innerHTML = `
          <img src="${pl.playlist_art}" alt="${pl.playlist_name}">
          <h3>${pl.playlist_name}</h3>
          <p>By ${pl.playlist_author}</p>
          <span class="heart-icon"><i class="fa-solid fa-heart"></i></span>
          <span class="like-count">${pl.likes}</span>
        `;

    // toggle like/unlike
    const heart = featuredTile.querySelector(".heart-icon");
    const count = featuredTile.querySelector(".like-count");
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      let n = parseInt(count.textContent, 10);
      if (heart.classList.contains("liked")) {
        heart.classList.remove("liked");
        count.textContent = --n;
      } else {
        heart.classList.add("liked");
        count.textContent = ++n;
      }
    });

    container.appendChild(featuredTile);
  }

  let currentPlaylist = null;
  // 3) Populate and show modal
  function openModal(pl) {
    console.log(pl);
    console.log("are we getting here");
    featuredArt.src = pl.playlist_art;
    featuredName.textContent = pl.playlist_name;
    featuredAuthor.textContent = "By " + pl.playlist_author;
    featuredSongs.innerHTML = "";
    pl.songs.forEach((s) => {
      const li = document.createElement("li");
      li.className = "featured-song-item";
      li.innerHTML = `
          <img src="${s.cover}" alt="${s.title} cover" class="song-cover">
          <div class="song-details">
            <span class="song-title">${s.title}</span>
            <span class="song-artist">${s.artist}</span>
            <span class="song-duration">${s.duration}</span>
          </div>
        `;
      featuredSongs.appendChild(li);
      currentPlaylist = pl;
    });
  }

  function shuffledModal(pl2) {
    pl2 = shuffleSongs(pl2.songs);
    console.log(pl2);
    featuredSongs.innerHTML = "";
    pl2.forEach((s) => {
      const li = document.createElement("li");
      li.className = "featured-song-item";
      li.innerHTML = `
              <img src="${s.cover}" alt="${s.title} cover" class="song-cover">
              <div class="song-details">
                <span class="song-title">${s.title}</span>
                <span class="song-artist">${s.artist}</span>
                <span class="song-duration">${s.duration}</span>
              </div>
            `;
      featuredSongs.appendChild(li);
    });
  }

  function shuffleSongs(songsArray) {
    for (let i = songsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = songsArray[i];
      songsArray[i] = songsArray[j];
      songsArray[j] = temp;
    }
    console.log(songsArray);
    return songsArray;
  }

  function featuredPlaylistFunction(pl) {

    const randomNum = Math.floor(Math.random() * pl.length);
    const featured = pl[randomNum];
    openModal(featured)

}

  // 4) Close handlers
  shuffleBtn.addEventListener("click", () => {
    console.log("are we getting here");
    console.log(currentPlaylist.songs);
    shuffledModal(currentPlaylist);
  });



});

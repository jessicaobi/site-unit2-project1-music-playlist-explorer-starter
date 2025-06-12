// Main featured playlist logic

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-container");
  const featuredPlaylist = document.getElementById("featured-playlist");
  const shuffleBtn = featuredPlaylist.querySelector(".shuffle-button");
  const featuredArt = document.getElementById("featured-art");
  const featuredName = document.getElementById("featured-name");
  const featuredAuthor = document.getElementById("featured-author");
  const featuredSongs = document.getElementById("featured-songs");
  let currentPlaylist = null;

  // Load playlists
  fetch("data.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network error: " + response.status);
      return response.json();
    })
    .then((data) => {
      let randomPlaylist = pickRandomPlaylist(data.playlists);
      openModal(randomPlaylist);
    })
    .catch((err) => {
      console.error("Failed to load playlists:", err);
    });

  // Show featured playlist details
  function openModal(pl) {
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
    });
    currentPlaylist = pl;
  }

  // Shuffle featured playlist songs
  function shuffledModal(pl) {
    const shuffled = shuffleSongs([...pl.songs]);
    featuredSongs.innerHTML = "";
    shuffled.forEach((s) => {
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

  // Fisher-Yates shuffle
  function shuffleSongs(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Pick a random playlist
  function pickRandomPlaylist(playlists) {
    const randomNum = Math.floor(Math.random() * playlists.length);
    return playlists[randomNum];
  }

  // Shuffle button handler
  shuffleBtn.addEventListener("click", () => {
    if (currentPlaylist) shuffledModal(currentPlaylist);
  });
});

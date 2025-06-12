// Main playlist explorer logic

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("playlist-container");
  const modal = document.getElementById("playlist-modal");
  const shuffleBtn = modal.querySelector(".shuffle-button");
  const closeBtn = modal.querySelector(".close-button");
  const modalArt = document.getElementById("modal-art");
  const modalName = document.getElementById("modal-name");
  const modalAuthor = document.getElementById("modal-author");
  const modalSongs = document.getElementById("modal-songs");
  let currentPlaylist = null;

  // Load playlists
  fetch("data.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network error: " + response.status);
      return response.json();
    })
    .then((data) => {
      data.playlists.forEach(createPlaylistTile);
    })
    .catch((err) => {
      console.error("Failed to load playlists:", err);
    });

  // Create playlist card
  function createPlaylistTile(pl) {
    const tile = document.createElement("div");
    tile.className = "playlist";
    tile.innerHTML = `
      <img src="${pl.playlist_art}" alt="${pl.playlist_name}">
      <h3>${pl.playlist_name}</h3>
      <p>By ${pl.playlist_author}</p>
      <span class="heart-icon"><i class="fa-solid fa-heart"></i></span>
      <span class="like-count">${pl.likes}</span>
      <span class="delete-icon"><i class="fa-solid fa-trash"></i></span>
    `;
    tile.addEventListener("click", (e) => {
      if (!e.target.classList.contains("heart-icon")) openModal(pl);
    });
    // Like/unlike
    const heart = tile.querySelector(".heart-icon");
    const count = tile.querySelector(".like-count");
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
    // Delete
    const deleteBtn = tile.querySelector(".delete-icon");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tile.remove();
    });
    container.appendChild(tile);
  }

  // Show modal with playlist details
  function openModal(pl) {
    modalArt.src = pl.playlist_art;
    modalName.textContent = pl.playlist_name;
    modalAuthor.textContent = "By " + pl.playlist_author;
    modalSongs.innerHTML = "";
    pl.songs.forEach((s) => {
      const li = document.createElement("li");
      li.className = "modal-song-item";
      li.innerHTML = `
        <img src="${s.cover}" alt="${s.title} cover" class="song-cover">
        <div class="song-details">
          <span class="song-title">${s.title}</span>
          <span class="song-artist">${s.artist}</span>
          <span class="song-duration">${s.duration}</span>
        </div>
      `;
      modalSongs.appendChild(li);
    });
    currentPlaylist = pl;
    modal.classList.add("show");
  }

  // Shuffle modal songs
  function shuffledModal(pl) {
    const shuffled = shuffleSongs([...pl.songs]);
    modalSongs.innerHTML = "";
    shuffled.forEach((s) => {
      const li = document.createElement("li");
      li.className = "modal-song-item";
      li.innerHTML = `
        <img src="${s.cover}" alt="${s.title} cover" class="song-cover">
        <div class="song-details">
          <span class="song-title">${s.title}</span>
          <span class="song-artist">${s.artist}</span>
          <span class="song-duration">${s.duration}</span>
        </div>
      `;
      modalSongs.appendChild(li);
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

  // Modal close handlers
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
  shuffleBtn.addEventListener("click", () => {
    if (currentPlaylist) shuffledModal(currentPlaylist);
  });
});

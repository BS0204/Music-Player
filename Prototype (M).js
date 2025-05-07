const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("playPause");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const progressBar = document.getElementById("progressBar");
    const songTitle = document.getElementById("song-title");

    const menuButton = document.getElementById("menu");
    const songListDiv = document.getElementById("songList");
    const songItems = document.getElementById("songItems");

    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    const favoriteButton = document.getElementById("favorite");

    const tracks = [
      {
        title: "Suzume (Hindi Cover)",
        src: "SONGS/Suzume No Tojimari Nanoka Hara (Hindi).mp4",
        cover: "https://c.saavncdn.com/184/Suzume-Unknown-2022-20220926025455-500x500.jpg",
        favorite: false
      },
      {
        title: "Dandelions",
        src: "SONGS/Ruth B. - Dandelions (Audio).mp4",
        cover: "https://i.scdn.co/image/ab67616d0000b27397e971f3e53475091dc8d707",
         favorite: false
      },
      {
        title: "Maan Meri Jaan",
        src: "https://pagalnew.com/320-download/35703",
        cover: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg",
        favorite: false
      },
      {
        title: "Nainowale Ne",
        src: "https://pagalnew.com/320-download/2848",
        cover: "https://c.saavncdn.com/759/Naino-Waale-Acoustic-From-T-Series-Acoustics--Hindi-2018-20181107024539-500x500.jpg",
        favorite: false
      },
      {
        title: "Tere Ishq Mein",
        src: "https://hindi2.djpunjab.app/load-hindi/y8QhG5Gk14Y-4L3xL5dwTg==/Tere%20Ishq%20Mein.mp3",
        cover: "https://i.ytimg.com/vi/tqt8AUogCvM/hqdefault.jpg",
        favorite: false
      },
      {
        title: "Husn",
        src: "https://pendujatt.com.se/files/387018.mp3",
        cover: "https://a10.gaanacdn.com/gn_img/albums/21GWwrR3pk/GWwABAvQKp/size_m.jpg",
        favorite: false
      },
      {
        title: "Pooranviram",
        src: "https://pagalfree.com/musics/128-Pooranviram%20-%20Akki%20Aryan%20128%20Kbps.mp3",
        cover: "https://c.saavncdn.com/066/Pooranviram-Haryanvi-2020-20240704034859-500x500.jpg",
        favorite: false
      },
      {
        title: "Rajputana",
        src: "https://raag.fm/files/mp3/128/Hindi-Singles/1567059/Rajput%20-%20(Raag.Fm).mp3",
        cover: "https://w0.peakpx.com/wallpaper/223/478/HD-wallpaper-maharana-prataap-king-maharana-pratap-mewad-king-rajasthan-rajput-rajputana-warrior.jpg",
        favorite: false
      },
      {
        title: "Tohre Me Base Raja",
        src: "https://pagalnew.com/320-download/45431",
        cover: "https://c.saavncdn.com/723/Tohre-Me-Base-Raja-Hindi-2023-20240117133927-500x500.jpg",
        favorite: false
      },
      {
        title: "Deewane Hum Nahi Hote",
        src: "https://dd8wu6t0ikyje.cloudfront.net/s519pw%2Ffile%2Fbd2872c33318eb9b426f70c78a96b8f0_afb09ee49ee759e0a6cc4ab332556605.mp4?response-content-disposition=attachment%3Bfilename%3D%22Deewane%20Hum%20Nahi%20Hote.mp4%22%3B&response-content-encoding=binary&Expires=1746647371&Signature=Coq16pp0Fd76wSXAvkfId-ipjC-hMy2wh6oVOHlTMueOS~PeN6ePGWYU6WyPXobfcYDePtq0zbzdP-e1dL6~Hbl2niw9P-6~PAFaTvbCzrnLVTVgyTPjHoS~pqxFwfuzo0Or~E4uUB0zNMtrvICqk-GeWJ8bs4nA7aoOshOW2SpFjEyr-j0KA2IgYztFEnFkuWj6dtEANLjK47kjtXsFHfuTOtJQd3PJ6hRW6hei~P9za1blFE~orLDZYbWlRCz~GpzYJrWMWgLjluKELwty7GtTQ3efm7iJWMOrcCV5UDQ5VIdCR9PDu6NaoLmnT8quaR~B4fVh8191lVZ3aTHqpA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
        cover: "https://raw.githubusercontent.com/BS0204/Music-Player/a3ead5c84e31b11e1de4f7854507f8f5f51fa0cc/WhatsApp%20Image%202025-05-05%20at%2021.27.32_f8f6d597%20(2)%20(2).jpg",
        favorite: false
      }
    ];
1
    let currentTrack = 0;

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    function loadTrack(index) {
      const track = tracks[index];
      audio.src = track.src;
      songTitle.textContent = track.title;
      document.getElementById("coverImage").src = track.cover;
      updateFavoriteButton();
      audio.load();
      audio.play().catch((e) => {
        console.log("Autoplay failed:", e);
      });
      playPauseButton.textContent = "⏸️";
    }

    function renderSongList() {
      songItems.innerHTML = "";
      tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.className = track.favorite ? "favorite" : "";

        const titleSpan = document.createElement("span");
        titleSpan.textContent = track.title;

        const starSpan = document.createElement("span");
        starSpan.className = "star";
        starSpan.innerHTML = track.favorite ? "⭐" : "";

        li.appendChild(titleSpan);
        li.appendChild(starSpan);

        li.addEventListener("click", () => {
          currentTrack = index;
          loadTrack(currentTrack);
          songListDiv.style.display = "none";
        });

        songItems.appendChild(li);
      });
    }

    function updateFavoriteButton() {
      if (tracks[currentTrack].favorite) {
        favoriteButton.textContent = "❤️";
        favoriteButton.classList.add("active");
      } else {
        favoriteButton.textContent = "🤍";
        favoriteButton.classList.remove("active");
      }
      renderSongList(); // update list with new favorite status
    }

    playPauseButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸️";
      } else {
        audio.pause();
        playPauseButton.textContent = "▶️";
      }
    });

    nextButton.addEventListener("click", () => {
      currentTrack = (currentTrack + 1) % tracks.length;
      loadTrack(currentTrack);
    });

    prevButton.addEventListener("click", () => {
      currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
      loadTrack(currentTrack);
    });

    menuButton.addEventListener("click", () => {
      songListDiv.style.display = songListDiv.style.display === "none" ? "block" : "none";
    });

    favoriteButton.addEventListener("click", () => {
      tracks[currentTrack].favorite = !tracks[currentTrack].favorite;
      updateFavoriteButton();
    });

    audio.addEventListener("loadedmetadata", () => {
      durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress || 0;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
      }
    });

    progressBar.addEventListener("input", () => {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // Automatically go to next song after current finishes
    audio.addEventListener("ended", () => {
      currentTrack = (currentTrack + 1) % tracks.length;
      loadTrack(currentTrack);
    });

    // Initialize the player by loading the first track
    renderSongList();
    loadTrack(currentTrack);
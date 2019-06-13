const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.start');
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time button');
    let fakeDuration = 600;


    play.addEventListener('click', () => {
        isPlaying(song);
    });

    const isPlaying = song => {
        if (song.paused) {
            song.play();
            play.src = "./img/pause-icon.png"
        } else {
            song.pause();
            play.src = "./img/play-icon.png"
        }
    };

    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        timeDisplay.textContent = `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./img/play-icon.png"
        }
    }

    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`;
        });
    });
};

app();
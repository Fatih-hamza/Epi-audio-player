// List of audio files
const audioFiles = [
    { title: "Interface 2.1:", src: "EPIs-audios/Interface 2.1.mp3" },
    { title: "Interface 2.11:", src: "EPIs-audios/Interface 2.11.mp3" },
    { title: "Interface 2.18:", src: "EPIs-audios/Interface 2.18.mp3" },
    { title: "Interface 2.21:", src: "EPIs-audios/Interface 2.21.mp3" },
    { title: "Interface 2.26:", src: "EPIs-audios/Interface 2.26.mp3" },
    { title: "Interface 2.29:", src: "EPIs-audios/Interface 2.29.mp3" },
    { title: "Interface 2.31:", src: "EPIs-audios/Interface 2.31.mp3" },
    { title: "Interface 2.34:", src: "EPIs-audios/Interface 2.34.mp3" },
    { title: "Interface 2.36:", src: "EPIs-audios/Interface 2.36.mp3" },
    { title: "Interface 2.39:", src: "EPIs-audios/Interface 2.39.mp3" },
    { title: "Fireworks Sound Effect:", src: "EPIs-audios/fireworks-sound.mp3" },
    { title: "EPI Profile Sound Effect:", src: "EPIs-audios/EPI Profile- sound.mp3" },
    { title: "EPI Credits Sound Effect:", src: "EPIs-audios/EPI Credits sound.mp3" },
    { title: "EPI Cards Sound Effect:", src: "EPIs-audios/EPI Cards- sound.mp3" },
    { title: "EPI Precision Sound Effect:", src: "EPIs-audios/EPI Precision - sound.mp3" }
    
    
    
];

// Function to create audio player
function createAudioPlayer(file) {
    const player = document.createElement('audio');
    player.controls = true;
    player.src = file.src;

    const title = document.createElement('p');
    title.textContent = file.title;

    const container = document.createElement('div');
    container.appendChild(title);
    container.appendChild(player);

    return container;
}

// Display audio files
const audioList = document.getElementById('audio-list');
audioFiles.forEach(file => {
    const player = createAudioPlayer(file);
    audioList.appendChild(player);
});
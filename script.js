// List of audio files
const audioFiles = [
    { title: "Interface 2.1:", src: "EPIs-audios/Interface 2.1.mp3" },
    { title: "Interface 2.11:", src: "EPIs-audios/Interface 2.11.mp3" },
    { title: "Interface 2.18:", src: "EPIs-audios/Interface 2.18.mp3" },
    { title: "Interface 2.21:", src: "EPIs-audios/Interface 2.21.mp3" },
    { title: "Interface 2.26:", src: "EPIs-audios/Interface 2.26.mp3" },
    { title: "Interface 2.28.1:", src: "EPIs-audios/Interface 2.29.mp3" },
    { title: "Interface 2.28.3:", src: "EPIs-audios/Interface 2.31.mp3" },
    { title: "Interface 2.28.6:", src: "EPIs-audios/Interface 2.34.mp3" },
    { title: "Interface 2.28.8:", src: "EPIs-audios/Interface 2.36.mp3" },
    { title: "Interface 2.30:", src: "EPIs-audios/Interface 2.39.mp3" },
    { title: "Fireworks Sound Effect:", src: "EPIs-audios/fireworks-sound.mp3" },
    { title: "EPI Profile Sound Effect:", src: "EPIs-audios/EPI Profile - sound.mp3" },
    { title: "EPI Credits Sound Effect:", src: "EPIs-audios/EPI Credits sound.MP3" },
    { title: "EPI Cards Sound Effect:", src: "EPIs-audios/EPI Cards - sound.mp3" },
    { title: "EPI Precision Sound Effect:", src: "EPIs-audios/EPI Precision - sound.mp3" }
    
    
    
];


// Function to create audio player
function createAudioPlayer(file) {
    const player = document.createElement('audio');
    player.controls = true;
    player.src = file.src;

    const title = document.createElement('p');
    title.textContent = file.title;
    title.className = 'audio-title';

    const container = document.createElement('div');
    container.className = 'audio-container';
    container.appendChild(title);
    container.appendChild(player);

    return container;
}

// Create the ordered list element with class for styling
const orderedList = document.createElement('ol');
orderedList.className = 'alternating-colors';

// Display audio files
const audioList = document.getElementById('audio-list');
audioFiles.forEach(file => {
    const player = createAudioPlayer(file);

    // Create list item and append player container
    const listItem = document.createElement('li');
    listItem.appendChild(player);

    // Append the list item to the ordered list
    orderedList.appendChild(listItem);
});

// Append the ordered list to the audio list container
audioList.appendChild(orderedList);
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', onPlay);

function onPlay() {
  player.on('timeupdate', throttle(saveTimeToStorage, 1000));
}
function saveTimeToStorage(event) {
  // console.log(event.seconds);
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

function getTimeFromStorage() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  //   console.log(currentTime);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

getTimeFromStorage();
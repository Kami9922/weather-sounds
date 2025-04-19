import './index.scss'
import summerSound from '../src/assets/sounds/summer.mp3'
import rainSound from '../src/assets/sounds/rain.mp3'
import winterSound from '../src/assets/sounds/winter.mp3'

const summerAudio = new Audio(summerSound)
const rainAudio = new Audio(rainSound)
const winterAudio = new Audio(winterSound)

let currentAudio = null

function toggleAudio(audio) {
	if (currentAudio && currentAudio !== audio) {
		currentAudio.pause()
		currentAudio.currentTime = 0
	}

	if (audio.paused) {
		audio.play()
	} else {
		audio.pause()
	}

	currentAudio = audio
}

document.getElementById('summer').addEventListener('click', () => {
	toggleAudio(summerAudio)
})

document.getElementById('rain').addEventListener('click', () => {
	toggleAudio(rainAudio)
})

document.getElementById('winter').addEventListener('click', () => {
	toggleAudio(winterAudio)
})

const volumeSlider = document.getElementById('volume-slider')
volumeSlider.addEventListener('input', (e) => {
	const volume = e.target.value
	summerAudio.volume = volume
	rainAudio.volume = volume
	winterAudio.volume = volume
})

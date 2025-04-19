import './index.scss'

import summerSound from '../src/assets/sounds/summer.mp3'
import rainSound from '../src/assets/sounds/rain.mp3'
import winterSound from '../src/assets/sounds/winter.mp3'

import summerBg from '../src/assets/backgrounds/summer-bg.jpg'
import rainyBg from '../src/assets/backgrounds/rainy-bg.jpg'
import winterBg from '../src/assets/backgrounds/winter-bg.jpg'

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

function changeBackground(weatherType) {
	const container = document.querySelector('.container')
	switch (weatherType) {
		case 'summer':
			container.style.backgroundImage = `url(${summerBg})`
			break
		case 'rain':
			container.style.backgroundImage = `url(${rainyBg})`
			break
		case 'winter':
			container.style.backgroundImage = `url(${winterBg})`
			break
		default:
			container.style.backgroundImage = 'none'
	}
}

document.getElementById('summer').addEventListener('click', () => {
	toggleAudio(summerAudio)
	changeBackground('summer')
})

document.getElementById('rain').addEventListener('click', () => {
	toggleAudio(rainAudio)
	changeBackground('rain')
})

document.getElementById('winter').addEventListener('click', () => {
	toggleAudio(winterAudio)
	changeBackground('winter')
})

const volumeSlider = document.getElementById('volume-slider')
volumeSlider.addEventListener('input', (e) => {
	const volume = e.target.value
	summerAudio.volume = volume
	rainAudio.volume = volume
	winterAudio.volume = volume
})

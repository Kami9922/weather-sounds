import './index.scss'

import summerSound from '../src/assets/sounds/summer.mp3'
import rainSound from '../src/assets/sounds/rain.mp3'
import winterSound from '../src/assets/sounds/winter.mp3'

import summerBg from '../src/assets/backgrounds/summer-bg.jpg'
import rainyBg from '../src/assets/backgrounds/rainy-bg.jpg'
import winterBg from '../src/assets/backgrounds/winter-bg.jpg'

const summerAudio: HTMLAudioElement = new Audio(summerSound)
const rainAudio: HTMLAudioElement = new Audio(rainSound)
const winterAudio: HTMLAudioElement = new Audio(winterSound)

let currentAudio: HTMLAudioElement | null = null

type WeatherType = 'summer' | 'rain' | 'winter'

function toggleAudio(audio: HTMLAudioElement): void {
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

function changeBackground(weatherType: WeatherType): void {
	const container: HTMLElement | null = document.querySelector('.container')
	if (!container) return

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

;(document.getElementById('summer') as HTMLElement).addEventListener(
	'click',
	() => {
		toggleAudio(summerAudio)
		changeBackground('summer')
	}
)
;(document.getElementById('rain') as HTMLElement).addEventListener(
	'click',
	() => {
		toggleAudio(rainAudio)
		changeBackground('rain')
	}
)
;(document.getElementById('winter') as HTMLElement).addEventListener(
	'click',
	() => {
		toggleAudio(winterAudio)
		changeBackground('winter')
	}
)

const volumeSlider: HTMLInputElement = document.getElementById(
	'volume-slider'
) as HTMLInputElement
volumeSlider.addEventListener('input', (e: Event) => {
	const target = e.target as HTMLInputElement
	const volume: number = parseFloat(target.value)

	summerAudio.volume = volume
	rainAudio.volume = volume
	winterAudio.volume = volume
})

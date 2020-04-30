const updateVideoCurrentTime = (timeChange) => {
    const videoPlayer = document.getElementsByTagName('video')[1]
    const currentTime = videoPlayer.currentTime
    videoPlayer.currentTime = currentTime + timeChange
}

const buttonOptions = [
    ["-15", -15],
    ["-5", -5],
    ["+5", 5],
    ["+15", 15],
]

const buttonsWrapper = document.createElement('div')
buttonsWrapper.style.position = 'absolute'
buttonsWrapper.style.top = '0'
buttonsWrapper.style.left = '0'

buttonOptions.forEach(([innerHtml, timeChange]) => {
    const button = document.createElement('button')
    button.innerHTML = innerHtml
    button.style.padding = "5px"
    button.style.margin = "0 5px"
    button.style.fontSize = "20px"
    button.style.cursor = "pointer"
    button.style.backgroundColor = "white"
    button.style.borderRadius = "10px"
    button.onclick = () => updateVideoCurrentTime(timeChange)
    buttonsWrapper.appendChild(button)
})

document.getElementsByTagName('body')[0].appendChild(buttonsWrapper)

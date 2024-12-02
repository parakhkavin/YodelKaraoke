let listVideo = document.querySelectorAll('.vid')
let videoSrc = document.querySelector('video')
let title = document.querySelector('.title')

listVideo.forEach((video) => {
    video.addEventListener('click', () => {
        listVideo.forEach((video) => video.classList.remove('active'))
        video.classList.add('active')


        if(video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src')
            videoSrc.src = src

            let texto = video.children[1].innerHTML
            title.innerHTML = texto
        }
    })
})

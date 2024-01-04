var consonant_box = document.getElementById("consonant_box")
let consonants = 'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ'

for ( i in consonants){
    l = i % 5 *104
    t =  (i-(i%5)) *22
    let s = document.createElement("span")

    s.className = "table"
    s.id = "consonant" + i
    s.style.width = "100px"
    s.style.height = "100px"
    s.style.textAlign = "center"
    s.style.backgroundImage = 'url(https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/image/nguyen%20am/'+ i + '.png?raw=true)'
    s.style.backgroundSize = 'cover'
    //s.style.color = "aliceblue"
    //s.style.border = "2px solid black"
    s.style.left = l + 'px'
    s.style.top = t + 'px'
    //s.style.backgroundColor = "darkslateblue"
    s.innerHTML = '<h1>' + consonants[i] + '</h1><span class="pl_video_button" id="video_' +i + '" onclick=open_video_button('+ i + ')>&#9654;</span><span class="pl_sound_button" id="sound_" '+ i +' onclick=open_sound_button(' + i + ')>🎧</span>'
    s.style.fontSize = "15px"
    consonant_box.appendChild(s)
        
}

function open_video_button(video_id){
    const box = document.getElementById('box');
    box.style.display = 'unset'
    const video =document.getElementById('video')|| document.createElement('video');
    video.src ='https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/video/conconants_video/' + video_id + '.mp4?raw=true'
    video.id = 'video'
    video.autoplay = true
    box.appendChild(video);
    let button = document.createElement('button')
    button.innerHTML = '❌'
    button.id = 'close_video_button'
    button.onclick = function() {close_video_button()}
    box.appendChild(button)
    }
    
function close_video_button(){
    const box = document.getElementById('box')
    box.style.display = 'none'
    box.innerHTML = '<b id="name">Đang Tải Vui Lòng Đợi...</b>'
    const audio = document.getElementById('audio')
    audio.pause()
}


function open_sound_button(sound_id){
    sound_id = parseFloat(sound_id)
    const box = document.getElementById('box')
    const body = document.getElementById('body')
    box.style.display = 'unset'
    box.innerHTML = '<b id="name">Đang Tải Vui Lòng Đợi...</b>'
    const audio =document.getElementById('audio')|| document.createElement('audio');
    audio.src ='https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/sound/PHU_AM/Recording%20(' + parseFloat(sound_id  + 2)+ ').m4a?raw=true'
    audio.id = 'audio'
    audio.autoplay = true
    audio.oncanplay = function (){
        const b = document.getElementById('name')||document.createElement('b')
        b.id = 'name'
        b.style.fontSize = '50px'
        b.style.color = '#8ff7e6'
        b.innerHTML = consonants[sound_id]
        box.appendChild(b)

    }
    body.appendChild(audio);

    let button = document.createElement('button')
    button.innerHTML = '❌'
    button.id = 'close_video_button'
    button.onclick = function() {close_video_button()}
    box.appendChild(button)
    
}



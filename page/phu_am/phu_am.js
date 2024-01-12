var section = document.getElementById("consonant_box");
let consonants = 'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ'
const WORDS = [["កា", "កី"],
             ["ខា", "​ខួ"]];


function createCard(letters){
    for ( i in letters){
        card = document.getElementById("card_"+i)||document.createElement('div');
        card.style.display = 'unset';
        card.className = "card";
        card.id = "card_" + i;
        card.innerHTML = `<h1 class="tiltle" onclick="Learn(${i})">${letters[i]}</h1>`;
        card.style.backgroundImage = 'url(https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/image/nguyen%20am/'+ i + '.png?raw=true)';
        card.style.backgroundSize = 'cover';
        section.appendChild(card);
    }
    
}

createCard(consonants);


function Learn(letter){
    document.getElementById("containner").style.display = 'none';


    /*    <div class="containner2">
        <button class="escButton">X</button>
        <h1 calss="title">ក</h1>
        <button class="speakerButton"><i class="material-icons">speaker</i></button>
        <h3 calss="words"><i>កា</i>,<i>កី</i><i>កា</i>,<i>កី</i><i>កា</i>,<i>កី</i><i>កា</i>,<i>កី</i><i>កា</i>,<i>កី</i><i>កា</i>,<i>កី</i></h3>
        <video src="" class="video"></video>
        
    </div>*/
    var container = document.getElementById("containner2");
    container.style.display = 'unset';
    var escButton =document.getElementsByClassName("escButton")[0] || document.createElement("button");
    escButton.className = "escButton";
    escButton.innerHTML = "X";
    escButton.onclick = function (){escLearn()};
    var title = document.getElementsByClassName("title")[0] ||document.createElement('h1');
    title.className = "title";
    title.innerHTML = consonants[letter];
    var speakerButton = document.getElementsByClassName("speakerButton")[0] ||document.createElement("button");
    speakerButton.className = "speakerButton";
    speakerButton.innerHTML = '<i class="material-icons">speaker</i>';
    speakerButton.onclick = function(){playSound(letter)}
    var words = document.getElementsByClassName("words")[0] ||document.createElement("h3");
    words.className = "words";
    var string = `<i>${WORDS[letter]}</i>`;
    words.innerHTML = string;
    var video =  document.getElementsByClassName("video")[0] ||document.createElement("video");
    video.className = "video";
    video.src = 'https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/video/conconants_video/' + letter + '.mp4?raw=true';
    video.autoplay = true;
    video.loop = true;  
    container.appendChild(escButton);
    container.appendChild(title);
    container.appendChild(speakerButton);
    container.appendChild(words);
    container.appendChild(video);
}


function escLearn(){
    document.getElementById("containner").style.display = 'flex';
    document.getElementById('containner2').style.display = 'none';
}

function playSound(letter){
    var audio = document.getElementById('audio') || document.createElement('audio');
    audio.src ='https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/sound/PHU_AM/Recording%20(' + parseFloat(letter  + 2)+ ').m4a?raw=true';
    audio.id = 'audio';
    audio.autoplay = true;
}
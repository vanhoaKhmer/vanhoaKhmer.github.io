


const MAX_QUESTION = 20
const IMAGEFOLDERNAME = [ 'nguyen%20am', 'phu_am', 'nguyen_am_doc_lap', 'number', 'chong_van', 'gui%20chan']
const SOUNDFOLDERNAME = ['PHU_AM', 'NGUYEN_AM', 'NGUYEN_AM_DOC_LAP', 'SO', 'PHU_AM_CHONG_VAN', 'PHU_AM_GUI_CHAN']
const ALPHABET =['កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ',
                 ["អ","ា", "ិ", "ី", "ឹ", "ឺ", "ុ", "ូ", "ួ", "ើ", "ឿ", "ៀ", "េ", "ែ", "ៃ", "ោ", "ៅ", "ុំ", "ំ", "ាំ", "ះ","ិះ", "ុះ", "េះ", "ោះ"],
                 ["អ","អា","ឥ","ឦ","ឧ","ឩ","ឪ","ឫ","ឬ","ឭ","ឮ","ឯ","ឰ","ឱ","ឳ"],
                 "០១២៣៤៥៦៧៨៩",
                 ["ង្ក","ង្គ","ង្ខ","ង្ឃ","ង្រ","ង្វ","ង្ស","ង្ហ","ង្អ","ង្គ្រ"],
                 ["ក្ង","ខ្ញ","ឆ្ន","ឈ្ន","ឆ្ម","ឃ្ម","ខ្យ","ព្យ"]]
const SOUNDNAME = [ ['Recording%20(2).m4a', 'Recording%20(3).m4a', 'Recording%20(4).m4a', 'Recording%20(5).m4a', 'Recording%20(6).m4a', 'Recording%20(7).m4a', 'Recording%20(8).m4a', 'Recording%20(9).m4a', 'Recording%20(10).m4a', 'Recording%20(11).m4a', 'Recording%20(12).m4a', 'Recording%20(13).m4a', 'Recording%20(14).m4a', 'Recording%20(15).m4a', 'Recording%20(16).m4a', 'Recording%20(17).m4a', 'Recording%20(18).m4a', 'Recording%20(19).m4a', 'Recording%20(20).m4a', 'Recording%20(21).m4a', 'Recording%20(22).m4a', 'Recording%20(23).m4a', 'Recording%20(24).m4a', 'Recording%20(25).m4a', 'Recording%20(26).m4a', 'Recording%20(27).m4a', 'Recording%20(28).m4a', 'Recording%20(29).m4a', 'Recording%20(30).m4a', 'Recording%20(31).m4a', 'Recording%20(32).m4a', 'Recording%20(33).m4a', 'Recording%20(34).m4a'],
                    ['Recording%20(35).m4a', 'Recording%20(36).m4a', 'Recording%20(37).m4a', 'Recording%20(38).m4a', 'Recording%20(39).m4a', 'Recording%20(40).m4a', 'Recording%20(41).m4a', 'Recording%20(42).m4a', 'Recording%20(43).m4a', 'Recording%20(44).m4a', 'Recording%20(45).m4a', 'Recording%20(46).m4a', 'Recording%20(47).m4a', 'Recording%20(48).m4a', 'Recording%20(49).m4a', 'Recording%20(50).m4a', 'Recording%20(51).m4a', 'Recording%20(52).m4a', 'Recording%20(53).m4a', 'Recording%20(54).m4a', 'Recording%20(55).m4a', 'Recording%20(56).m4a', 'Recording%20(57).m4a', 'Recording%20(58).m4a', 'Recording%20(59).m4a'],
                    ['Recording%20(60).m4a', 'Recording%20(61).m4a', 'Recording%20(62).m4a', 'Recording%20(63).m4a', 'Recording%20(64).m4a', 'Recording%20(65).m4a', 'Recording%20(66).m4a', 'Recording%20(67).m4a', 'Recording%20(68).m4a', 'Recording%20(69).m4a', 'Recording%20(70).m4a', 'Recording%20(71).m4a', 'Recording%20(72).m4a', 'Recording%20(73).m4a', 'Recording%20(74).m4a'],
                    ['Recording%20(75).m4a', 'Recording%20(76).m4a', 'Recording%20(77).m4a', 'Recording%20(78).m4a', 'Recording%20(79).m4a', 'Recording%20(80).m4a', 'Recording%20(81).m4a', 'Recording%20(82).m4a', 'Recording%20(83).m4a', 'Recording%20(84).m4a'],
                    [ 'Recording%20(93).m4a', 'Recording%20(94).m4a', 'Recording%20(95).m4a', 'Recording%20(96).m4a', 'Recording%20(97).m4a', 'Recording%20(98).m4a', 'Recording%20(99).m4a', 'Recording%20(100).m4a', 'Recording%20(101).m4a', 'Recording%20(102).m4a'],
                    ['Recording%20(85).m4a', 'Recording%20(86).m4a', 'Recording%20(87).m4a', 'Recording%20(88).m4a', 'Recording%20(89).m4a', 'Recording%20(90).m4a', 'Recording%20(91).m4a', 'Recording%20(92).m4a']]
var screenIndex = 0
var screens = []

class QUESTION {
    constructor(correctAnswerID, ID){
        this.correctAnswerID = correctAnswerID
        this.imageLink = ''
        this.soundLink = ''
        this.answerA = ''
        this.answerB = ''
        this.answerC = ''
        this.answerD = ''
        this.index = ID
    }

    answerUpdate(){
        var choseCorrect = Math.floor(Math.random(6)*6)
        var incorrectID = choseIncorectAnswer(this.correctAnswerID)

        
        if (choseCorrect ==0){
            this.answerA = this.correctAnswerID
            this.answerB = incorrectID[0]
            this.answerC = incorrectID[1]
            this.answerD = incorrectID[2]
            this.correctAnswer = 'A'
        }else if (choseCorrect ==1){
            this.answerA = incorrectID[0] 
            this.answerB = this.correctAnswerID
            this.answerC = incorrectID[1]
            this.answerD = incorrectID[2]
            this.correctAnswer = 'B'
        }else if (choseCorrect == 2){
            this.answerA = incorrectID[0] 
            this.answerC = this.correctAnswerID
            this.answerB = incorrectID[1]
            this.answerD = incorrectID[2]
            this.correctAnswer = 'C'
        }else{
            this.answerA = incorrectID[0] 
            this.answerD = this.correctAnswerID
            this.answerC = incorrectID[1]
            this.answerB = incorrectID[2]
            this.correctAnswer = 'D'
        }
    }
    getImageLink(){
        this.imageLink = 'https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/image/' 
                    + IMAGEFOLDERNAME[this.correctAnswerID[0]]
                    + '/' + this.correctAnswerID[1] +'.png'
                    + '?raw=true'
    }

    getSoundLink(){
        this.soundLink = 'https://github.com/viaasana/tu_luyen_chu_viet_tieng_khmer_nam_bo/blob/main/sound/'
                        + SOUNDFOLDERNAME[this.correctAnswerID[0]]
                        + '/' + SOUNDNAME[this.correctAnswerID[0]][this.correctAnswerID[1]]
                        + '?raw=true'
    }
    update(){
        this.answerUpdate()
        this.getImageLink()
        this.getSoundLink()
        screens[this.index] = new SCREEN(this)
    }
}

function choseIncorectAnswer(correctAnswerID){ //tạo đáp án sai
    var id1 = [correctAnswerID[0], Math.floor(Math.random()*ALPHABET[correctAnswerID[0]].length)]
    var id2 = [correctAnswerID[0], Math.floor(Math.random()*ALPHABET[correctAnswerID[0]].length)]
    var id3 = [correctAnswerID[0], Math.floor(Math.random()*ALPHABET[correctAnswerID[0]].length)]

    if ((id1[1]==correctAnswerID[1]) || (id2[1]==correctAnswerID[1]) || (id3[1] == correctAnswerID[1]) || (id1[1]==id2[1]) || (id1[1]==id3[1]) || (id2[1]==id3[1])){
        return choseIncorectAnswer(correctAnswerID)
    }else{
        return [id1, id2, id3]
    }

    
}


class SCREEN{
    constructor(questionInf){
        this.image = questionInf.imageLink
        this.sound = questionInf.soundLink
        this.answerA = questionInf.answerA
        this.answerB = questionInf.answerB
        this.answerC = questionInf.answerC
        this.answerD = questionInf.answerD
        this.index = questionInf.index
        this.userSelected = ''
        this.correctAnswer = questionInf.correctAnswer
    }
    showImage(){
        var layer = document.querySelector('.image')
        layer.style['background'] = 'url(' + this.image + ')'
        layer.style['background-size'] = 'cover'
    }
    playSound(){
        const audio = document.getElementById('audio') || document.createElement('audio')
        audio.id = 'audio'
        audio.src = this.sound
        audio.autoplay = true
        document.querySelector('body').appendChild(audio)
    }

    showOption(){
        var A = document.getElementById('A')
        var B = document.getElementById('B')
        var C = document.getElementById('C')
        var D = document.getElementById('D')

        A.innerHTML = ALPHABET[this.answerA[0]][this.answerA[1]]
        B.innerHTML = ALPHABET[this.answerB[0]][this.answerB[1]]
        C.innerHTML = ALPHABET[this.answerC[0]][this.answerC[1]]
        D.innerHTML = ALPHABET[this.answerD[0]][this.answerD[1]]

    }
    showQuestionIndex(){
        var layer = document.querySelector('.questionIndex')
        layer.innerHTML = (screenIndex + 1) + '/' + MAX_QUESTION
    }
    showSelected(){
        var classname = document.getElementsByClassName('answer')
        for (i=0; i<classname.length; i++){
            classname[i].style['background-color'] = 'unset'
            classname[i].style['color'] = 'black'
        }
        document.getElementById(this.userSelected).style['background-color'] = '#03A9F4'
        document.getElementById(this.userSelected).style['color'] = 'black'

    }
    update(){
        this.showImage()
        this.playSound()
        this.showOption()
        this.showQuestionIndex()
        this.showSelected()
    }
}

function startSound(){
    screens[screenIndex].playSound()
}

for (i=0; i<=MAX_QUESTION -1; i++){                           //tạo câu hỏi
    folder = Math.floor(Math.random()*6)
    id = [folder, Math.floor(Math.random()* ALPHABET[folder].length)]
    f = new QUESTION(id, i)
    f.update()
}

screens[screenIndex].update()

function changQuestion(i){
    screenIndex +=i
    if (screenIndex <0){
        screenIndex = 0
    }else if (screenIndex>MAX_QUESTION - 1){
        screenIndex = MAX_QUESTION -1
    }else{
        screens[screenIndex].update()
    }
    
}


function selected(a){
    screens[screenIndex].userSelected = a
    screens[screenIndex].showSelected()
}

function submit(){
    var score=0
    for (i=0; i< MAX_QUESTION -1 ; i++){
        if (screens[i].userSelected == screens[i].correctAnswer){
            score ++
        }
    }
    resultNotification(score)
}


function resultNotification(score){
    document.querySelector('.frame').style['opacity'] = '.5'
    document.querySelector('.result').style['display'] = 'unset'
    document.querySelector('.userResul').innerHTML = score
    document.querySelector('.maxQuestion').innerHTML = MAX_QUESTION
}


function remake(){
    window.location = './tracNghiem.html'
}

function backHome(){
    window.location = '../../index.html'
}
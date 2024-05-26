let BtnSound,GameBG,ChooseBG

function BtnSuccess_SoundSetup(){

    GameBG = createElement("Audio")
    GameBG.attribute("src","audio/gamebg.mp3")
    GameBG.attribute("id","GameBG")

    ChooseBG = createElement("Audio")
    ChooseBG.attribute("src","audio/choosebg.mp3")
    ChooseBG.attribute("id","ChooseBG")

    BtnSound = createElement("Audio")
    BtnSound.attribute("src","audio/buttonclick.mp3")
    BtnSound.attribute("id","BtnSound")

}

function GameBGM(){

    document.getElementById("GameBG").volume = 0.5
    document.getElementById("GameBG").currentTime = 0
    document.getElementById("GameBG").play();
    document.getElementById("GameBG").loop = "True"
}

function chooseBGM(){

    document.getElementById("ChooseBG").volume = 0.5
    document.getElementById("ChooseBG").currentTime = 0
    document.getElementById("ChooseBG").play();
    document.getElementById("ChooseBG").loop = "True"
}


function buttonClickBGM(){

    document.getElementById("BtnSound").volume = 0.5
    document.getElementById("BtnSound").currentTime = 0
    document.getElementById("BtnSound").play();

}


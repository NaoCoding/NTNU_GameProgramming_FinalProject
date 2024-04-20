let scene = 0
let StartGameButton
let SettingButton,BackToMenuButton

let AuthorButton
let AuthorPageDiv,settingDiv
let WindowSizeSlider 
let setting_github
let GameSettingDoneButton , CharacterSelectBg
let backGroundColor = "rgb(251,229,220)"
let StartGameTitleColor = "rgb(196,165,0)"
let windowSize = 1.0
let FullScreen
let wWidth = 1440 
let wHeight = 739 
let player_count = 0
let bot_count = 0
let CharacterSelectDiv

let Character01SelectButton,Character02SelectButton,Character03SelectButton,Character04SelectButton
let Character05SelectButton,Character06SelectButton,Character07SelectButton,Character08SelectButton


function setup() {
	
	
	//createCanvas(windowWidth, windowHeight)
	wWidth = windowWidth / wWidth
	wHeight = windowHeight / wHeight
	FullScreen = fullscreen()
	StartGameTitleCmd()
	
}


function GameSettingCmd(){

	CharacterSelectButtonshowall()
	CharacterSelectDiv.show()
	BackToMenuButton.show()
	


}

function GameSettingDoneCmd(){


}

function CharacterSelectBgini(){

	CharacterSelectDiv = createElement("div")
	CharacterSelectDiv.style("width","100%")
	CharacterSelectDiv.style("height","100%")
	CharacterSelectDiv.style("position","absolute")
	CharacterSelectDiv.style("top","0px")
	CharacterSelectDiv.style("left","0px")
	CharacterSelectDiv.style("z-index","-1")
	CharacterSelectStyle = "style=height:100%;width:100%;"
	CharacterSelectStyle += 'position:absolute;top:0%;left:0%;'
	CharacterSelectDiv.html("<image src='image/characterSelect.png'"+CharacterSelectStyle+">",1)
	CharacterSelectDiv.html("</image>",1)
	CharacterSelectDiv.hide()

	Character01SelectButton = createImg("image/character.png","character.png")
	Character01SelectButton.style("height","27.06%");
	Character01SelectButton.style("width","13.888%");
	Character01SelectButton.style("left","28.95%");
	Character01SelectButton.style("top","16.779%");
	Character01SelectButton.style("background","transparent");
	Character01SelectButton.style("color","transparent");
	Character01SelectButton.style("position","absolute")

	Character02SelectButton = createImg("image/character.png","character.png")
	Character02SelectButton.style("height","27.06%");
	Character02SelectButton.style("width","13.888%");
	Character02SelectButton.style("left","43.88%");
	Character02SelectButton.style("top","16.779%");
	Character02SelectButton.style("background","transparent");
	Character02SelectButton.style("color","transparent");
	Character02SelectButton.style("position","absolute")

	Character03SelectButton = createImg("image/character.png","character.png")
	Character03SelectButton.style("height","27.06%");
	Character03SelectButton.style("width","13.888%");
	Character03SelectButton.style("left","58.54%");
	Character03SelectButton.style("top","16.779%");
	Character03SelectButton.style("background","transparent");
	Character03SelectButton.style("color","transparent");
	Character03SelectButton.style("position","absolute")

	Character04SelectButton = createImg("image/character.png","character.png")
	Character04SelectButton.style("height","27.06%");
	Character04SelectButton.style("width","13.888%");
	Character04SelectButton.style("left","28.95%");
	Character04SelectButton.style("top","43.16%");
	Character04SelectButton.style("background","transparent");
	Character04SelectButton.style("color","transparent");
	Character04SelectButton.style("position","absolute")

	Character05SelectButton = createImg("image/character.png","character.png")
	Character05SelectButton.style("height","27.06%");
	Character05SelectButton.style("width","13.888%");
	Character05SelectButton.style("left","58.54%");
	Character05SelectButton.style("top","43.16%");
	Character05SelectButton.style("background","transparent");
	Character05SelectButton.style("color","transparent");
	Character05SelectButton.style("position","absolute")

	Character06SelectButton = createImg("image/character.png","character.png")
	Character06SelectButton.style("height","27.06%");
	Character06SelectButton.style("width","13.888%");
	Character06SelectButton.style("left","28.95%");
	Character06SelectButton.style("top","68.74%");
	Character06SelectButton.style("background","transparent");
	Character06SelectButton.style("color","transparent");
	Character06SelectButton.style("position","absolute")

	Character07SelectButton = createImg("image/character.png","character.png")
	Character07SelectButton.style("height","27.06%");
	Character07SelectButton.style("width","13.888%");
	Character07SelectButton.style("left","43.88%");
	Character07SelectButton.style("top","68.74%");
	Character07SelectButton.style("background","transparent");
	Character07SelectButton.style("color","transparent");
	Character07SelectButton.style("position","absolute")

	Character08SelectButton = createImg("image/character.png","character.png")
	Character08SelectButton.style("height","27.06%");
	Character08SelectButton.style("width","13.888%");
	Character08SelectButton.style("left","58.54%");
	Character08SelectButton.style("top","68.74%");
	Character08SelectButton.style("background","transparent");
	Character08SelectButton.style("color","transparent");
	Character08SelectButton.style("position","absolute")

	CharacterSelectButtonhideall()



}

function CharacterSelectButtonshowall(){

	Character01SelectButton.show()
	Character02SelectButton.show()
	Character03SelectButton.show()
	Character04SelectButton.show()
	Character05SelectButton.show()
	Character06SelectButton.show()
	Character07SelectButton.show()
	Character08SelectButton.show()
}

function CharacterSelectButtonhideall(){

	Character01SelectButton.hide()
	Character02SelectButton.hide()
	Character03SelectButton.hide()
	Character04SelectButton.hide()
	Character05SelectButton.hide()
	Character06SelectButton.hide()
	Character07SelectButton.hide()
	Character08SelectButton.hide()


}



function LeaveStartGameMenuCmd(){
	
	StartGameButton.hide()
	SettingButton.hide()
	AuthorButton.hide()
	BackToMenuButton.show()
	titleDiv.hide()
	
}

function AuthorPageCmd(){
	
	LeaveStartGameMenuCmd()
	AuthorPageDiv.show()
	BackToMenuButton.show()

	
	
}

function BackToMenuCmd(){
	
	CharacterSelectButtonhideall()
	CharacterSelectDiv.hide()
	titleDiv.show()
	settingDiv.hide()
	AuthorButton.show()
	AuthorPageDiv.hide()
	StartGameButton.show()
	SettingButton.show()
	BackToMenuButton.hide()
	setting_github.hide()
	
}

function SettingPageCmd(){
	
	BackToMenuButton.show()
	setting_github.show()
	LeaveStartGameMenuCmd()
	settingDiv.show()
	
}

function StartGameCmd(){
	
	StartGameButton.hide()
	AuthorButton.hide()
	SettingButton.hide()
	BackToMenuButton.hide()
	setting_github.hide()


	GameSettingCmd()
	
	
}

function StartGameTitleCmd(){

	StartGameButtonInitialize()
	BackToMenuButtonInitialize()
	AuthorButtonInitialize()
	AuthorPageDivInitialize()
	SettingButtonInitialize()
	setting_githubINI()
	StartGameTitleINI()
	CharacterSelectBgini()
	
}

function StartGameTitleINI(){

	
	titleDiv = createElement('div')

	titleDiv.style("width","100%")
	titleDiv.style("height","100%")
	titleDiv.style("position","absolute")
	titleDiv.style("top","0px")
	titleDiv.style("left","0px")
	titleDiv.style("z-index","-1")
	titleDivStyle = "style=height:100%;width:100%;"
	titleDivStyle += 'position:absolute;top:0%;left:0%;'
	titleDiv.html("<image src='image/titlebg.jpg'"+titleDivStyle+">",1)
	titleDiv.html("</image>",1)
	titleLabel_innerhtml = "<h1 style=position:absolute;"
	titleLabel_innerhtml += "top:15%;left:50%;transform:translate(-50%,-15%);"
	titleLabel_innerhtml += "font-size:88px;color:#e77508;"

	titleLabel_innerhtml += ">日式居酒大富翁</h1>"
	titleDiv.html(titleLabel_innerhtml,1)
	titleDiv.show()
	
}

function setting_githubINI(){
	setting_github = createElement('button')
	githubpngstyle = "style=height:15%;width:auto;"
	githubpngstyle += 'position:absolute;top:77%;left:85%;transform:translate(-85%,-77%)'
	setting_github.html("<image src='image/github.png'"+githubpngstyle+">",1)
	setting_github.html("</image>",1)
	setting_github.style("background-color",'transparent')
	setting_github.style("border-color",'transparent')
	setting_github.mouseClicked(redirectToGithub)
	settingDiv = createElement('div')

	settingDiv.style("width","100%")
	settingDiv.style("height","100%")
	settingDiv.style("position","absolute")
	settingDiv.style("top","0px")
	settingDiv.style("left","0px")
	settingDiv.style("z-index","-1")
	settingDivStyle = "style=height:100%;width:100%;"
	settingDivStyle += 'position:absolute;top:0%;left:0%;'
	settingDiv.html("<image src='image/settingbg.jpg'"+settingDivStyle+">",1)
	settingDiv.html("</image>",1)
	settingDiv.hide()


	setting_github.hide()
}
function redirectToGithub(){
	window.open("https://github.com/NaoCoding/NTNU_GameProgramming_FinalProject",'')
}


function AuthorPageDivInitialize(){
	
	AuthorPageDiv = createElement('div')

	AuthorPageDiv.style("width","100%")
	AuthorPageDiv.style("height","100%")
	AuthorPageDiv.style("position","absolute")
	AuthorPageDiv.style("top","0px")
	AuthorPageDiv.style("left","0px")
	AuthorPageDiv.style("z-index","-1")
	AuthorPageDivStyle = "style=height:100%;width:100%;"
	AuthorPageDivStyle += 'position:absolute;top:0%;left:0%;'
	AuthorPageDiv.html("<image src='image/authorbg.jpg'"+AuthorPageDivStyle+">",1)
	AuthorPageDiv.html("</image>",1)
	AuthorPageDiv.hide()
	
	
}

function BackToMenuButtonInitialize(){
	
	BackToMenuButton = createElement("button")
	BackToMenuButton.hide()
	BackToMenuButton.mouseClicked(BackToMenuCmd)
	BackToMenuButton.style("width", "12%");
	BackToMenuButton.style("height", "17%");
	BackToMenuButton.style("position","absolute");
	BackToMenuButton.style("left","7%")
	BackToMenuButton.style("top","75%")
	BackToMenuButton.style("background-color","transparent")
	BackToMenuButton.style("border-color","black")
	BackToMenuButtonStyle = "style=height:100%;width:100%;"
	BackToMenuButtonStyle += 'position:absolute;top:0px;left:0px;'
	BackToMenuButton.html("<image src='image/back.png'"+BackToMenuButtonStyle+">",1)
	BackToMenuButton.html("</image>",1)

}

function AuthorButtonInitialize(){
	AuthorButton = createButton('小組名單')
	//AuthorButton.parent("ScreenCanvas")
	AuthorButton.style("left",'15%')
	AuthorButton.style("top",'75%')
	AuthorButton.style("top",'75%')
	AuthorButton.style('width','20%')
	AuthorButton.style('height','12.5%')
	AuthorButton.style("position",'absolute')
	AuthorButton.style("transform","translate(-15%,-75%)")
	AuthorButton.style("font-size", "48px");
	AuthorButton.style("font-family", "Times New Roman");
	AuthorButton.mouseClicked(AuthorPageCmd)
	AuthorButton.style("background-color","rgb(255,255,255)")
	AuthorButton.style("color","rgb(9,107,249)")
	AuthorButton.style('border-color','gold')
	AuthorButton.style("border-radius","1em")
	
	
}

function StartGameButtonInitialize(){
	StartGameButton = createButton('開始遊戲')
	StartGameButton.style("left",'50%')
	StartGameButton.style("top",'75%')
	StartGameButton.style("position",'absolute')
	StartGameButton.style("transform","translate(-50%,-75%)")
	StartGameButton.style('width','25%')
	StartGameButton.style('height','12.5%')
	StartGameButton.style("font-size", "48px");
	StartGameButton.style("font-family", "Times New Roman");
	StartGameButton.mouseClicked(StartGameCmd)
	StartGameButton.style("background-color","rgb(255,255,255)")
	StartGameButton.style("color","rgb(9,107,249)")
	StartGameButton.style('border-color','gold')
	StartGameButton.style("border-radius","1em")
}



function SettingButtonInitialize(){
	
	SettingButton = createButton("設定")
	SettingButton.style("left",'85%')
	SettingButton.style("top",'75%')
	SettingButton.style("position",'absolute')
	SettingButton.style("transform","translate(-85%,-75%)")
	SettingButton.style('width','20%')
	SettingButton.style('height','12.5%')
	SettingButton.style("font-size", "48px");
	SettingButton.style("font-family", "Times New Roman");
	SettingButton.mouseClicked(SettingPageCmd)
	SettingButton.style("background-color","rgb(255,255,255)")
	SettingButton.style("color","rgb(9,107,249)")
	SettingButton.style('border-color','gold')
	SettingButton.style("border-radius","1em")
	
	
}


function keyTyped(){
	
	
}
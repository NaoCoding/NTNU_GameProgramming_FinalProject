

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



function setup() {
	
	
	//createCanvas(windowWidth, windowHeight)
	wWidth = windowWidth / wWidth
	wHeight = windowHeight / wHeight
	FullScreen = fullscreen()
	StartGameTitleCmd()
	
}


function GameSettingCmd(){

	
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
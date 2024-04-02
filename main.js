let scene = 0
let StartGameButton, StartGameBackGroundFrame
let SettingButton,BackToMenuButton
let AuthorButton
let AuthorPageDiv
let WindowSizeSlider 
let ScreenCanvas 
let setting_github
let backGroundColor = "rgb(251,229,220)"
let StartGameTitleColor = "rgb(196,165,0)"
let windowSize = 1.0
let FullScreen
let wWidth = 1440 
let wHeight = 739 

function setup() {
	
	
	//createCanvas(windowWidth, windowHeight)
	wWidth = windowWidth / wWidth
	wHeight = windowHeight / wHeight
	FullScreen = fullscreen()
	StartGameTitleCmd()
	
}






function LeaveStartGameMenuCmd(){
	
	StartGameButton.hide()
	SettingButton.hide()
	AuthorButton.hide()
	BackToMenuButton.show()
	background(backGroundColor);
	
}

function AuthorPageCmd(){
	
	LeaveStartGameMenuCmd()
	AuthorPageDiv.show()
	BackToMenuButton.show()
	
	
}

function BackToMenuCmd(){
	
	background(backGroundColor);
	StartGameBackGroundInitialize()
	StartGameBackGroundFrame.show()
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
	
}

function StartGameCmd(){
	
	StartGameButton.hide()
	AuthorButton.hide()
	SettingButton.hide()
	BackToMenuButton.hide()
	setting_github.hide()
	background(backGroundColor)
	
	
}

function StartGameTitleCmd(){
	ScreenCanvasInitialize()
	StartGameBackGroundFrameInitialize()
	StartGameBackGroundInitialize()
	StartGameButtonInitialize()
	BackToMenuButtonInitialize()
	AuthorButtonInitialize()
	AuthorPageDivInitialize()
	SettingButtonInitialize()
	setting_githubINI()
	
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


	setting_github.hide()
}
function redirectToGithub(){
	window.open("https://github.com/NaoCoding/NTNU_GameProgramming_FinalProject",'')
}


function AuthorPageDivInitialize(){
	
	AuthorPageDiv = createElement('h1','41247024S&emsp;&emsp;廖妤恩')
	AuthorPageDiv.html("<br>41247001S&emsp;&emsp;盧昱安",1)
	AuthorPageDiv.html("<br>41247057S&emsp;&emsp;陳育渝",1)
	AuthorPageDiv.html("<br>41211011E&emsp;&emsp;鐘珮甄",1)
	AuthorPageDiv.html("<br>41211016E&emsp;&emsp;羅崇愷",1)
	AuthorPageDiv.html("<br>41241121S&emsp;&emsp;李亞倫",1)
	AuthorPageDiv.html("<br>41272002H&emsp;&emsp;鄭鈺樺",1)

	AuthorPageDiv.style('text-align','center')
	AuthorPageDiv.style('top','45%')
	AuthorPageDiv.style('left','50%')
	//AuthorPageDiv.style("font-weight",'bold')
	AuthorPageDiv.style("transform","translate(-50%,-45%)")
	AuthorPageDiv.style('position','absolute')
	AuthorPageDiv.style('font-size','36px')
	AuthorPageDiv.style('line-height','1.8')
	AuthorPageDiv.hide()
	
	
}

function BackToMenuButtonInitialize(){
	
	BackToMenuButton = createButton("返回")
	BackToMenuButton.hide()
	BackToMenuButton.mouseClicked(BackToMenuCmd)
	BackToMenuButton.position(135* wWidth,500* wHeight)	
	BackToMenuButton.size(200* wWidth,93* wHeight)
	BackToMenuButton.style("font-size", "28px");
	BackToMenuButton.style("font-family", "Times New Roman");
	BackToMenuButton.style("background-color","rgb(255,255,255)")
	BackToMenuButton.style("color","rgb(9,107,249)")
	BackToMenuButton.style('border-color','gold')
	BackToMenuButton.style("border-radius","1em")
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

function StartGameBackGroundFrameInitialize(){
	StartGameBackGroundFrame = createElement('h5')
	StartGameBackGroundFrame.position(70* wWidth,45* wHeight)
	StartGameBackGroundFrame.size((windowWidth-150*wWidth) ,windowHeight-150*wHeight)
	
	StartGameBackGroundFrame.style("border","solid")
	StartGameBackGroundFrame.style("border-color",'rgb(141,120,7)')
	StartGameBackGroundFrame.style("border-radius","1em")
}

function StartGameBackGroundInitialize(){
	textSize(125*wWidth)
	//textFont('標楷體')
	fill('white')
	strokeWeight(4*wWidth)
	stroke(StartGameTitleColor)
	text("知識大富翁",400*wWidth,250*wHeight)
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

function ScreenCanvasInitialize(){
	ScreenCanvas = createCanvas(windowWidth*wWidth, windowHeight*wHeight)
	ScreenCanvas.id("ScreenCanvas")
	ScreenCanvas.position(0*wWidth,0*wHeight)
	ScreenCanvas.style('z-index',-1)
	background(backGroundColor)
}

function keyTyped(){
	
	
}

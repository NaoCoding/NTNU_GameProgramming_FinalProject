let scene = 0
let StartGameButton, StartGameBackGroundFrame
let SettingButton,BackToMenuButton
let AuthorButton
let AuthorPageDiv
let WindowSizeSlider 
let ScreenCanvas 
let backGroundColor = "rgb(251,229,220)"
let StartGameTitleColor = "rgb(196,165,0)"
let windowSize = 1.0
let FullScreen
let wWidth = 1440 
let wHeight = 689 

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
	
}

function SettingPageCmd(){
	
	BackToMenuButton.show()
	
	LeaveStartGameMenuCmd()
	
}

function StartGameCmd(){
	
	StartGameButton.hide()
	AuthorButton.hide()
	SettingButton.hide()
	BackToMenuButton.hide()
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
	
}

function AuthorPageDivInitialize(){
	
	AuthorPageDiv = createElement('h1','41247024S 廖妤恩\n41247001S	盧昱安\n41247057S 陳育渝\n41211011E 鐘珮甄\n41211016E 羅崇愷\n41241121S 李亞倫\n41272002H 鄭鈺樺')
	AuthorPageDiv.position(windowWidth/2-200* wWidth,windowHeight/2-50* wHeight)
	AuthorPageDiv.size(600 * wWidth,50 * wHeight)
	AuthorPageDiv.hide()
	
	
}

function BackToMenuButtonInitialize(){
	
	BackToMenuButton = createButton("返回")
	BackToMenuButton.hide()
	BackToMenuButton.mouseClicked(BackToMenuCmd)
	BackToMenuButton.position(135* wWidth,500* wHeight)
	BackToMenuButton.size(150* wWidth,70* wHeight)
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
	AuthorButton.position(200* wWidth,450* wHeight)
	//AuthorButton.style('z-index',1)
	AuthorButton.size(300* wWidth,100* wHeight)
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
	StartGameButton.position(550* wWidth,450* wHeight)
	StartGameButton.size(300* wWidth,100*wHeight)
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
	text("期末教學小遊戲",270*wWidth,250*wHeight)
}

function SettingButtonInitialize(){
	
	SettingButton = createButton("設定")
	SettingButton.position(900*wWidth,450*wHeight)
	SettingButton.size(300*wWidth,100*wHeight)
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

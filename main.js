

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
let CharacterSelectBox
let Game_movingdoll
let chance_fateQuestion
CharacterID = [0,0,0,0]
CharacterAmount = 0
CharacterWait = [0,0,0,0]
CharacterBeer = [0,0,0,0]
CharacterPlace = [0,0,0,0]
CharacterRound = [0,0,0,0]
CharacterPlaceStyle = [[9.1,90],[9.1,80],[9.1,70],[9.1,60],[9.1,50],[9.1,40],[9.1,30],[9.1,20],[9.1,10],
[14.7,10],[20.2,10],[25.8,10],[31.4,10],[37,10],[42.6,10],[48.2,10],
[53.8,10],[59.4,10],[65,10],[70.6,10],[76.2,10],[81.8,10],[87.4,10],
[87.4,20],[87.4,30],[87.4,40],[87.4,50],[87.4,60],[87.4,70],[87.4,80],[87.4,90],
[81.8,90],[76.2,90],[70.6,90],[65,90],[59.4,90],[53.8,90],[48.2,90],
[42.6,90],[37,90],[31.4,90],[25.8,90],[20.2,90],[14.7,90]]
// 8 22 30 
let CharacterSelectBackButton
diceCanClick = 0
diceAnimationDone = 1

let Character01SelectButton,Character02SelectButton,Character03SelectButton,Character04SelectButton
let Character05SelectButton,Character06SelectButton,Character07SelectButton,Character08SelectButton

let CharacterChoosenLabel01,CharacterChoosenLabel02,CharacterChoosenLabel03,CharacterChoosenLabel04
let CharacterChoosenLabelbg01,CharacterChoosenLabelbg02,CharacterChoosenLabelbg03,CharacterChoosenLabelbg04
let chess1,chess2,chess3,chess4
let game_bg_div
let dice_roll_button,status_bar_div
let dice_value_div
player_now = 1

function preload(){

	chance_fateQuestion = loadJSON("https://naocoding.github.io/NTNU_GameProgramming_FinalProject/question/change_fate.json")
}
//chance_fateQuestion.question[1][0]

function setup() {
	
	
	//createCanvas(windowWidth, windowHeight)
	wWidth = windowWidth / wWidth
	wHeight = windowHeight / wHeight
	FullScreen = fullscreen()
	StartGameTitleCmd()
	
	
}

async function roll_the_dice(){
	
	if(diceCanClick == 0) return 
	diceCanClick = 0
	dice_result = 0
	Game_movingdoll.show()
	
	

	if(player_now==1){
		chess1.style("z-index","100")
		
	}
	else chess1.style("z-index","3")
	if(player_now==2) chess2.style("z-index","100")
	else chess2.style("z-index","3")
	if(player_now==3) chess3.style("z-index","100")
	else chess3.style("z-index","3")
	if(player_now==4) chess4.style("z-index","100")
	else chess4.style("z-index","3")

	CharacterChoosenLabelChange(Game_movingdoll,CharacterID[player_now-1])
	Game_movingdoll.style("top",(CharacterPlaceStyle[CharacterPlace[player_now-1]][1]-3).toString() + '%')
	Game_movingdoll.style("left",(CharacterPlaceStyle[CharacterPlace[player_now-1]][0]).toString() + '%')
	


	t = 0

	var q = setInterval(() => {
		t += 1
		
		if(t==20)clearInterval(q)

		dice_result = Math.floor(Math.random() * 11) + 1
		dice_value_div.html("<br>"+dice_result.toString(),0)

	}, 50);

	await delay(1.05)

	while(dice_result > 0){
		CharacterPlace[player_now-1] += 1
		if(CharacterPlace[player_now-1] > 43){
			CharacterPlace[player_now-1] = 0
			CharacterRound[player_now-1] += 1
			if(CharacterRound[player_now-1] == 2) return;
		}
		update_place()
		dice_result -= 1
		await delay(0.6)
	}




	
	if(CharacterPlace[player_now-1] == 22){
		await delay(0.6)
		CharacterPlace[player_now-1] = 0
		update_place()
		await delay(0.6)
	}

	else if(CharacterPlace[player_now-1] == 8){
		await delay(0.6)
		CharacterPlace[player_now-1] = 22
		update_place()
		await delay(0.6)
	}

	else if(CharacterPlace[player_now-1] == 30){
		CharacterWait[player_now-1] = 1
	}

	

	player_now += 1
	while(CharacterWait[player_now-1] > 0){
		CharacterWait[player_now-1] -= 1
		player_now += 1
		if(player_now > CharacterAmount) player_now = 1
	}
	if(player_now > CharacterAmount) player_now = 1
	dice_value_div.style("background-color",color_now())
	dice_value_div.html("<br>",0)
	diceCanClick = 1

}




function GameStart(){
 //rbyg
	game_bg_div = createElement('div')
	diceCanClick = 1

	game_bg_div.style("width","100%")
	game_bg_div.style("height","100%")
	game_bg_div.style("position","absolute")
	game_bg_div.style("top","0px")
	game_bg_div.style("left","0px")
	game_bg_div.style("z-index","-1")
	game_bg_div_style = "style=height:100%;width:100%;"
	game_bg_div_style += 'position:absolute;top:0%;left:0%;'
	game_bg_div.html("<image src='image/game_bg.jpg'"+game_bg_div_style+">",1)
	game_bg_div.html("</image>",1)
	game_bg_div.show()

	Game_movingdoll = createImg("image/character01.png","png")

	Game_movingdoll.style("width","5%")
	Game_movingdoll.style("height","auto")
	Game_movingdoll.style("position","absolute")
	Game_movingdoll.hide()
	Game_movingdoll.style("z-index","101")

	dice_value_div = createElement('div')

	dice_value_div.style("width","20%")
	dice_value_div.style("height","25%")
	dice_value_div.style("position","absolute")
	dice_value_div.style("top","50%")
	dice_value_div.style("left","50%")
	dice_value_div.style("transform","translate(-50%,-50%)")
	dice_value_div.style("background-color",color_now())
	dice_value_div.style("border-radius","50%")
	dice_value_div.style("font-size","60px")
	dice_value_div.style("font-family","Arial, sans-serif")
	dice_value_div.style("text-align","center")
	//dice_value_div.html("<br>1",0)
	dice_value_div.show()

	dice_roll_button = createImg('image/dice.png')
	dice_roll_button.style("left",'63%')
	dice_roll_button.style("top",'60%')
	dice_roll_button.style('width','20%')
	dice_roll_button.style('height','20%')
	dice_roll_button.style("position",'absolute')
	dice_roll_button.show()
	dice_roll_button.mouseClicked(roll_the_dice)

	status_bar_div = createImg('image/status_bar.png')
	status_bar_div.style("left",'15%')
	status_bar_div.style("top",'50%')
	status_bar_div.style('width','20%')
	status_bar_div.style('height','35%')
	status_bar_div.style("position",'absolute')
	status_bar_div.show()

	chess1 = createImg('image/red_place.png')
	chess1.style("left","9.1%")
	chess1.style("top",'90%')
	chess1.style('width','2.8%')
	chess1.style('height','2.8%')
	chess1.style("position",'absolute')
	//chess1.style("opacity","0.3")
	if(CharacterAmount > 0)chess1.show()
	else chess1.hide()
	chess1.style("z-index","100")

	chess2 = createImg('image/blue_place.png')
	chess2.style("left","9.1%")
	chess2.style("top",'90%')
	chess2.style('width','2.8%')
	chess2.style('height','2.8%')
	chess2.style("position",'absolute')
	//chess2.style("opacity","0.3")
	if(CharacterAmount > 1)chess2.show()
	else chess2.hide()

	chess3 = createImg('image/yellow_place.png')
	chess3.style("left","9.1%")
	chess3.style("top",'90%')
	chess3.style('width','2.8%')
	chess3.style('height','2.8%')
	chess3.style("position",'absolute')
	//chess3.style("opacity","0.3")
	if(CharacterAmount > 2)chess3.show()
	else chess3.hide()

	chess4 = createImg('image/green_place.png')
	chess4.style("left","9.1%")
	chess4.style("top",'90%')
	chess4.style('width','2.8%')
	chess4.style('height','2.8%')
	chess4.style("position",'absolute')
	//chess4.style("opacity","0.3")
	if(CharacterAmount > 3)chess4.show()
	else chess4.hide()



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
	titleDiv.html("<image src='image/menu_bg.jpg'"+titleDivStyle+">",1)
	titleDiv.html("</image>",1)


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

	BackToMenuButton.style("width", "16%");
	BackToMenuButton.style("height", "13%");
	BackToMenuButton.style("position","absolute");
	BackToMenuButton.style("left","5%")
	BackToMenuButton.style("top","80%")
	BackToMenuButton.style("background-color","transparent")
	BackToMenuButton.style("border-color","transparent")
	BackToMenuButtonStyle = "style=height:100%;width:100%;"
	BackToMenuButtonStyle += 'position:absolute;top:0px;left:0px;'
	BackToMenuButton.html("<image src='image/back.png'"+BackToMenuButtonStyle+">",1)
	BackToMenuButton.html("</image>",1)
	GameSettingDoneButton = createImg("image/startbutton.png")
	GameSettingDoneButton.hide()
	GameSettingDoneButton.mouseClicked(GameSettingDoneCmd)
	GameSettingDoneButton.style("width", "20%");
	GameSettingDoneButton.style("height", "10%");
	GameSettingDoneButton.style("position","absolute");
	GameSettingDoneButton.style("left","77%")
	GameSettingDoneButton.style("top","85%")
	GameSettingDoneButton.style("background-color","transparent")

}

function AuthorButtonInitialize(){
	AuthorButton = createImg('image/authorbutton.png')
	AuthorButton.style("left",'6%')
	AuthorButton.style("top",'58.3%')
	AuthorButton.style('width','23%')
	AuthorButton.style('height','17%')
	AuthorButton.style("position",'absolute')


	AuthorButton.mouseClicked(AuthorPageCmd)


	
	
}

function StartGameButtonInitialize(){
	StartGameButton = createImg('image/startgamebutton.png')
	StartGameButton.style("left",'6%')
	StartGameButton.style("z-index","10")
	StartGameButton.style("top",'47.5%')
	StartGameButton.style('width','23%')
	StartGameButton.style('height','17%')
	StartGameButton.style("position",'absolute')


	StartGameButton.mouseClicked(StartGameCmd)
}



function SettingButtonInitialize(){
	
	SettingButton = createImg('image/settingbutton.png')
	SettingButton.style("left",'6%')
	SettingButton.style("top",'69%')
	SettingButton.style('width','23%')
	SettingButton.style('height','17%')
	SettingButton.style("position",'absolute')

	SettingButton.mouseClicked(SettingPageCmd)
	
	
}

function color_now(){

	if(player_now==1)return "rgba(190,0,1,0.7)"
	else if(player_now==3) return "rgba(254,255,1,0.7)"
	else if(player_now==2) return "rgba(91,154,213,0.7)"
	else return "rgba(112,172,70,0.7)"

}

function CharacterSelectBackButtonFn(){

	if(CharacterAmount == 0)BackToMenuCmd()
	else{
		CharacterID[CharacterAmount-1] = 0
		
		CharacterAmount -= 1
		updateCharacterAmountScreen()
	}

}

function CharacterSelectSelectFn1(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 1
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}

function CharacterSelectSelectFn2(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 2
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}

function CharacterSelectSelectFn3(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 3
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}

function CharacterSelectSelectFn4(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 4
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}
function CharacterSelectSelectFn5(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 5
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}
function CharacterSelectSelectFn6(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 6
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}
function CharacterSelectSelectFn7(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 7
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}
function CharacterSelectSelectFn8(){

	if(CharacterAmount < 4){
		CharacterID[CharacterAmount] = 8
	CharacterAmount += 1
	updateCharacterAmountScreen()
	}

}

function CharacterSRCINI(){
	Character01SelectButton.removeAttribute("src")
	Character02SelectButton.removeAttribute("src")
	Character03SelectButton.removeAttribute("src")
	Character04SelectButton.removeAttribute("src")
	Character05SelectButton.removeAttribute("src")
	Character06SelectButton.removeAttribute("src")
	Character07SelectButton.removeAttribute("src")
	Character08SelectButton.removeAttribute("src")
	Character01SelectButton.attribute("src","image/character01_neck.png")
	Character02SelectButton.attribute("src","image/character02.png")
	Character03SelectButton.attribute("src","image/character03.png")
	Character04SelectButton.attribute("src","image/character04.png")
	Character05SelectButton.attribute("src","image/character05.png")
	Character06SelectButton.attribute("src","image/character06.png")
	Character07SelectButton.attribute("src","image/character07.png")
	Character08SelectButton.attribute("src","image/character08.png")
}

function CharacterSelectBgini(){

	CharacterSelectDiv = createElement("div")
	CharacterSelectDiv.style("width","100%")
	CharacterSelectDiv.style("height","100%")
	CharacterSelectDiv.style("position","absolute")
	CharacterSelectDiv.style("top","0px")
	CharacterSelectDiv.style("left","0px")
	CharacterSelectDiv.style("z-index","-2")
	//CharacterSelectDiv.style("background-color","transparent")

	CharacterSelectBox = createImg("image/characterSelect.jpg","png")
	CharacterSelectBox.style("height","80%")
	CharacterSelectBox.style("width","46%")
	CharacterSelectBox.style("position","absolute")
	CharacterSelectBox.style("top","17%")
	CharacterSelectBox.style("left","27.5%")
	CharacterSelectBox.style("z-index","-1")
	CharacterSelectBox.style("opacity","0.3")
	CharacterSelectBox.hide()

	CharacterSelectStyle = "style=height:100%;width:100%;"
	CharacterSelectStyle += 'position:absolute;top:0%;left:0%;opacity:0.8;'
	CharacterSelectDiv.html("<image src='image/choosebg.png'"+CharacterSelectStyle+">",1)
	CharacterSelectDiv.html("</image>",1)
	CharacterSelectDiv.hide()

	CharacterSelectBackButton = createElement("button")
	CharacterSelectBackButton.hide()
	CharacterSelectBackButton.mouseClicked(CharacterSelectBackButtonFn)
	CharacterSelectBackButton.style("width", "16%");
	CharacterSelectBackButton.style("height", "13%");
	CharacterSelectBackButton.style("position","absolute");
	CharacterSelectBackButton.style("left","5%")
	CharacterSelectBackButton.style("top","80%")
	CharacterSelectBackButton.style("background-color","transparent")
	CharacterSelectBackButton.style("border-color","transparent")
	CharacterSelectBackButtonStyle = "style=height:100%;width:100%;"
	CharacterSelectBackButtonStyle += 'position:absolute;top:0px;left:0px;'
	CharacterSelectBackButton.html("<image src='image/back.png'"+CharacterSelectBackButtonStyle+">",1)
	CharacterSelectBackButton.html("</image>",1)

	Character01SelectButton = createImg("image/character.png","character.png")
	Character01SelectButton.style("height","45%");
	Character01SelectButton.style("width","auto");
	Character01SelectButton.style("left","24.2%");
	Character01SelectButton.style("top","0%");
	Character01SelectButton.style("background","transparent");
	Character01SelectButton.style("color","transparent");
	Character01SelectButton.style("position","absolute")
	Character01SelectButton.mouseClicked(CharacterSelectSelectFn1)

	Character02SelectButton = createImg("image/character.png","character.png")
	Character02SelectButton.style("height","36%");
	Character02SelectButton.style("width","20%");
	Character02SelectButton.style("left","43.88%");
	Character02SelectButton.style("top","5.779%");
	Character02SelectButton.style("background","transparent");
	Character02SelectButton.style("color","transparent");
	Character02SelectButton.style("position","absolute")
	Character02SelectButton.mouseClicked(CharacterSelectSelectFn2)

	Character03SelectButton = createImg("image/character.png","character.png")
	Character03SelectButton.style("height","36%");
	Character03SelectButton.style("width","20%");
	Character03SelectButton.style("left","58.54%");
	Character03SelectButton.style("top","5.779%");
	Character03SelectButton.style("background","transparent");
	Character03SelectButton.style("color","transparent");
	Character03SelectButton.style("position","absolute")
	Character03SelectButton.mouseClicked(CharacterSelectSelectFn3)

	Character04SelectButton = createImg("image/character.png","character.png")
	Character04SelectButton.style("height","36%");
	Character04SelectButton.style("width","20%");
	Character04SelectButton.style("left","25.2%");
	Character04SelectButton.style("top","43.16%");
	Character04SelectButton.style("background","transparent");
	Character04SelectButton.style("color","transparent");
	Character04SelectButton.style("position","absolute")
	Character04SelectButton.mouseClicked(CharacterSelectSelectFn4)

	Character05SelectButton = createImg("image/character.png","character.png")
	Character05SelectButton.style("height","36%");
	Character05SelectButton.style("width","20%");
	Character05SelectButton.style("left","58.54%");
	Character05SelectButton.style("top","43.16%");
	Character05SelectButton.style("background","transparent");
	Character05SelectButton.style("color","transparent");
	Character05SelectButton.style("position","absolute")
	Character05SelectButton.mouseClicked(CharacterSelectSelectFn5)

	Character06SelectButton = createImg("image/character.png","character.png")
	Character06SelectButton.style("height","36%");
	Character06SelectButton.style("width","20%");
	Character06SelectButton.style("left","25.2%");
	Character06SelectButton.style("top","68.74%");
	Character06SelectButton.style("background","transparent");
	Character06SelectButton.style("color","transparent");
	Character06SelectButton.style("position","absolute")
	Character06SelectButton.mouseClicked(CharacterSelectSelectFn6)

	Character07SelectButton = createImg("image/character.png","character.png")
	Character07SelectButton.style("height","36%");
	Character07SelectButton.style("width","20%");
	Character07SelectButton.style("left","43.88%");
	Character07SelectButton.style("top","68.74%");
	Character07SelectButton.style("background","transparent");
	Character07SelectButton.style("color","transparent");
	Character07SelectButton.style("position","absolute")
	Character07SelectButton.mouseClicked(CharacterSelectSelectFn7)

	Character08SelectButton = createImg("image/character.png","character.png")
	Character08SelectButton.style("height","36%");
	Character08SelectButton.style("width","20%");
	Character08SelectButton.style("left","58.54%");
	Character08SelectButton.style("top","68.74%");
	Character08SelectButton.style("background","transparent");
	Character08SelectButton.style("color","transparent");
	Character08SelectButton.style("position","absolute")
	Character08SelectButton.mouseClicked(CharacterSelectSelectFn8)

	CharacterChoosenLabelbg01 = createImg("image/choosered.png","png")
	CharacterChoosenLabelbg01.style("height","42%");
	CharacterChoosenLabelbg01.style("width","auto");
	CharacterChoosenLabelbg01.style("left","3.23%");
	CharacterChoosenLabelbg01.style("top","3%");
	CharacterChoosenLabelbg01.style("background","transparent");
	CharacterChoosenLabelbg01.style("color","transparent");
	CharacterChoosenLabelbg01.style("position","absolute")
	CharacterChoosenLabelbg01.hide()

	CharacterChoosenLabelbg02 = createImg("image/chooseblue.png","png")
	CharacterChoosenLabelbg02.style("height","42%");
	CharacterChoosenLabelbg02.style("width","auto");
	CharacterChoosenLabelbg02.style("left","75%");
	CharacterChoosenLabelbg02.style("top","3%");
	CharacterChoosenLabelbg02.style("background","transparent");
	CharacterChoosenLabelbg02.style("color","transparent");
	CharacterChoosenLabelbg02.style("position","absolute")
	CharacterChoosenLabelbg02.hide()

	CharacterChoosenLabelbg03 = createImg("image/chooseyellow.png","png")
	CharacterChoosenLabelbg03.style("height","42%");
	CharacterChoosenLabelbg03.style("width","auto");
	CharacterChoosenLabelbg03.style("left","3.23%");
	CharacterChoosenLabelbg03.style("top","37.13%");
	CharacterChoosenLabelbg03.style("background","transparent");
	CharacterChoosenLabelbg03.style("color","transparent");
	CharacterChoosenLabelbg03.style("position","absolute")
	CharacterChoosenLabelbg03.hide()

	CharacterChoosenLabelbg04 = createImg("image/choosegreen.png","png")
	CharacterChoosenLabelbg04.style("height","42%");
	CharacterChoosenLabelbg04.style("width","auto");
	CharacterChoosenLabelbg04.style("left","75%");
	CharacterChoosenLabelbg04.style("top","37.13%");
	CharacterChoosenLabelbg04.style("background","transparent");
	CharacterChoosenLabelbg04.style("color","transparent");
	CharacterChoosenLabelbg04.style("position","absolute")
	CharacterChoosenLabelbg04.hide()
	
	CharacterChoosenLabel01 = createImg("image/character.png","png")
		CharacterChoosenLabel01.style("height","40%");
		CharacterChoosenLabel01.style("width","23%");
		CharacterChoosenLabel01.style("left","-1.5%");
		CharacterChoosenLabel01.style("top","5.779%");
		CharacterChoosenLabel01.style("background","transparent");
		CharacterChoosenLabel01.style("color","transparent");
		CharacterChoosenLabel01.style("position","absolute")
		CharacterChoosenLabel01.hide()

		CharacterChoosenLabel02 = createImg("image/character.png","png")
		CharacterChoosenLabel02.style("height","40%");
		CharacterChoosenLabel02.style("width","23%");
		CharacterChoosenLabel02.style("left","70.305%");
		CharacterChoosenLabel02.style("top","5.779%");
		CharacterChoosenLabel02.style("background","transparent");
		CharacterChoosenLabel02.style("color","transparent");
		CharacterChoosenLabel02.style("position","absolute")
		CharacterChoosenLabel02.hide()

		CharacterChoosenLabel03 = createImg("image/character.png","png")
		CharacterChoosenLabel03.style("height","40%");
		CharacterChoosenLabel03.style("width","23%");
		CharacterChoosenLabel03.style("left","3%");
		CharacterChoosenLabel03.style("top","38%");
		CharacterChoosenLabel03.style("background","transparent");
		CharacterChoosenLabel03.style("color","transparent");
		CharacterChoosenLabel03.style("position","absolute")
		CharacterChoosenLabel03.hide()

		CharacterChoosenLabel04 = createImg("image/character.png","png")
		CharacterChoosenLabel04.style("height","40%");
		CharacterChoosenLabel04.style("width","23%");
		CharacterChoosenLabel04.style("left","75%");
		CharacterChoosenLabel04.style("top","38%");
		CharacterChoosenLabel04.style("background","transparent");
		CharacterChoosenLabel04.style("color","transparent");
		CharacterChoosenLabel04.style("position","absolute")
		CharacterChoosenLabel04.hide()

		

	CharacterSelectButtonhideall()
	CharacterSRCINI()


}

function CharacterSelectButtonshowall(){

	Character01SelectButton.show()
	Character02SelectButton.show()
	Character03SelectButton.show()
	Character04SelectButton.show()
	Character05SelectButton.show()
	Character06SelectButton.show()
	Character07SelectButton.show()
	CharacterSelectBox.show()
	Character08SelectButton.show()
	CharacterChoosenLabelbg01.show()
	CharacterChoosenLabelbg02.show()
	CharacterChoosenLabelbg03.show()
	CharacterChoosenLabelbg04.show()

}

function CharacterSelectButtonhideall(){

	CharacterSelectBox.hide()
	Character01SelectButton.hide()
	Character02SelectButton.hide()
	Character03SelectButton.hide()
	Character04SelectButton.hide()
	Character05SelectButton.hide()
	Character06SelectButton.hide()
	Character07SelectButton.hide()
	Character08SelectButton.hide()
	CharacterChoosenLabelbg01.hide()
	CharacterChoosenLabelbg02.hide()
	CharacterChoosenLabelbg03.hide()
	CharacterChoosenLabelbg04.hide()
	CharacterChoosenLabel01.hide()
	CharacterChoosenLabel02.hide()
	CharacterChoosenLabel03.hide()
	CharacterChoosenLabel04.hide()


}

function updateCharacterAmountScreen(){

	if(CharacterAmount >= 1){
		CharacterChoosenLabelChange(CharacterChoosenLabel01,CharacterID[0])
		CharacterChoosenLabel01.show()
	}
	else{
		
		CharacterChoosenLabel01.hide()
	}
	if(CharacterAmount >= 2){
		GameSettingDoneButton.show()
		CharacterChoosenLabelChange(CharacterChoosenLabel02,CharacterID[1])
		CharacterChoosenLabel02.show()
	}
	else{
		GameSettingDoneButton.hide()
		CharacterChoosenLabel02.hide()
	}
	if(CharacterAmount >= 3){
		CharacterChoosenLabelChange(CharacterChoosenLabel03,CharacterID[2])
		CharacterChoosenLabel03.show()
	}
	else{
		
		CharacterChoosenLabel03.hide()
	}
	if(CharacterAmount >= 4){
		CharacterChoosenLabelChange(CharacterChoosenLabel04,CharacterID[3])
		CharacterChoosenLabel04.show()
	}
	else{
		
		CharacterChoosenLabel04.hide()
	}

}

function CharacterChoosenLabelChange(a,b){
	a.removeAttribute("src")
	a.attribute("src","./image/character0" + b+".png")
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
function update_place(){
	if(player_now==1){
		chess1.style("left",CharacterPlaceStyle[CharacterPlace[player_now-1]][0].toString() + "%")
		chess1.style("top",CharacterPlaceStyle[CharacterPlace[player_now-1]][1].toString() + "%")
	}
	if(player_now==2){
		chess2.style("left",CharacterPlaceStyle[CharacterPlace[player_now-1]][0].toString() + "%")
		chess2.style("top",CharacterPlaceStyle[CharacterPlace[player_now-1]][1].toString() + "%")
	}
	if(player_now==3){
		chess3.style("left",CharacterPlaceStyle[CharacterPlace[player_now-1]][0].toString() + "%")
		chess3.style("top",CharacterPlaceStyle[CharacterPlace[player_now-1]][1].toString() + "%")
	}
	if(player_now==4){
		chess4.style("left",CharacterPlaceStyle[CharacterPlace[player_now-1]][0].toString() + "%")
		chess4.style("top",CharacterPlaceStyle[CharacterPlace[player_now-1]][1].toString() + "%")
	}
}

function delay(n) {
	return new Promise(function(resolve) {
	  setTimeout(resolve, n * 1000);
	});
  }

function BackToMenuCmd(){
	GameSettingDoneButton.hide()
	CharacterSelectBackButton.hide()
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


function GameSettingCmd(){

	CharacterSelectButtonshowall()
	CharacterSelectDiv.show()
	CharacterSelectBackButton.show()
	LeaveStartGameMenuCmd()
	BackToMenuButton.hide()


}

function GameSettingDoneCmd(){

	CharacterSelectButtonhideall()
	CharacterSelectDiv.hide()
	GameSettingDoneButton.hide()
	CharacterSelectBackButton.hide()
	BackToMenuButton.hide()
	GameStart()
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
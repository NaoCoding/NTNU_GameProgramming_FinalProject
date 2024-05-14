let scene = 0
let StartGameButton
let SettingButton,BackToMenuButton
let beerd1,beerd2,beerd3,beerd4
let head1,head2,head3,head4
let AuthorButton
let AuthorPageDiv,settingDiv
let WindowSizeSlider 
let setting_github
let questiond1,questiond2,questiond3,questiond4
let countdownter,dropscorer
let wordleboard = [[],[],[],[],[],[]]
let dropperItem = []
let cardboard = [[],[],[],[],[],[]]
cardopened = [[],[],[],[],[],[]]
cardans = [[],[],[],[],[],[]]
wordlewordArr = [[],[],[],[],[],[]]
wordlecolorArr = [[],[],[],[],[],[]]
dropperActive = [0,0,0,0,0,0,0,0]
dropperNext = 0
dropperTick = 0
idleTime = 0
timeleft = 0
cardleft = 0
cardclick = [0,0,0]
wordlecountnow = 0
wordleanswer = ""
wordleGuessed = 0
gamenow = -1
gamewin = -1

let GameSettingDoneButton , CharacterSelectBg
let backGroundColor = "rgb(251,229,220)"
let StartGameTitleColor = "rgb(196,165,0)"
let windowSize = 1.0
let FullScreen
let wWidth = 1440 
let wHeight = 739 
let player_count = 0
let eventPOPdiv
let bot_count = 0
let CharacterSelectDiv
let CharacterSelectBox
let Game_movingdoll1,Game_movingdoll2,Game_movingdoll3,Game_movingdoll4
let chance_fateQuestion, knowledgeQuestion, questionQuestion
let wordleQuestion
let wordleplayerbg,wordleplayerdoll,wordleQA


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

	knowledgeQuestion = loadJSON("https://naocoding.github.io/NTNU_GameProgramming_FinalProject/question/knowledge.json")
	questionQuestion = loadJSON("https://naocoding.github.io/NTNU_GameProgramming_FinalProject/question/question.json")
	chance_fateQuestion = loadJSON("https://naocoding.github.io/NTNU_GameProgramming_FinalProject/question/change_fate.json")
	wordleQuestion = loadStrings("https://naocoding.github.io/NTNU_GameProgramming_FinalProject/question/wordle.txt")
	
}
//chance_fateQuestion.question[1][0]

function KeyPressedConl(e){
	//console.log(e.which)
	if(gamenow == -1){}
	else if(gamenow == 1){
		if(e.which >= 65 && e.which <= 90){
			if(wordlecountnow >= 0 && wordlecountnow < 5){
				wordlewordArr[wordleGuessed][wordlecountnow] = e.key.toLowerCase()
				wordlecountnow += 1
			}
		}
		else if(e.which == 8){
			if(wordlecountnow >= 1){
				wordlewordArr[wordleGuessed][wordlecountnow - 1] = 0
				wordlecountnow -= 1
			}
			
		}
		else if(e.which == 13){
			if(wordlecountnow == 5){
				if((wordlewordArr[wordleGuessed]).join("") == wordleanswer){
					gamewin = 1
					idleTime = 0
				}
				wordleGuessed += 1
				wordlecountnow = 0 
				
			}
		}
	}
	else if(gamenow == 3){
		if(e.which == 37 || e.which == 65){
			var q = parseFloat(document.getElementById("wordleplayerdoll").style.left)
			if(q - 3 > 0)document.getElementById("wordleplayerdoll").style.left = (q - 3).toString() + "%" 
			document.getElementById("wordleplayerdoll").style.transform = ""
		}
		if(e.which == 39 || e.which == 68){
			var q = parseFloat(document.getElementById("wordleplayerdoll").style.left)
			if(q+3+parseFloat(document.getElementById("wordleplayerdoll").style.width) < 100) document.getElementById("wordleplayerdoll").style.left = (q + 3).toString() + "%"
			document.getElementById("wordleplayerdoll").style.transform = "rotateY(180deg)"

		}
	}
}


function setup() {
	
	
	//createCanvas(windowWidth, windowHeight)
	wWidth = windowWidth / wWidth
	wHeight = windowHeight / wHeight
	FullScreen = fullscreen()
	for(var i=0;i<wordleQuestion.length;i++){
		wordleQuestion[i] = wordleQuestion[i].toLowerCase()	
	}
	StartGameTitleCmd()
	
	
}
 


async function roll_the_dice(){
	
	if(diceCanClick == 0) return 
	diceCanClick = 0
	dice_result = 0
	
	
	

	if(player_now==1){
		chess1.style("z-index","100")
	}
	else{chess1.style("z-index","3")}
	if(player_now==2){
		chess2.style("z-index","100")
	}
	else{chess2.style("z-index","3")}
	if(player_now==3){
		chess3.style("z-index","100")
	}
	else{chess3.style("z-index","3")}
	if(player_now==4){
		chess4.style("z-index","100")
	}
	else{chess4.style("z-index","3")}



	


	t = 0

	var q = setInterval(() => {
		t += 1
		
		if(t==20)clearInterval(q)

		dice_result =  Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 // Math.floor(Math.random() * 12) + 1 // Math.floor(Math.random() * 12) + 1 //3 
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


	if([2,7,14,18,21,26,36,40].find((e) => e == CharacterPlace[player_now-1]) != undefined){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/fateappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.removeAttribute("src")
		eventPOPword.style("top","50%")
		eventPOPdiv.attribute("src","image/fateui.jpg")
		var ge = Math.floor(Math.random() * 15) + 1
		eventPOPword.html(chance_fateQuestion['question'][(ge).toString()][0],0)
		eventPOPword.show()
		if(ge==1){
			CharacterBeer[player_now-1] -= 1;	
			CharacterWait[player_now-1] += 1;
		}
		else if(ge==2){
			CharacterWait[player_now-1] += 2;
		}
		else if(ge==3){
			CharacterBeer[player_now-1] += 1;
			CharacterWait[player_now-1] -= 1;
			for (let index = 0; index < 4; index++) {
				CharacterWait[index] += 1
				
			}
		}
		else if(ge==4){
			CharacterWait[player_now-1] += 1;
		}
		else if(ge==5){
			CharacterBeer[player_now-1] += 1;
		}
		else if(ge==6){
			CharacterBeer[player_now-1] -= 2;
		}
		else if(ge==7){
			CharacterBeer[player_now-1] += 2;
		}
		else if(ge==8){
			CharacterBeer[player_now-1] -= 1;
		}
		else if(ge==9){
			CharacterBeer[player_now-1] += 1;
		}
		else if(ge==10){
			CharacterPlace[player_now-1] -= 3;
		}
		else if(ge==11){
			for (let index = 0; index < 4; index++) {
				CharacterPlace[index] += 5;
			}
		}
		else if(ge==12){
			for (let index = 0; index < 4; index++) {
				CharacterPlace[index] -= 3;
			}
		}
		else if(ge==13){
			CharacterPlace[player_now-1] -= 5;
		}
		else if(ge==14){
			CharacterPlace[player_now-1] -= 8;
			for (let index = 0; index < 4; index++) {
				CharacterPlace[index] += 3;
			}
		}
		else if(ge==15){
			CharacterWait[player_now-1] += 1;
		}
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		eventPOPdiv.removeAttribute("onclick")
		idleTime = 0;
		
	}

	else if([1,5,10,13,17,19,25,29,32,35,39,41].find((e) => e == CharacterPlace[player_now-1]) != undefined){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/knowledgeappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/knowledgeui.jpg")
		eventPOPword.style("top","50%")
		eventPOPword.html(knowledgeQuestion['question'][(Math.floor(Math.random() * 48) + 1).toString()],0)
		eventPOPword.show()
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		eventPOPdiv.removeAttribute("onclick")
		idleTime = 0;
	}

	

	else if([4,6,9,11,15,20,23,27,31,33,37,42].find((e) => e == CharacterPlace[player_now-1]) != undefined){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/questionappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.removeAttribute("src")
		eventPOPword.style("top","30%")
		eventPOPword.show()
		eventPOPword.removeAttribute("onclick")
		eventPOPdiv.attribute("src","image/questionui.jpg")
		eventPOPdiv.removeAttribute("onclick")
		choosed = 0
		questiond1.show()
		questiond2.show()
		questiond3.show()
		questiond4.show()
		var q = (Math.floor(Math.random() * 48) + 1)
		eventPOPword.html(questionQuestion['question'][(q).toString()][0],0)
		questiond1.html("<br><br>",0)
		questiond2.html("<br><br>",0)
		questiond3.html("<br><br>",0)
		questiond4.html("<br><br>",0)
		questiond1.attribute("onclick","choosed=1;selectedans=0;")
		questiond2.attribute("onclick","choosed=1;selectedans=1;")
		questiond3.attribute("onclick","choosed=1;selectedans=2;")
		questiond4.attribute("onclick","choosed=1;selectedans=3;")
		questiond1.html(questionQuestion['question'][(q).toString()][1],1)
		questiond2.html(questionQuestion['question'][(q).toString()][2],1)
		if(questionQuestion['question'][(q).toString()][3].length < 1)questiond3.hide()
		if(questionQuestion['question'][(q).toString()][4].length < 1)questiond4.hide()
		questiond3.html(questionQuestion['question'][(q).toString()][3],1)
		questiond4.html(questionQuestion['question'][(q).toString()][4],1)
		while(choosed == 0){
			await delay(0.003)
		}
		questiond1.hide()
		questiond2.hide()
		questiond3.hide()
		eventPOPword.style("top","50%")
		questiond4.hide()
		if(selectedans == questionQuestion['question'][(q).toString()][5]){
			eventPOPword.html("恭喜答對！ 酒醉值 - 1",0)
			CharacterBeer[player_now-1] -= 1;
		}
		else{
			eventPOPword.html("答錯了！ 酒醉值 + 1<br>正確答案為：",0)
			CharacterBeer[player_now-1] += 1;
			eventPOPword.html(questionQuestion['question'][(q).toString()][questionQuestion['question'][(q).toString()][5] + 1],1)
		}
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		idleTime = 0;

	}

	
	else if(CharacterPlace[player_now-1] == 22){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/specialappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.show()
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/settingbg.jpg")
		eventPOPword.style("top","50%")
		eventPOPword.html("踩到特殊格子：回到起點（不增加圈數）",0)
		eventPOPword.show()
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		idleTime = 0;
		CharacterPlace[player_now-1] = 0
		update_place()
		await delay(0.6)
	}

	else if(CharacterPlace[player_now-1] == 8){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/specialappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.show()
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/settingbg.jpg")
		eventPOPword.style("top","50%")
		eventPOPword.html("踩到特殊格子：移動到右上角",0)
		eventPOPword.show()
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		idleTime = 0;
		CharacterPlace[player_now-1] = 22
		update_place()
		await delay(0.6)
	}

	else if(CharacterPlace[player_now-1] == 30){
		CharacterWait[player_now-1] = 1
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/specialappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.show()
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/settingbg.jpg")
		eventPOPword.style("top","50%")
		eventPOPword.html("踩到特殊格子：休息一回合",0)
		eventPOPword.show()
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		idleTime = 0;
	}

	else if([3,12,16,24,28,34,38,43].find((e) => e == CharacterPlace[player_now-1]) != undefined){
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/smallgameappear.jpg")
		eventPOPdiv.show()
		await delay(1)
		eventPOPdiv.show()
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/settingbg.jpg")
		eventPOPword.style("top","25%")
		game = (Math.floor(Math.random() * 3) + 1) //(Math.floor(Math.random() * 2) + 1)
		if(game == 1)eventPOPword.html("小遊戲：Wordle<br>遊戲規則：在六次機會內找到隨機的長度為五的英文單字<br>綠色：正確字母正確位置<br>黃色：正確字母錯誤位置<br>灰色：無此字母或字母數量沒這麼多次",0)
		else if(game == 2)eventPOPword.html("小遊戲：記憶翻牌<br>遊戲規則：在六十秒內透過記憶力點擊同樣圖案的<br>卡片即可消除卡片<br>",0)
		else if(game == 3)eventPOPword.html("小遊戲：居酒屋接接樂<br>遊戲規則：在三十秒內接到25個以上的道具即成功<br>AD或左右方向鍵皆可操控人物<br>",0)

		eventPOPword.show()
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.style("top","50%")
		eventPOPword.hide()             
		idleTime = 0;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.removeAttribute("src")
		if(game == 1){
			eventPOPdiv.attribute("src","image/wordlebg.jpg")
			idleTime = 1;
			var waitCount = 0
			eventPOPdiv.removeAttribute("onclick")
			wordleplayerdoll.style("transform","")
			wordleplayerbg.show()
			wordleplayerdoll.show()
			wordleQA.show()
			wordleplayerbg.style("height","42%");
			wordleplayerbg.style("width","28%");
			wordleplayerbg.style("left","66%");
			wordleplayerbg.style("top","3%");
			wordleplayerdoll.style("height","40%");
			wordleplayerdoll.style("width","23%");
			wordleplayerdoll.style("left","75%");
			wordleplayerdoll.style("top","3%");
			wordleplayerdoll.removeAttribute("src")
			wordleplayerdoll.attribute("src","image/character0"+(CharacterID[player_now-1]).toString()+".png")
			wordleplayerbg.removeAttribute("src")
			wordleplayerbg.attribute("src","image/wordled"+(player_now).toString()+".png")
			wordleGuessed = 0
			wordlecountnow = 0 
			wordlewordArr = [[],[],[],[],[],[]]
			wordleanswer = wordleQuestion[(Math.floor(Math.random() * wordleQuestion.length) + 1)]
			wordlecolorArr = [[],[],[],[],[],[]]
			gamewin = 0
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					wordleboard[i][j].show()
				}
			}
			gamenow = 1
			while(wordleGuessed < 6 && gamewin != 1){
				await delay(0.05)
				updateWordleBoard()
			}
			wordleplayerbg.hide()
			wordleplayerdoll.hide()
			wordleQA.hide()
			eventPOPdiv.hide()
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					wordleboard[i][j].hide()
				}
			}
			if(gamewin == 1){
				CharacterBeer[player_now-1] -= 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲獲勝！答案為" + wordleanswer,0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				idleTime = 0;
			}
			else{
				CharacterBeer[player_now-1] += 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲失敗！答案為" + wordleanswer,0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				idleTime = 0;
			}
		}

		else if(game == 2){
			idleTime = 1;
			var waitCount = 0
			eventPOPdiv.attribute("src","image/smallgamebg.jpg")
			eventPOPdiv.removeAttribute("onclick")
			timeleft = 60
			cardopened = [[],[],[],[],[],[]]
			cardans = [[],[],[],[],[],[]]
			cardclick = [0,0,0]
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					cardopened[i][j] = 0
					cardans[i][j] = (Math.floor(Math.random() * 8) + 1)
				}
			}
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					while(card_totalcount(cardans[i][j])%2 == 1){
						cardans[i][j] = (Math.floor(Math.random() * 8) + 1)
					}
				}
			}
			cardleft = 30
			wordleplayerbg.show()
			countdownter.show()
			wordleplayerdoll.show()
			wordleplayerbg.style("height","42%");
			wordleplayerbg.style("width","28%");
			wordleplayerbg.style("left","66%");
			wordleplayerbg.style("top","30%");
			wordleplayerdoll.style("height","40%");
			wordleplayerdoll.style("width","23%");
			wordleplayerdoll.style("left","75%");
			wordleplayerdoll.style("top","30%");
			wordleplayerdoll.removeAttribute("src")
			wordleplayerdoll.attribute("src","image/character0"+(CharacterID[player_now-1]).toString()+".png")
			wordleplayerbg.removeAttribute("src")
			wordleplayerbg.attribute("src","image/wordled"+(player_now).toString()+".png")
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					cardboard[i][j].show()
				}
			}
			while(timeleft > 0 && cardleft != 0){
				await delay(0.033)
				timeleft -= 0.033
				updateCardStatus()
			}
			wordleplayerdoll.hide()
			countdownter.hide()
			wordleplayerbg.hide()
			for(var i=0;i<6;i++){
				for(var j=0;j<5;j++){
					cardboard[i][j].hide()
				}
			}
			if(cardleft > 0){
				CharacterBeer[player_now-1] += 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲失敗！",0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				idleTime = 0;
			}
			else{
				CharacterBeer[player_now-1] += 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲勝利！",0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				idleTime = 0;
			}
			
		}
		else if(game == 3){
			eventPOPdiv.attribute("src","image/smallgamebg.jpg")
			eventPOPdiv.removeAttribute("onclick")
			eventPOPdiv.show()
			countdownter.show()
			wordleplayerdoll.removeAttribute("src")
			wordleplayerdoll.style("height","40%");
			wordleplayerdoll.style("width","23%");
			wordleplayerdoll.style("top","60%")
			wordleplayerdoll.style("left","37%")
			wordleplayerdoll.attribute("src","image/character0" + (CharacterID[player_now-1]).toString() + ".png")
			dropscorer.show()
			wordleplayerdoll.show()
			timeleft = 30
			cardleft = 25
			gamenow = 3
			dropperTick = 0
			dropperNext = Math.floor(Math.random() * 8) + 1
			dropperActive = [0,0,0,0,0,0,0,0]


			while(timeleft > 0 && cardleft > 0){
				await delay(0.033)
				timeleft -= 0.033
				dropperTick += 1
				dropperGame()
			}


			countdownter.hide()
			dropscorer.hide()
			wordleplayerdoll.hide()
			gamenow = -1
			for(var i=0;i<8;i++) dropperItem[i].hide()

			if(cardleft <= 0){
				CharacterBeer[player_now-1] += 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲勝利！",0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				idleTime = 0;
			}
			else{
				CharacterBeer[player_now-1] += 1;
				eventPOPdiv.show()
				eventPOPdiv.removeAttribute("src")
				eventPOPdiv.attribute("src","image/settingbg.jpg")
				eventPOPword.style("top","50%")
				eventPOPword.html("遊戲失敗！",0)
				eventPOPword.show()
				await delay(0.35)
				idleTime = 1;
				eventPOPdiv.removeAttribute("onclick")
				eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
				var waitCount = 0
				while(waitCount < 100 && idleTime != 0){
					await delay(0.05)
					waitCount += 1
				}
				eventPOPword.hide()
				eventPOPdiv.hide()
				dropscorer.hide()
				idleTime = 0;
			}
		}



	}

	for (let index = 0; index < 4; index++) {
		if(CharacterPlace[index] < 0){
			CharacterPlace[index] += 44;
			CharacterRound[index] -= 1;
		}
	}
	
	chess1.style("left",CharacterPlaceStyle[CharacterPlace[0]][0].toString() + "%")
	chess1.style("top",CharacterPlaceStyle[CharacterPlace[0]][1].toString() + "%")
	chess2.style("left",CharacterPlaceStyle[CharacterPlace[1]][0].toString() + "%")
	chess2.style("top",CharacterPlaceStyle[CharacterPlace[1]][1].toString() + "%")
	chess3.style("left",CharacterPlaceStyle[CharacterPlace[2]][0].toString() + "%")
	chess3.style("top",CharacterPlaceStyle[CharacterPlace[2]][1].toString() + "%")
	chess4.style("left",CharacterPlaceStyle[CharacterPlace[3]][0].toString() + "%")
	chess4.style("top",CharacterPlaceStyle[CharacterPlace[3]][1].toString() + "%")
	Game_movingdoll1.style("top",(CharacterPlaceStyle[CharacterPlace[0]][1]-7.8).toString() + '%')
	Game_movingdoll1.style("left",(CharacterPlaceStyle[CharacterPlace[0]][0]-1).toString() + '%')
	Game_movingdoll2.style("top",(CharacterPlaceStyle[CharacterPlace[1]][1]-7.8).toString() + '%')
	Game_movingdoll2.style("left",(CharacterPlaceStyle[CharacterPlace[1]][0]-1).toString() + '%')
	Game_movingdoll3.style("top",(CharacterPlaceStyle[CharacterPlace[2]][1]-7.8).toString() + '%')
	Game_movingdoll3.style("left",(CharacterPlaceStyle[CharacterPlace[2]][0]-1).toString() + '%')
	Game_movingdoll4.style("top",(CharacterPlaceStyle[CharacterPlace[3]][1]-7.8).toString() + '%')
	Game_movingdoll4.style("left",(CharacterPlaceStyle[CharacterPlace[3]][0]-1).toString() + '%')

	if(CharacterBeer[0] < 0) CharacterBeer[0] = 0
	if(CharacterBeer[1] < 0) CharacterBeer[1] = 0
	if(CharacterBeer[2] < 0) CharacterBeer[2] = 0
	if(CharacterBeer[3] < 0) CharacterBeer[3] = 0

	beerd1.html((CharacterBeer[0]).toString(),0)
	beerd2.html((CharacterBeer[1]).toString(),0)
	beerd3.html((CharacterBeer[2]).toString(),0)
	beerd4.html((CharacterBeer[3]).toString(),0)

	player_now += 1
	if(player_now > CharacterAmount) player_now = 1

	while(CharacterWait[player_now-1] > 0){
		eventPOPdiv.show()
		eventPOPdiv.removeAttribute("src")
		eventPOPdiv.attribute("src","image/settingbg.jpg")
		eventPOPword.style("top","50%")
		eventPOPword.html("玩家 "+(player_now).toString() +"休息一回合",0)
		eventPOPword.show()
		await delay(0.35)
		idleTime = 1;
		eventPOPdiv.removeAttribute("onclick")
		eventPOPdiv.attribute("onclick","document.getElementById(\"eventPOPdiv\").style.display = \"None\";document.getElementById(\"eventPOPword\").style.display = \"None\";idleTime=0;")
		var waitCount = 0
		while(waitCount < 100 && idleTime != 0){
			await delay(0.05)
			waitCount += 1
		}
		eventPOPword.hide()
		eventPOPdiv.hide()
		idleTime = 0;
		CharacterWait[player_now-1] -= 1
		player_now += 1
		if(player_now > CharacterAmount) player_now = 1
	}
	
	dice_value_div.style("background-color",color_now())
	dice_value_div.html("<br>",0)
	diceCanClick = 1
	eventPOPdiv.removeAttribute("onclick")

}



function dropperGame(){

	countdownter.html((Math.floor(timeleft)).toString())
	dropscorer.html((Math.floor(25- cardleft).toString()))
	if(dropperTick % 25	 == 1){
		dropperActive[dropperNext - 1] = 1
		dropperItem[dropperNext - 1].style("left",(10 + (Math.floor(Math.random() * 70) + 1)).toString() + "%")
		dropperItem[dropperNext - 1].style("top","0%")
		dropperNext += 1
		if(dropperNext > 8 )dropperNext = 1
	}
	for(var i=0;i<8;i++){
		if(dropperActive[i] == 1){
			dropperItem[i].show()
			document.getElementById("dropperItem" + (i).toString()).style.top = (parseFloat(document.getElementById("dropperItem" + (i).toString()).style.top) +  1.2).toString() + "%"
			if((parseFloat(document.getElementById("dropperItem" + (i).toString()).style.top)) > 85){
				dropperActive[i] = 0
			}
			rect1 = document.getElementById("dropperItem" + (i).toString()).getBoundingClientRect()	
			rect2 = document.getElementById("wordleplayerdoll").getBoundingClientRect()
			if(!(
				rect1.top > rect2.bottom ||
				rect1.right < rect2.left ||
				rect1.bottom < rect2.top ||
				rect1.left > rect2.right
			  )){
				cardleft -= 1;
				dropperActive[i] = 0
			  }
		}
		else{
			dropperItem[i].hide()
			
		}
	}

}



function GameStart(){
 //rbyg
	
	diceCanClick = 1

	for(var i=0;i<8;i++){
		dropperItem[i] = createImg("image/smallgamed" + (i+1).toString() + ".png","png")
		dropperItem[i].style("width","10%")
		dropperItem[i].style("height","12%")
		dropperItem[i].style("position","absolute")
		dropperItem[i].style("z-index","1001")
		dropperItem[i].attribute("id","dropperItem" + (i).toString())
		dropperItem[i].hide()
	}

	for(var i=0;i<6;i++){
		for(var j=0;j<5;j++){
			wordleboard[i][j] = createElement("h2")
			wordleboard[i][j].style("width","6.64%")
			wordleboard[i][j].style("height","12%")
			wordleboard[i][j].style("position","absolute")
			wordleboard[i][j].style("fontSize","24px")
			wordleboard[i][j].style("textAlign","center")
			wordleboard[i][j].style("left", (24.6 + 6.77 * j).toString()+"%")
			wordleboard[i][j].style("background","rgba(255,255,255,0.5)")
			wordleboard[i][j].style("top",(16 + 11.8 * i).toString()+"%")
			
			wordleboard[i][j].style("z-index","1001")
			wordleboard[i][j].hide()
		}
	}

	for(var i=0;i<6;i++){
		for(var j=0;j<5;j++){
			cardboard[i][j] = createImg("image/card1.png")
			cardboard[i][j].style("width","6.64%")
			cardboard[i][j].style("height","12%")
			cardboard[i][j].style("position","absolute")
			cardboard[i][j].style("fontSize","24px")
			cardboard[i][j].style("textAlign","center")
			cardboard[i][j].style("left", (16 + 8 * i).toString()+"%")
			cardboard[i][j].style("top",(13 + 15 * j).toString()+"%")
			cardboard[i][j].attribute("onclick","cardclicked("+(i).toString()+","+(j).toString()+")")
			cardboard[i][j].style("z-index","1001")
			cardboard[i][j].hide()
		}
	}

	
	
	countdownter = createElement("h1")
	countdownter.style("height","5%");
	countdownter.style("width","10%");
	countdownter.style("left","72%");
	countdownter.style("top","5%");
	countdownter.style("textAlign","center")
	countdownter.style("background","rgba(255,255,255,0.5)");
	countdownter.style("color","black");
	countdownter.style("position","absolute")
	countdownter.style("zIndex","100000")
	countdownter.hide()

	dropscorer = createElement("h1")
	dropscorer.style("height","5%");
	dropscorer.style("width","10%");
	dropscorer.style("left","85%");
	dropscorer.style("top","5%");
	dropscorer.style("textAlign","center")
	dropscorer.style("background","rgba(255,255,255,0.5)");
	dropscorer.style("color","black");
	dropscorer.style("position","absolute")
	dropscorer.style("zIndex","100000")
	dropscorer.hide()

	eventPOPdiv = createImg("image/game_bg.jpg","jpg");
	eventPOPdiv.style("width","100%")
	eventPOPdiv.style("height","100%")
	eventPOPdiv.style("position","absolute")
	eventPOPdiv.style("top","0px")
	eventPOPdiv.style("left","0px")
	eventPOPdiv.style("z-index","1000")
	eventPOPdiv.hide()
	eventPOPdiv.attribute("id","eventPOPdiv")

	wordleQA = createElement("h2")
	wordleQA.style("height","25%");
	wordleQA.style("textAlign","center");
	wordleQA.html("<br><br>鍵盤A ~ Z : 輸入字母<br>按下Enter : 確定<br>按下 BackSpace : 刪除字母<br>")
	wordleQA.style("width","28%");
	wordleQA.style("left","66%");
	wordleQA.style("top","50%");
	wordleQA.style("background","rgba(255,255,255,0.5)");
	wordleQA.style("borderRadius","10%")
	wordleQA.style("position","absolute")
	wordleQA.style("zIndex","100000")
	wordleQA.hide()

	wordleplayerbg = createImg("image/chooseblue.png","png")
	wordleplayerbg.style("height","42%");
	wordleplayerbg.style("width","28%");
	wordleplayerbg.style("left","66%");
	wordleplayerbg.style("top","3%");
	wordleplayerbg.style("background","transparent");
	wordleplayerbg.style("color","transparent");
	wordleplayerbg.style("position","absolute")
	wordleplayerbg.style("zIndex","100000")
	wordleplayerbg.hide()


	wordleplayerdoll = createImg("image/character.png","png")
	wordleplayerdoll.style("height","40%");
	wordleplayerdoll.style("width","23%");
	wordleplayerdoll.style("left","75%");
	wordleplayerdoll.style("top","3%");
	wordleplayerdoll.style("background","transparent");
	wordleplayerdoll.style("color","transparent");
	wordleplayerdoll.style("position","absolute")
	wordleplayerdoll.style("zIndex","100001")
	wordleplayerdoll.attribute("id","wordleplayerdoll")
	wordleplayerdoll.hide()

	
	
	eventPOPword = createElement("h1")
	eventPOPword.attribute("id","eventPOPword")
	eventPOPword.style("width","80%")
	eventPOPword.style("height","15%")
	eventPOPword.style("position","absolute")
	eventPOPword.style("top","50%")
	eventPOPword.style("fontSize","36px")
	eventPOPword.style("left","10%")
	eventPOPword.style("textAlign","center")
	eventPOPword.style("z-index","1001")
	eventPOPword.hide()

	game_bg_div = createElement('div')

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

	Game_movingdoll1 = createImg("image/character01.png","png")

	Game_movingdoll1.style("width","5%")
	Game_movingdoll1.style("height","2")
	Game_movingdoll1.style("position","absolute")
	Game_movingdoll1.show()
	Game_movingdoll1.style("z-index","101")

	Game_movingdoll2 = createImg("image/character01.png","png")

	Game_movingdoll2.style("width","5%")
	Game_movingdoll2.style("height","2")
	Game_movingdoll2.style("position","absolute")
	Game_movingdoll2.show()
	Game_movingdoll2.style("z-index","101")

	Game_movingdoll3 = createImg("image/character01.png","png")

	Game_movingdoll3.style("width","5%")
	Game_movingdoll3.style("height","2")
	Game_movingdoll3.style("position","absolute")
	Game_movingdoll3.show()
	Game_movingdoll3.style("z-index","101")

	Game_movingdoll4 = createImg("image/character01.png","png")

	Game_movingdoll4.style("width","5%")
	Game_movingdoll4.style("height","2")
	Game_movingdoll4.style("position","absolute")
	Game_movingdoll4.show()
	Game_movingdoll4.style("z-index","101")

	CharacterChoosenLabelChange(Game_movingdoll1,CharacterID[0])
	CharacterChoosenLabelChange(Game_movingdoll2,CharacterID[1])
	CharacterChoosenLabelChange(Game_movingdoll3,CharacterID[2])
	CharacterChoosenLabelChange(Game_movingdoll4,CharacterID[3])

	Game_movingdoll1.style("top",(CharacterPlaceStyle[CharacterPlace[0]][1]-7.8).toString() + '%')
	Game_movingdoll1.style("left",(CharacterPlaceStyle[CharacterPlace[0]][0]-1).toString() + '%')
	Game_movingdoll2.style("top",(CharacterPlaceStyle[CharacterPlace[1]][1]-7.8).toString() + '%')
	Game_movingdoll2.style("left",(CharacterPlaceStyle[CharacterPlace[1]][0]-1).toString() + '%')
	Game_movingdoll3.style("top",(CharacterPlaceStyle[CharacterPlace[2]][1]-7.8).toString() + '%')
	Game_movingdoll3.style("left",(CharacterPlaceStyle[CharacterPlace[2]][0]-1).toString() + '%')
	Game_movingdoll4.style("top",(CharacterPlaceStyle[CharacterPlace[3]][1]-7.8).toString() + '%')
	Game_movingdoll4.style("left",(CharacterPlaceStyle[CharacterPlace[3]][0]-1).toString() + '%')


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

	if(CharacterAmount > 0) Game_movingdoll1.show()
	else Game_movingdoll1.hide()

	if(CharacterAmount > 1) Game_movingdoll2.show()
	else Game_movingdoll2.hide()
	if(CharacterAmount > 2) Game_movingdoll3.show()
	else Game_movingdoll3.hide()
	if(CharacterAmount > 3) Game_movingdoll4.show()
	else Game_movingdoll4.hide()

	head1 = createImg("image/character0"+(CharacterID[0]).toString()+"_head.png")
	head1.style("left","15%")
	head1.style("top",'48%')
	head1.style('width','7%')
	head1.style('height','11%')
	head1.style("position",'absolute')

	head2 = createImg("image/character0"+(CharacterID[1]).toString()+"_head.png")
	head2.style("left","15%")
	head2.style("top",'56%')
	head2.style('width','7%')
	head2.style('height','11%')
	head2.style("position",'absolute')

	head3 = createImg("image/character0"+(CharacterID[2]).toString()+"_head.png")
	head3.style("left","15%")
	head3.style("top",'64%')
	head3.style('width','7%')
	head3.style('height','11%')
	head3.style("position",'absolute')
	if(CharacterAmount<3) head3.hide()

	head4 = createImg("image/character0"+(CharacterID[3]).toString()+"_head.png")
	head4.style("left","15%")
	head4.style("top",'72%')
	head4.style('width','7%')
	head4.style('height','11%')
	head4.style("position",'absolute')
	if(CharacterAmount<4) head4.hide()

	beer1 = createImg("image/beer.png")
	beer1.style("left","27%")
	beer1.style("top",'53.9%')
	beer1.style('width','3.5%')
	beer1.style('height','5%')
	beer1.style("position",'absolute')

	beer2 = createImg("image/beer.png")
	beer2.style("left","27%")
	beer2.style("top",'61.6%')
	beer2.style('width','3.5%')
	beer2.style('height','5%')
	beer2.style("position",'absolute')

	beer3 = createImg("image/beer.png")
	beer3.style("left","27%")
	beer3.style("top",'69.3%')
	beer3.style('width','3.5%')
	beer3.style('height','5%')
	beer3.style("position",'absolute')

	beer33 = createImg("image/beer.png")
	beer33.style("left","29%")
	beer33.style("top",'69.3%')
	beer33.style('width','3.5%')
	beer33.style('height','5%')
	beer33.style("position",'absolute')

	beer333 = createImg("image/beer.png")
	beer333.style("left","31%")
	beer333.style("top",'69.3%')
	beer333.style('width','3.5%')
	beer333.style('height','5%')
	beer333.style("position",'absolute')

	beer4 = createImg("image/beer.png")
	beer4.style("left","27%")
	beer4.style("top",'77%')
	beer4.style('width','3.5%')
	beer4.style('height','5%')
	beer4.style("position",'absolute')

	beer11 = createImg("image/beer.png")
	beer11.style("left","29%")
	beer11.style("top",'53.9%')
	beer11.style('width','3.5%')
	beer11.style('height','5%')
	beer11.style("position",'absolute')

	beer22 = createImg("image/beer.png")
	beer22.style("left","29%")
	beer22.style("top",'61.6%')
	beer22.style('width','3.5%')
	beer22.style('height','5%')
	beer22.style("position",'absolute')

	

	beer44 = createImg("image/beer.png")
	beer44.style("left","29%")
	beer44.style("top",'77%')
	beer44.style('width','3.5%')
	beer44.style('height','5%')
	beer44.style("position",'absolute')

	beer111 = createImg("image/beer.png")
	beer111.style("left","31%")
	beer111.style("top",'53.9%')
	beer111.style('width','3.5%')
	beer111.style('height','5%')
	beer111.style("position",'absolute')

	beer222 = createImg("image/beer.png")
	beer222.style("left","31%")
	beer222.style("top",'61.6%')
	beer222.style('width','3.5%')
	beer222.style('height','5%')
	beer222.style("position",'absolute')

	

	beer444 = createImg("image/beer.png")
	beer444.style("left","31%")
	beer444.style("top",'77%')
	beer444.style('width','3.5%')
	beer444.style('height','5%')
	beer444.style("position",'absolute')

	beerd1 = createElement("h2")
	beerd1.style("left","22%")
	beerd1.style("top",'52.5%')
	beerd1.style('width','3%')
	beerd1.style('height','3%')
	beerd1.style("color","#EBEBFF")
	beerd1.style('textAlign','center')
	beerd1.style("position",'absolute')
	beerd1.html((CharacterBeer[0]).toString(),0)

	beerd2 = createElement("h2")
	beerd2.style("left","22%")
	beerd2.style("top",'60.4%')
	beerd2.style('width','3%')
	beerd2.style('height','3%')
	beerd2.style("color","#EBEBFF")
	beerd2.style('textAlign','center')
	beerd2.style("position",'absolute')
	beerd2.html((CharacterBeer[1]).toString(),0)

	beerd3 = createElement("h2")
	beerd3.style("left","22%")
	beerd3.style("top",'68.3%')
	beerd3.style('width','3%')
	beerd3.style('height','3%')
	beerd3.style("color","#EBEBFF")
	beerd3.style('textAlign','center')
	beerd3.style("position",'absolute')
	beerd3.html((CharacterBeer[1]).toString(),0)

	beerd4 = createElement("h2")
	beerd4.style("left","22%")
	beerd4.style("top",'76.2%')
	beerd4.style('width','3%')
	beerd4.style('height','3%')
	beerd4.style("color","#EBEBFF")
	beerd4.style('textAlign','center')
	beerd4.style("position",'absolute')
	beerd4.html((CharacterBeer[1]).toString(),0)

	if(CharacterAmount < 3){
		beer3.hide()
		beer33.hide()
		beer333.hide()
		beerd3.hide()
	}

	if(CharacterAmount < 4){
		beer4.hide()
		beer44.hide()
		beer444.hide()
		beerd4.hide()
	}

	questiond1 = createElement("h2")
	questiond1.hide()
	questiond1.style("backgroundColor","rgba(255,255,255,0.5)")
	questiond1.style("left","7%")
	questiond1.style("top",'56.2%')
	questiond1.style('width','40%')
	questiond1.style('height','15%')
	questiond1.style('textAlign','center')
	questiond1.style("position",'absolute')
	questiond1.style("zIndex","1500")
	questiond1.style("borderRadius","10%")

	

	questiond2 = createElement("h2")
	questiond2.hide()
	questiond2.style("backgroundColor","rgba(255,255,255,0.5)")
	questiond2.style("left","53%")
	questiond2.style("top",'56.2%')
	questiond2.style('width','40%')
	questiond2.style('height','15%')
	questiond2.style('textAlign','center')
	questiond2.style("position",'absolute')
	questiond2.style("zIndex","1500")
	questiond2.style("borderRadius","10%")

	questiond3 = createElement("h2")
	questiond3.hide()
	questiond3.style("backgroundColor","rgba(255,255,255,0.5)")
	questiond3.style("left","7%")
	questiond3.style("top",'76.2%')
	questiond3.style('width','40%')
	questiond3.style('height','15%')
	questiond3.style('textAlign','center')
	questiond3.style("position",'absolute')
	questiond3.style("zIndex","1500")
	questiond3.style("borderRadius","10%")

	questiond4 = createElement("h2")
	questiond4.hide()
	questiond4.style("backgroundColor","rgba(255,255,255,0.5)")
	questiond4.style("left","53%")
	questiond4.style("top",'76.2%')
	questiond4.style('width','40%')
	questiond4.style('height','15%')
	questiond4.style('textAlign','center')
	questiond4.style("position",'absolute')
	questiond4.style("zIndex","1500")
	questiond4.style("borderRadius","10%")

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
	Character02SelectButton.attribute("src","image/character02_neck.png")
	Character03SelectButton.attribute("src","image/character03_neck.png")
	Character04SelectButton.attribute("src","image/character04_neck.png")
	Character05SelectButton.attribute("src","image/character05_neck.png")
	Character06SelectButton.attribute("src","image/character06_neck.png")
	Character07SelectButton.attribute("src","image/character07_neck.png")
	Character08SelectButton.attribute("src","image/character08_neck.png")
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
	Character01SelectButton.style("width","22%");
	Character01SelectButton.style("left","24.2%");
	Character01SelectButton.style("top","0%");
	Character01SelectButton.style("zIndex","5");
	Character01SelectButton.style("background","transparent");
	Character01SelectButton.style("color","transparent");
	Character01SelectButton.style("position","absolute")
	Character01SelectButton.mouseClicked(CharacterSelectSelectFn1)

	Character02SelectButton = createImg("image/character.png","character.png")
	Character02SelectButton.style("height","45%");
	Character02SelectButton.style("width","22%");
	Character02SelectButton.style("left","39%");
	Character02SelectButton.style("top","0%");
	Character02SelectButton.style("zIndex","5");
	Character02SelectButton.style("background","transparent");
	Character02SelectButton.style("color","transparent");
	Character02SelectButton.style("position","absolute")
	Character02SelectButton.mouseClicked(CharacterSelectSelectFn2)

	Character03SelectButton = createImg("image/character.png","character.png")
	Character03SelectButton.style("height","45%");
	Character03SelectButton.style("width","22%");
	Character03SelectButton.style("left","54.2%");
	Character03SelectButton.style("top","0%");
	Character03SelectButton.style("zIndex","5");
	Character03SelectButton.style("background","transparent");
	Character03SelectButton.style("color","transparent");
	Character03SelectButton.style("position","absolute")
	Character03SelectButton.mouseClicked(CharacterSelectSelectFn3)

	Character04SelectButton = createImg("image/character.png","character.png")
	Character04SelectButton.style("height","45%");
	Character04SelectButton.style("width","22%");
	Character04SelectButton.style("left","24.2%");
	Character04SelectButton.style("top","25.7%");
	Character04SelectButton.style("zIndex","4");
	Character04SelectButton.style("background","transparent");
	Character04SelectButton.style("color","transparent");
	Character04SelectButton.style("position","absolute")
	Character04SelectButton.mouseClicked(CharacterSelectSelectFn4)

	Character05SelectButton = createImg("image/character.png","character.png")
	Character05SelectButton.style("height","45%");
	Character05SelectButton.style("width","22%");
	Character05SelectButton.style("left","54.2%");
	Character05SelectButton.style("top","25.7%");
	Character05SelectButton.style("zIndex","4");
	Character05SelectButton.style("background","transparent");
	Character05SelectButton.style("color","transparent");
	Character05SelectButton.style("position","absolute")
	Character05SelectButton.mouseClicked(CharacterSelectSelectFn5)

	Character06SelectButton = createImg("image/character.png","character.png")
	Character06SelectButton.style("height","45%");
	Character06SelectButton.style("width","22%");
	Character06SelectButton.style("left","24.2%");
	Character06SelectButton.style("top","51.4%");
	Character06SelectButton.style("background","transparent");
	Character06SelectButton.style("color","transparent");
	Character06SelectButton.style("position","absolute")
	Character06SelectButton.mouseClicked(CharacterSelectSelectFn6)

	Character07SelectButton = createImg("image/character.png","character.png")
	Character07SelectButton.style("height","45%");
	Character07SelectButton.style("width","22%");
	Character07SelectButton.style("left","39%");
	Character07SelectButton.style("top","51.4%");
	Character07SelectButton.style("background","transparent");
	Character07SelectButton.style("color","transparent");
	Character07SelectButton.style("position","absolute")
	Character07SelectButton.mouseClicked(CharacterSelectSelectFn7)

	

	Character08SelectButton = createImg("image/character.png","character.png")
	Character08SelectButton.style("height","45%");
	Character08SelectButton.style("width","22%");
	Character08SelectButton.style("left","54.2%");
	Character08SelectButton.style("top","51.4%");
	Character08SelectButton.style("background","transparent");
	Character08SelectButton.style("color","transparent");
	Character08SelectButton.style("position","absolute")
	Character08SelectButton.mouseClicked(CharacterSelectSelectFn8)



	CharacterChoosenLabelbg01 = createImg("image/choosered.png","png")
	CharacterChoosenLabelbg01.style("height","42%");
	CharacterChoosenLabelbg01.style("width","22%");
	CharacterChoosenLabelbg01.style("left","3.23%");
	CharacterChoosenLabelbg01.style("top","3%");
	CharacterChoosenLabelbg01.style("background","transparent");
	CharacterChoosenLabelbg01.style("color","transparent");
	CharacterChoosenLabelbg01.style("position","absolute")
	CharacterChoosenLabelbg01.hide()

	CharacterChoosenLabelbg02 = createImg("image/chooseblue.png","png")
	CharacterChoosenLabelbg02.style("height","42%");
	CharacterChoosenLabelbg02.style("width","22%");
	CharacterChoosenLabelbg02.style("left","75%");
	CharacterChoosenLabelbg02.style("top","3%");
	CharacterChoosenLabelbg02.style("background","transparent");
	CharacterChoosenLabelbg02.style("color","transparent");
	CharacterChoosenLabelbg02.style("position","absolute")
	CharacterChoosenLabelbg02.hide()

	CharacterChoosenLabelbg03 = createImg("image/chooseyellow.png","png")
	CharacterChoosenLabelbg03.style("height","42%");
	CharacterChoosenLabelbg03.style("width","22%");
	CharacterChoosenLabelbg03.style("left","3.23%");
	CharacterChoosenLabelbg03.style("top","37.13%");
	CharacterChoosenLabelbg03.style("background","transparent");
	CharacterChoosenLabelbg03.style("color","transparent");
	CharacterChoosenLabelbg03.style("position","absolute")
	CharacterChoosenLabelbg03.hide()

	CharacterChoosenLabelbg04 = createImg("image/choosegreen.png","png")
	CharacterChoosenLabelbg04.style("height","42%");
	CharacterChoosenLabelbg04.style("width","22%");
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
		CharacterChoosenLabel03.style("left","5%");
		CharacterChoosenLabel03.style("top","38%");
		CharacterChoosenLabel03.style("background","transparent");
		CharacterChoosenLabel03.style("color","transparent");
		CharacterChoosenLabel03.style("position","absolute")
		CharacterChoosenLabel03.hide()

		CharacterChoosenLabel04 = createImg("image/character.png","png")
		CharacterChoosenLabel04.style("height","40%");
		CharacterChoosenLabel04.style("width","23%");
		CharacterChoosenLabel04.style("left","76.805%");
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
	Game_movingdoll1.style("top",(CharacterPlaceStyle[CharacterPlace[0]][1]-7.8).toString() + '%')
	Game_movingdoll1.style("left",(CharacterPlaceStyle[CharacterPlace[0]][0]-1).toString() + '%')
	Game_movingdoll2.style("top",(CharacterPlaceStyle[CharacterPlace[1]][1]-7.8).toString() + '%')
	Game_movingdoll2.style("left",(CharacterPlaceStyle[CharacterPlace[1]][0]-1).toString() + '%')
	Game_movingdoll3.style("top",(CharacterPlaceStyle[CharacterPlace[2]][1]-7.8).toString() + '%')
	Game_movingdoll3.style("left",(CharacterPlaceStyle[CharacterPlace[2]][0]-1).toString() + '%')
	Game_movingdoll4.style("top",(CharacterPlaceStyle[CharacterPlace[3]][1]-7.8).toString() + '%')
	Game_movingdoll4.style("left",(CharacterPlaceStyle[CharacterPlace[3]][0]-1).toString() + '%')
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
	githubpngstyle = "style=height:15%;width:8%;"
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

async function cardclicked(i,j){

	if(cardopened[i][j] != 0) return
	cardopened[i][j] = 1
	if(cardclick[2] == 0){
		cardclick[0] = i
		cardclick[1] = j
		cardclick[2] = 1
	}
	else if(cardclick[2] == 1){
		if(cardans[i][j] == cardans[cardclick[0]][cardclick[1]]){
			cardleft -= 2
			cardopened[i][j] = 2
			cardopened[cardclick[0]][cardclick[1]] = 2
		}
		else{
			await delay(0.5)
			cardopened[i][j] = 0
			cardopened[cardclick[0]][cardclick[1]] = 0
		}
		cardclick[2] = 0
		
	}

}

function card_totalcount(a){
	var total = 0
	for(var i=0;i<6;i++){
		for(var j=0;j<5;j++){
			if(cardans[i][j] == a){
				total += 1
			}
		}
	}
	return total
}

function updateCardStatus(){

	countdownter.html((Math.floor(timeleft)).toString())
	for(var i=0;i<6;i++){
		for(var j=0;j<5;j++){
			if(cardopened[i][j] == 0){
				cardboard[i][j].attribute("src","image/cardback.png")
			}
			else{
				cardboard[i][j].attribute("src","image/card" + (cardans[i][j]).toString() + ".png")
			}
		}
	}

}

function updateWordleBoard(){

	for(var i=0;i<6;i++){
		for(var j=0;j<5;j++){
			if(wordlewordArr[i][j] != 0 && wordlewordArr[i][j] != undefined){
				wordleboard[i][j].html("<br><br><b>" + wordlewordArr[i][j] + "<b>")
			}
			else{
				wordleboard[i][j].html("")
			}
		}
	}	
	for(var i=0;i<wordleGuessed;i++){
		counter = [0,0,0,0,0]
		for(var j=0;j<5;j++){
			if(wordlewordArr[i][j] == wordleanswer[j]){
				wordleboard[i][j].style("background","rgba(0,255,0,0.5)")
				counter[j] = 1
			}
			else if((wordleanswer.split("")).find((e) => e == wordlewordArr[i][j]) == undefined){
				wordleboard[i][j].style("background","rgba(118,118,118,0.5)")
				counter[j] = -1
			}
		}

		for(var j=0;j<5;j++){
			if(counter[j]!=0)continue
			count = 0
			bcount = 0
			for(var k=0;k<j;k++){
				if(wordlewordArr[i][k] == wordlewordArr[i][j] && counter[k] == 0) count ++
			}
			for(var k=0;k<5;k++){
				if(wordleanswer[k] == wordlewordArr[i][j] && counter[k] != 1) bcount ++
			}
			if(bcount > count)wordleboard[i][j].style("background","rgba(255,255,0,0.5)")
			else wordleboard[i][j].style("background","rgba(118,118,118,0.5)")
		}
		
	}
	for(var i = wordleGuessed ; i  < 6; i++){
		for(var j=0;j<5;j++)wordleboard[i][j].style("background","rgba(255,255,255,0.5)")
	}

}

document.onkeydown = KeyPressedConl
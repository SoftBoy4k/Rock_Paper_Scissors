import { useState } from 'react'
import rockImg from './img/Rock.png'
import paperImg from './img/Paper.png'
import scissorsImg from './img/Scissors.png'
import { Fight } from './Fight'
import './App.css'

export const App = () => {
	const [playerImg, setPlayerImg] = useState('')
	const [botImg, setBotImg] = useState('')
	const [playerWinCount, setPlayerWinCount] = useState(0)
	const [botWinCount, setBotWinCount] = useState(0)
	const [isPlayerWin, setIsPlayerWin] = useState(false)
	const [isBotWin, setIsBotWin] = useState(false)
	const [textContent, setTextContent] = useState('Play!')
	const [flag, setFlag] = useState(false)

	// let flag = false

	function botChoiceValueFunc (){
		return Math.floor(Math.random() * 3);
	}

	function battle (playerValue, botValue){
		if(playerValue === botValue){
			return 0; // Draw
		} else if ((playerValue === 0 && botValue === 1)
		|| (playerValue === 1 && botValue === 2) 
		|| (playerValue === 2 && botValue === 0)){
			return -1; // Lose
		} else {
			return 1; // Win
		}
	}

	function game(e){

		console.log('Game is running!')
		console.log('flag', flag)

		if(flag){
			return;
		}
		
		setFlag(true);

		console.log('flag2', flag)
		
		const elem = e.target
		const botChoiceValue = botChoiceValueFunc()
		const battleOutcome = battle(+elem.dataset.item, botChoiceValue)

		setPlayerImg(elem.src)

		if (botChoiceValue === 0){
			setBotImg(rockImg)
		} else if (botChoiceValue === 1){
			setBotImg(paperImg)
		} else {
			setBotImg(scissorsImg)
		}

		if (battleOutcome === 1){
			setTextContent('WIN!')
			setIsPlayerWin(true)
			setPlayerWinCount(playerWinCount + 1)
		} else if (battleOutcome === -1){
			setTextContent('LOSE!')
			setIsBotWin(true)
			setBotWinCount(botWinCount + 1)
		} else {
			setTextContent('DRAW!')
		}

		setTimeout(()=>{
			setIsPlayerWin(false)
			setIsBotWin(false)
			setPlayerImg('')
			setBotImg('')
			setTextContent('Play!')
			setFlag(false)
		},3000)
	}

	return (
		<div>
		<div className='btns'>
			<img src={rockImg} className="btn" data-item='0' onClick={game}/>
			<img src={paperImg} className="btn" data-item='1' onClick={game}/>
			<img src={scissorsImg} className="btn" data-item='2' onClick={game}/>
		</div>

		<p className="text">{textContent}</p>

		<Fight plImg={playerImg} btImg={botImg} isPlWin={isPlayerWin} isBtWin={isBotWin} plWinCount={playerWinCount} btWinCount={botWinCount} />
		</div>
	)
}


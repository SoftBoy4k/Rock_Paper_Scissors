import React from 'react'

export const Fight = ({plImg, btImg, plWinCount, btWinCount, isPlWin, isBtWin}) => {
    return (
        <div>
            <div className="fight">
                <div className="fighters">
                    {plImg ? <img className={isPlWin ? 'fighters-img fighters-winer' : 'fighters-img'} src={plImg}/> : undefined}
                <p className="fighters-text">Player</p>
                </div>
                <span className="vs">-</span>
                <div className="fighters">
                    {btImg ? <img className={isBtWin ? 'fighters-img fighters-winer' : 'fighters-img'} src={btImg}/> : undefined}
                    <p className="fighters-text">Bot</p>
                </div>
            </div>

            <div className="scoreboard"><span>{plWinCount}</span>:<span>{btWinCount}</span></div>
        </div>
    )
}

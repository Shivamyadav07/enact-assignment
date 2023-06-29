import React from 'react'
import style from './posterImage.module.css'

export const PosterImage = ({title}) => {
    return (
        <div style={{height:"280px"}}>
            <div className={style.posterImageDiv}>
                <img className={style.mainImage} src="https://wallpapercave.com/dwp2x/wp12330719.png" alt='posterLarge' />
                <div className={style.smallImageDiv}>
                    <img className={style.smallImage} src='https://wallpapercave.com/dwp2x/wp12330722.jpg' alt='posterSmall' />
                    <p className={style.movieTitle}>{title}</p>
                </div>
            </div>
        </div>
    )
}

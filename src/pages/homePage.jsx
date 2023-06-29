import React, { useEffect } from 'react'
import style from './homePage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getmoviedata } from '../redux/action';
import { LatestSlider } from '../components/latestSlider';

export const HomePage = () => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie);
    console.log(movie);

    const latest = movie && movie.filter((e) => {
        return e.year===1917;
    });
    console.log(latest, "latest");

    useEffect(() => {
        dispatch(getmoviedata());
    }, [dispatch])

    return (
        <div className={style.homePageContainer}>
            <LatestSlider data={latest} />
        </div>
    )
}

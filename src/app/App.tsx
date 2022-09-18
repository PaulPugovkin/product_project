import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPageAsync} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Change theme
            </button>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <AppRouter/>
        </div>
    )
}
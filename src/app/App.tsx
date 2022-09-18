import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
            <button onClick={toggleTheme}>
                Change theme
            </button>
        </div>
    )
}
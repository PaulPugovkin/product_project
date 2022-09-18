import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>Main page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About page</AppLink>
            </div>
        </div>
    )
};

export default NavBar;

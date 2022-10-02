import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export function NavBar({ className }: NavBarProps) {
    return (
        <div className={classNames(cls.NavBar, {}, [className])} />
    );
}

export default NavBar;

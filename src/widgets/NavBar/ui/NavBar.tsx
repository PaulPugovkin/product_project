import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export function NavBar({ className }: NavBarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {
                    t('Войти')
                }
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum deserunt ea eius, expedita obcaecati omnis
                    pariatur quidem quos rem voluptatem.
                </p>
            </Modal>
        </div>
    );
}

export default NavBar;

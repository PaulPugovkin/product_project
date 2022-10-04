import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={className}>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;

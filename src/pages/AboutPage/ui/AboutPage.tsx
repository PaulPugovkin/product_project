import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string
}

export const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div className={className}>{t('О нас')}</div>
    );
};

export default AboutPage;

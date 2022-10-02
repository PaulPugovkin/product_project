import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Is in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Is a button with clear styles', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});

import { describe, expect, it } from 'vitest';
import {
    translateCategory,
    translateGameDescription,
    translateGameTitle,
    translatePublisher,
} from './translations';

describe('Korean catalog translations', () => {
    it('translates game titles, categories, and publishers', () => {
        expect(translateGameTitle('DevOps Dominion')).toBe('데브옵스 제국');
        expect(translateCategory('Strategy')).toBe('전략');
        expect(translatePublisher('GitHub Games')).toBe('깃허브 게임즈');
    });

    it('translates game descriptions and the crowdfunding prompt', () => {
        expect(translateGameDescription('Cloud Conqueror', 'Original description'))
            .toContain('이 게임의 크라우드펀딩을 후원해 주세요!');
        expect(translateGameDescription('Cloud Conqueror', 'Original description'))
            .not.toContain('Original description');
    });

    it('preserves unknown catalog values', () => {
        expect(translateGameTitle('New game')).toBe('New game');
        expect(translateCategory('New category')).toBe('New category');
        expect(translatePublisher('New publisher')).toBe('New publisher');
        expect(translateGameDescription('New game', 'New description')).toBe('New description');
    });
});

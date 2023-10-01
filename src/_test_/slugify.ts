import { slugify } from 'transliteration';
import { RecommendedSlugifyAllowedCharacters } from '../lib';

export const mySlugify = (str: string) => {
    return slugify(str, {
        allowedChars: RecommendedSlugifyAllowedCharacters
    })
}
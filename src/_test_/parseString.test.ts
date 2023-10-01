import { slugify } from 'transliteration';
import { parseString } from "../lib/parseString";
import { mySlugify } from './slugify';

describe('parseString', () => {
  it('should remove other values from string', () => {
    expect(mySlugify('..ALİ VELİ.\n      foo_bar\r\t\n\t\\')).toBe('ali-veli-foo-bar');
  })
  it('should parse ali', () => {
    expect(parseString('ali').sort()).toEqual(['ali'].sort());
  })
  it('should parse ali-veli-duru', () => {
    expect(parseString('ali-veli-duru').sort()).toEqual([
      'ali',
      'veli',
      'duru',
    ].sort());
  })
})
import { parseData } from "../lib/parseData";
import { mySlugify } from "./slugify";

describe('parseData', () => {

  it('should parse ali', () => {
    const config = {
      idPropertyName: 'id',
      ftsFieldNames: ['title', 'desc'],
      ftsFieldWeights: [2, 1],
    }
    const data = {
      id: 15,
      title: mySlugify('The Godfather'),
      desc: mySlugify('Don Vito Corleone, head of...')
    }
    const expectedObj = [
      ['the', 15, 2],
      ['godfather', 15, 2],
      ['don', 15, 1],
      ['vito', 15, 1],
      ['corleone', 15, 1],
      ['head', 15, 1],
      ['of', 15, 1],
    ];
    expect(parseData(config, data)).toEqual(expectedObj)
  })
})
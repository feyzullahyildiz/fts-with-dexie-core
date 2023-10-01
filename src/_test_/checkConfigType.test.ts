import { checkConfigType, NotValidConfigTypeError } from "../lib/checkConfigType";

describe('checkConfigType', () => {

  it('should throw with nullish config', () => {
    expect(() => checkConfigType(null)).toThrow(new NotValidConfigTypeError('config should be an object'))
    expect(() => checkConfigType(undefined)).toThrow(new NotValidConfigTypeError('config should be an object'))
    expect(() => checkConfigType(0)).toThrow(new NotValidConfigTypeError('config should be an object'))
  })
  it('should throw with empty object', () => {
    expect(() => checkConfigType({})).toThrow(new NotValidConfigTypeError('config should have idPropertyName as property with string value'))
  })
  it('config.idPropertyName should be string', () => {
    expect(() => checkConfigType({
      idPropertyName: 1
    })).toThrow(new NotValidConfigTypeError('config should have idPropertyName as property with string value'))
  })
  it('config.ftsFieldNames should be Array', () => {
    expect(() => checkConfigType({
      idPropertyName: 'id',
    })).toThrow(new NotValidConfigTypeError('ftsFieldNames should be an Array with strings in config'))
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: 'id',
    })).toThrow(new NotValidConfigTypeError('ftsFieldNames should be an Array with strings in config'))
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: [],
    })).toThrow(new NotValidConfigTypeError('ftsFieldNames should be an Array with strings in config'))
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: [1],
    })).toThrow(new NotValidConfigTypeError('ftsFieldNames should only include strings'))
  })
  it('config.ftsFieldWeights should be Array', () => {
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: ['title'],
    })).toThrow(new NotValidConfigTypeError('ftsFieldWeights should be an Array with strings in config'))
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: ['title'],
      ftsFieldWeights: [],
    })).toThrow(new NotValidConfigTypeError('ftsFieldWeights should be an Array with strings in config'))
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: ['title'],
      ftsFieldWeights: ['1'],
    })).toThrow(new NotValidConfigTypeError('ftsFieldWeights should only include numbers'))
  })
  it('ftsFieldWeights and ftsFieldNames', () => {
    expect(() => checkConfigType({
      idPropertyName: 'id',
      ftsFieldNames: ['title'],
      ftsFieldWeights: [1, 2],
    })).toThrow(new NotValidConfigTypeError('The lengths of ftsFieldNames and ftsFieldWeights should be equal'))
  })
})
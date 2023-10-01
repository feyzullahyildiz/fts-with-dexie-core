
export class NotValidConfigTypeError extends Error { }

export const checkConfigType = (config: any) => {
    if (typeof config !== 'object' || config === null) {
        throw new NotValidConfigTypeError('config should be an object')
    }
    if (typeof config.idPropertyName !== 'string') {
        throw new NotValidConfigTypeError('config should have idPropertyName as property with string value')
    }
    if (!Array.isArray(config.ftsFieldNames) || config.ftsFieldNames.length === 0) {
        throw new NotValidConfigTypeError('ftsFieldNames should be an Array with strings in config')
    }
    if (!config.ftsFieldNames.every((v: any) => typeof v === 'string')) {
        throw new NotValidConfigTypeError('ftsFieldNames should only include strings')
    }
    if (!Array.isArray(config.ftsFieldWeights) || config.ftsFieldWeights.length === 0) {
        throw new NotValidConfigTypeError('ftsFieldWeights should be an Array with strings in config')
    }
    if (!config.ftsFieldWeights.every((v: any) => typeof v === 'number')) {
        throw new NotValidConfigTypeError('ftsFieldWeights should only include numbers')
    }
    if (config.ftsFieldNames.length !== config.ftsFieldWeights.length ) {
        throw new NotValidConfigTypeError('The lengths of ftsFieldNames and ftsFieldWeights should be equal')
    }
    
    return true;
}
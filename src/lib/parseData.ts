import { parseString } from "./parseString";
import type { ConfigType } from "./ConfigType";

export const parseData = (config: ConfigType, data: any, delimiter = '-') => {
    const id = data[config.idPropertyName]!;
    const arr = [];
    for (let i = 0; i < config.ftsFieldNames.length; i++) {
        const key = config.ftsFieldNames[i];
        const weight = config.ftsFieldWeights[i];
        const vocabularies = parseString(data[key], delimiter);
        for (const vocabulary of vocabularies) {
            arr.push([
                vocabulary,
                id,
                weight
            ])
        }

    }
    return arr;

}

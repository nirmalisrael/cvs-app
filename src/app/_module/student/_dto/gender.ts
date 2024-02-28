export enum Gender {

    MALE = ('Male'),
    FEMALE = ('Female'),
    TRANSGENDER = ('Others')
}

export function getKeyByValueForGender(enumObj: any, value: any): any | undefined {
    return Object.keys(enumObj).find(key => enumObj[key] === value) as any | undefined;
}
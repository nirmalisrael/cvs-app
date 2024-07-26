export enum Department {
    TAMIL = 'Tamil',

    ENGLISH = 'English',

    MATHEMATICS = 'Mathematics',

    COMPUTER_SCIENCE = 'Computer Science',

    COMPUTER_APPLICATION = 'Computer Application',

    COMMERCE = 'Commerce',

    BUSINESS_ADMINISTRATION = 'Business Administration',

    PHYSICAL_EDUCATION = 'Physical Education'
}

export function getKeyByValue(enumObj: any, value: any): any | undefined {
    return Object.keys(enumObj).find(key => enumObj[key] === value) as any | undefined;
}
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

export function getEnumKeyByValue(enumType: any, value?: string): string | undefined {
    return Object.keys(enumType).find(key => enumType[key] === value);
}
export const capitalize = (text) => {
    const [firstChar, ...restChars] = text;
    return `${firstChar.toUpperCase()}${restChars.join('')}`;
};
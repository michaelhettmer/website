export const capitalizeOnlyFirstLetter = (p = ''): string => {
    const lower = p.toLowerCase();
    return lower.toLowerCase().charAt(0).toUpperCase() + lower.slice(1);
};

export const dateConverter = (date) => {
    return date.toISOString().split('T')[0];
}
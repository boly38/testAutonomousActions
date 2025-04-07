export const checkMaxLength = (name, val, max) => {
    if (val?.length > max) {
        throw new Error(`${name} : ${max} max length expected`);
    }
    return val;
}
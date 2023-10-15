
export const urlConverter = (str) => {
    let res = str.toLowerCase().split(" ").join('+');
    console.log(res);
    return res;
}
export const getStorage = ()=>{
    try {
       let value = sessionStorage.getItem('itemKey');
       if (typeof value === "string") return JSON.parse(value);
       return { }
    } catch (error) {
        return{}
    }
};
export const setStorage = (data) =>{
    sessionStorage.setItem('itemKey', JSON.stringify(data));
}
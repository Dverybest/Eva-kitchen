export const getStorage = ()=>{
    try {
       let value = localStorage.getItem('itemKey');
       if (typeof value === "string") return JSON.parse(value);
       return { }
    } catch (error) {
        return{}
    }
};
export const setStorage = (data) =>{
    localStorage.setItem('itemKey', JSON.stringify(data));
}
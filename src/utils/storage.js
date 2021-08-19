export const getStorage = ()=>{
    try {
       let value = localStorage.getItem('itemKey');
       if (value) return JSON.parse(value);
       else return {}
    } catch (error) {
        return{}
    }
};
export const setStorage = (data) =>{
    localStorage.setItem('itemKey', JSON.stringify(data));
}
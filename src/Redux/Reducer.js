

// const basicReducer = (
//     storedata ={
//      name:"Renuka",
//     }, 
//     action) =>{
//     return storedata;
// };

var initialData = {
    name: "Renuka",
}
const basicReducer = (storedata = initialData, action) =>{
    if(action.type === "name"){
        return{
            name: action.username,
        }
    }
    return storedata;
};
export default basicReducer;
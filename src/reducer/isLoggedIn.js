const loggedReducer=(state=false,action)=>{
    switch(action.type){
        case 'SIGN':
            return true
            default:
            return state
    }

}
export default loggedReducer
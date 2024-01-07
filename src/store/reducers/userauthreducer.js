// default userauthreducer (loggedin = [], action) => {

//     switch (action.type) {
        
//         case 'IS_LOGGED_IN':
//             return loggedin;
//         default:
//             return;
//     }
// }

const userauthreducer = (loggedin =[],action)=>{

    switch(action.type){
        case 'IS_LOGGED_IN':
            return loggedin;
            default:
                return;
    }



}
export default userauthreducer
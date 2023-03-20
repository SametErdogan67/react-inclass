const initialState ={
    counter :0;
}


export const reducer = (state = initialState, action) => {

    switch(key){
        case "INCREASE":
            return {counter: state.counter + 1}
        case  "DECREASE":
            return{ counter: state.counter - 1}    
        case  "RESET":
            return{ counter: 0}   
        default:
            return state
    }
}
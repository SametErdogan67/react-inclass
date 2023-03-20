const initialState ={
    counter :0;
}


export const reducer = (state = initialState, action) => {

    switch(key){
        case "INCREASE":
            return {counter: state.counter + 1}
            break;
        
        default:
            break;
    }
}
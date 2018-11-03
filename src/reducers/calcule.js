let initialState = {
    affichage: "",
    number1: 0,
    signe: "",
    history: [],
};

const calculer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'GETNUMBER':
            nextState = { ...state, affichage: `${state.affichage}${action.number}` }
            return nextState;

        case 'VALEUR':
            if (state.affichage === "" && action.signe === '-') {
                nextState = { ...state, affichage: action.signe }
            } else if (state.affichage === "") {
                nextState = { ...state }
            } else {
                nextState = {
                    ...state,
                    number1: state.affichage,
                    affichage: "",
                    signe: action.signe,
                }
            }
            return nextState;
        case 'RESULT':
            let result = 0;
            switch (state.signe) {
                case "+":
                    result = parseFloat(state.number1) + parseFloat(state.affichage)
                    break;
                case "-":
                    result = state.number1 - state.affichage
                    break;
                case "/":
                    result = state.number1 / state.affichage
                    break;
                case "*":
                    result = state.number1 * state.affichage
                    break;
                default:
                    break;
            }
            if (state.affichage !== "" && state.number1) {
                nextState = {
                    ...state,
                    affichage: result,
                    history: [...state.history, (`${state.number1} ${state.signe} ${state.affichage} = ${result}`)],
                    number1: 0,
                    signe: "=",
                }
            } else { nextState = state }
            return nextState;
        case 'CLEAR':
            nextState = {
                ...state,
                affichage: "",
                number1: 0,
                signe: "",
            }
            return nextState;
        default:
            return state;
    }
}
export default calculer;
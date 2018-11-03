import { combineReducers } from "redux";

import calculer from "./calcule";

const allReducers = combineReducers({

    calcule: calculer,
})

export default allReducers;
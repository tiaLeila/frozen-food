import { useReducer } from 'react';
import dispatchEffect from '../effects';
/**
 * Initial State
 */
export const INITIAL_STATE_PLAN = {
    amountMeals: null,
    pricePerMeal: null,
    clientName: ""
}

/**
 * Action types
 */
export const ActionTypes = {
    SET_PLAN: "SET_PLAN",
    SET_CLIENT_NAME: "SET_CLIENT_NAME",
}

export default function usePlanContext () {
    /**
     * Reducer
     */
    const [ state, dispatch ] = useReducer ( ( state = INITIAL_STATE_PLAN, action ) => {

        switch (action.type) {
            
            case ActionTypes.SET_PLAN:
                return {
                    ...state,
                    amountMeals: action.payload.selectedPlan.amountMeals,
                    pricePerMeal: action.payload.selectedPlan.pricePerMeal,
                }

            case ActionTypes.SET_CLIENT_NAME:
                return {
                    ...state,
                    clientName: action.payload.clientName
                }

            default:
                return state;
        }
    }, INITIAL_STATE_PLAN )


    /**
     * Action Dispatchers
     */
    const dispatchToAll = action => {
        dispatch(action);
        dispatchEffect(action, ActionDispatchers);
    }

    const ActionDispatchers = {
        setPlan: ( selectedPlan ) => dispatchToAll({
            type: ActionTypes.SET_PLAN,
            payload: { selectedPlan }
        }),
        setClientName: ( clientName ) => dispatchToAll({
            type: ActionTypes.SET_CLIENT_NAME,
            payload: { clientName }
        })
    };

    // exporting
    return {
        ActionDispatchers,
        state
    }
}
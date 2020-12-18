import { useReducer } from 'react';
import dispatchEffect from '../effects';
/**
 * Initial State
 */
export const INITIAL_STATE_MEALS = {
    data: [
        // {
        //     description: "Brócolis, carne em cubos e arroz com tiras de conoura",
        //     img: "dish10.jpg",
        //     imgImported: "/frozen-foods/static/media/dish10.ef381163.jpg",
        // }
    ],
    lastOperation: null, // 0 = remove; 1 = add; null = no add and no remove operation took place.;
    failure: false // if no one error occurred 'failure' is 'false'. if an error occurred 'failure' is a string with error explalining
}

/**
 * Action types
 */
export const ActionTypes = {
    ADD_MEAL: "ADD_MEAL",
    REMOVE_MEAL: "REMOVE_MEAL",
}

export default function usePlanContext () {
    /**
     * Reducer
     */
    const [ state, dispatch ] = useReducer ( ( state = INITIAL_STATE_MEALS, action ) => {

        switch (action.type) {
            
            case ActionTypes.ADD_MEAL:
                return {
                    ...state,
                    data: [
                        ...state.data,
                        {
                            description: action.payload.meal.description,
                            img: action.payload.meal.img,
                            imgImported: action.payload.meal.imgImported,
                        }
                    ],
                    lastOperation: 1,
                    failure: false
                }

            case ActionTypes.REMOVE_MEAL:
                let indexOfMealToRemove = action.payload.mealIndex;

                // testing failure
                if ( (state.data[indexOfMealToRemove] === undefined) || action.payload.meal.img != state.data[indexOfMealToRemove].img) {
                    const thereAreAnotherMealLikeThat = state.data.findIndex( meal => meal.img === action.payload.meal.img );
                    
                    if (thereAreAnotherMealLikeThat === -1) {
                        return {
                            ...state,
                            lastOperation: null,
                            failure: 'There are no more meals like these to remove.'
                        }
                    }
                    indexOfMealToRemove = thereAreAnotherMealLikeThat;
                }

                // removing
                let newSelectedMeals = [];
                newSelectedMeals.push( ...state.data.slice(0, indexOfMealToRemove) ); // get all elements BEFORE one to be removed
                newSelectedMeals.push( ...state.data.slice( (indexOfMealToRemove + 1) ) );// get all elements AFTER one to be removed
                return {
                    ...state,
                    data: newSelectedMeals,
                    lastOperation: 0,
                    failure: false
                };

            default:
                return state;
        }
    }, INITIAL_STATE_MEALS )


    /**
     * Action Dispatchers
     */
    const dispatchToAll = action => {
        dispatch(action);
        dispatchEffect(action, ActionDispatchers);
    }

    const ActionDispatchers = {
        addMeal: ( meal ) => dispatchToAll({
            type: ActionTypes.ADD_MEAL,
            payload: { meal }
        }),
        removeMeal: ( meal, mealIndex ) => dispatchToAll({
            type: ActionTypes.REMOVE_MEAL,
            payload: { meal, mealIndex }
        })
    };

    // exporting
    return {
        ActionDispatchers,
        state
    }
}
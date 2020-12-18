import { useReducer } from 'react';
import dispatchEffect from '../effects';
/**
 * Initial State
 */
export const INITIAL_STATE_MEALS = {
    data: {
        phone: null,
    },
    failure: false,
    loading: false,
}

/**
 * Action types
 */
export const ActionTypes = {
    SET_PHONE: "SET_PHONE",
    ASYNC_SET_PHONE: "ASYNC_SET_PHONE",
    FAILURE_SET_PHONE: "FAILURE_SET_PHONE",
}

export default function usePlanContext () {
    /**
     * Reducer
     */
    const [ state, dispatch ] = useReducer ( ( state = INITIAL_STATE_MEALS, action ) => {

        switch (action.type) {
            case ActionTypes.ASYNC_SET_PHONE:
                return {
                    ...state,
                    loading: true,
                }

            case ActionTypes.SET_PHONE:
                return {
                    data: {
                        ...state.data,
                        phone: action.payload.phone
                    },
                    failure: false,
                    loading: false,
                }

            case ActionTypes.FAILURE_SET_PHONE:
                return {
                    data: {
                        ...state.data,
                        phone: null,
                    },
                    failure: action.payload.error,
                    loading: false,
                }
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
        asyncSetPhone: ( phone ) => dispatchToAll({
            type: ActionTypes.ASYNC_SET_PHONE,
            payload: { phone },
        }),
        setPhone: ( phone ) => dispatchToAll({
            type: ActionTypes.SET_PHONE,
            payload: { phone }
        }),
        failureSetPhone: ( error ) => dispatchToAll({
            type: ActionTypes.FAILURE_SET_PHONE,
            payload: { error }
        }),
    };

    // exporting
    return {
        ActionDispatchers,
        state
    }
}
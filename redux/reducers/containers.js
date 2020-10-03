import {
    FETCH_CONTAINER_LIST
} from '../constants'

const initalState = {
    cons: []
}

export default (state = initalState, action) => {

    switch (action.type) {

        case FETCH_CONTAINER_LIST:
            return {
                ...state,
                cons: action.payload
            }

        default:
            return state
    }
}
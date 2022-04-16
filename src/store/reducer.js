import ACTION from './actions'

const initialState = {
    elo: 'challengers',
    region: 'br1'
}

const lolReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_CHALLENGERS:
            return { ...state, challengers: action.payload }
        case ACTION.ADD_GRANDMASTERS:
            return { ...state, grandMasters: action.payload }
        case ACTION.ADD_MASTERS:
            return { ...state, masters: action.payload }
        case ACTION.SET_REGION:
            return { ...state, region: action.payload }
        case ACTION.SET_ELO:
            return { ...state, elo: action.payload }
        case ACTION.RESET_RANKED:
            return {...state, challengers: null, grandMasters: null, masters: null}
        default:
            return state
    }
}

export default lolReducer

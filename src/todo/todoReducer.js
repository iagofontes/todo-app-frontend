const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED' :
            return {...state, description: action.payload}
        case 'TODO_SEARCHED' : 
            return {...state, list: action.payload}
        case 'TODO_CLEAR' : 
            return {...state, description: ''}
        case 'TODO_MARK_AS_DONE' : 
            return state
        case 'TODO_MARK_AS_PENDING' : 
            return state
        default: 
            return state
    }
}
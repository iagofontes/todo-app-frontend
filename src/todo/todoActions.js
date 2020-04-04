import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const todoSearch = () => {
    return (dispatch, getState) => {
        // const request = axios.get(`${URL}?sort=-createdAt`)
        const description = getState().todo.description
        const query = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${query}`)
            .then(response => dispatch({ type: 'TODO_SEARCHED', payload: response.data }))
    }
}

// export const todoAdd = (description) => {
//     const request = axios.post(URL, {description})
//     return [
//         { type: 'TODO_ADDED', payload: request }, 
//         todoSearch()
//     ]
// }

export const todoAdd = description => {
    return dispatch => {
        axios.post(URL, {description})
            // .then(response => dispatch({ type: 'TODO_ADDED', payload: response.data }))
            .then(response => dispatch(todoClear()))
            .then(response => dispatch(todoSearch()))
    }
}

export const markAsDoned = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(response => dispatch({ type: 'TODO_MARK_AS_DONE', payload: response.data }))
            .then(response => dispatch(todoSearch()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(response => dispatch({ type: 'TODO_MARK_AS_PENDING', payload: response.data }))
            .then(response => dispatch(todoSearch()))
    }
}

export const todoRemove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(response => dispatch(todoSearch()))
    }
}

export const todoClear = () => {
    return [
        { type: 'TODO_CLEAR' },
        todoSearch()
    ]
}
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDoned, markAsPending, todoRemove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        style="success" 
                        onClick={()=>props.markAsDoned(todo)}
                        icon="check"
                        hide={todo.done}/>
                    <IconButton 
                        style="warning" 
                        onClick={()=>props.markAsPending(todo)}
                        icon="undo"
                        hide={!todo.done}/>
                    <IconButton 
                        style="danger" 
                        onClick={()=>props.todoRemove(todo)}
                        icon="trash-o"
                        hide={!todo.done}/>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDoned, markAsPending, todoRemove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

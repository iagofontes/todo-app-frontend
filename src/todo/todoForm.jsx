import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, todoSearch, todoAdd, todoClear } from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.todoSearch()
    }

    keyHandler(e) {
        const { todoAdd, todoSearch, todoClear, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? todoSearch() : todoAdd(description)
        } else if(e.key === 'Escape') {
            todoClear()
        }
    }

    render() {
        const { todoAdd, todoSearch, todoClear, description } = this.props
        return (
            <div role="form" className="todoForm row">
                {/* <div className="col-xs-12 col-sm-9 col-md-10"> */}
                <Grid cols='12 9 10'>
                    <input type="text" 
                        id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}/>
                </Grid>
                {/* </div> */}
                {/* <div className="col-xs-12 col-sm-3 col-md-2"> */}
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={() => todoAdd(description)}/>
                    <IconButton style="info" icon="search" onClick={() => todoSearch()}/>
                    <IconButton style="dark" icon="close" onClick={() => todoClear()}/>
                    {/* <button className="btn btn-outline-primary">
                        <i className="fa fa-plus"></i>
                    </button> */}
                </Grid>
                {/* </div> */}
            </div>
        )
    }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, todoSearch, todoAdd, todoClear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
import React from 'react'
import './User.css'

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate (prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }
    useEditActivated = () => {
        this.setState({
            editMode: true,
        })
    }
    changeInput = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    useEditDisactivated = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    render() {
        return (
            <div className="status">
                {!this.state.editMode &&
                    <span
                        onDoubleClick={this.useEditActivated}
                        className="status__title"
                    > {this.state.status} </span>
                }
                {this.state.editMode &&
                    <input
                        type="text"
                        value={this.state.status}
                        className="status__input"
                        autoFocus
                        onBlur={this.useEditDisactivated}
                        onChange={this.changeInput}
                    />
                }
            </div>
        )
    }
}

export default UserStatus

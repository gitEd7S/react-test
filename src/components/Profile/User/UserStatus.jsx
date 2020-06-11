import React from 'react'
import './User.css'

class UserStatus extends React.Component {
    state = {
        editMode: false,
    }
    useEditActivated() {
        this.setState({
            editMode: true,
        })
    }
    useEditDisactivated() {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <div className="status">
                {!this.state.editMode &&
                    <span
                        onDoubleClick={this.useEditActivated.bind(this)}
                        className="status__title"
                    >
                        {this.props.status}
                    </span>
                }
                {this.state.editMode &&
                    <input
                        type="text"
                        value={this.props.status}
                        className="status__input"
                        autoFocus="true"
                        onBlur={this.useEditDisactivated.bind(this)}
                    />
                }
            </div>
        )
    }
}

export default UserStatus
import React, { Component } from 'react';

export class RollingRetentionTable extends Component {
    static displayName = RollingRetentionTable.name;

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            error: null,
            items: []
        }
        // Это привязывание необходимо, чтобы работал объект `this` в колбэке
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount(){
        fetch("https://localhost:" + window.location.port + "/Table").then(res => res.json()).then(
            (result) => {
                this.setState({
                    items: result
                })
                console.log(result);
            },
            (error) => {
                this.setState({
                    error
                })
            },
        );
    }

    handleSave() {
        let DateRegistration = document.getElementsByClassName("dateInput")[0];
        let DateLastActivity = document.getElementsByClassName("dateInput")[1];
    }

    render() {
        return (
            <div>
                <table class="RollingTable" border="1">
                        <tr>
                            <td>
                                UserID
                            </td>
                            <td>
                                DateRegistration
                            </td>
                            <td>
                                Date Last Activity
                            </td>
                        </tr>
                        <tr>
                            <td>
                                *
                            </td>
                            <td>
                                <input class = "dateInput DateRegistrationInput" type="date"/>
                            </td>
                            <td>
                                <input type="dateInput DateLastActivityInput" type="date"/>
                            </td>
                        </tr>
                </table>
                <button class="Save" onClick={this.handleSave}>Save</button>
                <button class="Calculate">Calculate</button>
            </div>
        )
    }
}
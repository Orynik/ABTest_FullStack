import React, { Component } from 'react';
import { sendData, getData } from "../api/dotnetApi.js"
import { Table } from "./table.js"

export class RollingRetentionTable extends Component {
    static displayName = RollingRetentionTable.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false
        }
  
        getData().then(
            (result) => {
                console.log(result)
                this.setState({
                    items: result
                })
            },
            (error) => {
                this.setState({
                    error
                })
            },
        );

        // Это привязка необходима, для работы объекта `this` в колбэке
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        getData().then(
            (result) => {
                this.setState({
                    items: result,
                    isLoaded: true
                })
            },
            (error) => {
                this.setState({
                    error,
                    isLoaded: true
                })
            },
        )
    }

    handleSave() {
        let DateRegistration = document.getElementsByClassName("dateInputCreate")[0].value;
        let DateLastActivity = document.getElementsByClassName("dateInputCreate")[1].value;

        let validationMesage = this.validation(DateRegistration, DateLastActivity);

        if (validationMesage == null) {
            sendData({
                DateRegistration,
                DateLastActivity
            }).then()

        } else {
            alert(validationMesage)
        }
    }



    /**
     * Проверяет входные даты и в случае ошибки возвращает сформированное сообщение с ошибкой
     * 
     * @param {int} DateRegistration
     * @param {int} DateLastActivity
     */
    validation(DateRegistration, DateLastActivity) {

        let firstDate = new Date(DateRegistration).valueOf();
        let secondDate = new Date(DateLastActivity).valueOf();

        if (!(isNaN(firstDate) || isNaN(secondDate))) {
            if (firstDate > secondDate) {
                return "Дата посещения не может быть раньше даты регистрации";
            }
            return null
        }

        return "Введите даты,согласно шаблону";
    }

render() {
    const { isLoaded, items, error } = this.state;
        return (
            <div>
                <table className="RollingTable" border="1">
                    <thead>
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
                    </thead>
                    <tbody
                        <Table />
                        <tr>
                            <td>
                                *
                            </td>
                            <td>
                                <input className="dateInput dateInputCreate DateRegistrationInput" type="date" />
                            </td>
                            <td>
                                <input className="dateInput dateInputCreate DateLastActivityInput" type="date" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="Save" onClick={this.handleSave}>Save</button>
                <button className="Calculate">Calculate</button>
            </div>
        )
    }
}
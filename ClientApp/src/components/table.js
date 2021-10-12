//Попытка реализации нового компонента для отрисовки

    import React, { Component } from 'react';
    import { sendData, getData } from "../api/dotnetApi.js"

    export class table extends Component {
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

        render() {
            const { isLoaded, items, error } = this.state;

            if (!isLoaded) {
                return <span> Загрузкаю.... </span>
            } else if (error) {
                return <span> Ошибка! {error.message} </span>
            } else {
                return (
                   <div>
                        {items.map(item => {
                           <span>{item.userId}</span>
                           <span>{item.dateRegistration}</span>
                           <span>{item.dateLastActivity}</span>
                        })}
                   </div>
                )
            }
        }
    }
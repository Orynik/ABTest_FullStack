import axios from "axios";

export async function sendData(data) {

    axios("")

}

export async function getData() {

    return axios.get("https://localhost:44328/Table/").then(
        res => res.data,
        error => error
    );
}
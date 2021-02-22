import React from 'react'
import Axios from 'axios'


class Exercise1q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        };
    }
    getListEmployee = function () {
        const baseURL = `https://5fa3f6abf10026001618e3b7.mockapi.io`;
        Axios.get(`${baseURL}/Employee`)
            .then(response => {
                this.setState({
                    employee: response.data
                });
            })
            .catch(error => console.log(error));
    }
    componentDidMount() {
        this.getListEmployee();
    }
    render() {
        const personList = this.state.employee.map(
            employee =>
                <li hey={employee.id}>
                    {employee.id} : {employee.name}
                </li>
        );
        return (
            <ul>
                {personList}
            </ul>
        );
    }
}

class Exercise1q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        };
    }

    getListEmployee = function () {
        const baseURL = `https://5fa3f6abf10026001618e3b7.mockapi.io`;
        Axios.get(`${baseURL}/Employee`)
            .then(response => {
                this.setState({
                    employee: response.data
                });
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getListEmployee();
    }
    render() {
        const personList = this.state.employee.map(
            employee =>
                <li hey={employee.id}>
                    {employee.id} : {employee.name}
                </li>
        );
        return (
            <ul>
                {personList}
            </ul>
        );
    }
}





function VD(){

}


export default {Exercise1q1,Exercise1q2, VD}
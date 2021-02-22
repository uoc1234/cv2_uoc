import '../css/App.css';
import React from 'react'


function Exercise1q1() {
    return (
        <div>
            <h1 className="center">Hello World</h1>
            <div className="center">My first paragraph</div>
        </div>

    )
}

function Exercise1q2() {
    return (
        <div>
            <h2 className="center">Danh sách lớp học</h2>
            <ol>
                <li>Nguyễn Ngọc Duy</li>
                <li>Tống Quang Anh</li>
                <li>Đinh Thu Loan</li>
                <li>Hà Văn Tiến</li>
                <li>Nguyễn Hải Đăng</li>
                <li>Nguyễn Tiến Quang</li>
                <li>Nguyễn Văn Chiến</li>
            </ol>

            <ol>
                <li>Cơm trưa</li>
                <ul>
                    <li>Cơm Chiên Hải Sản</li>
                    <li>Cơm sườn non</li>
                    <li>Cơm canh chua</li>
                </ul>
                <br></br>
                <li>Tráng miếng trái cây</li>
                <ul>
                    <li>Nho</li>
                    <li>Mận</li>
                    <li>Chuối</li>
                </ul>
            </ol>
        </div>
    )
}

function Exercise1q3() {
    return (
        <>
            <div className="vd1">Hello World</div>
            <br></br>
            <div className="vd2">Hello World</div>
            <br></br>
            <div className="vd3">Hello World</div>
            <br></br>
        </>
    )
}

class Exercise5q1a extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }
    render() {
        return (
            <div>
                <h3>Bây giờ là: {this.state.time.toLocaleTimeString()}</h3>
                <button onClick={this.updateTime}>Cập nhật giờ</button>
            </div>
        )
    }
    updateTime = () => {
        this.setState(
            {
                time: new Date()
            }
        )
    }
}

class Exercise5q1b extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    }
    action = () => {
        this.setState({ isShow: !this.state.isShow });
    }
    render() {
        const bio = this.state.isShow ? (
            <p>aafadf afadf afasdf</p>
        ) : null;

        return (
            <>
             {bio}
            <button onClick={this.action}> {!this.state.isShow ? "Read More" : "Show Less"} </button>
            </>
        );
    }
}

function Bai3(){
    return(
        <>

        </>
    )
}

export default {Bai3, Exercise1q1, Exercise1q2, Exercise1q3, Exercise5q1a, Exercise5q1b }
import './Chat.css';
import React, { Component } from 'react'
import Services from './../../Services/services';
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            allUsers: [],
            class: "",
            activeUser: {},
            chat: "",
            chatHistory: []
        }
        this.services = new Services();
        this.socket = io.connect('http://localhost:3001', { transport: ['websocket'] });
        this.socket.on("chatServer", (data) =>{
            console.log(data)
            this.setState({
                chatHistory : [...this.state.chatHistory, data]
            })

        })
    }
    componentDidMount() {
        this.socket.open();
        this.getTokenInfo();
        this.allUsers();
       
    }
    componentWillUnmount() {
        this.socket.close();
    }
    getTokenInfo() {
        this.services.getTokenInfo().then(data => {
            console.log(data)
            this.setState({ userData: data.data })
        });
    }
    allUsers() {
        this.services.allUsers().then(data => {
            this.setState({
                allUsers: data.data
            })
        });
    }
    checkActiveClass(e) {
        this.setState({
            activeUser: e
        })
    }
    handleChat(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            this.chatSubmit();
        } 
    }
    
    chatSubmit() {
        console.log("chat")
        if(!this.state.chat.trim() =="")
        {
            this.socket.emit('chat1', this.state.chat);
        this.setState({
            chat:""
        })     
        }
         
    }
    render() {
        return (
            <React.Fragment>
                <div className="userInfo">
                    <a className="pull-right ai">{this.state.userData.name}</a>

                </div>
                <div className="Center">
                    <h1>Chat Application</h1>
                </div>





                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                            <div className="card-header">
                                <div className="input-group">
                                    <input type="text" placeholder="Search..." name="" className="form-control search" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body contacts_body">
                                <ui className="contacts">
                                    {
                                        this.state.allUsers.length > 0 ?
                                            this.state.allUsers.map((val, key) => {
                                                return (
                                                    <React.Fragment>
                                                        {val.name !== this.state.userData.name ?
                                                            <React.Fragment>
                                                                <li className={this.state.class} onClick={() => this.checkActiveClass(val)} key={key}>
                                                                    <div className="d-flex bd-highlight cursorPointer">
                                                                        <div className="img_cont">
                                                                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="loading  error" className="rounded-circle user_img" />
                                                                            <span className="online_icon "></span>
                                                                        </div>
                                                                        <div className="user_info">
                                                                            <span>{val.name}</span>
                                                                            <p>Status Message for online</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </React.Fragment> : ""
                                                        }
                                                    </React.Fragment>
                                                )
                                            }) : ""
                                    }
                                </ui>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                        </div>
                        {
                            Object.keys(this.state.activeUser).length > 0 ?

                                <div className="col-md-8 col-xl-6 chat">
                                    <div className="card">
                                        <div className="card-header msg_head">
                                            <div className="d-flex bd-highlight">
                                                <div className="img_cont">
                                                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="loading  error" className="rounded-circle user_img" />
                                                    <span className="online_icon"></span>
                                                </div>
                                                <div className="user_info">
                                                    <span>Chat with {this.state.activeUser.name}</span>
                                                    <p>1767 Messages</p>
                                                </div>
                                                <div className="video_cam">
                                                    <span><i className="fas fa-video"></i></span>
                                                    <span><i className="fas fa-phone"></i></span>
                                                </div>
                                            </div>
                                            <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                                            <div className="action_menu">
                                                <ul>
                                                    <li><i className="fas fa-user-circle"></i> View profile</li>
                                                    <li><i className="fas fa-users"></i> Add to close friends</li>
                                                    <li><i className="fas fa-plus"></i> Add to group</li>
                                                    <li><i className="fas fa-ban"></i> Block</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body msg_card_body">
                                            {
                                                this.state.chatHistory.map((val, key) =>{
                                                    return(
                                                       <div className="d-flex justify-content-start mb-4">
                                                                <div className="img_cont_msg">
                                                                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="loading  error" className="rounded-circle user_img_msg" />
                                                                </div>
                                                                <div className="msg_cotainer">
                                                                {val}
                                                                    <span className="msg_time">8:40 AM, Today</span>
                                                                </div>
                                                            </div> 
                                                    )
                                                            
                                                })
                                                        
                                            }

                                            {/* <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Maryam i am good tnx how about you?
									<span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="loading  error" className="rounded-circle user_img_msg" />

                                                </div>
                                            </div> */}



                                        </div>
                                        <div className="card-footer">
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                                </div>
                                                <textarea name="chat" onKeyPress={this.enterPressed.bind(this)} id="chat" value={this.state.chat} onChange={(e) => this.handleChat(e)} className="form-control type_msg" placeholder="Type your message..."></textarea>
                                                <div className="input-group-append">

                                                    <button className="input-group-text send_btn borderNn"  onClick={() => this.chatSubmit()}><i className="fas fa-location-arrow"></i></button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                        }
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Chat;
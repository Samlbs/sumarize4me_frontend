import React, { Component } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { uniqueId } from "lodash"; 
import './style.css';

const initialState = {
    id: '',
    title: '',
    content: [],
    status: '',
    languageCode: '',
    createdAt:''
}

const synth = window.speechSynthesis;

export default class components extends Component {
    state = {...initialState}

    synth = {...synth}

    constructor(props) {
        super(props)

        this.state = {
            id: props.uploadFiles.id, 
            title: props.uploadFiles.title, 
            content: props.uploadFiles.content,
            status: props.uploadFiles.status,
            languageCode: props.uploadFiles.languageCode,
            createAt: props.uploadFiles.createdAt 
        }   
    }
    
    getUniqueFileStatus = () => {
        axios.get("summaries/" + this.state.id)
        .then((response) => {
        // handle success
        // console.log(response.data.status);
        // this.setState({status: response.data.status});
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        
        });
    }
    
    componentDidMount() {
        var interval = setInterval(this.getAllFiles, 5000);
        if (this.state.status === 'Complete') {
            clearInterval(interval);
            axios.get("")
            .then((response) => {
                // handle success
                console.log(response);
                // const status = response.data.status;
                // this.setState({status});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
    }

    readOutLoud = message => {
        var textMessage = '';
        for (var i = 0; i < message.length; i++) {
            textMessage += message[i].text + " ";
        }

        console.log(textMessage);
        var speech = new SpeechSynthesisUtterance();
        speech.text = textMessage;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        synth.speak(speech);
    }

    pauseOutLoad () {
        synth.pause();
    }

    getMinWeight () {
        var arr = [];
        for (var i = 0; i < this.state.content.length; i++) {
            arr[i] = this.state.content[i].weight;
        }
        var min = Math.min(...arr);
        return min;
    }

    getMaxWeight () {
        var arr = [];
        for (var i = 0; i < this.state.content.length; i++) {
            arr[i] = this.state.content[i].weight;
        }
        var max = Math.max(...arr);
        return max;
    }

    getAverageWeight () {
        var min = this.getMinWeight();
        var max = this.getMaxWeight();

        var average = (min + max) / 2;
        console.log(average);
        return average;
    }

    render() {
    return (   
        <div className="resumeTable">
            <div className="contentResume">
                <span className="titleResume">{this.state.title}</span>
                <span className="descriptionResume">{this.state.status}</span>
            </div>
            <div className="buttonResume">
                {this.state.status === 'Complete' &&
                    <Popup className="popup"
                        trigger={<button className="button"> Abrir Resumo </button>}
                        modal
                        closeOnDocumentClick
                
                    >
                        <div className="containerPopUp">
                            <button onClick={() => this.readOutLoud(this.state.content)}>Voice App</button>
                            {this.state.content.map(topic => (
                                <p key={uniqueId()}>
                                        {
                                            topic.weight >= this.getAverageWeight() ? (
                                                <span className="AverageWeight">{topic.text}</span>
                                            ) : (
                                                topic.text
                                            )
                                        }
                                    
                                </p>
                            ))}   
                        </div>
                    </Popup>
                }
            </div>
        </div>    
    );
  }
}
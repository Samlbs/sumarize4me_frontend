import React, { Component } from 'react';
import axios from 'axios';

// import { Container } from './styles';

const initialState = {
    id: '',
    title: '',
    content: [],
    status: '',
    createdAt: ''
}

export default class components extends Component {
    state = {...initialState}

    constructor(props) {
        super(props)
        this.setState({id: props.uploadFiles.id, 
                    title: props.uploadFiles.title, 
                    content: props.uploadFiles.content,
                    status: props.uploadFiles.status,
                    createAt: props.uploadFiles.createdAt})
    }
    
    getUniqueFileStatus = () => {
        axios.get("summaries/" + this.state.id)
        .then((response) => {
        // handle success
        console.log(response.data.status);
        this.setState({status: response.data.status});
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
                const status = response.data.status;
                this.setState({status});
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

    render() {
    return (
        <div>
            
        </div>
    );
  }
}

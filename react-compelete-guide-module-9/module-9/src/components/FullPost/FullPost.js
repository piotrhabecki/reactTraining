import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        error: false
    }

    componentDidUpdate()
    {
        if(this.props.id)
        {
            if( !this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== this.props.id) )
            {
                axios.get('posts/' + this.props.id )
                .then(response => {
                        this.setState({loadedPost: response.data})
                    }
                ).catch(error => {
                    this.setState(error = true)
                })
            }

        }
    }

    deleteMethodHandler = () =>
    {
        const headers = {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',}

        axios.delete('posts/' + this.props.id, {headers: headers}).then(
            response => {
                console.log(response)
            }
        )
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if( this.props.id )
        {
            post = <p style={{ textAlign: 'center' }}>Loading</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deleteMethodHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }


}

export default FullPost;
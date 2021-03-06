import React, { Component } from 'react';
import axios from 'axios'

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Piotr'
    }

    postDataHandler = () => {

        const headers = {'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',}

        console.log('clicked')

        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        axios.post('posts/', data, {headers: headers}).then(
            response => {
                console.log(response)
            }
        )
    }

    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Piotr">Piotr</option>
                    <option value="Anna">Anna</option>
                </select>
                <button onClick={this.postDataHandler} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;
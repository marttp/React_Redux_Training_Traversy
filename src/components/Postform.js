import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'; 
import { createPosts } from '../actions/PostActions';
class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });

/*
if you want to check state by console.log like this
it's take a time delay to set state
data will show step before 1 step
*/
        // console.log(this.state.title);
        // console.log(this.state.body);

    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title:this.state.title,
            body:this.state.body
        }
        // fetch('https://jsonplaceholder.typicode.com/posts',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(post)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));
        this.props.createPosts(post);
    }

    render() {
        return (
            <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name="title" value={this.state.title}
                    onChange={this.onChange}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name="body"  value={this.state.body}
                    onChange={this.onChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


PostForm.propTypes = {
    createPosts: PropTypes.func.isRequired
};

export default connect(null,{ createPosts })(PostForm);
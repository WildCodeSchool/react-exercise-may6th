import React, { Component } from 'react'

export class Posts extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(
                response => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        return (
            <div>

                {
                    this.state.posts.map(item=> (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </div>
        )
    }
}

export default Posts

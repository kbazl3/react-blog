import React, {Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>Posts Index</div>
        )
    }
}



export default connect(null, {fetchPosts})(PostsIndex) //passing in null because this container isn't managing any state

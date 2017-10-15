import React from 'react';
import { connect } from 'react-redux';

import { RouteActions } from '../../actions';
import { ApiActions } from '../../actions';

import {postsWrapper, postElement, postData} from './page.scss';

class PageHandler extends React.Component {

    constructor(props){
        super(props);

        this.getPostData = this.getPostData.bind(this);
    }

    componentDidMount(){
        // this.props.dispatch(RouteActions.setRoute('root'));
        this.props.dispatch(ApiActions.fetchPosts());
    }

    getPostData(post, i){
        if(post.status === 'publish') {
            return (<section className={postElement} key={i}>
                <div className={postData} dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                <div className={postData}>author : {post.author} </div>
                <div className={postData}>date : {post.date} </div>
                <div className={postData}>modified : {post.modified} </div>
            </section>)
        }
    }

    render() {
        const posts = this.props.posts && this.props.posts.data.map((post, i) => this.getPostData(post, i));
        return (<div className={postsWrapper}>
                {posts || 'Loading...'}
            </div>)
    }
};

PageHandler = connect()(PageHandler);

export default PageHandler;
import React from 'react';
import { connect } from 'react-redux';

import { RouteActions } from '../../actions';
import { ApiActions } from '../../actions';

import './page.scss';

class PageHandler extends React.Component {

    constructor(props){
        super(props);
        this.getPostData = this.getPostData.bind(this);
        this.getPageContent = this.getPageContent.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute(this.props.route));
        this.props.dispatch(ApiActions.getPosts());
    }

    getPostData(post, i){
        if(post.status === 'publish') {
            return (<section className="post-element" key={i}>
                <div className="post-data" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                <div className="post-data">author : {post.author} </div>
                <div className="post-data">date : {post.date} </div>
                <div className="post-data">modified : {post.modified} </div>
            </section>)
        }
    }

    getPageContent(page, i){
        if(page.status === 'publish' && page.slug === this.props.route) {
            return (<section className="post-element" key={i}>
                <div className="post-data" dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
                <div className="post-data">author : {page.author} </div>
                <div className="post-data">date : {page.date} </div>
                <div className="post-data">modified : {page.modified} </div>
            </section>)
        }
    }

    render() {
        const posts = this.props.posts.data && this.props.posts.data.map((post, i) => this.getPostData(post, i));
        const pageContent = this.props.pages.data && this.props.pages.data.map((page, i) => this.getPageContent(page, i));

        return (<div className="post-wrapper">
                {pageContent || 'Loading...'}
                {posts || 'Loading...'}
            </div>)
    }
};

PageHandler = connect()(PageHandler);

export default PageHandler;
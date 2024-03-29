import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
//import axios from 'axios';
import axios from '../../axios';
import Post from './FullPost/FullPost'; 
import FullPost from './FullPost/FullPost';
class Blog extends Component {
    

    

    

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>

                </header>
                
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/>*/}
                
                <Switch>
                    <Route path="/posts"  component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Redirect from="/" to="/posts"/>
                </Switch>
                
                
            </div>
        );
    }
}

export default Blog;
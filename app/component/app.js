import React from 'react';
import render from 'react-dom';
import {Router,Route,IndexRoute,Link,IndexLink} from 'react-router';
import Footer from '../component/routers/common/footer.js';

//require('../bower_components/baidiui/css/baidiui.css');

var App = React.createClass({
    render(){
        return(
            <div className="mp_wrap bui_wrap">
                <div className="mp_pagebox_home">
                    {this.props.children}

                    <div className="mp_page_footer">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
})

export default App
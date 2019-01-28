import React,{ Component } from 'react';
import '../css/common.css';
import {Form} from 'antd';

export default class FormDemo extends Component{
        constructor(props){
            super(props);
        }

        render(){
            return(
                <div id="FormDemo">
                    This is a from demo.
                </div>
            )
        }
}
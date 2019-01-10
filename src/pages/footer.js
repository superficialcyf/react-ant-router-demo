import React,{ Component } from 'react';
import '../css/common.css';
import {Row,Col} from 'antd';

class Bottom extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24} style={{textAlign:'center'}}>
                        2019/01/08 React+AntDesign+Router demo GitHub:https://github.com/superficialcyf
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Bottom;
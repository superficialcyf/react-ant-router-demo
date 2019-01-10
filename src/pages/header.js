import React,{ Component } from 'react';
import '../css/common.css';
import {Row,Col,Menu,Input,Icon,Dropdown,Badge,Modal} from 'antd';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false
        };
    }

    handlePersonMenu(key){
        let keyValue = key.key;
        switch (keyValue) {
            case '3':window.open('tencent://message/?uin=815480491');break;
            case '1':window.open('https://github.com/superficialcyf');break;
            case '0':window.open('https://user.qzone.qq.com');break;
            default:break;
        }
    };
    handleOpen=()=>{
        this.setState({
            visible:true
        })
    }
    handleCancle=()=>{
        this.setState({
            visible:false
        })
    };

    render(){
        const personalMenu = (
            <Menu onClick={this.handlePersonMenu} style={{width:'110px'}}>
                <Menu.Item key='0'>
                    <a href='#'>我的空间</a>
                </Menu.Item>
                <Menu.Item key='1'>
                    <a href='#'>我的GitHub</a>
                </Menu.Item>
                <Menu.Item key='2' onClick={this.handleOpen}>
                    <a href='#'>我的消息
                        <Badge
                            count={22}
                            overflowCount={50}
                            offset={[20,-7]}
                        >
                            <span className="message"></span>
                        </Badge>
                    </a>
                </Menu.Item>
                <Menu.Item key='3'>
                    <a href='#'>联系我</a>
                </Menu.Item>
            </Menu>
        );
        const ModalValue = {
            title:'我的消息',
            width:500,
            zIndex:9999,
            centered:true,
            visible:this.state.visible,
            okText:'确定',
            cancelText:'取消',
            onOk:this.handleCancle,
            onCancel:this.handleCancle
        };
        return(
            <div>
                <Row>
                    <Col span={10} style={{textAlign:'center',color:'white',fontWeight:'600',fontSize:'22px'}}>React+AntDesign+Router demo</Col>
                    <Col span={6}>
                        <Input placeholder="请输入你想要的"/>
                    </Col>
                    <Col span={8} style={{textAlign:'right',fontSize:'16px',fontWeight:'600'}}>
                        <span className='personalIcon'><Icon type="user" /></span>
                        <span>
                            <Dropdown overlay={personalMenu} tigger={['click','hover']}>
                                <a className='ant-dropdown-link' href='#' style={{color:'white'}}>
                                    superficial<Icon type='down'></Icon>
                                </a>
                            </Dropdown>
                        </span>
                    </Col>
                </Row>
                <Modal {...ModalValue}>
                    <ul>
                        <li>这是一条消息</li>
                        <li>这是两条消息</li>
                        <li>这是三条消息</li>
                        <li>这是四条消息</li>
                        <li>这是五条消息</li>
                        <li>完了，没消息了......</li>
                    </ul>
                </Modal>
            </div>
        )
    }
}

export default Header;
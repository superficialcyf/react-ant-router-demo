import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/common.css';
import {Layout} from "antd";
import Top from "../pages/header";
import SiderMenu from "../pages/siderMenu";
import Bottom from "../pages/footer";
import Welcome from '../pages/welcome';
import Table from '../pages/table';
import Tabs from '../pages/tabs';
import Form from '../pages/formDemo';


const {Header,Content,Footer,Sider} = Layout;
export default class RouterPage extends Component{
    handleUpdata = ()=>{
        console.log(11);
    };

    render(){
        return(
            <Router onUpdata={this.handleUpdata}>
                <div>
                    <Layout>
                        <Header>
                            <Top/>
                        </Header>
                        <Layout>
                            <Sider  style={{minWidth:'200px',maxWidth:'200px',backgroundColor:'white'}}>
                                <SiderMenu />
                            </Sider>
                            <Content style={{backgroundColor:'white',overflow:'auto',height:'800px'}}>
                                <Route path='/' exact component={Welcome}></Route>
                                <Route path='/TableDemo' component={Table}></Route>
                                <Route path='/TabsDemo' component={Tabs}></Route>
                                <Route path='/FormDemo' component={Form}></Route>
                            </Content>
                        </Layout>
                        <Footer style={{width:'100%',fontWeight:'600',fontSize:'20px'}}>
                            <Bottom/>
                        </Footer>
                    </Layout>
                </div>
            </Router>
        )
    }
}

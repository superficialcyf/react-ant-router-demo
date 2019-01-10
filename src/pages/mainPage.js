import React,{ Component } from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import "../css/common.css";
import Top from './header';
import SiderMenu from './siderMenu';
import Bottom from './footer'

const {Header,Content,Footer,Sider} = Layout;
class MainPage extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
				<div>
					<Layout>
						<Header>
							<Top/>
						</Header>
						<Layout>
							<Sider  style={{minWidth:'200px',maxWidth:'200px'}}>
								<SiderMenu/>
							</Sider>
							<Content style={{backgroundColor:'white'}}></Content>
						</Layout>
						<Footer style={{width:'100%',fontWeight:'600',fontSize:'20px'}}>
                            <Bottom/>
						</Footer>
					</Layout>
				</div>
			)
	}
}

export default MainPage;
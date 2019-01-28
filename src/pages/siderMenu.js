import React,{ Component } from 'react';
import '../css/common.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Menu,Icon} from 'antd';

const {SubMenu} = Menu;
const MenuItem = Menu.Item;
class SiderMenu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <Menu
                    mode='inline'
                    defaultOpenKeys={['first','third']}
                    style={{height:'100%'}}
                >
                    <SubMenu key='first' title={<span type=""><Icon type="area-chart" /><span>AntDesign组件</span></span>}>
                        <MenuItem key='table'><Link to="/TableDemo">表格</Link></MenuItem>
                        <MenuItem key='labs'><Link to="/TabsDemo">标签页</Link></MenuItem>
                        <MenuItem key='form'><Link to="/FormDemo">表单</Link></MenuItem>
                        <MenuItem key='lunbo'>轮播图</MenuItem>
                        <MenuItem key='picupload'>图片上传</MenuItem>
                    </SubMenu>
                    <SubMenu key='third' title={<span type=""><Icon type="area-chart" /><span>数据请求</span></span>}>
                        <MenuItem key='Tone'>获取商品列表</MenuItem>
                    </SubMenu>
                    <SubMenu key='fouth' title={<span type=""><Icon type="area-chart" /><span>插件-echarts图表</span></span>}>
                        <MenuItem key='Fone'>部分类型图表</MenuItem>
                    </SubMenu>
                    <SubMenu key='five' title={<span type=""><Icon type="area-chart" /><span>富文本编辑器WangEditor</span></span>}>
                        <MenuItem key='FIone'>Editor</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default SiderMenu;


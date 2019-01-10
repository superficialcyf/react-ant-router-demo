import React,{ Component } from 'react';
import '../css/common.css';
import {Menu,Icon} from 'antd';

const {SubMenu} = Menu;
const MenuItem = Menu.Item;
class SiderMenu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Menu
                    mode='inline'
                    defaultOpenKeys={['first','third']}
                >
                    <SubMenu key='first' title={<span type=""><Icon type="area-chart" /><span>AntDesign组件</span></span>}>
                        <MenuItem key='table'>表格</MenuItem>
                        <MenuItem key='labs'>标签页</MenuItem>
                        <MenuItem key='form'>表单</MenuItem>
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


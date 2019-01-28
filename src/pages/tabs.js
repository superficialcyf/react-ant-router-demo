import React,{ Component } from 'react';
import '../css/common.css';
import {Tabs,Divider,Icon,Radio} from 'antd';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Panes = [{
    title:'Tabs 1',
    content:'Content of Tab 1',
    key:'1'
},{
    title:'Tabs 2',
    content:'Content of Tab 2',
    key:'2'
},{
    title:'Tabs 3',
    content:'Content of Tab 3',
    key:'3',
    closable:false
}];
export default class TabsPage extends Component{
    constructor(props){
        super(props);
        this.newTabIndex = 0;
        this.state = {
            TabsPosition:'top',
            panes:Panes,
            activeKey:Panes[0].key
        }
    }

    handleChangeTabsOne = (key)=>{
        console.log(key);
    }
    handleChangePosition = (tabsPosition)=>{
        const TabsPostion = tabsPosition.target.value;
        this.setState({
            TabsPosition:TabsPostion
        })
        this.newIndex = 0;
    }
    handleChangeEditTabs = (activeKey)=>{
        this.setState({
            activeKey:activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = ()=>{
        const Panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        Panes.push({title:'Tabs'+activeKey+'',content:'Content of Tab'+activeKey+'',key:activeKey});
        this.setState({
            panes:Panes,
            activeKey:activeKey
        })
    }
    remove = (targetKey)=>{
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane,i)=>{
            if(pane.key === activeKey){
                lastIndex = i-1;
            }
        })
        const panes = this.state.panes.filter(pane =>pane.key !== targetKey);
        if(lastIndex>=0 && activeKey === targetKey){
            activeKey = panes[lastIndex].key;
        }
        this.setState({
            panes:panes,
            activeKey:activeKey
        })
    }

    render(){
        return(
            <div style={{width:'80%',margin:'0 auto'}}>
                <Tabs defaultActiveKey='1' onChange={this.handleChangeTabsOne}>
                    <TabPane tab='Tab 1' key='1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum sit beatae corrupti ex animi blanditiis earum consequuntur eum aperiam sint aliquid! Distinctio similique ipsa repudiandae quis, alias quae error.
                    </TabPane>
                    <TabPane tab={<span><Icon type='android'/>Tabs 2</span>} key='2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit assumenda qui itaque animi harum aspernatur perspiciatis cum consequatur ad reiciendis ipsa explicabo quasi officiis odit ullam maiores, voluptates dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, inventore, laudantium corrupti unde qui delectus eligendi accusantium quos illo reiciendis quibusdam itaque, nam consectetur commodi facilis dicta! Quidem, ipsam consequuntur!
                    </TabPane>
                    <TabPane tab='Tab 3' key='3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa similique, dolor soluta quod necessitatibus possimus ad alias, voluptatem esse officiis vel numquam. Ea nobis amet hic labore praesentium et? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt quos ea quae cum minima odit facilis esse hic, quibusdam quas maiores soluta fugiat est odio enim distinctio labore dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi alias, asperiores ratione quas expedita illo nesciunt veritatis voluptatibus exercitationem ut repellat omnis, pariatur dolore ipsum temporibus itaque? Nostrum, culpa.
                    </TabPane>
                </Tabs>
                <Divider/>
                <RadioGroup onChange={this.handleChangePosition} style={{marginBottom:'10px'}} defaultValue='top'>
                    <RadioButton value='top'>Top</RadioButton>
                    <RadioButton value='bottom'>Bottom</RadioButton>
                    <RadioButton value='left'>left</RadioButton>
                    <RadioButton value='right'>right</RadioButton>
                </RadioGroup>
                <Tabs tabPosition={this.state.TabsPosition} defaultActiveKey='1' style={{height:'200px'}}>
                    <TabPane tab='Tab 1' key='1'>110</TabPane>
                    <TabPane tab='Tab 2' key='2'>119</TabPane>
                    <TabPane tab='Tab 3' key='3'>120</TabPane>
                    <TabPane tab='Tab 4' key='4' disabled>12346</TabPane>
                    <TabPane tab='Tab 5' key='5'>137</TabPane>
                    <TabPane tab='Tab 6' key='6'>189</TabPane>
                    <TabPane tab='Tab 7' key='7'>159</TabPane>
                </Tabs>
                <Divider/>
                <Tabs
                    type='editable-card'
                    onChange={this.handleChangeEditTabs}
                    activeKey={this.state.activeKey}
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map(panel=><TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>)}
                </Tabs>
            </div>
        )
    }
}
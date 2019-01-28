import React,{ Component } from 'react';
import '../css/common.css';
import {Table,Divider} from 'antd';


const colums = [{
    title:'Name',
    dataIndex:'name',
    key:'name',
    render:text =><a href="javascript:;">{text}</a>
},{
    title:'Age',
    dataIndex:'age',
    key:'age',
},{
    title:'Address',
    dataIndex:'address',
    key:'address'
},{
    title:'action',
    dataIndex:'action',
    key:'action'
}];
const data = [];
for(var i=0;i<60;i++){
    let obj = {
        key:i,
        name:'Jone'+i,
        age:Math.floor(Math.random()*100),
        address:'New York No. '+i+' Lake Park',
        action:'Do it now'
    }
    data.push(obj);
};
const columns = [{
    title:'Name',
    dataIndex:'name',
    key:'key',
    filters:[{
        text:'Jone',
        value:'Jone'
    },{
        text:'Tom',
        value:'Tom'
    }],
    onFilter:(value,record)=>record.name.indexOf(value)===0,
    sorter:(a,b)=>a.name.length-b.name.length,
},{
    title:'Age',
    dataIndex:'age',
    key:'age',
    filters:[{
        text:'25',
        value:'25'
    },{
        text:'20',
        value:'20'
    },{
        text:'30',
        value:'30'
    }],
    onFilter:(value,record)=>record.age.indexOf(value) === 0,
    sorter:(a,b)=>a.age-b.age
},{
    title:'Address',
    dataIndex:'address',
    key:'address',
    filters:[{
        text:'New',
        value:'New'
    },{
        text:'China',
        value:'China'
    }],
    onFilter:(value,record)=>record.address.indexOf(value) === 0
}];
const filterData = [{
    key:0,
    name:'Jone.Smith',
    age:'25',
    address:'New York No.1 Lake Park',
},{
    key:1,
    name:'Mark',
    age:'18',
    address:'LonDon No.1 Lake Park',
},{
    key:2,
    name:'Jack',
    age:'26',
    address:'Tokyo No.1 Lake Park',
},{
    key:3,
    name:'Chen yuHang',
    age:'25',
    address:'China No.1 Lake Park',
}]
export default class TableDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            FilterselectedRowKeys:[]
        }
    }

    handelChangeSelected=(selectedRowKey)=>{
        this.setState({
            selectedRowKeys:selectedRowKey
        })
    };
    filterChangeSelected=(selectedRowKey)=>{
        this.setState({
            FilterselectedRowKeys:selectedRowKey
        })
    }

    render(){
        const { selectedRowKeys,FilterselectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys:selectedRowKeys,
            onChange: this.handelChangeSelected,
            hideDefaultSelections: true,
            selections: [
                {
                    key:'all-data',
                    text:'Select All Rows',
                    onSelect:()=>{
                        this.setState({
                            selectedRowKeys:[...Array(59).keys()]
                        })
                    }
                },
                {
                    key:'odd-data',
                    text:'Select odd Rows',
                    onSelect:(changableRowsKey)=>{
                        let newSelectedRowsKey = new Array();
                        newSelectedRowsKey = [...Array(59).keys()].filter(function(item,index){
                            if(index%2!==0){
                                return false;
                            }else{
                                return true;
                            }
                        })
                        this.setState({
                            selectedRowKeys:newSelectedRowsKey
                        })
                    }
                },
                {
                    key:'even-data',
                    text:'Select even Rows',
                    onSelect:(changableRowsKey)=>{
                        let newSelectedRowsKey = new Array();
                        newSelectedRowsKey = [...Array(59).keys()].filter(function(item,index){
                            if(index%2===0){
                                return false;
                            }else{
                                return true;
                            }
                        })
                        this.setState({
                            selectedRowKeys:newSelectedRowsKey
                        })
                    }
                }
            ],
        };
        const filterRowSelection = {
            selectedRowKeys:FilterselectedRowKeys,
            onChange: this.filterChangeSelected,
            hideDefaultSelections: true,
            selections: [
                {
                    key:'all-data',
                    text:'Select All Rows',
                    onSelect:()=>{
                        this.setState({
                            FilterselectedRowKeys:[...Array(4).keys()]
                        },()=>{
                            console.log(this.state)
                        })
                    }
                },
                {
                    key:'odd-data',
                    text:'Select odd Rows',
                    onSelect:(changableRowsKey)=>{
                        let newSelectedRowsKey = new Array();
                        newSelectedRowsKey = [...Array(3).keys()].filter(function(item,index){
                            if(index%2!==0){
                                return false;
                            }else{
                                return true;
                            }
                        })
                        this.setState({
                            FilterselectedRowKeys:newSelectedRowsKey
                        },()=>{
                            console.log(this.state)
                        })
                    }
                },
                {
                    key:'even-data',
                    text:'Select even Rows',
                    onSelect:(changableRowsKey)=>{
                        let newSelectedRowsKey = new Array();
                        newSelectedRowsKey = [...Array(3).keys()].filter(function(item,index){
                            if(index%2===0){
                                return false;
                            }else{
                                return true;
                            }
                        })
                        this.setState({
                            FilterselectedRowKeys:newSelectedRowsKey
                        })
                    }
                }
            ],
        };

        const Tips = ()=>{
          if(this.state.selectedRowKeys.length>0){
              return <span>select {this.state.selectedRowKeys.length} Row</span>
          }else{
              return '';
          }
        };

        return(
            <div style={{width:'80%',margin:'0 auto'}}>
                <Table columns={colums} dataSource={data}></Table>
                <Divider/>
                <Tips/>
                <Table rowSelection={rowSelection} columns={colums} dataSource={data}></Table>
                <Divider/>
                <Table rowSelection={filterRowSelection} columns={columns} dataSource={filterData}></Table>
            </div>
        )
    }
}
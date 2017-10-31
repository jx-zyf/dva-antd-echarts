import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button, Tooltip, Icon } from 'antd';
import { routerRedux } from 'dva/router';
import UserModel from './UserModel';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';

class Users extends React.Component{
  constructor(props){
    super(props);
  }
  deleteHandler(id) {
    this.props.dispatch({
      type: '/users/remove',
      payload: id
    });
  }

  editHandler(id, values) {
    this.props.dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }

  createHandle(values){
    this.props.dispatch({
      type: 'users/create',
      payload: values
    });
  }

  pageChangeHandle(page) {
    this.props.dispatch(routerRedux.push({
      pathname: '/users',
      query:{ page }
    }));
  }

  toExcel(filename) {
    const html = `<caption>店铺客流分析表</caption>${ReactDOM.findDOMNode(this.refs.myTable).getElementsByTagName('table')[0].innerHTML}`;
    const uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html><head><meta charset="UTF-8"></head><body style="text-align:center"><table border=1>{table}</table></body></html>',
      base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) },
      format = function (s, c) {
        return s.replace(/{(\w+)}/g,
          function (m, p) { return c[p]; })
      }
    const ctx = { worksheet: '店铺客流分析表' || 'Worksheet', table: html };
    ReactDOM.findDOMNode(this.refs.myDownload).href = uri + base64(format(template, ctx));
    ReactDOM.findDOMNode(this.refs.myDownload).download = filename;
  }

  render(){
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
          <span className={styles.operation}>
            <UserModel record={record} onOk={this.editHandler.bind( null, record.id)}>
              <a href="">Edit</a>
            </UserModel>
            <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(null, record.id)}>
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
    return (
      <div className={styles.normal}>
        <div>
          <div className={styles.create}>
            <UserModel record={{}} onOk={this.createHandle}>
              <Button type="primary">create Users</Button>
            </UserModel>
          </div>
          <Table
            columns={columns}
            dataSource={this.props.list}
            rowKey={record => record.id}
            pagination={false}
            loading={this.props.loading}
            ref="myTable"
          />
          <Pagination
            className="ant-table-pagination"
            total={this.props.total}
            current={this.props.current}
            pageSize={PAGE_SIZE}
            onChange={this.pageChangeHandle}
          />
          <Tooltip title="请核对是否选择了您要的数据">
            <a onClick={() => this.toExcel('用户信息表.xls')} ref="myDownload">
              <Button type="primary" size="large">
              <Icon type="file-excel" />导出报表</Button>
            </a>
          </Tooltip>
        </div>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);
import React from 'react';
import { Table, Tag, Space, Card, Modal, Button, message, Badge } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/util';

export default class HighTable extends React.Component {

    state = {
        dataSource: []
    }

    params = {
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    // 动态获取mock数据
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: true
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    // pagination: Utils.pagination(res, (current) => {
                    //     _this.params.page = current;
                    //     this.request();
                    // })
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    handleDelete = (Item) => {
        let id = Item.id;
        debugger;
        Modal.confirm({
            title: '确认',
            content: `确认删除${id}吗`,
            onOk: () => {
                message.success(`删除成功，Id为：${id}`);
                this.request();
            }
        })
    }

    render() {

        const columns = [
            {
                title: 'id',
                width: 50,
                key: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 50,
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width: 50,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 50,
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 50,
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                key: 'time',
                dataIndex: 'time'
            }
        ]

        const columns2 = [
            {
                title: 'id',
                width: 50,
                key: 'id',
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                width: 50,
                key: 'userName',
                dataIndex: 'userName',
                fixed: 'left'
            },
            {
                title: '性别',
                width: 50,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 50,
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 50,
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                key: 'address',
                dataIndex: 'address',
                fixed: 'right'
            },
            {
                title: '早起时间',
                width: 120,
                key: 'time',
                dataIndex: 'time',
                fixed: 'right'
            }
        ]

        const columns3 = [
            {
                title: 'id',
                width: 50,
                key: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 50,
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width: 50,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                width: 50,
                key: 'age',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                width: 50,
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 50,
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                key: 'time',
                dataIndex: 'time'
            }
        ]

        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': <Badge status="success" text="成功" />,
                        '3': <Badge status="error" text="错误" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="default" text="正常" />,
                        '6': <Badge status="warning" text="警告" />,
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, Item) => {
                    return <Button size="small" onClick={() => { this.handleDelete(Item) }}>删除</Button>
                }
            }
        ]

        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1580 }}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}
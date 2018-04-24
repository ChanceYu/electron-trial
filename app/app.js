import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class IndexWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>功能</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>功能</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>功能</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            内容
                        </Content>
                    </Layout>
            </Layout>
        );
    }
}


let mainWndComponent = ReactDOM.render(<IndexWindow />, document.getElementById('main-app'));
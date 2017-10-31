import React from 'react';
import { Menu, Icon, Button } from 'antd';
import styles from './Header.css'
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// function Header({ location }) {
//   return (
//     <Menu
//       selectedKeys={[location.pathname]}
//       mode="horizontal"
//       className={styles.Menu}
//     >
//       <Menu.Item key="/">
//         <Link to="/"><Icon type="home" />Home</Link>
//       </Menu.Item>
//       <Menu.Item key="mail">
//         <Icon type="mail" />Navigation One
//       </Menu.Item>
//       <Menu.Item key="app" disabled>
//         <Icon type="appstore" />Navigation Two
//       </Menu.Item>
//       <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
//         <MenuItemGroup title="Item 1">
//           <Menu.Item key="setting:1" className="listMenu">
//             <Link to="/users">Users</Link>
//           </Menu.Item>
//           <Menu.Item key="setting:2" className="listMenu">
//             <Link to="/Products">Products</Link>
//           </Menu.Item>
//         </MenuItemGroup>
//         <MenuItemGroup title="Item 2">
//           <Menu.Item key="setting:3">Option 3</Menu.Item>
//           <Menu.Item key="setting:4">Option 4</Menu.Item>
//         </MenuItemGroup>
//       </SubMenu>
//       <Menu.Item key="alipay">
//         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
//       </Menu.Item>
//     </Menu>
//   );
// }

class Header extends React.Component {
  state = {
    collapsed: false,
    curKey: ['1']
  }
  toggleCollapsed = (e) => {
    e.target.style.left=this.state.collapsed?'260px':'84px';
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  clickHandle = (e) => {
    // console.log(e.key)
    this.setState({
      curKey:[e.key]
    })
    // console.log(this.state.curKey)
  }
  // componentDidMount(){
  //   console.log(this.state.curKey)
  // }
  render() {
    // console.log(this.props.location.pathname)
    return (
      <div style={{ width: 240 }} className={styles.Menu}>
        <Button type="primary" onClick={(e)=>this.toggleCollapsed(e)} className={styles.btn}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          selectedKeys={this.state.curKey}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          className={styles.sider}
          onClick={(e)=>this.clickHandle(e)}
        >
          <Menu.Item key="1">
            <Link to="/home">
              <Icon type="pie-chart" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/map">
              <Icon type="desktop" />
              <span>map</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="/users">
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="/Products">
              <Link to="/Products">Products</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/chart">chart</Link>
            </Menu.Item>
            <Menu.Item key="8">
            <Link to="/bigScreen">bigScreen</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Header;
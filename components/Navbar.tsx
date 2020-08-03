import React , {lazy, useState} from "react";

import {Drawer, Menu} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useRouter} from 'next/router';

const {SubMenu} = Menu;



interface Props {
    isLoggedIn: boolean,
    page?: String,
    drawerVisible: boolean,
    loggedInUser: any,
    setCurrentUser?: () => void,
    toggleDrawer? : () => void
}

const Navbar = (props:Props) => {

    // console.log('navbar props', props);

    let state = {
        current: 'mail',
    };

    const handleClick = e => {
        console.log('click ', e);
    };

    let { current } = state;

    let router = useRouter();
        
    return (
        <div>
            <nav className='nav'>

                <img src="/assets/images/icons/entypo_menu.png"  alt="" className="hamburger" onClick={() => props.toggleDrawer()}/>

                <div className="container" style={{textAlign: 'left'}}>
                    <Link href="/">
                        <img src="/assets/images/icons/GPlogo.png"  alt="" className="logo" onClick={() => router.push('/')} />
                    </Link>                    
                </div>

            </nav>

            <Drawer
                // title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={props.toggleDrawer}
                visible={props.drawerVisible}
                style={{padding: '0px !important', backgroundColor: 'var(--site-purple) !important'}}
            >
                <div className="drawerContent">
                    <h4 style={{color: 'white', fontSize: '12px', position: 'absolute', bottom: '30px'}}>The Gabsyn Peyzs</h4>
                    <p style={{color: 'white', fontSize: '10px', position: 'absolute', bottom: '10px'}}>08106345038, 08187313922</p>
                </div>
                <Menu
                    onClick={handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    style={{backgroundColor: 'var(--site-purple) !important', width: 256 }}
                >
                    <Menu.Item key="1">
                        <Link href="/">
                            <span onClick={props.toggleDrawer}>
                                <SettingOutlined />
                                <span>Home</span>
                            </span>
                        </Link>                        
                    </Menu.Item>
                    
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <MailOutlined />
                            <span>Loans</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">Loan 1</Menu.Item>
                        <Menu.Item key="3">Loan 2</Menu.Item>
                        <Menu.Item key="4">Loan 3</Menu.Item>
                        {/* <Menu.ItemGroup key="g1" title="Item 1" >
                            <Menu.Item key="1" style={{backgroundColor: 'var(--site-purple)'}}>Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup> */}
                    </SubMenu>
                    <Menu.Item key="5">
                        <span>
                            <SettingOutlined />
                            <span>Company</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <span>
                            <SettingOutlined />
                            <span>Blog</span>
                        </span>
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <MailOutlined />
                            <span>Help</span>
                            </span>
                        }
                    >
                        <Menu.Item key="7">FAQ</Menu.Item>
                        <Menu.Item key="8">Site map</Menu.Item>
                        <Menu.Item key="9">Terms and Conditions</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10">
                        <span>
                            <SettingOutlined />
                            <span>Careers</span>
                        </span>
                    </Menu.Item>
                </Menu>
            </Drawer>

            

            <style jsx>{
                `.nav{
                    width: 100%;
                    height: var(--nav-height);
                    background-color: purple;
                    display: flex;
                    align-items: center;
                    position: fixed;
                    z-index: 10;
                }
                .hamburger{
                    cursor: pointer;
                    margin-left: auto;
                    margin-right: 0px;  
                    height: 40px;               
                }
                .hamburger:hover{
                    transform: scale(1.1, 1.1);                    
                }
                .logo{
                    height: 50px;
                }
                `}
            </style>
        </div>        
    );
    
}

export default Navbar;
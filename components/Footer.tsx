
import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import styles from "../styles/home.module.css";
import {
  Row, 
  Col,   
  Typography,
  Space,
  Button,
  Input,
  Radio,
  Carousel 
} from 'antd';


import {
  SearchOutlined
} from '@ant-design/icons'

const {Title, Text,  Paragraph} = Typography;

const Footer = () => {
    return (
        <footer>
                <div className={styles.footer_top}>

                <div className="container">
                    <Row>

                        <Col md={{span: 8}} style={{paddingRight: "50px", paddingBottom: '20px'}}>
                            <Title level={4} style={{fontSize: '12px'}}>GET IN TOUCH</Title>
                            <Text style={{fontSize: '12px'}}>Headquarters:</Text> 
                            <br />
                            <Text style={{fontSize: '12px'}}> No 1, Afinni Street, Off Adelabu, by Alhaji Masha, Surulere, Lagos</Text> 
                            <br />
                            <Text style={{fontSize: '12px'}}>Phone:08106345038, 08187313922, 08063047854 Email: care@gabsynpeyzs.com,info@gabsynpeyzs.com</Text>
                        </Col>

                        <Col md={{span: 8}} style={{paddingRight: "50px", paddingBottom: '20px'}}>
                            <Title level={4} style={{fontSize: '12px'}}>RECENT POSTS</Title>
                            <Text style={{fontSize: '12px'}}>
                                There is no recent post...
                            </Text> 
                        </Col>

                        <Col md={{span: 8}}>
                            <Title level={4} style={{fontSize: '12px'}}>THE GABSYN PEYZS</Title>
                            <Text style={{fontSize: '12px'}}>
                            The Gabsyn Peyzs was established in 2015 as a response to the rigid, lengthy, and difficult credit processes in this part of the world. We believe in Simple, Creative &amp; Flexible Loan applications.  
                            </Text> 
                        </Col>

                    </Row>
                </div>

                </div>{/* <!-- end of footer_top section --> */}

                <div className={styles.footer_bottom}>

                <div className="container">
                    <Row>
                        
                        <Col md={{span: 6}} style={{paddingRight: "50px"}}>
                        <Text style={{fontSize: '12px'}}>Copyrights © 2020 All Rights Reserved The Gabsyn Peyzs. Terms of Use / Powered by decode24</Text> 
                        </Col>


                        <Col md={{span: 6, offset: 12}} >
                            <div >
                                <Space size="small">
                                <a href="#" target="_blank"><img src="/assets/images/icons/zmdi_facebook-box.png" alt="facebook" /></a>
                                <a href="#" target="_blank"><img src="/assets/images/icons/ant-design_twitter-square-filled.png" alt="twitter" /></a>
                                <a href="#" target="_blank"><img src="/assets/images/icons/entypo-social_instagram.png" alt="instagram" /></a>
                                </Space>                        
                            </div>
                            <Text style={{fontSize: '12px'}}>
                            care@gabsynpeyzs.com,info@gabsynpeyzs.com 08106345038 gabsynonskype
                            </Text> 
                        </Col>

                    </Row>

                </div>

                <style jsx>{
                    `
                    
                    `
                }</style>
                

            </div>{/* <!-- end of footer_bottom section --> */}

          </footer>
    );
}

export default Footer;
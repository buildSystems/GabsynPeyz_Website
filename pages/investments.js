import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import {Scaffold, Service, ServiceItem} from '../components';
import Navbar from '../containers/Navbar';
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

export default function Home() {

  return (
    <Scaffold>       
      <div >
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>

          <Navbar />
          <div className="investmentSlides" style={{position: 'relative'}}>

            <Carousel autoplay={true} dots={false}>

                <div>
                    
                </div>{/*<!-- end of slide -->*/}

                <div>
                   
                </div>{/*<!-- end of slide -->*/}

                <div>
                   
                </div>{/*<!-- end of slide -->*/}
                
            </Carousel>

            <div className="container" style={{position: 'fixed', zIndex: 100, 
                                                left: '50%', top: '0px', 
                                                paddingTop: '350px',
                                                transform: 'translateX(-50%)',
                                                height: '100%'}}>

                <div style={{width: '300px', position: 'absolute'}}>
                    <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>Lorem ipsum dolor sit amet.</Title>
                    <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis nibh fermentum at malesuada. Nisl sem cras id at ipsum nisl.
                    </p>
                    <Link href="/loans#">
                        <Button size="large" type="primary" 
                                style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                LEARN MORE
                        </Button>
                    </Link>
                </div> 

                <div className="calculator" >
                    
                    <Title level={4} style={{color: 'var(--app-purple)', fontSize: '14px'}}>Calculate Investment Return</Title>
                    
                    <hr />
                    
                    <label for="loan_amount">Amount</label>
                    <input type="number" min="0" id="loan_amount" />
                    <small class="error" id="loan_amount_error"></small>

                    <label for="loan_months">Months</label>
                    <input type="number" min="0" max="24" id="loan_months" />
                    <small class="error" id="loan_months_error"></small>

                    <Row>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', marginTop: 10, marginBottom: 0}}><strong>Loan type</strong></p>
                            <Radio.Group onChange={() => {}} size="small" value={1}>
                                <Radio value={1}>Investment1</Radio>
                                <Radio value={2}>Investment2</Radio>
                                <Radio value={3}>Investment3</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', textAlign: 'right', marginTop: 10, marginBottom: 0}}><strong>Interest rate</strong></p>
                            <p style={{color: 'var(--app-purple)', fontSize: '15px', textAlign: 'right'}}><strong>@5%</strong></p>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', marginTop: 10, marginBottom: 0}}>Total payment</p>
                            <p style={{color: 'var(--app-purple)', fontSize: '12px'}}>N100,000</p>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                        <Button size="large" type="primary" 
                                style={{paddingLeft: '30px', paddingRight: '30px'}}>
                                APPLY NOW
                        </Button>
                        </Col>
                    </Row>
                     
                </div>                     

            </div>  
            
            <style jsx>
                {
                    `  
                    .calculator{
                        background-color: white; 
                        border-radius: 15px; 
                        padding: 15px; 
                        width: var(--calculator-width);
                        position: absolute;
                        bottom: 16px; 
                        right: 0px;
                        box-shadow: 2px 2px 5px rgba(0,0,0,.2);
                    } 
                    .calculator label, .calculator input, .calculator small{
                        display: block;
                        color: var(--app-purple);
                    }    

                    .calculator label{
                        font-size: 10px;
                    }

                    .calculator input{
                        width: 100%;
                        border-radius: 5px;
                        border: 1px solid var(--app-purple);
                        padding-left: 5px;
                        font-size: 15px;
                        outline: none;
                    }
                    
                    .calculator small{
                        margin-bottom: 5px;
                    }

                    .calculator .error{
                        color: red;
                    }

                    .ant-radio-wrapper{
                        font-size: 12px;
                    }
                        
                    `
                }
            </style>
          </div>

        </main>

      </div>

     
    </Scaffold>
    
  )
}

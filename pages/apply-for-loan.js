import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import {Scaffold, Service, ServiceItem, Footer} from '../components';
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
  Carousel,
  Divider
} from 'antd';


import {
  SearchOutlined
} from '@ant-design/icons'

const {Title, Text,  Paragraph} = Typography;

export default function ApplyForLoan() {

  return (
    <Scaffold>       
      <div >
        <Head>
          <title>Apply for loan</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
            <Navbar />
            <div className="apply_background">

                <div className="container" style={{paddingTop: '150px'}}>
                    <Row>
                        <Col md={{span: 8}}>
                            <ServiceItem 
                                logo="/assets/images/icons/Forms_LoanIcon.png" 
                                title="Loan 1">
                                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                            </ServiceItem>
                        </Col>
                    </Row>
                
                </div>
                
            </div>

            <div className="formSection">
                <Row>
                    <Col md={{span: 15}} style={{padding: '15px'}}>

                        <Title level={4} >
                            Kindly provide the following information to prooceed with your application
                        </Title> 

                        <Divider />

                        <div className="formInputDiv" >
                            
                            <div>
                                <label htmlFor="amount_needed">Amount needed</label><br />
                                <input type="number" id="amount_needed" min="0" className="formInput" />
                            </div>

                            <div>
                                <label htmlFor="bvn">BVN</label><br />
                                <input type="number" id="bvn" className="formInput" />
                            </div>

                        </div>

                        <div className="formInputDiv" >

                            <div>
                                <label htmlFor="first_name">First name </label><br />
                                <input type="number" id="first_name" className="formInput" />
                            </div>

                            <div>
                                <label htmlFor="middle_name">Middle name </label><br />
                                <input type="text" id="middle_name" className="formInput" />
                            </div>    

                            <div>
                                <label htmlFor="middle_name">Last name </label><br />
                                <input type="text" id="last_name" className="formInput" />
                            </div>   

                        </div>

                        <div className="formInputDiv" >
                            <label htmlFor="address">Address </label><br />
                            <input type="text" id="address" className="formInput" />
                        </div>

                        <div className="formInputDiv" style={{marginBottom: '30px'}}>

                            <div>
                                <label htmlFor="email">Email</label><br />
                                <input type="email" id="email" className="formInput" />
                            </div>

                            <div>
                                <label htmlFor="phone1">Phone 1</label><br />
                                <input type="phone" id="phone1" className="formInput" />
                            </div>    

                            <div>
                                <label htmlFor="phone2">Phone 2</label><br />
                                <input type="phone" id="phone2" className="formInput" />
                            </div>   

                        </div>
                        <Text style={{fontSize: '12px', marginTop: '30px !important'}}>How did you hear about us?</Text><br />
                        <Radio.Group onChange={() => {}} size="small" value={1}>
                            <Radio value={1}>Online</Radio>
                            <Radio value={2}>Sales Agent</Radio>
                            <Radio value={3}>Radio</Radio>
                            <Radio value={3}>Billboard</Radio>
                            <Radio value={3}>Referral</Radio>
                        </Radio.Group>

                        <div>
                            <Button style={{color: 'white', 
                                            width: '100%',
                                            borderRadius: '5px !important', 
                                            marginTop: '20px',
                                            height: '50px'
                                            }}>Apply</Button>
                        </div>
                    </Col>
                    <Col md={{span: 9}} style={{padding: '15px', backgroundColor: '#ddd'}}>

                        <Title style={{marginLeft: '30px'}} level={4} >Top 3 questions</Title>
                        <ul className="questionsList">
                            <li>
                                <h4>Why Choose us?</h4>
                                We are a team of young professionals with a shared wealth of experience in various sectors of the economy who have come together to provide solutions to individuals and business.
                            </li>
                            <li>
                                <h4>What we believe?</h4>
                                We believe all goals can be achieved with the right kind of support. Because we believe so strongly in our clients, We listen to them, We understand them and We make it work for them!.
                            </li>
                            <li>
                                <h4>What we do?</h4>
                                We provide creative tailor made Financial, Advisory and Logistics solutions to Individuals and businesses with a view to helping them grow. We provide Rent Advance to Landlords pending the actual receipt of rents.
                            </li>
                        </ul>

                        <div style={{display: 'flex', marginTop: '30px'}}>
                            <img style={{height: '100px', marginLeft: '30px'}} src="/assets/images/icons/Forms_MoreInfoIcon.png" alt="" />
                            <ul style={{paddingTop: '15px'}}>
                                <li>
                                Lorem ipsum dolor sit amet.
                                </li>
                                <li>
                                Lorem ipsum dolor sit amet.</li>
                                <li>
                                Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>

                        <div style={{margin: '30px'}}>
                            <Title level={4}>Contact us via</Title>
                            <Text>08106345038, 08187313922, 08063047854</Text><br />
                            <Text>care@gabsynpeyzs.com,info@gabsynpeyzs.com</Text>
                        </div>

                    </Col>
                </Row>
            </div>

            <Footer />
        </main>
       </div>
    </Scaffold>
  )
}
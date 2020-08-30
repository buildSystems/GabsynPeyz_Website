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
import * as Constants from '../constants';


import {
  SearchOutlined
} from '@ant-design/icons'

const {Title, Text,  Paragraph} = Typography;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default function Cooperatives() {

    const cooperativeTypes =  [
        {
             "name":"GPL Gold Coop Savings Account",
             "APR rate": 0.25 * 12,
             "flat rate": 0.25
         }, 
         {
             "name":"GPL Diamond Coop Savings Account",
             "APR rate": 0.5 * 12,
             "flat rate": 0.5
         },
         {
             "name":"GPL Platinum Coop Savings Account",
             "APR rate": 12,
             "flat rate": 1.0
         }, 
         
       ];
     
         let [cooperativeState, setCooperativeState] = useState({amount:'', tenure:'', rate:0, payment:0});
     
         const calculatePayment = () => {
             return parseInt(amount) + parseInt(amount) * parseFloat(rate) * parseInt(tenure) / 100; 
         }
     
         const handleAmountChange = (event) => {
            console.log('Amount change', event.target.value);
            setCooperativeState({
                    ...cooperativeState, amount: event.target.value, 
                    payment: ((parseInt(event.target.value) * parseFloat(cooperativeState.rate) * parseInt(cooperativeState.tenure)/ 100)).toFixed(2)
            });
            
        }
    
        const handleTenureChange = (event) => {
            console.log('Tenure change', event.target.value);
            setCooperativeState({
                ...cooperativeState, tenure: event.target.value, 
                payment: ((parseInt(cooperativeState.amount) * parseFloat(cooperativeState.rate) * parseInt(event.target.value) / 100 )).toFixed(2)
            });
        }
    
        const handleRateChange = (event) => {
            console.log('Rate change', event.target.value);
            setCooperativeState({
                ...cooperativeState, rate: event.target.value, 
                payment: ((parseInt(cooperativeState.amount) * parseFloat(event.target.value) * parseInt(cooperativeState.tenure) / 100 )).toFixed(2)
            });
        }

  return (
    <Scaffold>       
      <div >
        <Head>
          <title>Cooperatives</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>

          <Navbar />
          <div className="cooperativeSlides" style={{position: 'relative'}}>

            <Carousel autoplay={true} dots={false} effect="fade">

                <div>

                    <div className="container">
                        <div className="loansText" >
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                Is your Money Working for you?               
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                Join a nationwwide clique of Technocrats, Entrepreneurs, Traders etc. and start saving with as low as 1000 Naira
                            </p>
                            
                            {/* <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link> */}
                        </div>   
                    </div>
                    
                </div>{/*<!-- end of slide -->*/}

                <div>
                    <div className="container">
                        <div className="loansText" >
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                Plan and Enjoy in Rainy days...           
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                By considering opening a cooperative savings account today and start enjoying the benefits of financial freedom
                            </p>
                            
                            {/* <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link> */}
                        </div>   
                    </div>                   
                </div>{/*<!-- end of slide -->*/}

                <div>
                    
                    <div className="container">
                        <div className="loansText" >
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                With target savers account...                 
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                Secure a better future for your children by opening a target savers account with as low as 1000 Naira
                            </p>
                            
                            {/* <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link> */}
                        </div>   
                    </div>
                   
                </div>{/*<!-- end of slide -->*/}
                
            </Carousel>

            <div className="container" style={{position: 'fixed', zIndex: 100, 
                                                left: '50%', top: '0px', 
                                                paddingTop: '350px',
                                                transform: 'translateX(-50%)',
                                                height: '100%'}}>

               
                <div className="calculator" >
                    
                    <Title level={4} style={{color: 'var(--app-purple)', fontSize: '14px'}}>Calculate Return on Savings</Title>
                    
                    <hr />

                    <label htmlFor="loan_type">Cooperative Savings Type</label>
                    <select id="cooperative_type" onChange={handleRateChange}>

                        <option key={`${0}-cooperative-option`} value={0}>
                            --Select Cooperative Savings--
                        </option>

                        {
                            cooperativeTypes.map((cooperativeType, index) => (
                                <option key={`${index}-cooperative-option`} value={cooperativeType['flat rate']}>
                                    {cooperativeType['name']}  ({cooperativeType['APR rate']}%)
                                </option>
                            ))
                        }

                    </select>
                    
                    <label for="loan_amount">Amount</label>
                    <input type="number" min="0" id="loan_amount" placeholder="e.g. 100,000" value={cooperativeState.amount} onChange={handleAmountChange} />
                    <small class="error" id="loan_amount_error"></small>

                    <label for="loan_months">Months</label>
                    <input type="number" min="0" max="24" id="loan_months" placeholder="e.g. 6 months" value={cooperativeState.tenure} onChange={handleTenureChange} />
                    <small class="error" id="loan_months_error"></small>

                    

                    <Row>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', marginTop: 10, marginBottom: 0}}>Total Interest on savings</p>
                            <p style={{color: 'var(--app-purple)', fontSize: '12px'}}>NGN {cooperativeState.payment == 'Infinity' || cooperativeState.payment == 'NaN' ? 0 : numberWithCommas(cooperativeState.payment)}</p>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                        <a href={Constants.REGISTER}>
                            <Button size="large" type="primary" 
                                    style={{paddingLeft: '30px', paddingRight: '30px'}}>
                                    APPLY NOW
                            </Button>
                        </a>
                        </Col>
                    </Row>
                     
                </div>                     

            </div>  
            
            <style jsx>
                {
                    `  
                    
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

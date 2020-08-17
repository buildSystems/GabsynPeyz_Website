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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Investments() {

    const investmentTypes =  [
       {
            "name":"GPL Paladium Income Fund",
            "APR rate": 24.0,
            "flat rate": 2.0
        }, 
        {
            "name":"GPL Platinum Income Fund",
            "APR rate": 28.0,
            "flat rate": 28.0 / 12
        },
        {
            "name":"GPL Pearl Income Fund",
            "APR rate": 30,
            "flat rate": 30 / 12
        }, 
        {
            "name":"GPL Detail Income Fund",
            "APR rate": 36,
            "flat rate": 3
        }
      ];
    
        let [investmentState, setInvestmentState] = useState({amount:'', tenure:'', rate:0, payment:0});
    
        const calculatePayment = () => {
            return parseInt(amount) + parseInt(amount) * parseInt(rate) * parseInt(tenure) / 100; 
        }
    
        const handleAmountChange = (event) => {
            setInvestmentState({
                    ...investmentState, amount: event.target.value, 
                    payment: ((parseInt(event.target.value) * parseFloat(investmentState.rate) * parseInt(investmentState.tenure) / 100 )).toFixed(2)
            });
            
        }
    
        const handleTenureChange = (event) => {
            setInvestmentState({
                ...investmentState, tenure: event.target.value, 
                payment: ((parseInt(investmentState.amount) * parseFloat(investmentState.rate) * parseInt(event.target.value) / 100  )).toFixed(2)
            });
        }
    
        const handleRateChange = (event) => {
            setInvestmentState({
                ...investmentState, rate: event.target.value, 
                payment: ((parseInt(investmentState.amount) * parseFloat(event.target.value) * parseInt(investmentState.tenure) / 100) ).toFixed(2)
            });
        }

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

            <Carousel autoplay={true} dots={false} effect="fade">

                <div>
                    <div className="container">
                        <div style={{width: '300px', position: 'absolute'}}>
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                Earn up to 30% on investment...                 
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                When you invest in GPL Coop Income Fund for a period of 180 days starting with a minimum deposit of 50,000 Naira.
                            </p>
                            
                            <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link>
                        </div>   
                    </div>                    
                </div>{/*<!-- end of slide -->*/}

                <div>
                    <div className="container">
                        <div style={{width: '300px', position: 'absolute'}}>
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                Start investing early in a better future...  
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                With as low as 50,000 earn up to 24% annually when you invest in GPL Coop Income Fund
                            </p>
                            
                            <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link>
                        </div>   
                    </div>   
                </div>{/*<!-- end of slide -->*/}

                <div>
                    <div className="container">
                        <div style={{width: '300px', position: 'absolute'}}>
                            
                            <Title level={2} style={{color: 'var(--app-purple)', width: '200px', lineHeight: '1.6rem'}}>                        
                                Get a better retirement plan... 
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', lineHeight: '1.0rem'}}>
                                Start investing today in the GPL Coop Income Fund with a minimum of 50,000 Naira and get return on investment of 30% annually.
                            </p>
                            
                            <Link href="/loans#">
                                <Button size="large" type="primary" 
                                        style={{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button>
                            </Link>
                        </div>   
                    </div>  
                </div>{/*<!-- end of slide -->*/}
                
            </Carousel>

            <div className="container" style={{position: 'fixed', zIndex: 100, 
                                                left: '50%', top: '0px', 
                                                paddingTop: '350px',
                                                transform: 'translateX(-50%)',
                                                height: '100%'}}>

                {/* <div style={{width: '300px', position: 'absolute'}}>
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
                </div>  */}

                <div className="calculator" >
                    
                    <Title level={4} style={{color: 'var(--app-purple)', fontSize: '14px'}}>Calculate Investment Return</Title>
                    
                    <hr />

                    <label htmlFor="loan_type">Investment Type</label>
                    <select id="investment_type" onChange={handleRateChange}>

                        <option key={`${0}-investment-option`} value={0}>
                            --Select investment type--
                        </option>

                        {
                            investmentTypes.map((investmentType, index) => (
                                <option key={`${index}-investment-option`} value={investmentType['flat rate']}>
                                    {investmentType['name']}  ({investmentType['APR rate']}%)
                                </option>
                            ))
                        }

                    </select>

                    
                    <label for="loan_amount">Amount</label>
                    <input type="number" min="0" id="loan_amount" placeholder="e.g. 100,000" value={investmentState.amount} onChange={handleAmountChange}/>
                    <small class="error" id="loan_amount_error"></small>

                    <label for="loan_months">Months</label>
                    <input type="number" min="0" max="24" id="loan_months" placeholder="e.g. 6 months" value={investmentState.tenure} onChange={handleTenureChange} />
                    <small class="error" id="loan_months_error"></small>

                    
                    <Row>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', marginTop: 10, marginBottom: 0}}>Total Return on Investment</p>
                            <p style={{color: 'var(--app-purple)', fontSize: '13px'}}>NGN {investmentState.payment == 'Infinity' || investmentState.payment == 'NaN' ? 0 : numberWithCommas(investmentState.payment)}</p>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                        <Button size="large" type="primary" 
                                style={{padding: '5px 30px', marginTop: '10px'}}>
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

                    .calculator input, .calculator select{
                        width: 100%;
                        border-radius: 5px;
                        border: 1px solid var(--app-purple);
                        padding-left: 5px;
                        font-size: 12px;
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

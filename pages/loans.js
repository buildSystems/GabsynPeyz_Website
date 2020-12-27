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

import fetch from 'isomorphic-unfetch';
import {BASE_PATH} from '../constants';
import * as Constants from '../constants';

import {
  SearchOutlined, ConsoleSqlOutlined
} from '@ant-design/icons'

const {Title, Text,  Paragraph} = Typography;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var actualAmount = 0;

export default function Loans() {

    const titles = ["With GPL Salary Loan", "Need Quick Cash?", "Get Asset backed loans"];
    const bodies = ["Everyday is a payday", "Get up to 5 million Naira within 24 hours with easy and convenience repayment plan", "Of up to 10 million Naira within 24 hours"];

    // let [currentTitle, setCurrentTitle] = useState(titles[0]);
    // let [currentBody, setCurrentBody] = useState(bodies[0]);

    // let count = 0;
    
    // setInterval(function(){
    //     setCurrentTitle(titles[count % titles.length]);
    //     setCurrentBody(bodies[count % bodies.length]);
    //     count++;
    // }, 3000);

    //This is the actual amount entered by user
    
      

    const loanTypes =  [
        {
            "name": "Salary Earner Loan",
            "APR rate": 97.1128,
            "flat rate": 5.0
        },
        {
            "name":"Salary Advance (1 Month)",
            "APR rate": 97.1128,
            "flat rate": 5.0
        }, 
        {
            "name": "Business/SME Loan",
            "APR rate":130.864,
            "flat rate": 7.0
        },
        {
            "name":"Micro Business Loan",
            "APR rate": 130.864,
            "flat rate": 10.0
        },
        {
            "name":"Co-operative Loan",
            "APR rate":70.26,
            "flat rate": 4.5
        }, 
        // {
        //     "name": "Asset-Backed Loan",
        //     "APR rate":"130.864",
        //     "flat rate": 7.0
        // }, 
        
        // {
        //     "name":"Asset-Financing Loan",
        //     "APR rate": 130.864,
        //     "flat rate": 7.0
        // }, 
        // {
        //     "name":"Rent Advance Loan",
        //     "APR rate": 97.1128,
        //     "flat rate": 5.0
        // }, 
        
        // {
        //     "name":"One-Month Loan",
        //     "APR rate": 97.1128,
        //     "flat rate": 5.0
        // }, 
        
        // {
        //     "name":"Staff Loan",
        //     "APR rate":60.95,
        //     "flat rate": 3.0
        // },
        // {
        //     "name":"Agricultural Loan",
        //     "APR rate":97.1128,
        //     "flat rate": 5.0
        // }, 
        // {
        //     "name":"Personal Loan",
        //     "APR rate": 97.1128,
        //     "flat rate": 5.0
        // }, 
        // {
        //     "name":"Returning Client Loan",
        //     "APR rate": 79.384,
        //     "flat rate": 4.0
        // },
        // {
        //     "name":"Public Sector Loan",
        //     "APR rate": 114.2455,
        //     "flat rate": 6.0
        // }, 
        
        // {
        //     "name":"School Fee",
        //     "APR rate": 106.0026,
        //     "flat rate": 5.5
        // },
        // {
        //     "name":"Loan Refinancing",
        //     "APR rate": 130.864,
        //     "flat rate": 7.0
        // }, 
        // {
        //     "name":"Rate A+",
        //     "APR rate": 97.1128,
        //     "flat rate": 5.0
        // }, 
        // {
        //     "name":"Rate A",
        //     "APR rate": 97.1128,            
        //     "flat rate": 5.0
        // },
        // {
        //     "name":"Rate B",
        //     "APR rate": 106.0026,
        //     "flat rate": 5.5
        // }, 
        // {
        //     "name":"Rate C",
        //     "APR rate": 120.51,
        //     "flat rate": 6.5
        // }
    ];

    let [loanState, setLoanState] = useState({tenureDisabled: false, amount:'', tenure:'', rate:0, payment:0});

    const calculatePayment = () => {
        return parseInt(amount) + parseInt(amount) * parseInt(rate) * parseInt(tenure) / 100; 
    }

    const handleAmountChange = (event) => {        
        
        // -- Stop cursor jumping when formatting number in React
     
        var val = event.target.value.replace(/(\..*)\./g, '$1') //Replace Multiple Dot(.)
        actualAmount = Number(val.replace(/,/g, ""));

        console.log(`current value of  x: ${actualAmount}`);

        var formatter = new Intl.NumberFormat("en-US");
        loanState.amount = formatter.format(actualAmount);

        setLoanState({
        ...loanState,
        payment: ((parseInt(actualAmount) + parseInt(actualAmount) * parseFloat(loanState.rate) * parseInt(loanState.tenure) / 100) / parseInt(loanState.tenure)).toFixed(2)
        });

        // if (loanState.amount != x) {

        //    var formatter = new Intl.NumberFormat("en-US");
        //    loanState.amount = formatter.format(x);

        //    setLoanState({
        //     ...loanState, 
        //     payment: ((parseInt(x) + parseInt(x) * parseFloat(loanState.rate) * parseInt(loanState.tenure) / 100) / parseInt(loanState.tenure)).toFixed(2)
        //    });
           
        // }else{
        //     setLoanState({
        //         ...loanState, amount: x, 
        //         payment: ((parseInt(x) + parseInt(x) * parseFloat(loanState.rate) * parseInt(loanState.tenure) / 100) / parseInt(loanState.tenure)).toFixed(2)
        //        });
        // }

        
        
    }

    const handleTenureChange = (event) => {
        setLoanState({
            ...loanState, tenure: event.target.value, 
            payment: ((parseInt(actualAmount) + parseInt(actualAmount) * parseFloat(loanState.rate) * parseInt(event.target.value) / 100  ) / parseInt(event.target.value)).toFixed(2)
        });
    }

    const handleRateChange = (event) => {
        if(event.target.selectedIndex == 2){
            
            setLoanState({
                ...loanState, rate: event.target.value, tenureDisabled: true, tenure: 1,
                payment: ((parseInt(actualAmount) + parseInt(actualAmount) * parseFloat(event.target.value) * parseInt(loanState.tenure) / 100) / parseInt(loanState.tenure) ).toFixed(2)
            });

            console.log('Salary Advance Selected');
        }else{
            setLoanState({
                ...loanState, rate: event.target.value, tenureDisabled: false, tenure: 6,
                payment: ((parseInt(actualAmount) + parseInt(actualAmount) * parseFloat(event.target.value) * parseInt(loanState.tenure) / 100) / parseInt(loanState.tenure) ).toFixed(2)
            });
        }
        
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
          <div className="loanSlides" style={{position: 'relative'}}>

            <Carousel autoplay={true} dots={false} effect="fade">

                <div>
                    <div className="container">
                        <div className="loansText" >
                            
                            <Title level={1} style={{color: 'var(--app-purple)', width: '400px', lineHeight: '2rem'}}>                         
                                With GPL Salary Loan                   
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', fontSize: "20px",  lineHeight: '1.5rem'}}>
                                Everyday is a payday with up to 50% of your salary payout
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
                            
                            <Title level={1} style={{color: 'var(--app-purple)', width: '400px', lineHeight: '2rem'}}>                        
                            Need Quick Cash?                   
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px', fontSize: "20px", lineHeight: '1.5rem'}}>
                            Get up to 5 million Naira within 24 hours with easy and convenience repayment plan
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
                            
                            <Title level={1} style={{color: 'var(--app-purple)', width: '400px', lineHeight: '2rem'}}>                          
                            Get Asset backed loans                   
                            </Title>
                            <p style={{color: 'var(--app-purple)', marginBottom: '0px !important', fontSize: "20px", lineHeight: '1.5em'}}>
                            Get the right loan to help you meet your business needs of up to 10 million Naira within 24 hours
                            </p>
                                                        
                            {/* <Link href="/loans#"> */}
                                {/* <Button size="large" type="primary" 
                                        style={{marginTop: '0px !important', paddingLeft: '30px', paddingRight: '30px'}}>
                                        LEARN MORE
                                </Button> */}
                            {/* </Link> */}
                        </div>   
                    </div>                
                   
                </div>{/*<!-- end of slide -->*/}
                
            </Carousel>

            <div className="container" style={{position: 'fixed', zIndex: 100, 
                                                left: '50%', top: '0px', 
                                                paddingTop: '350px',
                                                transform: 'translateX(-50%)',
                                                height: '100vh'
                                              }}>

                <div className="calculator" >
                    
                    <Title level={4} style={{color: 'var(--app-purple)', fontSize: '14px'}}>Calculate Loan</Title>
                    
                    <hr />

                    <label htmlFor="loan_type">Loan Type</label>
                    <select id="loan_type" onChange={handleRateChange}>

                        <option key={`${0}-loan-option`} value={0}>
                            --Select loan type--
                        </option>

                        {
                            loanTypes.map((loanType, index) => (
                                <option key={`${index}-loan-option`} value={loanType['flat rate']}>
                                    {loanType['name']}  ({loanType['flat rate']}%)
                                </option>
                            ))
                        }

                    </select>
                    
                    <label htmlFor="loan_amount">Amount</label>
                    <input type="text" id="loan_amount" placeholder="e.g. 100,000"  value={loanState.amount} onChange={handleAmountChange}/>
                    <small className="error" id="loan_amount_error"></small>

                    <label htmlFor="loan_months">Months</label>
                    <input type="number" min="0" max="24" id="loan_months" placeholder="e.g. 6 months" value={loanState.tenure} onChange={handleTenureChange} disabled={loanState.tenureDisabled}/>
                    <small className="error" id="loan_months_error"></small>

                    <Row>
                        <Col span={12}>
                            <p style={{color: 'black', fontSize: '10px', marginTop: 10, marginBottom: 0}}>Total Monthly Repayment</p>
                            <p style={{color: 'var(--app-purple)', fontSize: '13px'}}>NGN {loanState.payment == 'Infinity' || loanState.payment == 'NaN' ? 0 : numberWithCommas(loanState.payment)}</p>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                        <a href={Constants.REGISTER}>
                            <Button size="large" type="primary" 
                                    style={{padding: '5px 30px', marginTop: '10px'}}>
                                    Apply Now
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

// export async function getStaticProps(){

//     const res = await fetch(`${BASE_PATH}/fetch/loan_types.js`);
//     console.log(res);
//     // const json = JSON.parse(res);

//     return {
//         props: {res}
//     }

// }

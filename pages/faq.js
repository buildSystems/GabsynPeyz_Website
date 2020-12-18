import React, {useState} from 'react';
import Head from 'next/head';
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
  Divider,
  Collapse 
} from 'antd';


import {
  SearchOutlined
} from '@ant-design/icons'
import clsx from 'clsx';

const {Title, Text,  Paragraph} = Typography;
const { Panel } = Collapse;

const text= "text";

const categories = ['All', 'Investments', 'Payments', 'Applying for a new loan', 'Existing loan enquiry', 'Repayments'];
const faqs = [
                    ['Investments', 'What investment product does Gabsyn have?', 'We have one investment product, Gabsyn investment notes. This gives you a high yield interest of up to 17% on your investments.'],
                    ['Investments', 'What is the minimum amount I can Invest with GABSYN?', 'The minimum amount is N50,000'],
                    ['Investments', 'What is the minimum tenor?', 'The minimum tenor is 60days'],
                    ['Investments', 'If I have urgent cash needs, can I liquidate and get my funds?', 'Yes, however, there is a token charged on the accrued interest'],
                    ['Investments', 'How can I get my interest?', 'Interest payments can be paid into your Gabsyn account monthly, quarterly, annually or upon maturity'],
                    ['Investments', 'Can I get my interest upfront?', 'You can get your interest upfront with funds placed for a minimum tenor of 90days'],
                    ['Investments', 'Are there any associated charges?', 'There are no hidden or extra charges. However, there is a 10% withholding tax to be charged on the accrued interest.'],
                
                    ['Payments', 'How can I make payment?', 'You can make payment to any third party financial institution in Nigeria through any of our three channels; Gabsyn Mobile app, Internet banking and Gabsyn Card.'],
                    ['Payments', 'How much will I be charged when I make payments?', 'You enjoy Zero transaction charge when using any of our electronic channels. Zero charge means we do not deduct extra charges for funds transfer, bill payments or SMS alerts.'],
                    ['Payments', 'Can I use my card outside Nigeria?', 'Gabsyn cards can only be used within Nigeria. However you can start and complete your transaction using the app or internet banking from anywhere in the world.'],
                    ['Payments', 'Is your card accepted only in Lagos and Ibadan?', 'Our card is accepted on any ATM machine nationwide.'],

                    ['Applying for a new loan', 'How much can I borrow?', 'Our minimum loan amount is N200,000 and the upper limit for a new customer is N5, 000, 000. Both depend on borrower\'s capacity to repay based on verifiable income level and other selection criteria'],
                    ['Applying for a new loan', 'Does Gabsyn Financials require a credit check?', 'Yes, your application is subject to a credit check before final approval and funds disbursement.'],
                    ['Applying for a new loan', 'What documents do I require to get a loan?', 'You will need your employment or offer letter, evidence of your six months’ salary and a valid means of identification'],
                    ['Applying for a new loan', 'How long does it take to process a loan?', 'Loan processing takes less than three hours. Once your application has been approved, the loan will be disbursed into your Gabsyn account in less than three hours.'],
                    ['Applying for a new loan', 'Do I have to be in paid employment to get your loans?', 'Yes, you have to be a salary earner to access our different loan packages.'],
                    ['Applying for a new loan', 'When my application has been moved to the next level, how will I know if it has been approved?', 'You will receive a confirmatory text telling you the status of your loan same day.'],
                    ['Applying for a new loan', 'Who can access Gabsyn loans?', 'Gabsyn loans are currently available to only salary earners living in either Lagos or Ibadan.'],
                    ['Applying for a new loan', 'Why do you require my BVN?', 'We need your BVN to make a verification check on you and to access your credit worthiness. It is also a standard CBN process for KYC. Your details are very safe with us.'],
                    ['Applying for a new loan', 'Can a loan application be rejected?', 'Yes it can. Your application goes through an approval process and if it does not meet the set criteria, the loan request is rejected.'],
                    ['Applying for a new loan', 'What is Gabsyn’s loan interest rate?', 'There is no fixed interest rate on a loan. The interest rate is dependent on different factors such as the loan amount, tenor, current salary etc.'],
                    ['Applying for a new loan', 'How do I make repayments on my loan?', 'Our primary repayment channel is via REMITA for ease of repayment and reconciliation. However, we have secondary repayment channels like Direct Debit Mandate (DDM), online repayments and cheques.'],
                    ['Applying for a new loan', 'When will the repayment be due?', 'On your salary pay day.'],
                    ['Applying for a new loan', 'Can I pay down my outstanding loan before the end of the loan tenure?', 'Yes, you can pay down/liquidate your existing facility at any time.'],
                    ['Applying for a new loan', 'What are the hidden charges associated with this loan?', 'There are no hidden charges'],

                    ['Existing loan enquiry', 'Can I extend my loan tenure?', 'Yes, you can extend an existing facility loan tenor through a Top-up. As an existing customer, you can access a maximum tenor of 15 months (as an individual).'],
                    ['Existing loan enquiry', 'What is a Top up?', 'A top up is an instant request to increase the balance on an existing loan facility. To finalize this, the existing loan is liquidated as a customer cannot have two loans running simultaneously while the top up request is merged with the balance from the existing loan. The total disbursable amount will be communicated and disbursed into your Gabsyn account.'],
                    ['Existing loan enquiry', 'Can I have more than one loan running at the same time?', 'You cannot have more than one loan at a time, but you can apply for a top up loan after three repayments on your existing loan.'],
                    ['Existing loan enquiry', 'Do I need to come to the branch to apply for a loan as an existing customer?', 'No, your application can be made online via our website or mobile app.'],
                    
                    ['Repayments', 'My salary has been delayed and my account is not funded?', 'We will activate Remita or DDM on your account and funds will be picked when available.'],
                    ['Repayments', 'My employer has changed and so has my salary date, can my repayment date be changed?', 'Yes, your repayment date can be changed. To facilitate this change, please send this request via mail to ccare@gabsynpeyzs.ng with evidence of the change'],

                ];

const bodies = ['What investment product does Gabsyn have?'];

export default function ApplyForLoan() {

  let [currentFAQs, setCurrentFAQs] = useState('All');

  return (
    <Scaffold>       
      <div >
        <Head>
          <title>FAQs</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
            <Navbar />
            <div className="about_us_background">

                <h1 style={{color: "white", backgroundColor: "var(--app-purple)", padding: "8px 16px"}}>FAQ</h1>
                
            </div>

            <div className="container" style={{marginTop: 100, marginBottom: 100}}>
                <p className="filters">
                    {
                        categories.map((category, index) => {
                            return <span {...category == currentFAQs ? `className="active"` : `className="filter"`} onClick={() => setCurrentFAQs(category)}>{category} / </span>
                        })
                    }
                    
                    {/* <span className={clsx(filter, currentFAQs)} >All</span> / <span>Investments</span> / <span>Payments</span> / 
                    <span>Applying for a new loan</span> / <span>Existing loan enquiry</span> / 
                    <span>Repayments</span> */}
                </p>
                <Collapse accordion>
                    
                        {
                            currentFAQs == 'All' && (
                                faqs.map((faq, index) => {
                                    return <Panel header={faq[1]} key={`faq-${faq[0]}-${index}`} style={{marginBottom: '15px'}}>
                                            <p>{faq[2]}</p>
                                        </Panel>
                                    
                                })
                            )
                            
                        }

                        {
                            currentFAQs != 'All' && (
                                faqs.map((faq, index) => {
                                    return faq[0] == currentFAQs && <Panel header={faq[1]} key={`faq-${faq[0]}-${index}`}>
                                            <p>{faq[2]}</p>
                                        </Panel>
                                })
                            )
                            
                        }
                    

                </Collapse>

                <style jsx>
                    {
                        `
                            .filters span:hover{
                                color: blue;
                                cursor: pointer;
                                text-decoration: underline;
                            }

                            .filters .active{
                                color: blue;
                                font-weight: bold;
                                text-decoration: underline;
                            }
                        `
                    }
                </style>
            </div>            

            <Footer />
        </main>
       </div>
    </Scaffold>
  )
}
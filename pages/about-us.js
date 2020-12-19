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
          <title>About us</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
            <Navbar />
            <div className="about_us_background">

                {/* <h1 style={{color: "white", backgroundColor: "var(--app-purple)", padding: "8px 16px"}}>About Us</h1> */}
                
            </div>

            <div className="container">
                <Title level={2} style={{width: "100%", textAlign: "center", marginTop: "50px"}}>
                    WHO WE ARE
                </Title>
                <Paragraph ellipsis={{rows: 6, expandable: true}} style={{margin: "50px auto", textAlign: "center", fontSize: 16}}>
                    Gabsyn Peyzs Surulere Cooperative (Multipurpose) Society Ltd is a member owned indigenous society established by a set of young upward mobile entrepreneurs and professionals (men and women of integrity) in their respective fields ; the concept was to build a Synergy of both the formal and informal sectors in response to individual and collective socio-economic needs in order to fulfil purpose, thus the main objectives of the society is to help members with working capital , financial and risk management advisory services, housing, etc. to enable them develop multiple streams of income and achieve financial freedom.
                    The strategy is to build a platform that creates a synergy between the formal and informal sectors. We current boast of members that include Bankers, Insurance staff, Telecoms staff, Oil and Gas workers, agricultural experts, Staff of Federal and State agencies, entertainers, general traders, artisans, spare part markets : Ladipo Market, Willoughby, etc., drivers, retirees, food sellers, Bean cake sellers ,fashion designers, market women, transporters : Bike riders , Bus Drivers , etc.
                </Paragraph>
            </div>

            {/* <div className="container" style={{fontSize: 16}}>
                <Row>
                    <Col md={{span: 12}} style={{textAlign: "center", marginTop: 100}}>
                        <Title level={2}>
                            Vision
                        </Title>
                        <Text>
                            To be the most respected Multipurpose Cooperative institution in Africa 
                        </Text>
                    </Col>
                    <Col md={{span: 12}} style={{textAlign: "center", marginTop: 100}}>
                        <Title level={2}>
                           Mission Statement
                        </Title>
                        <Text>
                        By forging mutually beneficial and strategic alliances / partnerships with other players in chosen areas of respective core competencies, offering flexible lending services, ensuring superior customer experience and creating sustainable practices that will promote the socio economic interests of all members
                        </Text>
                    </Col>
                </Row>
            </div> */}

            

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={2}>
                    Vision
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                To be the most respected Multipurpose Cooperative institution in Africa 
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={2}>
                Mission Statement
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                By forging mutually beneficial and strategic alliances / partnerships with other players in chosen areas of respective core competencies, offering flexible lending services, ensuring superior customer experience and creating sustainable practices that will promote the socio economic interests of all members
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={2}>
                    Why choose us
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                We are a team of young professionals with a shared wealth of experience in various sectors of the economy who have come together to provide solutions to individuals and business.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={2}>
                    What we believe
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                We believe all goals can be achieved with the right kind of support. Because we believe so strongly in our clients, we listen to them, we understand them and we make it work for them!
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={2}>
                    What we do
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                    We provide creative tailor made Financial, Advisory and Logistics solutions to Individuals and businesses with a view to helping them grow. We provide Rent Advance to Landlords pending the actual receipt of rents.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={2}>
                   Our tenets
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                Flexible Solutions, Leadership, Integrity, Innovation, Reliability, Passion for Excellence
                </Paragraph>
            </div>

            <Footer />
        </main>
       </div>
    </Scaffold>
  )
}
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
          <title>Privacy Policy</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
            <Navbar />
            <div className="about_us_background" style={{flexDirection: 'column'}}>

                <h1 style={{color: "white", backgroundColor: "var(--app-purple)", padding: "8px 16px"}}>Privacy Policy</h1>
                <Paragraph ellipsis={{rows: 6, expandable: true}} style={{margin: "50px auto", width: '60%', textAlign: "center", fontSize: 16}}>
                Gabsyn maintains this website (the “Website”) to provide you with information about products and services available through us, and information about Gabsyn. Please read these Terms and Conditions carefully before accessing or using this Website.
                </Paragraph>

            </div>

            {/* <div className="container">
                <Paragraph ellipsis={{rows: 6, expandable: true}} style={{margin: "50px auto", textAlign: "center", fontSize: 16}}>
                Gabsyn maintains this website (the “Website”) to provide you with information about products and services available through us, and information about Gabsyn. Please read these Terms and Conditions carefully before accessing or using this Website.
                </Paragraph>
            </div> */}
            

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                By accessing or using the Website, you agree to these Terms and Conditions. Gabsyn reserves the right to change, modify, add or remove portions of the terms at any time. Please check these terms periodically for changes.
                If you do not wish to be bound by this agreement, do not access the Website. If you have any questions about this Agreement, please contact us via email at ccare@gabsynpeyzs.ng
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={4}>
                1.0 NO WARRANTY
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                We created this Website for the convenience of our Internet visitors. The information (including text, graphics and functionality) is presented “as is” and “as available” without express or implied warranties including, but not limited to, implied warranties of non-infringement, merchantability and fitness for a particular purpose. We expressly disclaim any liability for errors and omissions regarding the information and materials contained in the Website. Due to the nature of the Internet, we cannot guarantee the accuracy or completeness of the information contained in this Website or its suitability for any purpose.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', textAlign: 'center'}}>
                <Title level={4}>
                2.0 VIRUSES
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                Due to the marked increase in the fabrication and proliferation of computer viruses affecting the Internet, we want to warn you about infections or viral contamination on your system. It is your responsibility to scan any and all downloaded materials received from the Internet. We are not responsible or liable for any damage caused by such hazards.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={4}>
                3.0 LIMITATION OF LIABILITY
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                Your use of the Website is at your own risk. To the maximum extent permitted by law, neither Gabsyn nor any other party involved in creating, producing or delivering the Website, will be liable for any direct, indirect, incidental, consequential or punitive damages (including, without limitation, loss of profits, cost of substitute service or lost opportunity), howsoever caused, arising out of your access to, use of, or reliance on the Website, even if Gabsyn has been advised of the possibility of such damages. Without limiting the foregoing, Gabsyn assumes no responsibility for, and will not be liable for any damages relating to or caused by any viruses which may affect your computer equipment or other property on account of your access to, use of, or downloading from, the Website. Gabsyn cannot and does not guarantee continuous, uninterrupted or secure access to the Website. You specifically acknowledge and agree that Gabsyn is not liable for any defamatory, offensive, fraudulent, or otherwise illegal conduct of any user.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={4}>
                4.0 INDEMNITY
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                You agree to indemnify and hold Gabsyn, its subsidiaries or affiliates, and their respective directors, officers, employees, and agents, harmless against any and all liabilities, claims and expenses, including reasonable attorneys’ fees, arising from breach of these Terms and Conditions, any other related policy, your use or access of the Website or any Internet site linked to or from the Website, or in connection with the transmission of any content on the Website.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={4}>
                5.0 AUTHORIZED USE
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                The information provided on this Website is solely for the personal use of Website users. You are authorised to view and copy the information available on this Website for personal purposes only, provided that any copies include any trade mark notices as they may appear on those pages copied. Except for the personal use of Website users, you may not copy, reproduce, modify, display, distribute, perform, disseminate, transmit, transfer, sell, license, publish, use to create a derivative work, or use for any public or commercial purposes any of the contents of this Website without the express prior written consent of Gabsyn. You agree to access and use the Website only for lawful purposes.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={4}>
                6.0 LINKS TO THIS WEBSITE
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                Gabsyn has not reviewed all of the sites which are linked to the Website, and the fact of such links does not indicate any endorsement, authorisation, sponsorship or affiliation with respect to the material contained on any linked site. Gabsyn is not responsible for the contents of any site linked to the Website. Your connection to and use of any such linked site is at your own risk.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={4}>
                7.0 COPYRIGHTS AND TRADEMARKS
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                Copyrights of the pages and the screens displaying the pages, and the information and material therein, is owned by Gabsyn unless otherwise indicated and may not be distributed, modified, reproduced in whole or in part without the prior written permission of Gabsyn. The display of trade marks herein does not imply that a license of any kind has been granted. Any downloading, re-transmission, or other copying or modification of the trademarks and/or the contents herein may be a violation of applicable laws and regulations and could subject the copier to legal action. The trademarks and logos (collectively the “Trade Marks”) displayed on this site, unless otherwise indicated, are registered and unregistered trademarks of Gabsyn and its subsidiaries and affiliates. Gabsyn and its trademarks may only be used publicly with the permission of Gabsyn and with proper acknowledgement. Use of any Gabsyn trademarks without the prior written consent of Gabsyn may constitute copyright infringement or passing off in violation of applicable laws.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={4}>
                8.0 SECURITY
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                We welcome your email correspondence. But Internet and email communications are not confidential. It is possible that information transmitted to us may be read or obtained by other parties. In an attempt to protect your privacy, our email responses do not include personal account information such as your BVN or bank account numbers. Email is an important communication channel for our Website’s visitors. We will use your email address and the content of any email for correspondence purposes and to meet our legal and regulatory requirements regarding customer communications. On occasion, we may use your email address to send you communications with information about service and product information that we believe may be of interest to you. If you do not want to receive such unsolicited communications from us, please send us a message to this effect.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                <Title level={4}>
                9.0 GOVERNING LAW
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "center", fontSize: 16}}>
                You agree that the use of this site shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                </Paragraph>
            </div>

            <Footer />
        </main>
       </div>
    </Scaffold>
  )
}
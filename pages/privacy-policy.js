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
            <div className="privacy_policy_background" style={{flexDirection: 'column'}}>

                {/* <h1 style={{color: "white", backgroundColor: "var(--app-purple)", padding: "8px 16px"}}>Privacy Policy</h1> */}
                

            </div>

            <Title level={2} style={{width: "100%", textAlign: "center", marginTop: "50px", marginBottom: "50px"}}>
                Privacy Policy
            </Title>

            {/* <div className="container">
                <Paragraph ellipsis={{rows: 6, expandable: true}} style={{margin: "50px auto",  fontSize: 16}}>
                Gabsyn maintains this website (the “Website”) to provide you with information about products and services available through us, and information about Gabsyn. Please read these Terms and Conditions carefully before accessing or using this Website.
                </Paragraph>
            </div> */}
            

            {/* <div className="container" style={{marginTop: 50, textAlign: 'center', }}>
                
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                By accessing or using the Website, you agree to these Terms and Conditions. Gabsyn reserves the right to change, modify, add or remove portions of the terms at any time. Please check these terms periodically for changes.
                If you do not wish to be bound by this agreement, do not access the Website. If you have any questions about this Agreement, please contact us via email at ccare@gabsynpeyzs.ng
                </Paragraph>
            </div> */}

            <div className="container" style={{marginTop: 50, textAlign: 'center', }}>
                <Paragraph ellipsis={{rows: 6, expandable: true}} style={{margin: "50px auto", width: '60%',  fontSize: 16}}>
                    This Privacy Policy is designed to help you understand what information we gather about you, what we use that information for, and with whom we share that information. It also sets out your rights in relation to your information and who you may contact for more information or queries. Please read the following carefully to understand our processes and practices regarding your personal data and how we will treat it.
                </Paragraph>
                <Title level={4}>
                To whom this Privacy Policy applies and what it covers
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                This Privacy Policy applies to Gabsyn Peyzs (“we” or “us” or “our”). Gabsyn Peyzs recognizes the importance of protecting your personal and financial information and is committed to doing this.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                This Privacy Policy sets out how we collect, handle, store and protect information about you when:
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                We provide products or services to you or our client:
                You visit or use our website; and/or•
                Performing any other activities that form part of our business.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                This Privacy Policy also contains information about when we share your personal information with third parties (including, but not limited to, our service providers and credit reference agencies). In this Privacy Policy, we may sometimes collectively refer to handling, collecting, protecting and storing your personal information as “processing” such personal information.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', }}>
                <Title level={4}>
                Other Websites
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                Please note that other websites that may be linked to this website/App are not governed by this Privacy Policy. We encourage visitors to review the privacy policy on each of these other websites before disclosing any personal information.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', }}>
                <Title level={4}>
                Consent
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                You agree with the contents of this Privacy Policy when you give consent upon access to our website, digital and non-digital platforms, or use our services, content, features, technologies or functions offered on our website or digital platforms or visit any of our offices for official or non-official purposes. Note that you can withdraw your consent at any time, however such withdrawal of consent would not affect the lawfulness of processing information based on consent given before its withdrawal.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center'}}>
                <Title level={3}>
                What information we collect
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                In the course of providing products or services to you or our client and performing due diligence checks in connection with our products or services (or discussing the possible products or services we might provide), we generally collect personal information about you. We also typically collect personal information about you when you visit or use our website.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                We typically collect or obtain your personal information because you give it to us (for example, in a form on our website) or because other people give that information to us (for example, third party service providers that we use to help operate our website). We may also collect or obtain personal information from you because we observe or infer that information about you from the way you interact with us. In order to improve your experience when you use this website and to ensure that it is functioning effectively, we (or our service providers) also use cookies (small text files stored in a user’s browser) and web beacons (small graphic images that are placed on a website and used to monitor a user’s interaction with that website) which may collect personal information.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                Additional information on how we use cookies and other tracking technologies and how you can control these can be found in our Cookies Policy, which is included at the end of this document.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                The personal information that we may collect depends on the specific services, activities or products we undertake but typically includes: your name; age; date of birth; gender; home address; email address; BVN; telephone number; other contact details; country of residence; passport number and other national ID numbers; employment details (for example, the organization you work for, your job title); family circumstances (for example, your marital status where you enter it in a form on our website or it appears in any documentation you provide to us); financial information (for example, your income, bank statements, where you enter such information in a form on our website or it appears in any documentation that you provide to us or authorize us to access from your bank and financial institutions); details of how you use any product or service provided by Gabsyn Peyzs; postings on any blogs, forums, wikis, and any other social media applications and services that we provide; IP address; browser and device type; user name that is used by you for one of our products or services; language; access times and duration; details of how you like to use our website or the interactive products, tools, other technology or services we provide to you or our clients; websites that you visited before and after visiting our website; details of how you like to interact with us, and similar information.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                The types of personal information and ‘sensitive’ or ‘special categories’ of personal information that we collect will generally vary depending on the nature of the products and services that we provide to you and how you use our website. In some cases, the ‘sensitive’ or ‘special categories’ of personal information that we collect may include information collected as part of KYC and anti-money laundering checks that we must conduct before accepting you as a customer.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16, marginBottom: '20px'}}>
                In some rare circumstances, we will also gather other ‘special categories’ of personal information about you because you volunteer that data to us (for example, it appears in a copy of your resume/CV that you upload to our website). In some other circumstances, the personal information we collect from you is needed to meet our legal or regulatory obligations or to provide you with the products or services requested by you.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                    	Your employer;
                    </li>
                    <li>
                        Third parties such as providers of ‘know your client’ and anti-money laundering services which we use to help us meet our legal requirements in this area and to help us verify your identity where we provide you with products or services; 
                    </li>
                    <li>
                        Background check providers which we sometimes use to verify your identity when you apply for a product of ours;
                    </li>
                    <li>
                        Third party service providers that help us to operate our website; and 
                    </li>
                    <li>
                        Your banks and financial institutions.
                    </li>
                </ul>
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100}}>
                <Title level={4}>
                HOW WE USE INFORMATION ABOUT YOU
                </Title>

                <Title level={4}>
                Use of personal information to provide products and services
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We will use your personal information to provide you with products or services. As part of this, we may use your personal information in the course of correspondence relating to those products or services. Such correspondence may be with you, our customers, our service providers or public or judicial authorities with the necessary authorization.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                In many cases, we also use your personal information to conduct due diligence checks in advance of providing products or services to you, and to process an application from you or a prospective client to receive products or services from us. If you are referred to us by an intermediary or similar third party, we also typically use your personal information to assess whether to accept or reject your referral to Gabsyn Peyzs by that intermediary or similar third party.
                </Paragraph>
                
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                Use of personal information collected via our website
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We generally use your personal information collected via this website:
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        To manage and improve any services provided via our website
                    </li>
                    <li>
                        To manage and improve our website (including by drawing up statistics on the usage of our website)
                    </li>
                    <li>
                        To tailor content of our website to provide you with a more personalised experience and draw your attention to information about products and services that may be of interest to you
                    </li>
                    <li>
                        To manage and respond to any request that you submit through our website
                    </li>
                    <li>
                        To help us learn more about you, the products and services that you receive from Gabsyn Peyzs, and other products and services that you or your employer might be interested in receiving
                    </li>
                    <li>
                        To correspond with you in relation to services you use on our website or information you provide via our website. This correspondence is usually with you, our service providers, or public or judicial authorities with the necessary authorisation.
                    </li>
                </ul>
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                Use of personal information for other activities that form part of the operation of our business
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We generally also use your personal information collected via this website for the purposes of, or in connection with:
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        Applicable legal or regulatory requirements
                    </li>
                    <li>
                        Requests and communications from public or judicial authorities with the necessary authorisation• financial accounting, invoicing and risk analysis purposes
                    </li>
                    <li>
                        Prudent operational management (including credit and risk management, audit, training and similar administrative purposes)
                    </li>
                    <li>
                        Client relationship purposes, which involve: (i) contacting you to receive feedback on Gabsyn Peyzs products or services; and (iii) contacting you for other marketing or research purposes;
                    </li>
                    <li>
                        Recruitment and business development purposes• services we receive from our professional advisors, such as lawyers, accountants and consultants
                    </li>
                    <li>
                        Arrangements we have in place with intermediaries, brokers and other individuals and entities that partner with us
                    </li>
                    <li>
                        Protecting our rights and those of our customers• meeting our corporate and social responsibilities.
                    </li>
                </ul>
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                The legal grounds we rely on for processing personal information
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We are required by law to set out in this Privacy Policy the legal grounds on which we rely in order to process your personal information. We generally use your personal information for the purposes outlined above because: 
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        it is necessary for our legitimate interests and does not unduly affect your interests or fundamental rights and freedoms; 
                    </li>
                    <li>
                        it is necessary for legal and/or regulatory obligations or requests that we are subject to, such as keeping records in accordance with applicable regulations or providing information to a public body or law enforcement agency;
                    </li>
                    <li>
                        it is necessary to perform contractual obligations that we owe towards you, or to take pre-contractual steps at the request of you; 
                    </li>
                    <li>
                        in some cases, we have obtained your prior consent. 
                    </li>                    
                </ul>
                </Paragraph>

                <Paragraph style={{width: "60%", margin: 'auto', marginBottom: '20px', fontSize: 16}}>
                To the extent that we process any sensitive personal information relating to you for any of the purposes outlined above, we will do so because either: 
                </Paragraph>

                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        You have given us your explicit consent to process that information;  
                    </li>
                    <li>
                        The processing is necessary for reasons of substantial public interest on the basis of applicable law (for example where we are required by law or regulatory requirements to process that information in order to ensure we meet our KYC and ‘anti money laundering’ obligations); or 
                    </li>
                    <li>
                        The processing is necessary for the establishment, exercise or defense of legal claims. The legal grounds for processing sensitive personal information outlined above are contained in the EU’s General Data Protection Regulation and the Nigeria Data Protection Regulation 2019.
                    </li>                
                </ul>
                </Paragraph>

                <Paragraph style={{width: "60%", margin: 'auto', marginBottom: '20px', fontSize: 16}}>
                If you do not want to continue receiving any marketing materials from us, you may communicate this to us via recommended options. To whom we disclose your information We generally disclose details about you to professional advisors and third parties that provide services to us (such as IT systems providers, platform providers, financial advisors, consultants including lawyers and accountants) and other goods and services providers (such as providers of marketing services where we are permitted to disclose your personal information to them); competent authorities (including any national and/or international regulatory or enforcement body or court or other form of tribunal, where we are required to do so by applicable law or regulation at their request); a potential buyer, transferee, merger partner or seller and their advisers in connection with an actual or potential transfer or merger of part or all of Gabsyn Peyzs’s business or assets, or any associated rights or interests, or to acquire a business or enter into a merger with it; credit reference agencies or other organizations that help us detect criminal activity and incidence of fraud; and any federal, state or local government departments and other statutory or public bodies.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                How long we keep your personal information
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We will hold your personal information on Gabsyn Peyzs’s systems for as long as is necessary to fulfil the purpose for which it was collected or to comply with applicable legal, regulatory or internal policy requirements.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                Protection of your personal information
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                We use a range of physical, electronic and managerial measures to ensure that we keep your personal information secure, accurate and up to date. These measures include:• education and training of relevant staff to ensure they are aware of our privacy obligations when handling personal information as well as training around social engineering, phishing, spear phishing, and password risks• administrative and technical controls to restrict access to personal information on a ‘need to know’ basis• technological security measures, including fire walls, encryption and anti-virus software• physical security measures, such as staff security passes to access our premises.• external technical assessments, security audits and vendor due diligence• endpoint security: Anti-virus, portable storage device lockdown, restricted administrative privileges• Real-time monitoring of data leakage controls• Layered and comprehensive cybersecurity defence• Security incident reporting and management Although we use appropriate security measures once we have received your personal information, the transmission of data over the internet (including by e-mail) is never completely secure. We endeavour to protect personal information, but we cannot guarantee the security of data transmitted to us or by us.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100, }}>
                <Title level={4}>
                Storage of Your Data
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                The data that we collect from you will be transferred to and stored at a destination within Nigeria. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. All information you provide to us is stored on our secure cloud-based data storage as well as on premises, at an off-site based location and a network accessible storage which includes external drives only for authorized users.
                </Paragraph>

                <Paragraph style={{width: "60%", margin: 'auto', fontSize: 16}}>
                We erase/delete personal data in the event of any of the following:
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        The personal data is no longer necessary in relation to the purposes for which they were collected or processed;
                    </li>
                    <li>
                        You withdraw your consent or object to the processing and there is no overriding lawful basis for the processing;
                    </li>
                    <li>
                        The personal data was unlawfully collected or processed in the first place;
                    </li>   
                    <li>
                        In compliance with NITDA’s or any other lawful directive.
                    </li>                
                </ul>
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', fontSize: 16}}>
                Your rights and how to contact us
                You have various rights in relation to your personal information. In particular, you have a right to:
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', textAlign: "left", fontSize: 16, marginBottom: '20px'}}>
                <ul>
                    <li>
                        Object to the processing of your personal information
                    </li>
                    <li>
                        Request a copy of personal information we hold about you
                    </li>
                    <li>
                        Ask that we update the personal information we hold about you, or correct such personal information that you think is incorrect or incomplete
                    </li>   
                    <li>
                        Ask that we delete personal information that we hold about you, or restrict the way in which we use such personal information
                    </li>    
                    <li>
                        Withdraw consent to our processing of your personal information (to the extent such processing is based on consent)
                    </li>                
                </ul>
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', fontSize: 16}}>
                To exercise any of your rights, or if you have any other questions about our use of your personal information, please e-mail support@Gabsynpeyzs.ng or write to Gabsyn Peyzs’s Support Team Officer at 1, Afinni Street, Off Adelabu, by Alhaji Masha, Surulere, Lagos, Nigeria. You may also use these contact details if you wish to make a complaint to us relating to your privacy.
                </Paragraph>
                <Paragraph style={{width: "60%", margin: 'auto', fontSize: 16, marginBottom: '20px'}}>
                If you are unhappy with the way we handled your personal information or any privacy query or request that you have raised with us, you also have a right to complain to a data protection regulator in the place where you live or work, or in the place where you think an issue in relation to your data has arisen.
                </Paragraph>
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100}}>
                <Title level={4}>
                What are Cookies?
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                Cookies are small text files. They are commonly downloaded to your computer or mobile device by websites that you visit. They enable the website to tag your device and recognize it as you move around the site (and potentially when you return at a later date) so that, for example, you do not have to re-enter your password each time you move between pages of the website.
                </Paragraph>                
            </div>

            <div className="container" style={{width: "60% !important", margin: 'auto !important', marginTop: 50, textAlign: 'center', marginBottom: 100}}>
                <Title level={4}>
                Can I turn off cookies?
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                If you do not wish to receive cookies, you can set your web browser to disable cookies. As explained above, cookies help you to get the most out of our website. If you decide to disable cookies, you may find that certain aspects of our website do not work as expected. Where you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to decline the use of cookies.
                </Paragraph>                
            </div>

            <div className="container" style={{marginTop: 50, textAlign: 'center', marginBottom: 100}}>
                <Title level={4}>
                Changes to our Privacy Policy
                </Title>
                <Paragraph style={{width: "60%", margin: 'auto',  fontSize: 16}}>
                This Privacy Policy may be updated from time to time for any reason. The privacy policy was last updated on 20th December, 2020.
                </Paragraph>                
            </div>

            <Footer />
        </main>
       </div>
    </Scaffold>
  )
}
import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import {Scaffold, ServiceItem, Footer} from '../components';
import Navbar from '../containers/Navbar';
import Service from '../containers/Service';
import styles from "../styles/home.module.css";
import {
  Row, 
  Col,   
  Typography,
  Space,
  Button,
  Input,
  Modal,
  Divider
} from 'antd';
import {useRouter} from 'next/router';
import {connect} from 'react-redux';
import clsx from 'clsx';



import {
  SearchOutlined
} from '@ant-design/icons'

const {Title, Text,  Paragraph} = Typography;


function Home(props) {

  // console.log('index props', props);

  let router = useRouter();

  return (
    <Scaffold>       
      <div >
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
        
          <Navbar />
          <div className={styles.home_background}>

            <div className="container" style={{paddingTop: '150px', textAlign: 'center'}}>
              <Row>
                <Col md={{span: 12, offset: 12}}  style={{width: '100%'}} >               

                  <div className={clsx(styles.search_div, 'animate__animated', 'animate__slideInRight')}>
                    <input type="text" placeholder="Search" className={styles.search_input}/>
                    <SearchOutlined style={{
                                              fontSize: '20px', 
                                              position: 'absolute', 
                                              left: '15px', 
                                              top: '50%', 
                                              transform: 'translateY(-50%)',
                                              'WebkitTransform': 'translateY(-50%)'
                                            }}/>

                    
                  </div>

                  <Text className={clsx('animate__animated', 'animate__slideInRight')} style={{marginTop: '50px', width: '100%', fontWeight: 'bold'}}>
                    Our services include: 
                  </Text>

                  <div className={clsx('animate__animated', 'animate__slideInRight')} style={{width: '100%'}}>
                    <Service 
                        image="/assets/images/icons/Forms_LoanIcon.png" 
                        hoverImage="/assets/images/icons/Home_LoansIcon.png" 
                        label="Loans"
                        path="/loans" />
                    <Service className={clsx('animate__animated', 'animate__slideInRight', 'animate__delay-1s')}
                        image="/assets/images/icons/Forms_InvstIcon.png" 
                        hoverImage="/assets/images/icons/Home_InvstIcon.png" 
                        label="Investments" 
                        path="/investments"/>
                    <Service className={clsx('animate__animated', 'animate__slideInRight', 'animate__delay-2s')}
                        image="/assets/images/icons/Forms_CoopIcon.png" 
                        hoverImage="/assets/images/icons/Home_CoopIcon.png" 
                        label="Cooperatives" 
                        path="/cooperatives"/>
                  </div>

                </Col>
              </Row>
            </div>
            
          </div>

          <div className={styles.home_background2}>

            <div className={clsx("container", 'animate__animated', 'animate__slideInLeft')} style={{paddingTop: '50px'}}>
              <Row>
                <Col md={{span: 12}}>  
                    <Title level={4}> </Title>
                    <Title level={2} style={{textAlign: 'right'}}>Here are some of the reasons our customers trust us...</Title>
                    <ServiceItem 
                      logo="/assets/images/icons/trust.png" 
                      title="Why Choose Us?">
                      We are a team of young professionals with a shared wealth of experience in various sectors of the economy who have come together to provide solutions to individuals and business.
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/trust.png" 
                      title="What We Believe">
                      We believe all goals can be achieved with the right kind of support. Because we believe so strongly in our clients, we listen to them, we understand them and we make it work for them!
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/trust.png" 
                      title="What We Do">
                      We provide creative tailor made Financial, Advisory and Logistics solutions to Individuals and businesses with a view to helping them grow. We provide Rent Advance to Landlords pending the actual receipt of rents.
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/trust.png" 
                      title="Our Tenets">
                      Flexible Solutions, Leadership, Integrity, Innovation, Reliability, Passion for Excellence
                    </ServiceItem>
                    

                </Col>
              </Row>            
            </div>

          </div>

          <div className={styles.home_background3}>

            <div className={clsx("container", 'animate__animated', 'animate__slideInRight')}  style={{paddingTop: '100px'}}>
              <Row>
                <Col md={{span:8, offset:16}}>  
                    <Title level={4}>About Us</Title>
                    <Text><strong>What we do</strong></Text>
                    <Paragraph ellipsis={{ rows: 6}} style={{marginTop: '10px'}}>
                    Gabsyn Peyzs Surulere Cooperative (Multipurpose) Society Ltd is a member owned indigenous society established by a set of young upward mobile entrepreneurs and professionals (men and women of integrity) in their respective fields ; the concept was to build a Synergy of both the formal and informal sectors in response to individual and collective socio-economic needs in order to fulfil purpose, thus the main objectives of the society is to help members with working capital , financial and risk management advisory services, housing, etc. to enable them develop multiple streams of income and achieve financial freedom...
                    </Paragraph>  
                    <Link href="#">
                      <Button size="large" type="primary" 
                            style={{marginTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
                              LEARN MORE
                      </Button>
                    </Link>                 

                </Col>
              </Row>            
            </div>

          </div>{/* <!-- end of home_background3 section --> */}

          <div className={styles.download_app}>

            <div className="container" style={{paddingTop: 50, paddingBottom: 50}}>
              <Row >
                <div className="downloadLeft" >
                  <h1 className="header" >Download the Gabsyn Peysz Mobile App</h1>
                  <div className="appStore">
                    <a href="#" target="_blank">
                      <img src="/assets/images/Home_AppleStore.png" alt="appstore logo" style={{width: '160px'}}/>
                    </a>
                    <a href="#" target="_blank">
                      <img src="/assets/images/Home_GPlay.png" alt="googleplay logo" style={{width: '160px'}}/>
                    </a>
                  </div>
                  <div className="learnMoreButton">
                    <Link href="#">
                      <Button size="large" type="primary" 
                            style={{marginTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
                              LEARN MORE
                      </Button>
                    </Link>
                  </div>
                  
                </div>
                <div className="downloadRight" >
                  <img src="/assets/images/Home_iPhone.png" alt="phone image" style={{height: '65%', marginLeft: '30px'}}/>
                </div>
              </Row>
              
            </div>

          </div>{/* <!-- end of download app section --> */}

          <div className={styles.newsletter}>

            <Title level={3} style={{textAlign: 'center'}}>Signup For Our Newsletter</Title>
            
            <Text style={{fontSize: '12px', fontWeight: 'bold'}}>
              Join our mailing list and access to Gabsyn Peyzs exclusive loan deals
            </Text>
            <div className={styles.newsletter_div}>
              <input type="text" className={styles.newsletter_input} placeholder="Enter your email" />
              <Button size="large" type="primary" >Subscribe</Button>
            </div>
          
          {/*             
            <Search
              style={{
                width: '400px', 
                }}
              placeholder="Enter your email  address"
              enterButton="Subscribe"
              size="large"
              onSearch={value => console.log(value)}
            />                  
          */}

          </div>{/* <!-- end of newsletter section --> */}
          
          <Footer />         
         
        </main>

      </div>

      <style jsx>{
        `
        .downloadLeft{
          text-align: right;
          padding-top: 100px; 
          padding-right: 30px; 
          display: flex; 
          align-items: center; 
          flex-direction: column;
          width: 50%;
        }

        .downloadLeft .header{
          margin-left: 100px, 
          color: var(--app-purple);
        }

        .downloadLeft .appStore, 
        .downloadLeft .learnMoreButton{
          align-self: flex-end;
        }


        @media screen and (max-width: 768px){
          .downloadLeft{
            text-align: center;
            padding: 20px; 
            width: 100%;
          }
          .downloadRight{
            display: none;
          }
          .downloadLeft .appStore, 
          .downloadLeft .learnMoreButton{
            align-self: center;
          }
          .downloadLeft .header{
            margin: 50px;
            margin-top: 0px;
            text-align: center;
          }
        }
        `
      }</style>

     
    </Scaffold>
    
  )
}


const mapStateToProps = (state) => {
  return {
    progressVisible: state.setProgressReducer.progressVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setProgressVisible : (visible) => dispatch(actions.setProgressVisible(visible))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

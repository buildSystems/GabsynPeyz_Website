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
  Input
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
          <div className={styles.home_background}>

            <div className="container" style={{paddingTop: '150px', textAlign: 'center'}}>
              <Row>
                <Col md={{span: 12, offset: 12}} >               

                  <div className={styles.search_div}>
                    <input type="text" placeholder="Search" className={styles.search_input}/>
                    <SearchOutlined style={{
                                              fontSize: '20px', 
                                              position: 'absolute', 
                                              left: '10px', 
                                              top: '50%', 
                                              transform: 'translateY(-50%)',
                                              'WebkitTransform': 'translateY(-50%)'
                                            }}/>

                    
                  </div>

                  <Text style={{marginTop: '50px', width: '100%', fontWeight: 'bold'}}>
                    Our services include: 
                  </Text>

                  <div>
                    <Service 
                        image="/assets/images/icons/Forms_LoanIcon.png" 
                        hoverImage="/assets/images/icons/Home_LoansIcon.png" 
                        label="Loans"
                        path="/loans" />
                    <Service 
                        image="/assets/images/icons/Forms_InvstIcon.png" 
                        hoverImage="/assets/images/icons/Home_InvstIcon.png" 
                        label="Investments" 
                        path="/investments"/>
                    <Service 
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

            <div className="container" style={{paddingTop: '50px'}}>
              <Row>
                <Col md={{span: 12}}>  
                    <Title level={4}>This is a stand in place header</Title>
                    <Title level={2}>This is supposed to be the big title.</Title>
                    <ServiceItem 
                      logo="/assets/images/icons/Forms_LoanIcon.png" 
                      title="This is just the title. Don't tell...">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/Forms_LoanIcon.png" 
                      title="This is just the title. Don't tell...">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/Forms_LoanIcon.png" 
                      title="This is just the title. Don't tell...">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </ServiceItem>
                    <ServiceItem 
                      logo="/assets/images/icons/Forms_LoanIcon.png" 
                      title="This is just the title. Don't tell...">
                      lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </ServiceItem>
                    

                </Col>
              </Row>            
            </div>

          </div>

          <div className={styles.home_background3}>

            <div className="container" style={{paddingTop: '100px'}}>
              <Row>
                <Col md={{span:8, offset:16}}>  
                    <Title level={4}>About Us</Title>
                    <Text><strong>create sustainable practices whilst building stakeholders value in our pursuit for excellence.</strong></Text>
                    <Paragraph ellipsis={{ rows: 5}} style={{marginTop: '10px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis neque scelerisque non leo quis. Sit laoreet nisi maecenas sit diam elementum, ac fusce. Mattis metus, vel mi non viverra sit egestas eleifend. Ultrices tellus tempus pulvinar elit placerat fermentum facilisi risus. Vestibulum sapien nisl diam urna. In orci euismod mollis eleifend pellentesque. Et lacus, augue interdum lacus eget volutpat faucibus turpis. Auctor hendrerit sit dolor in. Nunc velit, massa leo rhoncus, sed ut eu. Id egestas quis dolor vel sed urna etiam. Ipsum sollicitudin cras sagittis aenean condimentum sagittis, elementum, felis tincidunt. Erat senectus pretium, integer non porttitor quisque rutrum. Morbi adipiscing molestie congue pulvinar a amet, in at.
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

            <div className="container">
              <Row >
                <Col span={12} style={{textAlign: 'right', paddingTop: '100px', paddingRight: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                  <Title level={2} style={{marginLeft: '100px', color: 'var(--app-purple)'}}>Download the Gabsyn Peysz Mobile App</Title>
                  <Space style={{alignSelf: 'flex-end'}}>
                    <a href="#" target="_blank">
                      <img src="/assets/images/Home_AppleStore.png" alt="appstore logo" style={{width: '160px'}}/>
                    </a>
                    <a href="#" target="_blank">
                      <img src="/assets/images/Home_GPlay.png" alt="googleplay logo" style={{width: '160px'}}/>
                    </a>
                  </Space>
                  <div style={{alignSelf: 'flex-end'}}>
                    <Link href="#">
                      <Button size="large" type="primary" 
                            style={{marginTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
                              LEARN MORE
                      </Button>
                    </Link>
                  </div>
                  
                </Col>
                <Col span={12} >
                  <img src="/assets/images/Home_iPhone.png" alt="phone image" style={{height: '65%', marginLeft: '30px'}}/>
                </Col>
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
            />                  */}

          </div>{/* <!-- end of newsletter section --> */}
          <footer>
            <div className={styles.footer_top}>

              <div className="container">
                <Row>

                  <Col span={8} style={{paddingRight: "50px"}}>
                    <Title level={4} style={{fontSize: '12px'}}>GET IN TOUCH</Title>
                    <Text style={{fontSize: '12px'}}>Headquarters:</Text> 
                    <br />
                    <Text style={{fontSize: '12px'}}> No 1, Afinni Street, Off Adelabu, by Alhaji Masha, Surulere, Lagos</Text> 
                    <br />
                    <Text style={{fontSize: '12px'}}>Phone:08106345038, 08187313922, 08063047854 Email: care@gabsynpeyzs.com,info@gabsynpeyzs.com</Text>
                  </Col>

                  <Col span={8} style={{paddingRight: "50px"}}>
                    <Title level={4} style={{fontSize: '12px'}}>RECENT POSTS</Title>
                    <Text style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis neque turpis placerat pellentesque pulvinar euismod velit porttitor. Risus dignissim tempus ac morbi porttitor. Sed diam pharetra eu sed praesent. Nunc, vulputate aenean vulputate nec amet at nisi morbi tempor. Enim tincidunt laoreet non erat.</Text> 
                  </Col>

                  <Col span={8} >
                    <Title level={4} style={{fontSize: '12px'}}>THE GABSYN PEYZS</Title>
                    <Text style={{fontSize: '12px'}}>
                    The Gabsyn Peyzs was established in 2015 as a response to the rigid, lengthy, and difficult credit processes in this part of the world. We believe in Simple, Creative &amp; Flexible Loan applications.  
                    </Text> 
                  </Col>

                </Row>
              </div>

            </div>{/* <!-- end of footer_top section --> */}

            <div className={styles.footer_bottom}>

              <div className="container">
                  <Row>
                    
                    <Col span={6} style={{paddingRight: "50px"}}>
                      <Text style={{fontSize: '12px'}}>Copyrights © 2020 All Rights Reserved The Gabsyn Peyzs. Terms of Use / Powered by decode24</Text> 
                    </Col>


                    <Col span={6} offset={12} style={{textAlign: 'right'}}>
                      <div style={{textAlign: 'right'}}>
                        <Space size="small">
                          <a href="#" target="_blank"><img src="/assets/images/icons/zmdi_facebook-box.png" alt="facebook" /></a>
                          <a href="#" target="_blank"><img src="/assets/images/icons/ant-design_twitter-square-filled.png" alt="twitter" /></a>
                          <a href="#" target="_blank"><img src="/assets/images/icons/entypo-social_instagram.png" alt="instagram" /></a>
                        </Space>                        
                      </div>
                      <Text style={{fontSize: '12px'}}>
                      care@gabsynpeyzs.com,info@gabsynpeyzs.com 08106345038 gabsynonskype
                      </Text> 
                    </Col>

                  </Row>

              </div>
              

            </div>{/* <!-- end of footer_bottom section --> */}

          </footer>

          
         
        </main>

      </div>

     
    </Scaffold>
    
  )
}

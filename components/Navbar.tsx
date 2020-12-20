import React , {lazy, useState} from "react";

import {
    Drawer, 
    Menu, 
    Modal, 
    Button, 
    Divider
} from 'antd';
import { 
    AppstoreOutlined, 
    MailOutlined, 
    SettingOutlined, 
    CreditCardOutlined, 
    BarChartOutlined,
    LineChartOutlined,
    ApartmentOutlined,
    BankOutlined,
    AuditOutlined,
    QuestionCircleOutlined,
    UsergroupAddOutlined,
    LockFilled 
} from '@ant-design/icons';
import Link from 'next/link';
import {useRouter} from 'next/router';
import * as Constants from '../constants';


const {SubMenu} = Menu;



interface Props {
    isLoggedIn: boolean,
    page?: String,
    drawerVisible: boolean,
    progressVisible: boolean,
    loggedInUser: any,
    setCurrentUser?: () => void,
    openDrawer? : () => void,
    closeDrawer? : () => void,
    setProgressVisible? : (visible) => void
}

const Navbar = (props:Props) => {

    var [drawerVisible, setDrawerVisible] = useState(false);
    
    let state = {
        current: 'mail',
    };

    const handleClick = e => {
        console.log('click ', e);
    };

    const openPage = (page) => {
        props.setProgressVisible(true);   
        setTimeout(function(){
            props.setProgressVisible(false);      
            router.push(page);
        }, 3000);
    };

    let { current } = state;

    let router = useRouter();
    let [loansModalOpen, setLoansModalOpen] = useState(false);
    let [loans2ModalOpen, setLoans2ModalOpen] = useState(false);
    let [loans3ModalOpen, setLoans3ModalOpen] = useState(false);
    let [loans4ModalOpen, setLoans4ModalOpen] = useState(false);
    let [loans5ModalOpen, setLoans5ModalOpen] = useState(false);

    let [investmentModalOpen, setInvestmentModalOpen] = useState(false);
    let [investment2ModalOpen, setInvestment2ModalOpen] = useState(false);
    let [investment3ModalOpen, setInvestment3ModalOpen] = useState(false);
    let [investment4ModalOpen, setInvestment4ModalOpen] = useState(false);

    let [cooperativeModalOpen, setCooperativeModalOpen] = useState(false);
    let [cooperative2ModalOpen, setCooperative2ModalOpen] = useState(false);
    let [cooperative3ModalOpen, setCooperative3ModalOpen] = useState(false);
    let [cooperative4ModalOpen, setCooperative4ModalOpen] = useState(false);



    const handleApplyNavigation = (dest) => {
        setLoansModalOpen(false); 
        setLoans2ModalOpen(false); 
        setLoans3ModalOpen(false); 
        props.setProgressVisible(true); 
        setTimeout(function(){
            if(props.drawerVisible)
            props.drawerVisible = !props.drawerVisible;
            // router.push(Constants.REGISTER)
            // location = Constants.REGISTER;
        }, 3000);
        setTimeout(function(){            
            props.setProgressVisible(false);             
        }, 2000);
    }


    // console.log('Constants.REGISTER:', Constants.REGISTER);

    function getButtonText(){
        if(router.pathname == '/loans')
            return " Apply Now";
        else if(router.pathname == '/investments')
            return " Invest Now";
        else if(router.pathname == '/cooperatives')
            return " Save Now";
        else
            return " Online Banking";

    }
        
    return (
        <div>
            {/* SALARY EARNER LOAN modal */}
            <Modal
                visible={loansModalOpen}
                title="SALARY EARNER LOAN"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setLoansModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc">
                    This loan is available for Staff of Blue chip and economically stable organization + Top 10 most respected banks. Maximum amount under this scheme is N5,000,000. Maximum Tenor is Twelve (12) months.
                    To be Eligible, one must have received Taxable salary in the last 6 months and must be a Reputable Individual of sane mind between the ages of 18 to 55 years old
                </div>

                <Divider />
                
                <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                     <li>Executed Application letter</li>
                     <li>1 Passport photograph of Borrower</li>
                     <li>Official staff ID card</li>
                     <li>Valid Identification (International Passport/Driver’s License/ National ID card)</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                     <li>Bank statement / Pay Slip for the last 6 months</li>
                     <li>Proof of residential address (utility bills, tenancy agreement)</li>
                     <li>Postdated cheque (s) to cover the repayment for borrower</li>
                    </ul>
                    </div>
                </div>
                
                </Modal>

            {/* SALARY ADVANCE */}
            <Modal
                visible={loans2ModalOpen}
                title="SALARY ADVANCE"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setLoans2ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc">
                This loan is available to Staff of Blue chip and economically stable organization + Top 10 most respected banks. Maximum amount under this scheme is N2,000,000. Maximum Tenor is 30days (1 month).
                To be eligible, one must have received Taxable salary in the last 6 months and must be a Reputable Individual of sane mind between the ages of 18 to 55 years old
                </div>

                <Divider />
                
                <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                     <li>Executed Application letter</li>
                     <li>1 Passport photograph of Borrower</li>
                     <li>Official staff ID card</li>
                     <li>Valid Identification (International Passport/Driver’s License/ National ID card)</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                     <li>Bank statement / Pay Slip for the last 6 months</li>
                     <li>Proof of residential address (utility bills, tenancy agreement)</li>
                     <li>Postdated cheque (s) to cover the repayment for borrower</li>
                    </ul>
                    </div>
                </div>
                
                </Modal>

            {/* BUSINESS OWNER  */}
            <Modal
                visible={loans3ModalOpen}
                title="BUSINESS OWNER"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setLoans3ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc">
                    This loan is available to Business Owners/ Entrepreneurs / startups. Maximum amount under this scheme is N10,000,000. Maximum Tenor is 8 months
                    One must have being in business for at least 3 Months must be a Reputable Individual of sane mind between the ages of 18 to 55 years old
                </div>

                <Divider />
                
                <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                        <li>Request Letter / email</li>
                        <li>1 Passport Photograph of director/ Promoter</li>
                        <li>Valid Identification (International Passport/Driver’s License/ National ID card)</li>
                        <li>Bank statement for the last 6 months</li>
                        <li>Proof of residential address (utility bills, tenancy agreement) fir both customer</li>
                        <li>Postdated cheque (s) to cover all installments until the facility is fully settled for borrower</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                        <li>Transfer of ownership Form</li>
                        <li>Buy back agreement Form</li>
                        <li>Original receipt of purchase of asset/ collateral</li>
                        <li>Original car papers (Original)</li>
                        <li>Physical or floating Assets (Movable)</li>
                        <li>Executed Loan covenant</li>
                        <li>Interest rate : 8% Reducing Balance</li>
                        <li>Max of N10mm</li>
                    </ul>
                    </div>
                </div>
                
            </Modal>

            {/* MICRO BUSINESS LOANS  */}
             <Modal
                visible={loans4ModalOpen}
                title="MICRO BUSINESS LOAN"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setLoans4ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc">
                This loan is availaable for Small Businesses / Informal Sector / Traders. Maximum amount of loan disbursement under this scheme is N100,000.
                The maximum Tenor is 4 months and repayment is done daily and weekly. Must have being in business or stock worth N50,000 in a market and must have shop rent receipt. 
                Interest rate is 10% reducing balance.
                </div>

                <Divider />
                
                <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                        <li>Loan Application Form</li>
                        <li>1 Passport photograph of Borrower</li>
                        <li>Valid Identification (International Passport/Driver’s License/ National ID card)</li>
                        <li>Proof of residential address (utility bills, tenancy agreement)</li>
                        <li>Shop Rent receipt</li>
                        <li>Max of N100,000</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                        <li>Transfer of ownership Form</li>
                        <li>Buy back agreement Form</li>
                        <li>Original receipt of purchase of asset/ collateral</li>
                        <li>Physical or floating Assets (Movable)</li>
                        <li>Executed Loan covenant</li>
                        <li>Interest rate 10% Reducing Balance</li>
                    </ul>
                    </div>
                </div>
                
            </Modal>

            {/* COOPERATIVE LOANS  */}
             <Modal
                visible={loans5ModalOpen}
                title="COOPERATIVE LOAN"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setLoans5ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc">
                    This loan is available to ALL cooperative members. Maximum amount under this scheme is N5,000,000. Maximum Tenor is Six (6) Months.
                    Guarantee from another, or more members with savings which is either up to or 120% of the loan amount. i.e. Suitable Member Guarantor.
                    3.5% Flat monthly (Equal repayment of interests). Repayment can be daily, weekly, bi monthly, monthly, etc.

                </div>

                <Divider />
                
                <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                        <li>Must be a member of the Cooperative and must have made three regular monthly contributions.</li>
                        <li>Duly completed Cooperative Loan Application Form</li>
                        <li>Valid ID Card</li>
                        <li>Utility Bill</li>
                        <li>Postdated Cheques / Standing Order Instruction/Mobile money deduction forms</li>
                        <li>Signed Guarantors Form + Guarantor ID card</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                        <li>Transfer of ownership Form</li>
                        <li>Buy back agreement Form</li>
                        <li>Original receipt of purchase of asset/ collateral</li>
                        <li>Original car papers (Original)</li>
                        <li>Physical or floating Assets (Movable)</li>
                        <li>Executed Loan covenant</li>
                        <li>Interest rate : 8% Reducing Balance</li>
                        <li>Max of N5mm</li>
                    </ul>
                    </div>
                </div>
                
            </Modal>

            {/* GPL PALADIUM INCOME FUND */}
             <Modal
                visible={investmentModalOpen}
                title="GPL PALADIUM INCOME FUND"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setInvestmentModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>It’s a high interest bearing account that encourages financial discipline through savings.</li>
                                <li>The Minimum investable amount under this scheme is Fifty Thousand Naira Only (N50,000) up to Ten Million Naira Only (N10,000,000).</li>
                                <li>The Minimum Tenor is (6) Six Months.</li>
                                <li>Guaranteed Rate of Return is (Twenty Four percent) 24% per annum , repaid monthly , quarterly or at maturity</li>
                                <li>The Scheme is a low risk fund as it invests in high quality securities and bridges gaps to customers with good risk ratings.</li>
                                <li>No bonus on bi-annual declared profits, but at maturity you have the privilege of accessing a loan double the accumulated invested amount for (6) Six Months, at a subsidized interest rate.</li>
                                <li>The Scheme is open ended, hence investors are able to subscribe anytime but can only redeem at Maturity</li>
                                <li>You will receive a monthly e- statement from us for every investment made.</li>
                            </ul>
                        </div>
                    
                </div>

                {/* <Divider /> */}
                
                {/* <div className="modalBottomSplit">
                    <div style={{borderRight: '1px solid #ddd', textAlign: 'left', paddingRight: '20px'}}>
                    <h4><strong>Requirements</strong></h4>
                    <ul>
                        <li>Must be a member of the Cooperative and must have made three regular monthly contributions.</li>
                        <li>Duly completed Cooperative Loan Application Form</li>
                        <li>Valid ID Card</li>
                        <li>Utility Bill</li>
                        <li>Postdated Cheques / Standing Order Instruction/Mobile money deduction forms</li>
                        <li>Signed Guarantors Form + Guarantor ID card</li>
                    </ul>
                    </div>
                    <div style={{paddingLeft: '20px', textAlign: 'left'}}>
                    <h4><strong>Features</strong></h4>
                    <ul>
                        <li>Transfer of ownership Form</li>
                        <li>Buy back agreement Form</li>
                        <li>Original receipt of purchase of asset/ collateral</li>
                        <li>Original car papers (Original)</li>
                        <li>Physical or floating Assets (Movable)</li>
                        <li>Executed Loan covenant</li>
                        <li>Interest rate : 8% Reducing Balance</li>
                        <li>Max of N5mm</li>
                    </ul>
                    </div>
                </div> */}
                
            </Modal>

            {/* GPL PLATINUM INCOME FUND */}
            <Modal
                visible={investment2ModalOpen}
                title="GPL PLATINUM INCOME FUND"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setInvestment2ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>It’s a high interest bearing account that encourages financial discipline through savings.</li>
                                <li>The Minimum investable amount under this scheme is Ten Million Naira Only (N10,000,000) up to Twenty Five Million Naira Only (N25,000,000)</li>
                                <li>The Minimum Tenor is (6) Six Months</li>
                                <li>Guaranteed Rate of Return is (Twenty Eight percent) 28% per annum, repaid monthly, quarterly or at maturity.</li>
                                <li>The Scheme is a low risk fund as it invests in high quality securities and bridges gaps to customers with good risk ratings.</li>
                                <li>No bonus on bi-annual declared profits, but at maturity you have the privilege of accessing a loan double the accumulated invested amount for 6 months, at a subsidized interest rate.</li>
                                <li>The Scheme is open ended, hence investors are able to subscribe anytime but can only redeem at Maturity</li>
                                <li>You will receive a monthly e- statement from us for every investment made.</li>
                            </ul>
                        </div>
                    
                </div>

            </Modal>

            {/* GPL PEARL INCOME FUND */}
            <Modal
                visible={investment3ModalOpen}
                title="GPL PEARL INCOME FUND"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setInvestment3ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>It’s a high interest bearing account that encourages financial discipline through savings.</li>
                                <li>The Minimum investable amount under this scheme is Twenty Five Million Naira Only (N25,000,000)</li>
                                <li>The Minimum Tenor is (12) Twelve Months</li>
                                <li>Guaranteed Rate of Return is (Thirty percent) 30 % per annum , repaid monthly , quarterly or at maturity</li>
                                <li>The Scheme is a low risk fund as it invests in high quality securities and bridges gaps to customers with good risk ratings.</li>
                                <li>No bonus on bi-annual declared profits, but at maturity you have the privilege of accessing a loan double the accumulated invested amount for 6 months, at a subsidized interest rate.</li>
                                <li>The Scheme is open ended, hence investors are able to subscribe anytime but can only redeem at Maturity</li>
                                <li>You will receive a monthly e- statement from us for every investment made.</li>
                            </ul>
                        </div>
                    
                </div>

            </Modal>

            {/* GPL DETAIL INCOME FUND */}
            <Modal
                visible={investment4ModalOpen}
                title="GPL DETAIL INCOME FUND"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setInvestment4ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>The Minimum investable amount is Hundred Million Naira Only (N100,000,000)</li>
                                <li>For investments in this category, all terms are negotiable. Kindly contact our team at investor@gabsynpeyzs.ng for further details.</li>
                                <li>The Fund typically is open ended, hence investors are able to subscribe anytime and redeem based on certain terms and conditions.</li>
                            </ul>
                        </div>
                    
                </div>

            </Modal>

            {/* GPL GOLD COOP SAVINGS ACCOUNT */}
            <Modal
                visible={cooperativeModalOpen}
                title="GPL GOLD COOP SAVINGS ACCOUNT"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setCooperativeModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>Minimum of N10,000 monthly up to N99,999 monthly (Cumulative)</li>
                                <li>Declaration of 0.25% yield on Members monthly periodic contributions asides Annual Surplus declarations </li>
                                <li>Access to cheap and instant credit/Loans</li>
                                <li>Eligible to a loan amount, 300% of Total contribution by the 4th month @ 3.8% per month</li>
                                <li>Bi- Annual Dues of N1,000</li>
                                <li>Nurturing of businesses and preparation of management accounts for artisans, etc.</li>
                                <li>Asset Finance, Land Acquisition, Housing , and other economic and social activities to improve the standards of living of members</li>
                            </ul>
                        </div>
                    
                </div>
                <Divider />
                <div className="modalMainDesc" >
                        <h4><strong>Requirements</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>Fill Membership Registration Form Online/physically</li>
                                <li>Provide ID Card, Passport Photograph, Utility Bill</li>
                                <li>Pay Registration Fee: N1000</li>
                                <li>Member gets a Coop Welcome email and a receipt + Notification of payment/funds by Email /Text</li>
                                <li>Conduct independent verification of customer and confirm as Member</li>
                                <li>Member gets a Passbook, Fills nominee form, and receives Bye-Laws (soft or Hardcopy)</li>
                                <li>Start enjoying the benefits of membership based on the class of membership.</li>
                                <li>Member must be of good character and sound mind.</li>
                                <li>Not less than 18 years of age except in the case of an heir of a deceased member, and where the Director grants exemption from this qualification.</li>
                                <li>Any other category of person(s) approved by the general body of the members as qualified to be members of the society.</li>
                                <li>Any member who does not belong to any other society, the primary objects of which coincide with that of this society except with the permission of the Direct</li>
                            </ul>
                        </div>
                    
                </div>

            </Modal>

            {/* GPL DIAMOND SAVINGS ACCOUNT */}
            <Modal
                visible={cooperative2ModalOpen}
                title="GPL DIAMOND COOP SAVINGS ACCOUNT"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setCooperative2ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>Minimum of N100,000 monthly up to N2499,999 monthly (Cumulative)</li>
                                <li>Declaration of 0.50% yield on Members monthly periodic contributions asides Annual Surplus declarations.</li>
                                <li>5% Discounts on purchases of goods/services from any of the members on the platform</li>
                                <li>Free adverts of your services on the platform</li>
                                <li>Access to cheap and instant credit/Loans</li>
                                <li>Eligible to a loan amount, 300% of Total contribution by the 4th month @ 3.7% per month</li>
                                <li>Bi- Annual Dues of N2,000</li>
                                <li>Free Business and credit advisory services + Trainings</li>
                                <li>Nurturing of businesses and preparation of management accounts for artisans ,etc</li>
                                <li>Asset Finance, Land Acquisition, Housing, and other economic and social activities to improve the standards of living of members</li>
                            </ul>
                        </div>
                    
                </div>
                <Divider />
                <div className="modalMainDesc" >
                        <h4><strong>Requirements</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>Fill Membership Registration Form Online/physically</li>
                                <li>Provide ID Card, Passport Photograph, Utility Bill</li>
                                <li>Pay Registration Fee: N1000</li>
                                <li>Member gets a Coop Welcome email and a receipt + Notification of payment/funds by Email /Text</li>
                                <li>Conduct independent verification of customer and confirm as Member</li>
                                <li>Member gets a Passbook, Fills nominee form, and receives Bye-Laws (soft or Hardcopy)</li>
                                <li>Start enjoying the benefits of membership based on the class of membership.</li>
                                <li>Member must be of good character and sound mind.</li>
                                <li>Not less than 18 years of age except in the case of an heir of a deceased member, and where the Director grants exemption from this qualification.</li>
                                <li>Any other category of person(s) approved by the general body of the members as qualified to be members of the society.</li>
                                <li>Any member who does not belong to any other society, the primary objects of which coincide with that of this society except with the permission of the Direct</li>
                            </ul>
                        </div>
                    
                </div>

            </Modal>

            {/* GPL GOLD PLATINUM SAVINGS ACCOUNT */}
            <Modal
                visible={cooperative3ModalOpen}
                title="GPL PLATINUM COOP SAVINGS ACCOUNT"
                onOk={() => handleApplyNavigation('/apply-for-loan')}
                onCancel={() => setCooperative3ModalOpen(false)}
                footer={[ 
                    <a href={Constants.REGISTER}>                              
                        <Button key="submit" type="primary" loading={false} onClick={() => handleApplyNavigation('/apply-for-loan')} >
                            APPLY
                        </Button> 
                    </a>                   
                ]}
                >
                <div className="modalMainDesc" >
                        <h4><strong>Features</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul >
                                <li>Minimum of N250,000 monthly</li>
                                <li>Declaration of 0.80% yield on Members monthly periodic contributions asides Annual Surplus declarations.</li>
                                <li>10% Discounts on purchases of goods/services from any of the members on the platform</li>
                                <li>Free adverts of your services on the platform</li>
                                <li>Access to cheap and instant credit/Loans</li>
                                <li>Eligible to a loan amount, 300% of Total contribution by the 4th month @ 3.5% per month</li>
                                <li>Bi- Annual Dues of N3,000</li>
                                <li>Free Business and credit advisory services + Trainings</li>
                                <li>Free HMO Services for members after 6 months of regular savings</li>
                                <li>Nurturing of businesses and preparation of management accounts for artisans ,etc</li>
                                <li>Asset Finance, Land Acquisition, Housing , and other economic and social activities to improve the standards of living of members</li>
                            </ul>
                        </div>
                    
                </div>
                <Divider />
                <div className="modalMainDesc" >
                        <h4><strong>Requirements</strong></h4>
                        <div style={{textAlign: 'left'}}>
                            <ul>
                                <li>Fill Membership Registration Form Online/physically</li>
                                <li>Provide ID Card, Passport Photograph, Utility Bill</li>
                                <li>Pay Registration Fee: N1000</li>
                                <li>Member gets a Coop Welcome email and a receipt + Notification of payment/funds by Email /Text</li>
                                <li>Conduct independent verification of customer and confirm as Member</li>
                                <li>Member gets a Passbook, Fills nominee form, and receives Bye-Laws (soft or Hardcopy)</li>
                                <li>Start enjoying the benefits of membership based on the class of membership.</li>
                                <li>Member must be of good character and sound mind.</li>
                                <li>Not less than 18 years of age except in the case of an heir of a deceased member, and where the Director grants exemption from this qualification.</li>
                                <li>Any other category of person(s) approved by the general body of the members as qualified to be members of the society.</li>
                                <li>Any member who does not belong to any other society, the primary objects of which coincide with that of this society except with the permission of the Direct</li>
                           </ul>
                        </div>
                    
                </div>

            </Modal>

            <nav className='nav'>

                {
                   (router.pathname == '/about-us' ||
                    router.pathname == '/faq' ||
                    router.pathname == '/terms-and-conditions' ||
                    router.pathname == '/privacy-policy')
                    && <img src="/assets/images/icons/back_arrow.png"  alt="" className="hamburger" onClick={() => openPage('/')}/>
                }

{
                    !(router.pathname == '/about-us' ||
                    router.pathname == '/faq' ||
                    router.pathname == '/terms-and-conditions' ||
                    router.pathname == '/privacy-policy') 
                    && <img src="/assets/images/icons/entypo_menu.png"  alt="" className="hamburger" onClick={() => setDrawerVisible(true)}/>
                }
                

                <div className="container" >
                    <Link href="/">
                        <img src="/assets/images/icons/GPlogo2.png"  alt="" className="logo" onClick={() => router.push('/')} />
                    </Link>  
                    <div style={{display: "flex", alignItems: "flex-end", marginTop: "10px", textAlign: "right", width: "270px", height: "100% !important", float: "right"}}>
                        {/* <a href={Constants.LOGIN} className="navBtn navSignIn">SIGN IN</a> */}
                        <a href={Constants.REGISTER} className="navBtn navSignUp"> <LockFilled /> 
                        {                            
                            getButtonText()
                        }
                        
                        </a>
                    </div>                  
                </div>

            </nav>

            <Drawer
                // title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
                style={{
                        padding: '0px !important', 
                        backgroundColor: 'var(--site-purple) !important', 
                        // display: router.pathname == '/about-us' ||
                        //             router.pathname == '/faq' ||
                        //             router.pathname == '/terms-and-conditions' ||
                        //             router.pathname == '/privacy-policy' ? 'none' : 'block'
                    }}
            >
                <div className="drawerContent">
                    <h4 style={{color: 'white', fontSize: '12px', position: 'absolute', bottom: '30px'}}>The Gabsyn Peyzs</h4>
                    <p style={{color: 'white', fontSize: '10px', position: 'absolute', bottom: '10px'}}>08106345038, 08187313922</p>
                </div>

                {
                    router.pathname == '/' && (
                        <Menu
                            onClick={handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={[]}
                            mode="inline"
                            style={{backgroundColor: 'var(--site-purple) !important', width: 256 }}
                        >

                            <Menu.Item key="sub1" onClick={() => {openPage('/loans')} }>
                                <span>
                                    <BankOutlined />
                                    <span>Loans</span>
                                </span>
                            </Menu.Item>

                            <Menu.Item key="sub2" onClick={() => {openPage('/investments')} }>
                                <span>
                                    <LineChartOutlined />
                                    <span>Investments</span>
                                </span>
                            </Menu.Item>

                            <Menu.Item key="sub3" onClick={() => {openPage('/cooperatives')} }>
                                <span>
                                    <ApartmentOutlined />
                                    <span>Coorperatives</span>
                                </span>
                            </Menu.Item>                            
                            
                            <Menu.Item key="20" onClick={() => {openPage('/about-us')} }>
                                <span>
                                    <BankOutlined />
                                    <span>Company</span>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="26">
                                <span>
                                    <BankOutlined />
                                    <a href="http://161.35.175.18/user/register" style={{color: 'white'}}><span>Investors Forum</span></a>
                                </span>
                            </Menu.Item>
                            {/* <Divider style={{backgroundColor: 'rgba(255, 255, 255, .5)'}} /> */}
                            <hr style={{backgroundColor: 'rgba(255, 255, 255, .3)'}} />
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                    <QuestionCircleOutlined />
                                    <span>Help</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="22" onClick={() => {openPage('/faq')} } >FAQ</Menu.Item>
                                {/* <Menu.Item key="23">Site map</Menu.Item> */}
                                <Menu.Item key="24" onClick={() => {openPage('/terms-and-conditions')} }>Terms and Conditions</Menu.Item>
                                <Menu.Item key="25" onClick={() => {openPage('/privacy-policy')} }>Privacy Policy</Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item key="25">
                                <span>
                                    <UsergroupAddOutlined />
                                    <span>Careers</span>
                                </span>
                            </Menu.Item> */}
                            
                        </Menu>
                        
                    )
                }

                {
                    router.pathname == '/loans' && (
                        <Menu
                            onClick={handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={[]}
                            mode="inline"
                            style={{backgroundColor: 'var(--site-purple) !important', width: 256 }}
                        >
                            <Menu.Item key="1">
                                <Link href="/">
                                    <span onClick={props.closeDrawer}>
                                        <SettingOutlined />
                                        <span>Home</span>
                                    </span>
                                </Link>                        
                            </Menu.Item>

                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                    {/* <img className="item_icon" src="/assets/images/icons/SideMenu_LoansIcon.png" alt="" /> */}
                                    {/* <MailOutlined /> */}
                                    <CreditCardOutlined />
                                    <span>Loans</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="2" onClick={() => {setLoansModalOpen(true)} }>Salary Earner Loan</Menu.Item>
                                <Menu.Item key="3" onClick={() => {setLoans2ModalOpen(true)} }>Salary Advance Loan</Menu.Item>
                                <Menu.Item key="4" onClick={() => {setLoans3ModalOpen(true)} }>Business Owner Loan</Menu.Item>
                                <Menu.Item key="5" onClick={() => {setLoans4ModalOpen(true)} }>Micro Business Loan</Menu.Item>
                                <Menu.Item key="6" onClick={() => {setLoans5ModalOpen(true)} }>Coorperative Loan</Menu.Item>
                                
                            </SubMenu>
                           
                            <Menu.Item key="20" onClick={() => {openPage('/about-us')} }>
                                <span>
                                    <BankOutlined />
                                    <span>Company</span>
                                </span>
                            </Menu.Item>
                            {/* <Menu.Item key="21">
                                <span>
                                    <AuditOutlined />
                                    <span>Blog</span>
                                </span>
                            </Menu.Item> */}
                            <hr style={{backgroundColor: 'rgba(255, 255, 255, .3)'}} />
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                    <QuestionCircleOutlined />
                                    <span>Help</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="22" onClick={() => {openPage('/faq')} } >FAQ</Menu.Item>
                                {/* <Menu.Item key="23">Site map</Menu.Item> */}
                                <Menu.Item key="24" onClick={() => {openPage('/terms-and-conditions')} }>Terms and Conditions</Menu.Item>
                                <Menu.Item key="25" onClick={() => {openPage('/privacy-policy')} }>Privacy Policy</Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item key="25">
                                <span>
                                    <UsergroupAddOutlined />
                                    <span>Careers</span>
                                </span>
                            </Menu.Item> */}
                        </Menu>
                        
                    )
                }

                {
                    router.pathname == '/investments' && (
                        <Menu
                            onClick={handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={[]}
                            mode="inline"
                            style={{backgroundColor: 'var(--site-purple) !important', width: 256 }}
                        >
                            <Menu.Item key="1">
                                <Link href="/">
                                    <span onClick={props.closeDrawer}>
                                        <SettingOutlined />
                                        <span>Home</span>
                                    </span>
                                </Link>                        
                            </Menu.Item>

                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                    <LineChartOutlined />
                                    <span>Investments</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="7" onClick={() => {setInvestmentModalOpen(true)} }>GPL Paladium Income Fund</Menu.Item>
                                <Menu.Item key="8" onClick={() => {setInvestment2ModalOpen(true)} }>GPL Platinum Income Fund</Menu.Item>
                                <Menu.Item key="9" onClick={() => {setInvestment3ModalOpen(true)} }>GPL Pearl Income Fund</Menu.Item>
                                <Menu.Item key="5" onClick={() => {setInvestment4ModalOpen(true)} }>GPL Detail Income Fund</Menu.Item>
                                
                            </SubMenu>
                                                        
                            <Menu.Item key="20" onClick={() => {openPage('/about-us')} }>
                                <span>
                                    <BankOutlined />
                                    <span>Company</span>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="26">
                                <span>
                                    <BankOutlined />
                                    <a href="http://161.35.175.18/user/register" style={{color: 'white'}}><span>Investors Forum</span></a>
                                </span>
                            </Menu.Item>
                            {/* <Menu.Item key="21">
                                <span>
                                    <AuditOutlined />
                                    <span>Blog</span>
                                </span>
                            </Menu.Item> */}
                            <hr style={{backgroundColor: 'rgba(255, 255, 255, .3)'}} />
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                    <QuestionCircleOutlined />
                                    <span>Help</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="22" onClick={() => {openPage('/faq')} } >FAQ</Menu.Item>
                                {/* <Menu.Item key="23">Site map</Menu.Item> */}
                                <Menu.Item key="24" onClick={() => {openPage('/terms-and-conditions')} }>Terms and Conditions</Menu.Item>
                                <Menu.Item key="25" onClick={() => {openPage('/privacy-policy')} }>Privacy Policy</Menu.Item>
                            </SubMenu>
                        </Menu>
                        
                    )
                }

{
                    router.pathname == '/cooperatives' && (
                        <Menu
                            onClick={handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={[]}
                            mode="inline"
                            style={{backgroundColor: 'var(--site-purple) !important', width: 256 }}
                        >
                            <Menu.Item key="1">
                                <Link href="/">
                                    <span onClick={props.closeDrawer}>
                                        <SettingOutlined />
                                        <span>Home</span>
                                    </span>
                                </Link>                        
                            </Menu.Item>
                            
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                    <ApartmentOutlined />
                                    <span>Coorperatives</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11" onClick={() => {setCooperativeModalOpen(true)} }>GPL Gold Coop Savings Account</Menu.Item>
                                <Menu.Item key="12" onClick={() => {setCooperative2ModalOpen(true)} }>GPL Diamond Coop Savings Account</Menu.Item>
                                <Menu.Item key="13" onClick={() => {setCooperative3ModalOpen(true)} }>GPL Platinum Coop Savings Account</Menu.Item>
                                
                            </SubMenu>
                            
                            
                            <Menu.Item key="20" onClick={() => {openPage('/about-us')} }>
                                <span>
                                    <BankOutlined />
                                    <span>Company</span>
                                </span>
                            </Menu.Item>
                            {/* <Menu.Item key="21">
                                <span>
                                    <AuditOutlined />
                                    <span>Blog</span>
                                </span>
                            </Menu.Item> */}
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                    <QuestionCircleOutlined />
                                    <span>Help</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="22">FAQ</Menu.Item>
                                <Menu.Item key="23">Site map</Menu.Item>
                                <Menu.Item key="24">Terms and Conditions</Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item key="25">
                                <span>
                                    <UsergroupAddOutlined />
                                    <span>Careers</span>
                                </span>
                            </Menu.Item> */}
                        </Menu>
                        
                    )
                }
                
                
            </Drawer>
            
            <div className="progressDiv">
                <img src="/assets/images/progress-gif.gif" alt="" />
            </div>
            

            <style jsx>{
                `
                .item_icon{
                    width: 20px; 
                    margin-right: 10px;
                }
                .nav{
                    width: 100%;
                    height: var(--nav-height);
                    background-color: purple;
                    display: flex;
                    align-items: center;
                    position: fixed;
                    z-index: 200;
                }
                .hamburger{
                    cursor: pointer;
                    margin-left: auto;
                    margin-right: 0px;  
                    height: 40px;               
                }
                .hamburger:hover{
                    transform: scale(1.1, 1.1);                    
                }
                .logo{
                    height: 50px;
                    marrgin-left: -60px;
                }

                .progressDiv{
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(255,255,255,.7);
                    z-index: 999999;
                    display: ${props.progressVisible ? 'flex' : 'none'};
                    align-items: center;
                    justify-content: center;
                }

                .progressDiv img{
                    height: 120px;
                }

                .navBtn{
                    padding: 5px 15px;
                    width: 150px;
                    border-radius: 20px;
                    border: 1px solid white;
                    margin-left: auto;
                    margin-right: 50px;
                    transition: all 2s;
                    text-align: center;
                }

                .navBtn.navSignIn{
                    color: var(--app-purple);
                    background-color: white;                   
                }
                .navBtn.navSignIn:hover{
                    color: white;
                    background-color: var(--app-purple);
                }

                .navBtn.navSignUp{
                    color: white;
                    background-color: transparent;
                }
                .navBtn.navSignUp:hover{
                    color: var(--app-purple);
                    background-color: white;
                }

                @media screen and (max-width: 768px){
                    .hamburger{
                        cursor: pointer;
                        margin-left: 20px;
                        margin-right: 0px;  
                        height: 40px;               
                    }

                    .navBtn{
                        margin-right: 0px;
                    }

                    .logo{
                        display: none;
                    }
                }
                `}
            </style>
        </div>        
    );
    
}

export default Navbar;
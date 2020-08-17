import React, {useState} from 'react';
import {Typography} from "antd";
import {useRouter} from 'next/router';

const {Text} = Typography;

interface Props{
    logo: string,
    title: string,
    children: any
}

const ServiceItem = (props:Props) => {
    return (
    <div className="listItem">
        <img src={props.logo} alt="" />
        <i className="fas fa-check-circle"></i>

        <div>
            <h4><strong>{props.title}</strong></h4>
            <Text>{props.children}</Text>
        </div>



        <style jsx>{
            `
            .listItem{
                display: flex;
                margin: 20px 0px 0px 0px;
            }

            .listItem img{ 
                width: 80px;
                height: 80px;
                margin-right: 20px;
            }

            .listItem div{ 
                flex: 1;
            }
            `
        }</style>

    </div>

    
    );
}

export default ServiceItem;
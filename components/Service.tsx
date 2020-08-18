import React, {useState} from 'react';
import {Typography} from "antd";
import {useRouter} from 'next/router';

const {Text} = Typography;

interface Props{
    image: string,
    hoverImage: string,
    label: string,
    path: string,
    progressVisible?: boolean,
    setProgressVisible?: any
}

const Service = (props:Props) => {

//   console.log('Services props', props);

  const handleNavigation = (dest) => {
    props.setProgressVisible(true); 
    setTimeout(function(){
        router.push(dest)
    }, 1000);
    setTimeout(function(){
        props.setProgressVisible(false);        
    }, 1500);
}
    
  const router = useRouter();

    return (
        <div className="aService" onClick={() => handleNavigation(props.path)}>
            <img src={props.image} className="defaultImg" alt={`${props.label} image`} />
            <img src={props.hoverImage} className="hoverImg" alt={`${props.label} hover image`} />
            <p className="label" >{props.label}</p>
            <style jsx>{
                `
                .aService{
                    display: inline-block;
                    width: 33.333%;
                    padding: 30px 10px;
                    text-align: center;
                    color: var(--app-purple);
                    margin-top: 20px; 
                    cursor: pointer;
                }

                
                .aService:hover{
                    /* background-color: var(--app-purple); */
                }

                .aService img{
                    display: block;
                    margin: auto;
                    width: 150px;
                    margin-bottom: 20px;
                }

                .aService .hoverImg{
                    display: none;
                }

                
                .aService:hover .defaultImg{
                    display: none;
                }

                .aService:hover .hoverImg{
                    display: block;
                    transform: scale(1.2, 1.2);
                    box-shadow: 5px 5px 10px rgba(0,0,0,.5);
                    border-radius: 50%;
                    
                }
                .label{
                    font-weight: bold;
                    font-size: 16px;  

                }

                @media screen and (max-width: 768px){
                    .aService img{
                        display: block;
                        margin: auto;
                        width: 100px;
                        margin-bottom: 20px;
                    }
                }
                `
            }</style>
        </div>
    );
}

export default Service;
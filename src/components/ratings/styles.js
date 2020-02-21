import styled from "styled-components";
import {colors} from '../../constants/index'

export const Container = styled.div`
    background: #282829;
    width: 18% !important;
    height: 80px;
    margin: auto;
    border-radius: 2px;
    border: 1px solid ${
        colors.FONT_DARK_COLOR
    };

    input[type = "radio"] {
            display: none;
        }
    div > h3 {
        color: white;
        font-size: 18px;
        font-weight: lighter;
        margin-top: 8px;
        margin-left: 10px;
    }

    div > h3 > span {
        font-size: 15px;
        color: ${colors.FONT_DARK_COLOR}
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 35% !important;
        height: 100px;

        div {
            margin-left: 10px;
        }

        div > h3 {
            font-size: 25px;
        }

        div h3 span {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 768px){
        width: 45% !important;
    }

    @media only screen and (max-width: 500px) {
        width: 50% !important;
        height: 60px;

        div > h3 {
            font-size: 13px;
            margin-top: 4px;
        }
        div > h3 > span {
            font-size: 11px;
        }

    }

    @media screen and (max-width: 320px) {
        width: 58% !important;
    }

    @media screen and (min-width: 411px) {
        width: 45%;
    }


`

export const MainStar = styled.div`
    margin-left: 10px;
    margin-top: 15px;
    display: inline-block;

    .star {
        font-size: 25px;
        padding-left: 0 !important;
        padding-right: 12px;
    }

    div {
        float: right;
        color: white;
        padding: 0 3px 0 3px; 
        margin-left: 8px;
        margin-top: 2px;
        border: 1px solid ${
            colors.FONT_DARK_COLOR
        };
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .star {
            padding-right: 15px;
            font-size: 25px; 
            margin-left: 10px;
            margin-top: 5px;
        }

        div {
            font-size: 30px;
            margin-top: -5px;
        }
    }

    @media only screen and (max-width: 500px) {
        .star {
            font-size: 15px;
            padding-right: 10px;
        }

        div {
            margin-top: -5px;
        }
    }

    
`
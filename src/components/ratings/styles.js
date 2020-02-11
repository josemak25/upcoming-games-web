import styled from "styled-components";
import {colors} from '../../constants/index'

export const Container = styled.div`
    background: #282829;
    width: 18%;
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
`
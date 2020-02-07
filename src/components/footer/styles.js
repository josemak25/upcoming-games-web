import styled from "styled-components";
import { colors, fonts } from "../../constants";


export const Container = styled.footer`
  padding: 10px 7% 10px 7%;
  background-color: ${colors.FONT_LIGHT_COLOR};
`;

export const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Li = styled.li`
  list-style-type: none;
  height: 100%;
  font-size: 13px;
  font-weight: ${fonts.FONT_WEIGHT_HEAVY};
`;

export const Copyright = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 30px !important;
  color: red;
`;

export const SocialIcon = styled.li`
  display: inline;
  list-style-type: none;
  text-align: right;
`;

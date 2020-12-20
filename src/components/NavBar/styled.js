import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled } from "../../theme/typography";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;

  position: fixed;
  width: 100%;
  height: 80px;

  background-color: ${Colors.primary};
  z-index: 10;  
`;

export const Title = styled(H2Styled)`
  color: ${Colors.white};
  font-size: 20px;
  user-select: none;
`;

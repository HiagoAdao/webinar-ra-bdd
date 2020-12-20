import { createGlobalStyle } from "styled-components";
import { Sizes } from "./sizes";
import { HeadingStyle } from "./typography";
import { Colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    line-height: ${Sizes.xxLarge};
  }
  
  h1 {
    ${HeadingStyle};
    font-weight: 500;
    font-size: ${Sizes.xxLarge};
    color: ${Colors.black};
  }

  h2 {
    ${HeadingStyle};
    font-weight: 500;
    font-size: ${Sizes.xLarge};
    color: ${Colors.black};
  }
`;

export default GlobalStyle
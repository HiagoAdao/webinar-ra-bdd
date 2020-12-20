import styled from 'styled-components'
import { Colors } from '../../theme/colors'
import { H2Styled } from '../../theme/typography'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  background-color: ${Colors.greyTwentyPercent};

  height: 90vh;
  width: 100%;
`;

export const Text = styled(H2Styled)`
  max-width: 60%;
`;

export const ContainerButton = styled.div`
  padding: 20px;
`;
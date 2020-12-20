import React, { useState } from 'react'
import ContainerWithNavBar from '../../components/Container'
import Button from '../../components/Button'
import { Container, Text, ContainerButton } from './styled'

const Home = (props) => {
  const [ renderMsg, setRenderMsg ] = useState(false)

  return (
    <ContainerWithNavBar
      name={"Exemplo prático - Webinar Behavior Driven Developmet"}
    >
      <Container>
        {
          renderMsg &&
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
        }
        <ContainerButton>
          <Button
            onClick={() => setRenderMsg(prevState => !prevState)}
            size={{ width: "340px", height: "55px" }}
          >
            Clique aqui para {!renderMsg ? "mostrar" : "esconder"} a mensagem
          </Button>
        </ContainerButton>
      </Container>
    </ContainerWithNavBar>
  )
}

export default Home

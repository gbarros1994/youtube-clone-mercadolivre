import React from "react";

import tshirtImage from '../../assets/tshirt.png';

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description } from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a>Compartilhar</a>
        <a>Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img  alt="" src={tshirtImage}/>
          </Gallery>

          {/* <Info /> */}
        </Column>

        <Column>
          {/* <ProductAction></ProductAction> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>

    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p>Compra garantida</p>
        <p>Recebe o produto que esta esperando</p>
      </span>
      <span>
        <p>Garantia do vendedor</p>
        <p>Recebe o produto que esta esperando</p>
      </span>
    </div>
  </Section>
);

const info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corrupti maiores odit 
      eaque nostrum necessitatibus consectetur nihil nesciunt a nisi quae neque eligendi sed fugiat
      cumque amet quaerat, quos labore.
      <br/>
      <br/>
      Itens inclusos: <br/>
      - 1x LED <br/>
      - 1x LED <br/>
      - 1x LED <br/>
      - 1x LED <br/>
      - 1x LED <br/>
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quibusdam assumenda, inventore, odit placeat ipsa eveniet similique molestiae hic provident voluptatum. Quod perspiciatis voluptas explicabo tempora eveniet eos sapiente ad!
    </p>
  </Description>
)

export default Product;

import React from "react";

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
   <Container>
     <Title>Informações sobre o vendedor</Title>

     <LocationCard>
       <LocationIcon />

       <div>
         <p>Localização</p>
         <strong>São Paulo, São Paulo</strong>
       </div>
     </LocationCard>

     <ReputationCard>
       <ReputationThermometer>
         <li />
         <li />
         <li />
         <li />
         <li className="active" />
       </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Vendas no ultimos 4 meses</span>
          </div>

          <div>
            <strong>
              <ClockIcon/>
            </strong>
            <span> Presta um bom atedimento</span>
          </div>

          <div>
            <strong>561</strong>
            <span>Vendas no ultimos 4 meses</span>
          </div>
        </ReputationRow>
     </ReputationCard>

    <More>Ver mais dados do vendedor</More>
   </Container>
  );
};

export default SellerInfo;

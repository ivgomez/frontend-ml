import React from "react";
import styled from "styled-components";

export const NoResultsCard = () => {
  return (
    <Container>
      <h3>
        Sin publicaciones o no hay publicaciones que coincidan con tu búsqueda
      </h3>
      <UL>
        <LI>
          <strong>Revisa la ortografía</strong> de la palabra.
        </LI>
        <LI>
          Utiliza <strong>palabras más genéricas</strong> o menos palabras.
        </LI>
        <LI>Navega por las categorías para encontrar un producto similar</LI>
      </UL>
    </Container>
  );
};

const Container = styled.div`
  margin: 48px auto;
  max-width: 1018px;
  min-height: 204px;
  padding: 42px 40px 32px;
  background-color: #fff;
`;

const UL = styled.ul`
  font-size: 16px;
  font-weight: 300;
  margin: 18px 10px 10px 0;
`;

const LI = styled.li`
  color: rgba(0, 0, 0, 0.9);
  line-height: 1.231;
  list-style-position: outside;
  list-style-type: disc;
  margin-bottom: 3px;
  margin-left: 18px;
`;

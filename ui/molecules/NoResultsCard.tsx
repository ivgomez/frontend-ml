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
  margin: ${({ theme }) => theme.spaces?.xl} auto;
  max-width: 1018px;
  min-height: 204px;
  padding: ${({ theme }) => theme.spaces?.l} ${({ theme }) => theme.spaces?.m};
  background-color: #fff;
`;

const UL = styled.ul`
  font-size: 16px;
  font-weight: 300;
  margin: ${({ theme }) => theme.spaces?.xs} ${({ theme }) => theme.spaces?.xxs};
`;

const LI = styled.li`
  color: rgba(0, 0, 0, 0.9);
  line-height: 1.231;
  list-style-position: outside;
  list-style-type: disc;
  margin-bottom: ${({ theme }) => theme.spaces?.xxxs};
  margin-left: ${({ theme }) => theme.spaces?.xs};
`;

/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";

export const LogoSection = () => (
  <Link href="/" passHref>
    <BrandWrapper>
      <LogoWrapper>
        <img
          src="/static/images/logos/Logo-ml.png"
          alt="logo"
          data-e2e-brand="logo"
        />
      </LogoWrapper>
    </BrandWrapper>
  </Link>
);

const BrandWrapper = styled.a`
  height: 2.5rem;
`;
BrandWrapper.displayName = "BrandWrapper";

const LogoWrapper = styled.div`
  position: relative;
  height: 42px;
  width: 100px;
  img {
    object-fit: contain;
  }
`;
LogoWrapper.displayName = "LogoWrapper";

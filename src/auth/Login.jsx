import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
            <GetAllBtn>GET ALL THERE</GetAllBtn>
            <Desc>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle increase by $1.
            </Desc>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  position: relative;
`;

const BgImage = styled.div`
  background-image: url("images/login-background.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CTALogoOne = styled.img`
  width: 100%;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  margin-top: 20px;
`;

const GetAllBtn = styled.a`
  width: 100%;
  padding: 20px 0px;
  text-decoration: none;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin: 12px 0px;
  letter-spacing: 1.3px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: #f9f9f9;
  font-size: 11px;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: 3.5px;
  margin: 12px 0px;
  text-align: center;
`;

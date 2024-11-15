import styled from "styled-components";

export const RatingCardCustom = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 32px;

  text-align: left;

  background: radial-gradient(circle, #232a34, #181e27);

  border-radius: 15px;

  @media (min-width: 1220px) {
    /* width: 412px; */

    margin-left: auto;
    margin-right: auto;

    padding-left: 32px;
    padding-top: 48px;
    padding-right: 39px;
    padding-bottom: 32px;
  }
`;

export const LogoCustom = styled.div`
  margin-bottom: 16px;

  @media (min-width: 1220px) {
    margin-bottom: 30px;

    & svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 17px;

  font-family: "Overpass";
  font-size: 24px;
  font-weight: bold;

  color: #fff;

  @media (min-width: 1220px) {
    margin-bottom: 15px;

    font-size: 28px;
  }
`;

export const ContentCustom = styled.p`
  margin-bottom: 24px;

  font-family: "Overpass";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57;
  color: #969fad;

  @media (min-width: 1220px) {
    width: 340px;

    font-size: 15px;
    line-height: 1.6;
  }
`;

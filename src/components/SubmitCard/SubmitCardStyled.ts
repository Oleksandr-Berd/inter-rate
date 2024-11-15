import styled from "styled-components";

export const SubmitCardCon = styled.div`
  padding-left: 24px;
  padding-top: 34px;
  padding-right: 24px;
  padding-bottom: 37px;

  background: radial-gradient(circle, #232a34, #181e27);

  border-radius: 15px;

  @media (min-width: 1220px) {
    margin-left: auto;
    margin-right: auto;

    & svg {
      width: 162px;
      height: 108px;
    }
  }

  & h3 {
    margin-bottom: 17px;

    color: #fff;
    font-family: "Overpass";
    font-size: 24px;
    font-weight: 800;

    @media (min-width: 1220px){
        margin-bottom: 15px;

        font-size: 28px;
    }
  }
`;

export const PicCon = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1220px) {
    margin-bottom: 32px;
  }
`;

export const Selection = styled.p`
  padding-left: 12px;
  padding-top: 5px;
  padding-right: 12px;
  padding-bottom: 5px;

  margin-bottom: 24px;

  font-family: "Overpass";
  font-size: 14px;
  line-height: 1.57;

  color: #fc7614;
  background-color: #262e38;

  @media (min-width: 1220px) {
    margin-bottom: 32px;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const Content = styled.p`
  font-family: "Overpass";
  font-size: 14px;
  line-height: 1.57;
  color: #969fad;

  @media (min-width: 1220px){
    font-size: 15px;
    line-height: 1.6;
  }
`;

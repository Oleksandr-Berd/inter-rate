import styled from "styled-components";

export const OptionListCustom = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1220px) {
    margin-bottom: 32px;
  }
`;

export const LabelCustom = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 17px;

    @media (min-width: 1220px) {
      margin-right: 21px;
    }
  }

  & input[type="radio"] {
    display: none;
  }

  & span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #232a34;
    background-color: #232a34;
    color: #979797;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 1s, color 1s;

    @media (min-width: 1220px) {
      width: 51px;
      height: 51px;

      font-size: 16px;
      line-height: 1.56;

      &:hover,
      &:active,
      &:focus {
        background-color: #fc7614;
        color: #fff;
      }
    }
  }

  & input[type="radio"]:checked + span {
    background-color: #7c8798;
    color: white;
  }
`;

export const SubmitBtnCustom = styled.button`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;

  text-transform: uppercase;
  font-family: "Overpass";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.87px;

  background-color: #fc7614;
  color: #fff;

  border-radius: 22px;
  transition: background-color 1s, color 1s;

  &:hover,
  &:active,
  &:focus {
    background-color: #fff;
    color: #fc7614;
    cursor: pointer;
  }

  @media (min-width: 1220px) {
    font-size: 15px;
  }
`;

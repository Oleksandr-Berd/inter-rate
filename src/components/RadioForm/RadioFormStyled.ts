import styled from "styled-components";

export const OptionListCustom = styled.div`
  margin-bottom: 24px;
`;

export const LabelCustom = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 17px;
  }

  & input[type="radio"] {
    display: none; /* Hide default radio button */
  }

  & span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #232a34; /* Circle border */
    background-color: #232a34;
    color: #979797;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
  }

  & input[type="radio"]:checked + span {
    background-color: #232a34; /* Filled circle when selected */
    color: white; /* White text when selected */
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
`;

import styled from "styled-components";

export const OptionListCustom = styled.div`
margin-bottom: 24px;
`

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
    color: #232a34;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;

   
  }

  & input[type="radio"]:checked + span {
    background-color: #232a34; /* Filled circle when selected */
    color: white; /* White text when selected */
  }
`;


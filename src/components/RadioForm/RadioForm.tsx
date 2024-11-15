import { useState } from "react";

import * as SC from "./RadioFormStyled"
import { iProps } from "../../utils/interfaces";


export const RadioForm: React.FC<iProps> = ({ handleRateSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);

  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    handleRateSubmit(selectedOption);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <SC.OptionListCustom>
        <SC.LabelCustom>
          <input
            type="radio"
            name="option"
            value="1"
            checked={selectedOption === "option1"}
            onChange={handleChange}
          />
          <span>1</span>
        </SC.LabelCustom>
        <SC.LabelCustom>
          <input
            type="radio"
            name="option"
            value="2"
            checked={selectedOption === "option2"}
            onChange={handleChange}
          />
          <span>2</span>
        </SC.LabelCustom>
        <SC.LabelCustom>
          <input
            type="radio"
            name="option"
            value="3"
            checked={selectedOption === "option3"}
            onChange={handleChange}
          />
          <span>3</span>
        </SC.LabelCustom>
        <SC.LabelCustom>
          <input
            type="radio"
            name="option"
            value="4"
            checked={selectedOption === "option4"}
            onChange={handleChange}
          />
          <span>4</span>
        </SC.LabelCustom>
        <SC.LabelCustom>
          <input
            type="radio"
            name="option"
            value="5"
            checked={selectedOption === "option5"}
            onChange={handleChange}
          />
          <span>5</span>
        </SC.LabelCustom>
      </SC.OptionListCustom>
      <SC.SubmitBtnCustom type="submit">submit</SC.SubmitBtnCustom>
    </form>
  );
};

export default RadioForm
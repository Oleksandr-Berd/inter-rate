import { useState } from "react";

import * as SC from "./RatingCardStyled"

import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

import RadioForm from "../RadioForm/RadioForm";

const RatingCard: React.FC = () => {
const [rate, setRate] = useState("")

const handleRateSubmit = (selectedOption:string) => {
setRate(selectedOption)
}
console.log(rate);

  return (
    <SC.RatingCardCustom>
      <SC.LogoCustom>
        <StarIcon />
      </SC.LogoCustom>
      <div>
        <SC.Title>How did we do?</SC.Title>
        <SC.ContentCustom>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </SC.ContentCustom>
      </div>
      <RadioForm handleRateSubmit={handleRateSubmit} />
    </SC.RatingCardCustom>
  );
};

export default RatingCard;

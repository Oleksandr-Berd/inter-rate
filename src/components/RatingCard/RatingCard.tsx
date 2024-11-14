
import * as SC from "./RatingCardStyled"

import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

import RadioForm from "../RadioForm/RadioForm";
import { iProps } from "../../utils/interfaces";

const RatingCard: React.FC<iProps> = ({ handleRateSubmit }) => {
  
  
  
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

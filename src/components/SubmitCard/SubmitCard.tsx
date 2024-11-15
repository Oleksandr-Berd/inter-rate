import { useEffect } from "react";

import * as SC from "./SubmitCardStyled";

import {ReactComponent as SubmitPic} from "../../assets/pics/submit_mob.svg"
import { iProps } from "../../utils/interfaces";

const SubmitCard:React.FC<Partial <iProps>> = ({rate, handleRefresh}) => {

useEffect(() => {
  if (handleRefresh) {
    const timeout = setTimeout(handleRefresh, 3000); // 3 seconds delay
    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }
}, [handleRefresh]);

    return (
      <SC.SubmitCardCon>
        
        <SC.PicCon>
          <SubmitPic />
        </SC.PicCon>
        <SC.Selection>You selected {rate} out of 5</SC.Selection>
        <h3>Thank you!</h3>
        <SC.Content>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </SC.Content>
      </SC.SubmitCardCon>
    );
}
 
export default SubmitCard;
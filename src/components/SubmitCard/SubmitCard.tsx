import * as SC from "./SubmitCardStyled"

import {ReactComponent as SubmitPic} from "../../assets/pics/submit_mob.svg"
import { iProps } from "../../utils/interfaces";

const SubmitCard:React.FC<Partial <iProps>> = ({rate}) => {
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
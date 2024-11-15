import { useState } from "react";
import RatingCard from "../../components/RatingCard/RatingCard";
import * as SC from "./SharedLayoutStyled"
import SubmitCard from "../../components/SubmitCard/SubmitCard";

const SharedLayout:React.FC = () => {
    const [rate, setRate] = useState("");

    const handleRateSubmit = (selectedOption: string) => {
      setRate(selectedOption);
    console.log(rate);

    };
    
    return (
      <SC.SharedLayoutCustom>
        {/* <RatingCard rate={rate} handleRateSubmit={handleRateSubmit} /> */}
        <SubmitCard rate={rate}/>
      </SC.SharedLayoutCustom>
    );
}
 
export default SharedLayout;
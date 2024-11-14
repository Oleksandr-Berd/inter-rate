import { useState } from "react";
import RatingCard from "../../components/RatingCard/RatingCard";
import * as SC from "./SharedLayoutStyled"

const SharedLayout:React.FC = () => {
    const [rate, setRate] = useState("");

    const handleRateSubmit = (selectedOption: string) => {
      setRate(selectedOption);
    };
    return (
      <SC.SharedLayoutCustom>
        <RatingCard rate={rate} handleRateSubmit={handleRateSubmit} />
      </SC.SharedLayoutCustom>
    );
}
 
export default SharedLayout;
import { useState } from "react";
import RatingCard from "../../components/RatingCard/RatingCard";
import * as SC from "./SharedLayoutStyled";
import SubmitCard from "../../components/SubmitCard/SubmitCard";

const SharedLayout: React.FC = () => {
  const [rate, setRate] = useState("");

  const handleRateSubmit = (selectedOption: string) => {
    setRate(selectedOption);
    console.log(rate);
  };

  const handleRefresh = () => {
    setRate("")
  }

  return (
    <SC.SharedLayoutCustom>
      {rate !== "" ? (
        <SubmitCard rate={rate} handleRefresh={handleRefresh} />
      ) : (
        <RatingCard handleRateSubmit={handleRateSubmit} />
      )}
    </SC.SharedLayoutCustom>
  );
};

export default SharedLayout;

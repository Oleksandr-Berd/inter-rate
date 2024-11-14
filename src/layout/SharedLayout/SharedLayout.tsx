import RatingCard from "../../components/RatingCard/RatingCard";
import * as SC from "./SharedLayoutStyled"

const SharedLayout:React.FC = () => {
    return (
        <SC.SharedLayoutCustom>
            <RatingCard/>
        </SC.SharedLayoutCustom>
    );
}
 
export default SharedLayout;
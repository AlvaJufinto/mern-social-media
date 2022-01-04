import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

import {
    ExploreSection,
    ExploreContainer
} from "./ExploreElements";

const Explore = () => {
    return ( 
        <>
            <Navbar />
            <ExploreSection>
                <ExploreContainer>
                    <ExploreCard>
                        <ExploreCardOverlay></ExploreCardOverlay>
                        <ExploreCardContent>
                            
                        </ExploreCardContent>
                    </ExploreCard>
                </ExploreContainer>
            </ExploreSection>
        </>
     );
}
 
export default Explore;
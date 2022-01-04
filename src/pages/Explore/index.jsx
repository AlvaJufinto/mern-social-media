import {
    ThumbUp, 
    ThumbUpAltOutlined 
} from '@mui/icons-material';

import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

import {
    ExploreSection,
    ExploreContainer,
    ExploreCard,
    ExploreCardOverlay,
    ExploreCardContent,
    ExploreCardContentImg,
} from "./ExploreElements";

const Explore = () => {
    let items = ['1','2','3','4'];

    return ( 
        <>
            <Navbar />
            <ExploreSection>
                <ExploreContainer>
                    {items.map(item => {
                        return (
                            <ExploreCard>
                            <ExploreCardOverlay>
                                <ThumbUp />
                                {item}
                                <ThumbUpAltOutlined />
                                20
                            </ExploreCardOverlay>
                            <ExploreCardContent>
                                <ExploreCardContentImg />
                            </ExploreCardContent>
                            </ExploreCard>
                        )
                    })}
                    <ExploreCard>
                        <ExploreCardOverlay>
                            <ThumbUp />
                            10
                            <ThumbUpAltOutlined />
                            20
                        </ExploreCardOverlay>
                        <ExploreCardContent>
                            <ExploreCardContentImg />
                        </ExploreCardContent>
                    </ExploreCard>
                </ExploreContainer>
            </ExploreSection>
        </>
     );
}
 
export default Explore;
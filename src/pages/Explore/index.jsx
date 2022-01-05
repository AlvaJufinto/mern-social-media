import { useState } from "react";
import {
    ThumbUp, 
    ChatBubbleRounded
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
    ExploreCardContentImg,
} from "./ExploreElements";

import noBanner from "../../assets/noBanner.jpg"; 

const Explore = () => {
    let items = ['1','2','3','4', '1'];

    return ( 
        <>
            <Navbar />
            <ExploreSection>
                <ExploreContainer >
                    {items.map(item => {
                        return (
                            <ExploreCard to ="/post/:id">
                                <ExploreCardOverlay>
                                    <ThumbUp /> 0
                                    <ChatBubbleRounded /> 20
                                </ExploreCardOverlay>
                                <ExploreCardContentImg src={noBanner} />
                            </ExploreCard>
                        )
                    })}
                </ExploreContainer>
            </ExploreSection>
        </>
     );
}
 
export default Explore;
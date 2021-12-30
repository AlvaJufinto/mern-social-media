import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

import {
    HomeSection,
    HomeContainer
} from "./HomeElements";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <HomeSection>
                <HomeContainer>
                    <Sidebar />
                    <Feed />
                    {/* <div style={{
                        flex: '1.5',
                        maxWidth: '500px',
                        margin: '0px 0px 0px 20px'
                    }}></div> */}
                    <Rightbar />
                </HomeContainer>
            </HomeSection>
        </>
     );
}
 
export default Home;
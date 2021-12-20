import Navbar from '../../components/Nav';
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";

import {
    HomeSection
} from "./HomeElements";

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <HomeSection>
                <Sidebar />
                <Feed />
                <div style={{
                    flex: '1.5',
                    maxWidth: '500px',
                    margin: '0px 0px 0px 20px'
                }}></div>
            </HomeSection>
        </div>
     );
}
 
export default Home;
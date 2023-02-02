import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";





function MainLayout() {
    return(
        <>
         <Header />
            <Outlet context={{name: 'Emerson', age: 30, Address: 'Gapan City'}}/>
         <Footer />
        </>
    )
}
export default MainLayout;
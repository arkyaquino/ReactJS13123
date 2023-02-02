import ShopFooter from "../../components/shop/ShopFooter";
import ShopHeader from "../../components/shop/ShopHeader";
import { Outlet } from "react-router-dom";




function ShopLayout() {
    return(
        <>
        <ShopHeader />
            <Outlet />
         <ShopFooter />
        </>
    )
}
export default ShopLayout;
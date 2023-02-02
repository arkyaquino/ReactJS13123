import Count from "../Count";
import Login from "./Login";

function Main() {
    return (
        <>
            <div className="main-body">
                <div className="row">
                    <div className='col-8 bg-dark'>
                    </div>

                    <div className="col-4 br-light">
                        <Login />
                    </div>

                </div>

            </div>
            <Count></Count>

        </>

    )
}

export default Main;
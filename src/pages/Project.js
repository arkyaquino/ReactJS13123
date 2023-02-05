






import { useParams } from "react-router-dom";


function ViewProject() {
    const { id } = useParams()
    return (
        <>
            This is product with an ID number of { id }
        </>
    )
}
export default ViewProject;


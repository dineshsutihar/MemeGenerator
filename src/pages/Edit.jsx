import { useSearchParams } from "react-router-dom";

const EditPage = () =>{
    const [params] = useSearchParams();
    return(
        <div>
            <img src={params.get("url")} alt="image" width="250px"/>
        </div>
    )
}

export default EditPage;
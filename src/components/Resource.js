import React from "react";
import { useParams } from "react-router-dom";
import ResourceList from "./ResourceList"
import useSWAPIResource from "../hooks/useSWAPIResource";

function Resource(){


    const params = useParams();
    const { resource } = params;

    const { data, loading, error } = useSWAPIResource(resource);

    return(
        <>  

            <div className="container-resource">
                    <h3>{"List of " + resource}</h3>
                {error && <p>Error: {error.message}</p>}
                {loading ? <p>Loading...</p>  : (<ResourceList resource={resource} data={data} />) }
            </div>
            
        </>
    )
}

export default React.memo(Resource);
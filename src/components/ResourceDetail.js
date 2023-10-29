import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResourceDetail } from "../api";
import { useNavigate } from "react-router-dom";

function ResourceDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const { resource, id } = params;

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResourceDetail(resource, id);

      if (data.length === 0) {
        return;
      }

      setItem(data);
      setLoading(false); 
    };
    fetchData();
  }, [resource, id]);

  const renderDetails = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (item !== null) {
      const itemDetails = Object.keys(item).map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {item[key]}
        </div>
      ));

      return (
        <div >
          <button
            style={{ width: 200 }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
          <div className="container-resource" >
          <h2>{item.name || item.title}</h2>
          {itemDetails}

          </div>
        </div>
      );
    }

    return <p>Data not found.</p>;
  };

  return <div>{renderDetails()}</div>;
}

export default ResourceDetail;

import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import api from "./api";
import "./App.css";

const EDGE =
  "https://edge.stg-alefedge.com/v1/content?url=00c104e612cb7f461e6446d77125a0edb3b8a827df1bd1149f3a08cad05d4af7a55612f62cb967e393b53619887a5a4970b4f0b02282fae310df9a5edaeeaa01&api_key=" +
  process.env.REACT_APP_EDGE_API;
  const NORMAL = "https://d29ctshu25jfop.cloudfront.net/aa/raw.mp4";

const url =
  "https://developerapis.stg-alefedge.com/et/api/v1/stream-tech/content/get-all?";

function App() {
  const [edge, setedge] = useState();
  const [checkEdge, setCheckEdge] = useState(true);

  useEffect(() => {
    const edgeChecker = async () => {
      const res = await axios.get(EDGE);

      // Check res for edge and set checkEdge
      // setedge();
      console.log(res)
    };

    const getEdgeUrl = async () => {
      const response = await fetch(
        url +
          new URLSearchParams({
            partner_name: process.env.REACT_APP_PARTNER_NAME,
          }),
        {
          method: "GET",
          credentials: "same-origin",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/jon",
            api_key: process.env.REACT_APP_EDGE_API,
          }, // body data type must match "Content-Type" header
        }
      );

      console.log(response);

      // setedge(URLs[0].content_url);
    };

    // edgeChecker();
    // getEdgeUrl();
  }, []);

  return checkEdge ? (
    <>
      <div className="App">
        <h2>EdgeNet Video Comparison</h2>
        {/* EDGENET VIDEO  */}
        <div className="videos">
          <div className="edge">
            <h3>EdgeNet Video</h3>

            <ReactPlayer url={EDGE} />

          </div>

          <div className="noedge">
            <h3>Video from internet</h3>
            <video width="750" height="500" controls>
              <source src={NORMAL} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <h2> Please access this service from an edge-enabled location </h2>
    </>
  );
}

export default App;

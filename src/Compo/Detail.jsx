import React, { useState, useEffect } from "react";
import university from "../img/university.png";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "../CSS/Detail.css";

export default function Detail() {
  const { name } = useParams();

  const history = useHistory();

  const [det, setdet] = useState([]);

  const API = async () => {
    try {
      const res = await axios(
        `http://universities.hipolabs.com/search?country=India&name=${name}`
      );
      setdet(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    API();
  }, [name]);

  const Return = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="detail_main">
        <div className="return" onClick={Return}>
          <h5>Back</h5>
        </div>
        <div className="deatil_wrapper">
          {det.map((data) => (
            <>
              <div className="heading">
                <span>
                  <img
                    src={university}
                    className="university_img2"
                    alt="Error"
                  />
                </span>
                <h2>
                  {" "}
                  <span>
                    <img
                      src={university}
                      className="university_img"
                      alt="Error"
                    />
                  </span>{" "}
                  {data.name}
                </h2>
              </div>

              <div className="details_det">
                <h5>{data.country}</h5>
                <h5>Domain:{data.domains}</h5>

                <a
                  style={{ textDecoration: "none" }}
                  href={data.web_pages}
                  target="_blank rel="
                  noopener
                  noreferrer
                >
                  <div className="btnn">
                    <h6>Visite</h6>
                  </div>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

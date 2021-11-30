import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

import { universitydata } from "../data";

export default function Home() {
  return (
    <div>
      <div className="home_main">
        <div className="Home_heading">
          <h2>Indian Universities List</h2>
        </div>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">University</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            {universitydata.map((data) => (
              <tbody>
                <tr>
                  <td style={{ color: " #34495e " }}>
                    {!data.country ? "Not-Available" : data.country}
                  </td>
                  <Link
                    to={`/detail/${data.name}`}
                    style={{ textDecoration: "none" }}
                  >
                    <td
                      style={{ color: " #1f618d  " }}
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Click for More..."
                    >
                      {!data.name ? "Not-Available" : data.name}
                    </td>
                  </Link>
                  <td style={{ color: " #34495e " }}>
                    {!data.state_province ? "Not-Available" : data.state_province}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

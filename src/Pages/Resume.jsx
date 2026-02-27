import React from "react";
import { Link } from "react-router-dom";
import { GoFileSubmodule } from "react-icons/go";
import { MdCloudDownload } from "react-icons/md";
import { Button } from "@mui/material";


function Resume() {
  return (
    <div>
      <div className="row my-5 w-100 d-flex jusitfy-content-evenly text-center">
        <h3 className="text-center my-5">
          Create a job-winning Resume in minutes
        </h3>
        <div className="col-4 border shadow p-5 text-center">
          <GoFileSubmodule />
          <h4>Go to your settings</h4>
          <p>Add pre-written examples to each section</p>
          <div>Step-1</div>
        </div>
        <div className="col-4 border shadow p-5 text-center">
          <MdCloudDownload />
           <h4>Go to your settings</h4>
          <p>Add pre-written examples to each section</p>
          <div>Step-2</div>
        </div>
      </div>

      <Link to={"/form"}>
      <Button variant="contained">Create</Button>
      </Link>
    </div>
  );
}

export default Resume;

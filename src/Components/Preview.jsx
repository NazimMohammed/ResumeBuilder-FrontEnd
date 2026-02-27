import React, { useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { FaFileDownload, FaHistory } from "react-icons/fa";
import Edit from "./Edit";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { addDownloadHistoryAPI } from "../services/allAPI";


function Preview({userInput, finish,resumeid,setUserInput}) {
console.log(resumeid);

const[downloadStatus,setDownloadStatus]=useState(false)


const downloadCV=async()=>{
  //to get screenshot 
  const input=document.getElementById('result')
  const canvas= await html2canvas(input,{scale:3})
  const imgUrl=canvas.toDataURL("image/png")

  //to create pdf
  const pdf= new jsPDF()
  const pdfWidth= pdf.internal.pageSize.getWidth()
  const pdfHeight =pdf.internal.pageSize.getHeight()
  pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pdfHeight)
  pdf.save("resume.pdf")

  //get Date and Time

  const LocalTimeandDate=new Date()
  const TimeStamp=`${LocalTimeandDate.toLocaleDateString()},${LocalTimeandDate.toLocaleTimeString()}`

  //proceed to api call to add downloadhistory
  try{
    
    const result=await addDownloadHistoryAPI({...userInput,imgUrl,TimeStamp})
    console.log(result);
    setDownloadStatus(true)

  }catch(err){
    console.log(err);
    
  }

}
  
  
  return (
    <div>
    {userInput.personalDetails.name!="" && <div className="flex-column">

      { finish && <div className="d-flex justify-content-end align-items-center">
        {/* download */}
        <button onClick={downloadCV} className="btn fs-3 text-primary"><FaFileDownload/></button>
        {/* Edit */}
        <div><Edit resumeid={resumeid} setUpdateResume={setUserInput}/></div>
        {/* history */}
        {downloadStatus && <Link to={'/history'} className="btn fs-3 text-primary"> <FaHistory/></Link>}
        {/* Back */}
        <Link to={'/resume-generator'} className="btn text-primary">BACK</Link>
      </div> }


      <Box>
        <Paper elevation={8} id="result" className="p-4">

          <Typography variant="h1" align="center" component="h2">
           <h1 className="fw-bold ">{userInput.personalDetails.name}</h1>
          </Typography>

           <Typography variant="subtitle1" align="center" color="#00b0ff">
           <p>{userInput.personalDetails.jobTitle}</p>
          </Typography>

           <Typography variant="body2" align="center"  >
           {userInput.personalDetails.email}  ||
           {userInput.personalDetails.location}   ||
           {userInput.personalDetails.phone}
          </Typography>

          <Typography variant="body2" align="center" mb={4} >
           <Link href={userInput.personalDetails.github} target="_blank">Github </Link> || 
           <Link href={userInput.personalDetails.linkedin} target="_blank">LinkedIn</Link> ||
           <Link href={userInput.personalDetails.portfolio} target="_blank"> Portfolio</Link>
          </Typography>

          <Divider>Summary</Divider>

          <div  className="container-fluid d-flex">
            <p>{userInput.summary}</p>
          </div>

          <Divider>Education</Divider>
          <Typography variant="subtitle1" align="center" >
           <h5>{userInput.educationDetails.course}</h5>
           <p><span>{userInput.educationDetails.college}</span> | <span>{userInput.educationDetails.university}</span> | <span>{userInput.educationDetails.year}</span></p>
          </Typography>


          <Divider>Professional-Experience</Divider>
          <Typography variant="subtitle1" align="center" >
           <h5>{userInput.experience.job}</h5>
           <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
          </Typography>

          <Divider>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{flexWrap:"wrap", gap:"10px", padding:"10px"}}>
            {userInput.skills.map(skill=><Button variant="contained">{skill}</Button>)}
          </Stack>
         


        </Paper>
      </Box>
    </div>}

    </div>
  );
}

export default Preview;

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from 'react-icons/fa';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { editResumeAPI, getAResumeApi } from '../services/allAPI';
import { useEffect } from 'react';
import swal from "sweetalert";



function Edit({ resumeid, setUpdateResume }) {
  // console.log(resumeID);
  const [userInput, setUserInput] = useState({})
  const[userSkill,setUserSkill]=useState()


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getEditResumeDetails = async () => {
    try {
      const result = await getAResumeApi(resumeid)
      // console.log(result);
      setUserInput(result.data)



    }
    catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getEditResumeDetails()
  }, [resumeid])

   const addSkill = (userSkill) => {
    if (userSkill) {
      if (userInput.skills.includes(userSkill)) {
        alert("Skill already exists")
      }
      else {
        setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })
      }
    }
  }

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
  }


//updateResume
const handleUpdateResume=async()=>{
  try{
    const result = await editResumeAPI(userInput?.id,userInput)
    // console.log(result);
    setUpdateResume(result.data)
    swal("Success","Resume added","success");
    handleClose()
    
  }
  catch(err){
    console.log(err);
    
  }
}




  return (
    <div>
      <button className='btn text-primary fs-2' onClick={handleOpen}><FaEdit /></button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Full Name" variant="standard" value={userInput?.personalDetails?.name} onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      name: e.target.value,
                    },
                  })
                } />
                <TextField id="standard-basic" label="Job Title" variant="standard" value={userInput?.personalDetails?.jobTitle}  onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      jobTitle: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="Location" variant="standard" value={userInput?.personalDetails?.location} onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      location: e.target.value,
                    },
                  })
                } />
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Email" variant="standard" value={userInput?.personalDetails?.email}  onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      email: e.target.value,
                    },
                  })
                }  />
                <TextField id="standard-basic" label="Phone Number" variant="standard" value={userInput?.personalDetails?.phone}   onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      phone: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="Github" variant="standard" value={userInput?.personalDetails?.github}  onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      github: e.target.value,
                    },
                  })
                } />
                <TextField id="standard-basic" label="LinkedIn" variant="standard" value={userInput?.personalDetails?.linkedIn}   onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      linkedin: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="Portfolio" variant="standard" value={userInput?.personalDetails?.portfolio}  onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      portfolio: e.target.value,
                    },
                  })
                } />
              </div>
            </div>
            <div>
              <h3>Educational Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Course" variant="standard" value={userInput?.educationDetails?.course}   onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      course: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="College" variant="standard" value={userInput?.educationDetails?.college}     onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      college: e.target.value,
                    },
                  })
                } />
                <TextField id="standard-basic" label="University" variant="standard" value={userInput?.educationDetails?.university}   onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      course: e.target.value,
                    },
                  })
                } />
                <TextField id="standard-basic" label="Year of Passout" variant="standard" value={userInput?.educationDetails?.year}   onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      course: e.target.value,
                    },
                  })
                } />
              </div>
            </div>
            <div>
              <h3>Professional Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Job or Internship" variant="standard" value={userInput?.experience?.job}    onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      job: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="Company" variant="standard" value={userInput?.experience?.company} onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      company: e.target.value,
                    },
                  })
                } />
                <TextField id="standard-basic" label="Location" variant="standard" value={userInput?.experience?.jobLocation}  onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      jobLocation: e.target.value,
                    },
                  })
                }/>
                <TextField id="standard-basic" label="Duration" variant="standard" value={userInput?.experience?.duration} onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      duration: e.target.value,
                    },
                  })
                } />
              </div>
            </div>
            <h3>Skills</h3>

            <div className='d-flex justify-content-between align-items-center m-3'>
              <input type="text" className='form-control' placeholder='Add Skill' 
              onChange={e=>setUserSkill(e.target.value)} value={userSkill}/>
              <Button onClick={() => addSkill(userSkill)} variant="text" className='me-3' sx={{ maxWidth: '40px' }}>
                Add
              </Button>
            </div>
            <h5>Added Skills : </h5>
            <div className='d-flex justify-content-between'>
              {userInput?.skills?.map(skill=>(<span className='btn btn-primary d-flex align-items-center justify-content-center'>{skill}
                <button onClick={() => removeSkill(skill)} className='btn text-light'>X</button>
              </span>))}
            </div>
            <div>
              <h3>Professional Summary</h3>
              <div className='d-flex row p-3 flex-wrap'>
                <TextField

                  id="standard-multiline-static"
                  label="Write a short summary of yourself"
                  multiline
                  rows={4}
                  variant="standard"
                  value={userInput?.summary}
                />
              </div>
            </div>


          </Typography>
          <Button variant="text" className='me-3' sx={{ maxWidth: '40px' }} onClick={handleUpdateResume}>
            Update
          </Button>
        </Box>
      </Modal>

    </div>
  )
}

export default Edit
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { duration, Stack, TextField } from "@mui/material";
import { addResumeAPI } from "../services/allAPI"
import Swal from "sweetalert2";
import swal from "sweetalert";

function Steps({ userInput, setUserInput, setFinish,setResumeId }) {
  console.log(userInput);

  //useRef
  const userSkillsRef = React.useRef();

  const steps = [
    "Basic Information",
    "Contact Details",
    "Education Details",
    "Work Experience",
    "Skills & Certifications",
    "Review & Submit",
  ];

  const suggestSkills = [
    "REACT",
    "ANGULAR",
    "UI/UX",
    "PYHTON",
    "NODE",
    "EXPRESS",
    "MONGODB",
    "JAVASCRIPT",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //addSkill
  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert("Skill already exist");
      } else {
        setUserInput({
          ...userInput,
          skills: [...userInput.skills, inputSkill],
        });
      }
    }
  };

  //removeSkill

  const removeSkill = (skill) => {
    setUserInput({
      ...userInput,
      skills: userInput.skills.filter((item) => item != skill),
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className="d-flex row p-3">
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      name: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Full Name"
                variant="standard"
                value={userInput.personalDetails.name}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      jobTitle: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Job Title"
                variant="standard"
                value={userInput.personalDetails.jobTitle}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      location: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Location"
                variant="standard"
                value={userInput.personalDetails.location}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className="d-flex row p-3">
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      email: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Email"
                variant="standard"
                value={userInput.personalDetails.email}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      phone: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                value={userInput.personalDetails.phone}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      github: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Github"
                variant="standard"
                value={userInput.personalDetails.github}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      linkedIn: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="LinkedIn"
                variant="standard"
                value={userInput.personalDetails.linkedIn}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      portfolio: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Portfolio"
                variant="standard"
                value={userInput.personalDetails.portfolio}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className="d-flex row p-3">
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      course: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Course"
                variant="standard"
                value={userInput.educationDetails.course}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      college: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="College"
                variant="standard"
                value={userInput.educationDetails.college}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      university: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="University"
                variant="standard"
                value={userInput.educationDetails.university}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    educationDetails: {
                      ...userInput.educationDetails,
                      year: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Year of Passout"
                variant="standard"
                value={userInput.educationDetails.year}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Professional Details</h3>
            <div className="d-flex row p-3">
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      job: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Job or Internship"
                variant="standard"
                value={userInput.experience.job}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      company: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Company"
                variant="standard"
                value={userInput.experience.company}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      jobLocation: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Location"
                variant="standard"
                value={userInput.experience.jobLocation}
              />
              <TextField
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      duration: e.target.value,
                    },
                  })
                }
                id="standard-basic"
                label="Duration"
                variant="standard"
                value={userInput.experience.duration}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Skills</h3>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <input
                  ref={userSkillsRef}
                  type="text"
                  className="form-control"
                  placeholder="Add Skill"
                />
                <Button
                  onClick={() => addSkill(userSkillsRef.current.value)}
                  variant="text"
                  className="me-3"
                  sx={{ maxWidth: "40px" }}
                >
                  Add
                </Button>
              </Stack>
              <div>
                <h5>Suggestions : </h5>
                <div className="d-flex flex-wrap justify-content-between">
                  {suggestSkills.map((userskill) => (
                    <Button
                      onClick={() => addSkill(userskill)}
                      variant="outlined"
                    >
                      {userskill}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h5>Added Skills : </h5>
                <div className="d-flex justify-content-between">
                  {userInput.skills.length > 0 ? (
                    userInput.skills.map((skill) => (
                      <span className="btn btn-primary d-flex align-items-center justify-content-center">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="btn text-light"
                        >
                          X
                        </button>
                      </span>
                    ))
                  ) : (
                    <p>nothing to display</p>
                  )}
                </div>
              </div>
            </Box>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Professional Summary</h3>
            <div className="d-flex row p-3 flex-wrap">
              <TextField
                onChange={(e) =>
                  setUserInput({ ...userInput, summary: e.target.value })
                }
                value={userInput.summary}
                id="standard-multiline-static"
                label="Write a short summary of yourself"
                multiline
                rows={4}
                defaultValue="Eg : I'm a passionate full-stack developer with hands-on experience in React,Node ..."
                variant="standard"
              />
            </div>
          </div>
        );
      default:
        return Null;
    }
  };

  //AddResume -api call
  const handleAddResume = async () => {
    const { name, jobTitle, location } = userInput.personalDetails;

    if (name && jobTitle && location) {
      // alert("proceed to API call")

      try {
        const result = await addResumeAPI(userInput);
        console.log(result);
        swal("Success","Resume added","success");
        setFinish(true)
        setResumeId(result.data.id)



      } catch (err) {
        console.log(err);
        swal("Error","Cant complete the action","error");

      }
    } else {
      alert("please fill missing details");
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>{renderStepContent(activeStep)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              {activeStep === steps.length - 1 ? (
                <Button onClick={handleAddResume}>Finish</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}

export default Steps;

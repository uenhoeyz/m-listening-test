import type { NextPage } from 'next'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider, Grid,
  Slider,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Toolbar,
  Typography
} from '@mui/material'
import React, { useState } from 'react'

const steps = [
  'Listening Test (Naturalness) 1',
  'Listening Test (Naturalness) 2',
  'Listening Test (PLACEHOLDER)'
]

const divStyle = {
  color: 'blue',
}

const stepInfo = [{
  'title': 'Listening Test (Naturalness) 1',
  'desc': <Typography sx={{mt: 2, mb: 1}} color="common.black">
    For each audio, please help to give your <span style={divStyle}>MUSHRA (MUltiple Stimuli with Hidden Reference and Anchor)</span> to it. The
    MUSHRA score is expressed as a single rational number, typically in the range 0-100, shown in below:<br/>
    [80 - 100] - Excellent. Like face-to-face conversation or radio reception.<br/>
    [60 - 80] - Good. Imperfection can be perceived, but sound still clear.<br/>
    [40 - 60] - Fair.<br/>
    [20 - 40] - Poor. Nearly impossible to communicate.<br/>
    [0- 20] - Bad. Impossible to communicate.<br/>
  </Typography>
}, {
  'title': 'Listening Test (Naturalness) 2',
  'desc': <Typography
    variant="h6"
    component="div"
    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
  >
    Please listen to the audio samples and choose whether it is spoken by a native English speaker. The score is between
    0 - 10
    - 0 Indicates it&#39;s detinate v trom a native speaker
    --10 means it&#39;s a foreigner talking for sure
    You can choose any value between 0 - 10
  </Typography>
}, {
  'title': 'Listening Test (PLACEHOLDER)',
  'desc': <Typography
    variant="h6"
    component="div"
    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
    color="common.black"
  >
    For each audio, please help to give your MUSHRA (MUltiple Stimuli with Hidden Reference and Anchor) to it. The
    MUSHRA score is expressed as a single rational number, typically in the
    range 0-100, shown in below
    [80 - 100] - Excellent. Like face-to-face conversation or radio reception.
    160 - 80- Good. moerfections can be perceived. but sound still clear.
    [40 - 601 - Fair.
    20 - 40 - Poor. Nearv Impossible to communicate
    10- 201 - Bad Imnossible to communicate
  </Typography>
}]

const pattern = /^[a-z0-9]+$/i

const Home: NextPage = () => {
  const [mTurkUserName, setMTurkUserName] = useState('')
  const [showSteps, setShowSteps] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [showUserNameError, setShowUserNameError] = useState(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const validUserName = () => {
    if (mTurkUserName.trim().length > 0 && mTurkUserName.trim().match(pattern)) {
      setShowSteps(true)
      setMTurkUserName(mTurkUserName.trim())
    } else {
      setShowUserNameError(true)
    }
  }

  const handleMTurkUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowUserNameError(false)
    setMTurkUserName(event.target.value)
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            Listening Test
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Toolbar/>
        {!showSteps && <Stack direction="row" spacing={2}>
          <TextField
            error={showUserNameError}
            id="mturk-username"
            label="MTurk Username"
            variant="standard"
            value={mTurkUserName}
            onChange={handleMTurkUserNameChange}
            helperText="No special characters allowed."
          />
          <Button variant="outlined" onClick={validUserName}>Submit</Button>
        </Stack>}
        {showSteps && <Box sx={{width: '100%'}}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {}
              const labelProps: {
                optional?: React.ReactNode;
              } = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          <Box margin={2}>
            <Stack spacing={2}>
              <Typography
                sx={{mt: 2, mb: 1}}
                variant="h3"
                color="common.black"
              >{stepInfo[activeStep].title}</Typography>
              {stepInfo[activeStep].desc}
              <Divider/>
              <Stack spacing={2} direction="row">
                <Typography variant="h6"
                            sx={{mt: 2, mb: 1}}
                            color="common.black">Sample A</Typography>
                <audio
                  controls
                  controlsList="nodownload"
                  src="/icassp2023/parallel/ASI_a0006.wav">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
                <Box sx={{ width: 500 }}>
                  <Slider
                    aria-label="accent"
                    defaultValue={50}
                    valueLabelDisplay="on"
                    marks={marks}
                    step={1}
                    min={0}
                    max={100}
                  />
                </Box>
                
              </Stack>
            </Stack>
            <Stack sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{mr: 1}}
              >
                Back
              </Button>
              <Box sx={{flex: '1 1 auto'}}/>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Stack>
          </Box>
        </Box>}
      </Container>
    </Box>

  )
}

export default Home

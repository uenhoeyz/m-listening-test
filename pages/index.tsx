import type { NextPage } from 'next'
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Toolbar,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import MURSHRATest from '../components/MURSHRA/MURSHRATest'
import NativeTest from '../components/NATIVE/NativeTest'
import SimilarityTest from '../components/SIMILARITY/SimilarityTest'
import { File } from '../helper/constants'
import { Results } from '../src/models'
import { DataStore } from '@aws-amplify/datastore'
import { API } from 'aws-amplify'
import { createResults } from '../src/graphql/mutations'

const steps = [
  'Listening Test (Naturalness) 1',
  'Listening Test (Naturalness) 2',
  'Listening Test (Similarity)'
]

const pattern = /^[a-z0-9]+$/i

const Home: NextPage = () => {
  const [mTurkUserName, setMTurkUserName] = useState('')
  const [showSteps, setShowSteps] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [showUserNameError, setShowUserNameError] = useState(false)
  const [fileValues, setFileValues] = useState<File[]>([])

  const submit = () => {
    fileValues.map(fileValue => {
      fileValue.v.map(async value => {
        try {
          const current = new Date()
          const result = await API.graphql({
            query: createResults,
            authMode: 'API_KEY',
            variables: {
              input: {
                "user": mTurkUserName,
                "test": 'MURSHRA',
                "model": value.m,
                "file": fileValue.f,
                "result": value.v,
                "createdAt": current.toLocaleString()
              },
            },
          })
        } catch (err) {
          console.log(err);
        }
      })
    })
  }
  
  const handleNext = () => {
    if (activeStep === 0) {
      submit()
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
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
  
  const handleUpdateValues = (fileValues: File[]) => {
    setFileValues(fileValues)
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
            {steps.map((label) => {
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
            {activeStep === 0 && <MURSHRATest onValueChange={handleUpdateValues}/>}
            {activeStep === 1 && <NativeTest/>}
            {activeStep === 2 && <SimilarityTest/>}
            <Stack sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
              <Box sx={{flex: '1 1 auto'}}/>
              <Button onClick={handleNext}>
                SUBMIT
              </Button>
            </Stack>
          </Box>
        </Box>}
      </Container>
    </Box>

  )
}

export default Home

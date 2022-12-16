import type { NextPage } from 'next'
import { AppBar, Box, Button, Container, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MURSHRATest from '../../components/MURSHRA/MURSHRATest'
import { File } from '../../helper/constants'
import { API } from 'aws-amplify'
import { createResults } from '../../src/graphql/mutations'
import Image from 'next/image'
import NativeTest from '../../components/NATIVE/NativeTest'
import SimilarityTest from '../../components/SIMILARITY/SimilarityTest'
import { generateUID } from '../../helper/helpers'

const pattern = /^[a-z0-9]+$/i

const Native: NextPage = () => {
  const [mTurkUserName, setMTurkUserName] = useState('')
  const [showSurvey, setShowSurvey] = useState(false)
  const [showUserNameError, setShowUserNameError] = useState(false)
  const [fileValues, setFileValues] = useState<File[]>([])
  const [showThanksMessage, setShowThanksMessage] = useState<Boolean>(false)
  const [surveyCode, setSurveyCode] = useState<string>('')

  const submit = () => {
    const sCode = generateUID()
    setSurveyCode(sCode)
    fileValues.map(fileValue => {
      fileValue.v.map(async value => {
        try {
          const current = new Date()
          const result = await API.graphql({
            query: createResults,
            authMode: 'API_KEY',
            variables: {
              input: {
                'user': mTurkUserName + ':' + sCode,
                'test': 'Similarity',
                'model': value.m,
                'file': fileValue.f,
                'result': value.v,
                'createdAt': current.toLocaleString()
              },
            },
          })
        } catch (err) {
          console.log(err)
        }
      })
    })
  }

  const handleNext = () => {
    submit()
    setShowThanksMessage(true)
  }

  const validUserName = () => {
    if (mTurkUserName.trim().length > 0 && mTurkUserName.trim().match(pattern)) {
      setShowSurvey(true)
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
            Listening Test (Similarity)
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Toolbar/>
        {!showThanksMessage && !showSurvey && <Stack direction="row" spacing={2}>
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
        {!showThanksMessage && showSurvey && <Box sx={{width: '100%'}}>
          <Box margin={2}>
            <SimilarityTest onValueChange={handleUpdateValues}/>
            <Stack sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
              <Box sx={{flex: '1 1 auto'}}/>
              <Button onClick={handleNext}>
                SUBMIT
              </Button>
            </Stack>
          </Box>
        </Box>}
        {showThanksMessage && <Box margin={2}>
          <Image
            src="/thankyou.jpg"
            width={400}
            height={600}
            alt="thank_you"
          />
          <Typography sx={{mt: 2, mb: 1}}
                      color="common.black">
            Photo by <a href="https://unsplash.com/@calebchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Caleb Chen</a> on <a href="https://unsplash.com/s/photos/thank-you?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </Typography>
          <Typography sx={{mt: 2, mb: 1}}
                      variant="h2"
                      color="common.black">
            Your survey code: {surveyCode}
          </Typography>
        </Box>}
      </Container>
    </Box>

  )
}

export default Native

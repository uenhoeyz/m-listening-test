import { Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { audio_files } from '../../helper/constants'
import SimilaritySampleSet from './SimilaritySampleSet'

const divStyle = {
  color: 'red',
}

const SimilarityTest = () => {
  const [files, setFiles] = useState<string[]>([])
  
  useEffect(() => {
    const numbers = getRandomNNumbers(audio_files.length, 10)
    const random_files = numbers.map(index => audio_files[index])
    setFiles(random_files)
  }, [])
  
  return (
    <Stack spacing={2}>
      <Typography
        sx={{mt: 2, mb: 1}}
        variant="h3"
        color="common.black"
      >Listening Test (Similarity)</Typography>
      <Typography sx={{mt: 2, mb: 1}} color="common.black">
        This experiment aims to evaluate the speaker similarity of converted samples. Please listen to the target speech first, and then choose how do you feel about the similarity between it and
        the target speech.<br/>
        <div style={divStyle}>!! IMPORTANT !!</div>
        <div style={divStyle}>Please Ignore The Speech Content, Only Pay Attention to The Speaker Identity.</div>
        <div style={divStyle}>Please ignore the quality of converted speech, just feel how do you think the speech samples are from the same speaker.</div>
      </Typography>
      <Divider/>
      {files.map(file => <SimilaritySampleSet key={file} file_name={file}/>)}
    </Stack>
  )
}

export default SimilarityTest

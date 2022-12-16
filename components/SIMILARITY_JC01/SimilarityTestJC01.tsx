import { Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { File, jc01_audio_files, jc01_models, jc01_mos_models, Value } from '../../helper/constants'
import SimilaritySampleSetJC01 from './SimilaritySampleSetJC01'

const divStyle = {
  color: 'red',
}

interface Props {
  onValueChange: (fileValues: File[]) => void
}

const SimilarityTestJC01 = ({onValueChange}: Props) => {
  const [files, setFiles] = useState<string[]>([])
  const [fileValues, setFileValues] = useState<File[]>([])

  useEffect(() => {
    const numbers = getRandomNNumbers(jc01_audio_files.length, 10)
    const random_files = numbers.map(index => jc01_audio_files[index])
    setFiles(random_files)
    const initFileValues = random_files.map(file => {
      const values: Value[] = jc01_mos_models.map(model => ({
        m: model,
        v: 'Same, Absolutely Sure',
      }))
      const fileValue: File = {
        f: file,
        v: values,
      }
      return fileValue
    })
    setFileValues(initFileValues)
    onValueChange(initFileValues)
  }, [])

  const handleValueChange = (filename: string, values: Value[]) => {
    const updatedFileValues = fileValues.map(fileValue => {
      if (fileValue.f === filename) {
        return {
          f: filename,
          v: values,
        }
      }
      return fileValue
    })
    setFileValues(updatedFileValues)
    onValueChange(updatedFileValues)
  }

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
      {files.map(file => <SimilaritySampleSetJC01
        key={file}
        file_name={file}
        onValueChange={(values: Value[]) => handleValueChange(file, values)}
      />)}
    </Stack>
  )
}

export default SimilarityTestJC01

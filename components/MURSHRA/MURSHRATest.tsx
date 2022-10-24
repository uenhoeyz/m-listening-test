import { Divider, Stack, Typography } from '@mui/material'
import MURSHRASampleSet from './MURSHRASampleSet'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { audio_files, File, models, Value } from '../../helper/constants'

const divStyle = {
  color: 'blue',
}

interface Props {
  onValueChange: (fileValues: File[]) => void
}

const MURSHRATest = ({onValueChange}: Props) => {
  const [files, setFiles] = useState<string[]>([])
  const [fileValues, setFileValues] = useState<File[]>([])

  useEffect(() => {
    const numbers = getRandomNNumbers(audio_files.length, 10)
    const random_files = numbers.map(index => audio_files[index])
    setFiles(random_files)
    const initFileValues = random_files.map(file => {
      const values: Value[] = models.map(model => ({
        m: model,
        v: '50',
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
      >Listening Test (Naturalness)</Typography>
      <Typography sx={{mt: 2, mb: 1}} color="common.black">
        For each audio, please help to give your <span style={divStyle}>MUSHRA (MUltiple Stimuli with Hidden Reference and Anchor)</span> to
        it. The
        MUSHRA score is expressed as a single rational number, typically in the range 0-100, shown in below:<br/>
        [80 - 100] - Excellent. Like face-to-face conversation or radio reception.<br/>
        [60 - 80] - Good. Imperfection can be perceived, but sound still clear.<br/>
        [40 - 60] - Fair.<br/>
        [20 - 40] - Poor. Nearly impossible to communicate.<br/>
        [0- 20] - Bad. Impossible to communicate.<br/>
      </Typography>
      <Divider/>
      {files.map(file => <MURSHRASampleSet
        key={file}
        file_name={file}
        onValueChange={(values: Value[]) => handleValueChange(file, values)}
      />)}
    </Stack>
  )
}

export default MURSHRATest

import { Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { audio_files, models_native, File, Value } from '../../helper/constants'
import NativeSampleSet from './NativeSampleSet'

interface Props {
  onValueChange: (fileValues: File[]) => void
}

const NativeTest = ({onValueChange}: Props) => {
  const [files, setFiles] = useState<string[]>([])
  const [fileValues, setFileValues] = useState<File[]>([])

  useEffect(() => {
    const numbers = getRandomNNumbers(audio_files.length, 10)
    const random_files = numbers.map(index => audio_files[index])
    setFiles(random_files)
    const initFileValues = random_files.map(file => {
      const values: Value[] = models_native.map(model => ({
        m: model,
        v: '5',
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
      >Listening Test (Accent Level)</Typography>
      <Typography sx={{mt: 2, mb: 1}} color="common.black">
        Please listen to the audio samples and choose whether it is spoken by a native English speaker. The score is
        between 1 - 9. Here we define the American English as the NATIVE accent.
        <br/><br/>
        -- 1 Indicates it&#39;s definitely from a native speaker<br/>
        -- 9 means it&#39;s a foreigner talking for sure
        <br/><br/>
        You can choose any value between 1 - 9
      </Typography>
      <Divider/>
      {files.map(file => <NativeSampleSet
        key={file}
        file_name={file}
        onValueChange={(values: Value[]) => handleValueChange(file, values)}
      />)}
    </Stack>
  )
}

export default NativeTest

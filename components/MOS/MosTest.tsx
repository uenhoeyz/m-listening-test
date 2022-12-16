import { Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { audio_files, models_native, File, Value } from '../../helper/constants'
import MosSampleSet from './MosSampleSet'

interface Props {
  onValueChange: (fileValues: File[]) => void
}

const MosTest = ({onValueChange}: Props) => {
  const [files, setFiles] = useState<string[]>([])
  const [fileValues, setFileValues] = useState<File[]>([])

  useEffect(() => {
    const numbers = getRandomNNumbers(audio_files.length, 10)
    const random_files = numbers.map(index => audio_files[index])
    setFiles(random_files)
    const initFileValues = random_files.map(file => {
      const values: Value[] = models_native.map(model => ({
        m: model,
        v: '3',
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
      >Listening Test</Typography>
      <Typography sx={{mt: 2, mb: 1}} color="common.black">
        For each audio, please help to give your <b>MOS (mean opinion score)</b> to it. The MOS is expressed as a single rational number, typically in the range 1-5, shown in below:
        <br/><br/>
        5 - Excellent. Like face-to-face conversation or radio reception.
        4 - Good. Imperfections can be perceived, but sound still clear.
        3 - Fair.
        2 - Poor. Nearly impossible to communicate.
        1 - Bad. Impossible to communicate.
        <br/><br/>
        The values do not need to be whole numbers. For example, a value of 4.0 to 4.5 is referred to as toll-quality and causes complete satisfaction.
      </Typography>
      <Divider/>
      {files.map(file => <MosSampleSet
        key={file}
        file_name={file}
        onValueChange={(values: Value[]) => handleValueChange(file, values)}
      />)}
    </Stack>
  )
}

export default MosTest

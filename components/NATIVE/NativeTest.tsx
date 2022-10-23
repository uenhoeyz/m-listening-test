import { Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomNNumbers } from '../../helper/helpers'
import { audio_files } from '../../helper/constants'
import NativeSampleSet from './NativeSampleSet'

const NativeTest = () => {
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
      >Listening Test (Naturalness) 2</Typography>
      <Typography sx={{mt: 2, mb: 1}} color="common.black">
        Please listen to the audio samples and choose whether it is spoken by a native English speaker. The score is
        between
        0 - 10.
        <br/><br/>
        -- 0 Indicates it&#39;s definitely from a native speaker<br/>
        -- 10 means it&#39;s a foreigner talking for sure
        <br/><br/>
        You can choose any value between 0 - 10
      </Typography>
      <Divider/>
      {files.map(file => <NativeSampleSet key={file} file_name={file}/>)}
    </Stack>
  )
}

export default NativeTest

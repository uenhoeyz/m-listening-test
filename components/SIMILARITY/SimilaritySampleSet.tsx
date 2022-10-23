import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimilaritySample from './SimilaritySample'

interface Props {
  file_name: string
}

const SimilaritySampleSet = ({file_name}: Props) => {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    const files = [
      '/icassp2023/target/' + file_name,
      '/icassp2023/TTS/' + file_name,
    ]
    setFiles(files)
  }, [])

  return (
    <Stack spacing={4}>
      {files.map((file, index) => {
        return <SimilaritySample key={index}
                                 sample_index={'A'}
                                 audio_src={file}
                                 is_reference={index === 0}
        />
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default SimilaritySampleSet

import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { models_native } from '../../helper/constants'
import { shuffle } from '../../helper/helpers'
import NativeSample from './NativeSample'

interface Props {
  file_name: string
}

const NativeSampleSet = ({file_name}: Props) => {
  const index_arr = ['A', 'B', 'C', 'D', 'E', 'F']
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    const models_copy: string[] = [...models_native]
    const models_shuffel: string[] = shuffle(models_copy)
    const files = models_shuffel.map(model => '/icassp2023/' + model + '/' + file_name)
    setFiles(files)
  }, [])
  
  return (
    <Stack spacing={4}>
      {files.map((file, index) => {
        return <NativeSample key={index_arr[index]}
                             sample_index={index_arr[index]}
                             audio_src={file}/>
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default NativeSampleSet

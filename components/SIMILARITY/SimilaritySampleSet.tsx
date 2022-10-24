import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimilaritySample from './SimilaritySample'
import { Value } from '../../helper/constants'

interface Props {
  file_name: string,
  onValueChange: (values: Value[]) => void
}

const SimilaritySampleSet = ({file_name, onValueChange}: Props) => {
  const [ms, setMs] = useState<string[]>([])
  const [values, setValues] = useState<Value[]>([])

  useEffect(() => {
    const models = ['target', 'TTS']
    setMs(models)
    const vs = ['TTS'].map(model => (
      {
        m: model,
        v: 'Same, Absolutely Sure'
      }
    ))
    setValues(vs)
  }, [])

  const handleValueUpdate = (value: string, model: string) => {
    const vs = values.map(v => {
      if (v.m === model) {
        return {
          m: model,
          v: value
        }
      }
      return v
    })
    setValues(vs)
    onValueChange(vs)
  }

  return (
    <Stack spacing={4}>
      {ms.map((model, index) => {
        return <SimilaritySample key={index}
                                 sample_index={'A'}
                                 audio_src={'/icassp2023/' + model + '/' + file_name}
                                 onValueChange={(value) => handleValueUpdate(value, model)}
                                 is_reference={index === 0}
        />
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default SimilaritySampleSet

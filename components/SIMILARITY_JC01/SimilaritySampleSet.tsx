import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimilaritySample from './SimilaritySample'
import { jc01_models, jc01_mos_models, jc_01_BASE_URL, Value } from '../../helper/constants'

interface Props {
  file_name: string,
  onValueChange: (values: Value[]) => void
}

const SimilaritySampleSet = ({file_name, onValueChange}: Props) => {
  const [ms, setMs] = useState<string[]>([])
  const [values, setValues] = useState<Value[]>([])
  const index_arr = ['A', 'B', 'C', 'D', 'E']

  useEffect(() => {
    setMs(jc01_models)
    const vs = jc01_mos_models.map(model => (
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
                                 sample_index={index_arr[index+1]}
                                 audio_src={jc_01_BASE_URL + model + '/' + file_name}
                                 onValueChange={(value) => handleValueUpdate(value, model)}
                                 is_reference={index === 0}
        />
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default SimilaritySampleSet

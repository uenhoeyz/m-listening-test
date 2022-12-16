import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { jc01_mos_models, jc_01_BASE_URL, Value } from '../../helper/constants'
import { shuffle } from '../../helper/helpers'
import MosSample from './MosSample'

interface Props {
  file_name: string,
  onValueChange: (values: Value[]) => void
}

const MosSampleSet = ({file_name, onValueChange}: Props) => {
  const index_arr = ['A', 'B', 'C', 'D', 'E', 'F']
  const [ms, setMs] = useState<string[]>([])
  const [values, setValues] = useState<Value[]>([])

  useEffect(() => {
    const models_copy: string[] = [...jc01_mos_models]
    const models_shuffle: string[] = shuffle(models_copy)

    setMs(models_shuffle)
    const vs = models_shuffle.map(model => (
      {
        m: model,
        v: '3'
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
        return <MosSample key={index_arr[index]}
                          sample_index={index_arr[index]}
                          audio_src={jc_01_BASE_URL + model + '/' + file_name}
                          onValueChange={(value) => handleValueUpdate(value, model)}/>
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default MosSampleSet

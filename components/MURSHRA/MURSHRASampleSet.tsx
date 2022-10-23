import MURSHRASample from './MURSHRASample'
import { Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { models, Value } from '../../helper/constants'
import { shuffle } from '../../helper/helpers'


interface Props {
  file_name: string,
  onValueChange: (values: Value[]) => void
}

const MURSHRASampleSet = ({file_name, onValueChange}: Props) => {
  const index_arr = ['A', 'B', 'C', 'D', 'E']
  const [ms, setMs] = useState<string[]>([])
  const [values, setValues] = useState<Value[]>([])

  useEffect(() => {
    const models_copy: string[] = [...models]
    const models_shuffel: string[] = shuffle(models_copy)
    setMs(models_shuffel)
    const vs = models_shuffel.map(model => (
      {
        m: model,
        v: '50'
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
        return <MURSHRASample key={index_arr[index]}
                              sample_index={index_arr[index]}
                              audio_src={'/icassp2023/' + model + '/' + file_name}
                              onValueChange={(value) => handleValueUpdate(value, model)}
        />
      })}
      <Divider sx={{borderBottomWidth: 5}}/>
    </Stack>
  )
}

export default MURSHRASampleSet

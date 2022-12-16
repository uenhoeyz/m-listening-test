import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
  audio_src: string,
  sample_index: string,
  is_reference: boolean,
  onValueChange: (value: string) => void
}

const options = [
  'Same, Absolutely Sure',
  'Same, Not Sure',
  'Different, Not Sure',
  'Different, Absolutely Sure'
]

const SimilaritySampleJC01 = ({audio_src, sample_index, is_reference, onValueChange}: Props) => {
  const [score, setScore] = useState<string>(options[0])

  const handleChange = (event: SelectChangeEvent) => {
    setScore(event.target.value as string)
    onValueChange(event.target.value as string)
  }

  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6"
                  sx={{mt: 2, mb: 1}}
                  color="common.black"
                  width={200}
      >{is_reference ? 'Reference Speech' : 'Generated Sample ' + sample_index}</Typography>
      <audio
        controls
        controlsList="nodownload"
        src={audio_src}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      {!is_reference &&
          <Select
            inputProps={{
              name: 'similarity',
              id: 'similarity-select',
            }}
            value={score}
            onChange={handleChange}
          >
            {options.map(text => <MenuItem key={text} value={text}>{text}</MenuItem>)}
          </Select>}
    </Stack>
  )
}

export default SimilaritySampleJC01

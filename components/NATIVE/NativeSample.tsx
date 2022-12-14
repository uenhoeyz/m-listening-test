import { Box, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
  audio_src: string,
  sample_index: string,
  onValueChange: (value: string) => void
}

const marks = [
  {
    value: 1,
    label: 'No Foreign Accent',
  },
  {
    value: 9,
    label: 'Heavy Foreigner Accent',
  },
]

const NativeSample = ({audio_src, sample_index, onValueChange}: Props) => {
  const [score, setScore] = useState<number>(5)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setScore(newValue as number)
    onValueChange((newValue as number) + '')
  }

  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6"
                  sx={{mt: 2, mb: 1}}
                  color="common.black">Sample {sample_index}</Typography>
      <audio
        controls
        controlsList="nodownload"
        src={audio_src}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <Box sx={{width: 500}} pl={10}>
        <Slider
          aria-label="accent"
          defaultValue={5}
          valueLabelDisplay="on"
          marks={marks}
          step={1}
          min={1}
          max={9}
          onChange={handleChange}
        />
      </Box>
    </Stack>
  )
}

export default NativeSample
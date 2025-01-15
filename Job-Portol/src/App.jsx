import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Slider } from '@mantine/core';


export default function App(){
  return (
    <MantineProvider>
      <h1 className="text-3xl text-red-500  font-bold underline">
        Hello world!
      </h1>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </MantineProvider>
);
}
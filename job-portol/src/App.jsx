import './css/App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Chip } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-blue-500 font-bold underline">
        Hello world!
      </h1>
      <Chip defaultChecked>Awesome chip</Chip>
    </MantineProvider>
  );
}

export default App;

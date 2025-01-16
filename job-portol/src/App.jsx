import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-red-500 font-bold underline">
      Hello world!
    </h1>

    </MantineProvider>
  );
}

export default App;

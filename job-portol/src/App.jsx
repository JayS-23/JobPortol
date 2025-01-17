import './css/index.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Chip } from '@mantine/core';
import Header from './components/header';

function App() {
  return (
    <MantineProvider>
      <Header/>
    </MantineProvider>
  );
}

export default App;

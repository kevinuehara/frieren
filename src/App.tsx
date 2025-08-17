import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Tag } from './components/Tag';

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Input placeholder="teste" />
      <Card>
        <h1>Card 1</h1>
      </Card>
      <Tag variant="positive">Tag 1</Tag>
      <Tag variant="error">Tag 1</Tag>
      <Tag variant="attention">Tag 1</Tag>
      <Tag variant="neutral">Tag 1</Tag>
    </>
  );
}

export default App;

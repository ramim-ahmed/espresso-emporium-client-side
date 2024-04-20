import { Button, Flex } from "antd";

export default function App() {
  return (
    <Flex gap="small" wrap="wrap">
      <Button type="primary">Primary Button</Button>
      <Button className="text-white bg-blue-900">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Flex>
  );
}

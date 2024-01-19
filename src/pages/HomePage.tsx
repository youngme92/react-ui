import Accordion from "@/components/Accordion";

export default function HomePage() {
  return (
    // TODO: value 값은 고유한 값이여야하므로, key로 사용하고 header로 보여줄 값은 children으로 보여줘야한다.
    <Accordion>
      <Accordion.Item value="First item1">content1</Accordion.Item>
      <Accordion.Item value="First item2">content2</Accordion.Item>
      <Accordion.Item value="First item3">content3</Accordion.Item>
    </Accordion>
  );
}

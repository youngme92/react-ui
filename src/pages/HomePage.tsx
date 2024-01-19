import ControlledCounter from "@/components/ControlledCounter";
import Counter from "@/components/Counter";
import { useState } from "react";

// import RenderPropsList from "@/components/RenderPropsList";

// const data = [
//   { id: 1, name: "flower", score: 91 },
//   { id: 2, name: "geoji", score: 100 },
//   { id: 3, name: "novell", score: 73 },
//   { id: 4, name: "star", score: 84 },
// ];

export default function HomePage() {
  const [value, setValue] = useState(0);

  const onChnage = function (value: number) {
    if (value > 10 || value < 0) {
      return;
    }
    setValue(value);
  };
  return (
    // <RenderPropsList
    //   dataSource={data}
    //   renderItem={({ name, score }) => (
    //     <div>
    //       <span>{`Name: ${name}, Score: ${score}`}</span>
    //     </div>
    //   )}
    // />
    // <Counter>
    //   <Counter.Button countType="minus" />
    //   <Counter.Input />
    //   <Counter.Button countType="plus" />
    // </Counter>
    <ControlledCounter count={value} onChange={onChnage} />
  );
}

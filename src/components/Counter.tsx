import React, { useState, createContext, useContext } from "react";
// 합성 컴포넌트 패턴(Compound Component Pattern)
interface ICounterContextValue {
  count?: number;
  onChange?: (count: number) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const CounterContext = createContext<ICounterContextValue | undefined>({
  count: 0,
});
// counter
export default function Counter({ children }: { children?: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const onChange = function (value: number) {
    setCount(Number(value));
  };

  const onIncrement = function () {
    setCount((prev) => (prev ? prev + 1 : 1));
  };

  const onDecrement = function () {
    setCount((prev) => (prev ? prev - 1 : -1));
  };

  return (
    <CounterContext.Provider
      value={{ count, onChange, onIncrement, onDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
}
// counter.input
export function Input({ value, ...others }: { value?: number }) {
  const counterContext = useContext(CounterContext);
  const isCompounded = counterContext !== undefined;
  return (
    <input value={isCompounded ? counterContext?.count : value} {...others} />
  );
}
Counter.Input = Input;

// counter.button
export function Button({
  onClick,
  countType = "plus",
  ...others
}: {
  onClick?: React.MouseEventHandler;
  countType: "plus" | "minus";
}) {
  // CounterContext를 사용하여 Counter 관련 로직을 공유
  const counterContext = useContext(CounterContext);
  const isCompounded = counterContext !== undefined;

  const onClickButton = (event: React.MouseEvent<Element, MouseEvent>) => {
    if (isCompounded) {
      if (countType === "plus") {
        counterContext.onIncrement?.();
      } else {
        counterContext.onDecrement?.();
      }
    } else {
      onClick?.(event);
    }
  };

  return (
    <button onClick={onClickButton} {...others}>
      {countType === "plus" ? "+" : "-"}
    </button>
  );
}
Counter.Button = Button;

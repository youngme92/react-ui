import useControlled from "@/hooks/useControlled";
/** ControlledCounter.tsx */
interface ICounterProps {
  count?: number;
  onChange?: (next: number) => void;
}

export default function ControlledCounter({
  count: countProp,
  onChange,
}: ICounterProps) {
  // countState - count 프로퍼티가 들어오면 해당 값 사용, 그렇지 않으면 useState 값 사용
  // setCountState - count 프로퍼티가 들어오면 동작하지 않음
  const [countState, setCountState] = useControlled({
    valueProp: countProp,
    defaultValue: 0,
  });

  const onClickIcrement = function () {
    setCountState((prev) => (prev ? prev + 1 : 1));
    onChange?.(countState ? countState + 1 : 1);
  };

  const onClickDecrement = function () {
    setCountState((prev) => (prev ? prev - 1 : -1));
    onChange?.(countState ? countState - 1 : -1);
  };

  const onChangeInput = function (event) {
    setCountState(Number(event.target.value));
    onChange?.(Number(event.target.value));
  };

  return (
    <div>
      <button onClick={onClickIcrement}>+</button>
      <input value={countProp} onChange={onChangeInput} />
      <button onClick={onClickDecrement}>-</button>
    </div>
  );
}

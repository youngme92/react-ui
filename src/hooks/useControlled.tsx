import React, { useRef, useState, useCallback } from "react";
/** useControlled.ts */
/**
 * 제어 컴포넌트 패턴(Controlled Props Pattern)
 * 프로퍼티(valueProp)가 전달되면 해당 프로퍼티 값을 사용하고,
 * 그렇지 않으면 useState로 내부의 상태를 사용하는 훅
 */

interface IUseControlledArgs<T> {
  valueProp?: T;
  defaultValue?: T;
}

type IUseControlledReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export default function useControlled<T>(
  args: IUseControlledArgs<T> = {}
): IUseControlledReturn<T> {
  const { valueProp, defaultValue } = args;
  const { current: isControlled } = useRef(valueProp !== undefined);

  const [state, setState] = useState<T>(defaultValue as T);

  const value = isControlled ? valueProp : state;
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (newState) => {
      !isControlled && setState(newState);
    },
    []
  );
  return [value as T, setValue];
}

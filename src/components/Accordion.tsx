import React, { useState, useCallback, createContext, useContext } from "react";
// 응집도, 단일 책임, 추상화 개념을 적용하여 컴포넌트를 분리하였다.
// 이렇게 하면 코드의 재사용성이 높아진다.
// 또한, Accordion 컴포넌트를 사용하는 개발자는 Accordion.Item 컴포넌트를 사용할 때
// Accordion 컴포넌트의 구조를 알 필요가 없다.
type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
};

type AccordionContextType = {
  activeValue: string | null;
  setActiveValue: React.Dispatch<React.SetStateAction<string | null>>;
};

interface AccordionProps {
  children: React.ReactNode;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const Accordion = ({ children }: AccordionProps) => {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ activeValue, setActiveValue }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

/**
 *
 * @param value 타이틀은 고유 값이여야 한다.
 * @param children ReactNode 또는 string 가능하다.
 * @returns
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within a Accordion");
  }

  const { activeValue, setActiveValue } = context;
  const isActive = value === activeValue;

  const handleClick = useCallback(() => {
    setActiveValue(isActive ? null : value);
  }, [isActive, value, setActiveValue]);

  return (
    <div>
      <button onClick={handleClick}>{value}</button>
      {isActive && <div>{children}</div>}
    </div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;

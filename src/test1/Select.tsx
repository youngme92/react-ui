import React from "react";
// import DropDown from './DropDown';

interface SelectProps {
  label: string;
  trigger: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function FrameworkSelect() {
  const [framework, setFramework] = React.useState("react");
  const handleChange = (value: string) => {
    setFramework(value);
  };
  return (
    <Select
      label="Frontend Framework"
      trigger={<button>{framework}</button>}
      value={framework}
      onChange={handleChange}
      options={["react", "vue", "angular"]}
    />
  );
}

const Select = ({ label, trigger, value, onChange, options }: SelectProps) => {
  return (
    <div>
      <DropDown label={label} value={value} onChange={onChange}>
        {/* <DropDown.Trigger as={trigger} /> */}
        <DropDown.Menu>
          {options.map((option) => (
            <DropDown.Item key={option} value={option}>
              {option}
            </DropDown.Item>
          ))}
        </DropDown.Menu>
      </DropDown>
    </div>
  );
};

function DropDown({
  children,
  label,
  value,
  onChange,
}: {
  children: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      {children}
    </div>
  );
}

function Trigger({ as: Component }: { as: React.ElementType }) {
  return <Component />;
}

function Menu({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Item({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return <div>{children}</div>;
}

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default Select;

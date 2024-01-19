import { ReactNode } from "react";
// Render Props 패턴 -> IOC (Inversion of Control)
interface IRenderPropsList<T> {
  renderItem?: (data: T) => ReactNode;
  dataSource: Array<T>;
}

export default function RenderPropsList<T>({
  dataSource,
  renderItem,
}: IRenderPropsList<T>) {
  const totalCount = 0;
  return (
    <div>
      <span>List Count: {totalCount}</span>
      <ul>
        {dataSource.map((data, index) => {
          if (renderItem) {
            return <li key={index}>{renderItem(data)}</li>;
          }
          return <li key={index}>{JSON.stringify(data)}</li>;
        })}
      </ul>
    </div>
  );
}

import React from "react";

interface Props<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
  data: T[];
}

interface BasicPerson {
  id: number
}

const GenericList = <T extends BasicPerson>({
  data,
  renderItem,
  keyExtractor
}: Props<T>) => {
  return (
    <div>
      {data.map((item) => (
        <div key={keyExtractor(item)} className="item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default GenericList;

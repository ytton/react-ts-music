import React, { ReactNode, memo } from 'react';

interface IProps {
  children?: ReactNode;
}

const Discovery: React.FC<IProps> = () => {
  return <h1 className="bg-gray-100 rounded-xl p-8">Hello world!</h1>;
};

export default memo(Discovery);

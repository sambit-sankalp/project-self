import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#f7f7fc]">
      <div className="mx-auto w-full px-4 md:max-w-5xl flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export { Container };

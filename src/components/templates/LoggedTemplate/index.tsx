import { ReactNode } from 'react';

interface LoggedTemplateProps {
  children: ReactNode;
}

function LoggedTemplate({ children }: LoggedTemplateProps) {
  return (
    <>
      <h1>LoggedTemplate</h1>
      {children}
    </>
  );
}

export default LoggedTemplate;

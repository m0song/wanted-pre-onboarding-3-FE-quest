import { useRouteError } from 'react-router-dom';

interface Error {
  statusText: string;
  error: {
    message: string;
  };
}

const ErrorPage: React.FC = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Error!</h1>
      <p>{err.statusText}</p>
      <p>{err.error.message}</p>
    </>
  );
};

export default ErrorPage;

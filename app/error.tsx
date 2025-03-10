"use client";

interface IError {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error }: IError) => {
  return <div>Error loading page... {error.message}</div>;
};

export default Error;

import CustomError from "./CustomError";

const Error = ({ statusCode }: any) => {
  return <CustomError statusCode={statusCode} />;
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

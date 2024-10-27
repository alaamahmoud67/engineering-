import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner({ loadingTxt }) {
  return (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span>{` ${loadingTxt} ...` || "Loading..."}</span>
    </>
  );
}


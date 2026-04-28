import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Detail } from "../components/Detail";
import Error from "../components/Error";

export function Component() {
  return <Detail />;
}

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <Error message={`${error.status} ${error.statusText}`} />
  ) : (
    <Error />
  );
}

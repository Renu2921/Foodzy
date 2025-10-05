import React from 'react';
import { useRouteError } from 'react-router';

export default function ErrorPage() {
    const error=useRouteError();
    console.log(error);
  return (
    <div>
      Error Page
      <h1>{error.status}</h1>
      <h3>{error.statusText}</h3>
    </div>
  )
}

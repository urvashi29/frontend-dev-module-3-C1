import React from "react";

const Prospect = React.lazy(() => import("./Post"));
console.log(Prospect); //Post

const SuspensePost = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Prospect />
    </React.Suspense>
  );
};

export default SuspensePost;

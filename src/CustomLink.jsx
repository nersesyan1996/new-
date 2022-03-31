import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";


export default function CustomLink({ children, to,  }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ backgroundColor: match ? "#d2d6d7" : "unset" }}
        to={to}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

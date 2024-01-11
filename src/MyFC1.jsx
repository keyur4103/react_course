import React from "react";
import { Page1, Page2, Page3 } from "./MyFC";
import { UserProvider } from "./Myfunctioncmp";

function choosepage({ page }) {
  const pages = { Page1, Page2, Page3 };
  const Page = pages[page];

  return <Page />;
}

export default function MyFC() {
  const [page, setPage] = React.useState(0);

  return (
    <UserProvider>
      <button onClick={() => setPage(0)} disabled={page === 0}>
        page1
      </button>
      <button onClick={() => setPage(1)} disabled={page === 1}>
        page2
      </button>
      <button onClick={() => setPage(2)} disabled={page === 2}>
        page3
      </button>
      {/* <choosepage page={page} /> */}
    </UserProvider>
  );
}

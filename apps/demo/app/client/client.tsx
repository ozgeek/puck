"use client";

import { Button, Puck, Render } from "@/core";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../config";
import { getPage } from "../../lib/get-page";
import { Config } from "@/core"
import { Data } from "@/core/types/Data"

export async function Client({ path, isEdit }: { path: string; isEdit: boolean }) {
  const data = await getPage(path);
  console.log('data', data, path)

  if (isEdit) {
    return (
      <div>
        <Puck
          config={config as Config}
          data={data as Data}
          onPublish={async (data) => {
              await fetch("/puck/api", {
                  method: "post",
                  body: JSON.stringify({ data, path }),
              });
          }}
          plugins={[headingAnalyzer]}
          headerPath={path}
          overrides={{
            headerActions: ({ children }) => (
              <>
                <div>
                  <Button href={path} newTab variant="secondary">
                    View page
                  </Button>
                </div>

                {children}
              </>
            ),
          }}
        />
      </div>
    );
  }

  if (data && data.content) {
    return <Render config={config as Config} data={data as Data} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;

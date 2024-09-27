import dynamic from "next/dynamic";
import resolvePuckPath from "../../lib/resolve-puck-path";

const Client = dynamic(() => import("./client"), {
  ssr: false,
});

export default async function Page({
  params,
}: {
  params: { framework: string; uuid: string; puckPath: string[] };
}) {
  const { path } = resolvePuckPath(params.puckPath);
  const isEdit = true

  return <Client isEdit={isEdit} path={path} />;
}

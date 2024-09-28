import { getPage } from "../../../lib/get-page";
import {Render} from "@/core/rsc"
import config from "../../../config/index";
import { Config } from "@/core"
import { Data } from "@/core/types/Data"
/*export async function generateStaticParams() {
  console.log('generateStaticParams')
  return [
    { params: { puckPath: ['/']} }
  ]
}*/

export default async function Page({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}) {
  const path = `/${puckPath.join("/")}`;
  console.log(path)
  const data = await getPage(path);
  console.log(data)
  if (!data) {
    console.log('not found')
    return <div>Page not found</div>;
  }
  //sconsole.log(JSON.stringify(config))
  return(<Render config={config as Config} data={data as Data} />)
}

// Force Next.js to produce static pages: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Delete this if you need dynamic rendering, such as access to headers or cookies

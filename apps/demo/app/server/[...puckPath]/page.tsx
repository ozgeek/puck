import { notFound } from "next/navigation";
import { getPage } from "../../../lib/get-page";
import {Render} from "@/core/rsc"
import config from "../../../config/index";
import {NextUIProvider} from "@nextui-org/system";
import { Config } from "@/core"
import { Data } from "@/core/types/Data"
export async function generateStaticParams() {
  console.log('generateStaticParams')
  return [
    { params: { puckPath: ['/']} }
  ]
}

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
    return notFound();
  }
  //sconsole.log(JSON.stringify(config))
  return(<NextUIProvider>
    <Render config={config as Config} data={data as Data} />
  </NextUIProvider>)
}

// Force Next.js to produce static pages: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Delete this if you need dynamic rendering, such as access to headers or cookies

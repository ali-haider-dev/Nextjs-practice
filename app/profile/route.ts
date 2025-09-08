import { headers, cookies } from "next/headers";
import { comments } from "./data";
import { NextRequest } from "next/server";
export const GET = async (request: NextRequest) => {
  const headersList = await headers();
  console.log("headersList", headersList.get("user-agent"));
  const token = request.cookies.get("token")?.value;
  const name = request.cookies.get("name")?.value;
  console.log("token", token);
  console.log("name", name);
  const cookieStore = await cookies();
  cookieStore.set("name", "Ali");
  return new Response("<h1>Profile API Data </h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "token=Ali123" },
  });
};

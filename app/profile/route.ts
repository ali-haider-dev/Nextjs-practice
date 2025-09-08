import { headers } from "next/headers";
import { comments } from "./data";
export const GET = async (request: Request) => {
  return new Response("<h1>Profile API Data </h1>",{headers: { 'Content-Type': 'text/html' }});
};

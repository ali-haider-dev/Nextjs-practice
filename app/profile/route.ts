import { comments } from "./data";
export const GET = async (request: Request) => {
  return new Response(JSON.stringify(comments));
};

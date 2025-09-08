export const dynamic = "force-static"; //caching strategy
export const revalidate = 10; //seconds
export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}

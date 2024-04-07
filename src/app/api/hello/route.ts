export async function GET() {
  const data = {
    message: "Hello",
  };

  return Response.json({ data });
}

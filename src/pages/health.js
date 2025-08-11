export async function GET() {
  return new Response(JSON.stringify({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    message: "API endpoint working from root level"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

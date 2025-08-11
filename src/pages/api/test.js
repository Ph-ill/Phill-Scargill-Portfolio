export async function GET() {
  return new Response(JSON.stringify({ 
    message: "Test API working from JavaScript!", 
    timestamp: new Date().toISOString(),
    type: "JavaScript API endpoint"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

// API endpoint for admin dashboard to get visitor data
export async function GET() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const dataDir = path.join(process.cwd(), 'data');
    const visitorsFile = path.join(dataDir, 'visitors.json');
    
    let visitors = [];
    let totalVisitors = 0;
    let uniqueIPs = new Set();
    let pageViews = 0;
    
    try {
      const data = await fs.readFile(visitorsFile, 'utf-8');
      visitors = JSON.parse(data);
      totalVisitors = visitors.length;
      
      // Calculate statistics
      visitors.forEach((visitor) => {
        uniqueIPs.add(visitor.ip);
        if (visitor.page) pageViews++;
      });
    } catch (error) {
      // File doesn't exist or is empty, start with empty data
      visitors = [];
    }
    
    // Get recent visitors (last 20, newest first)
    const recentVisitors = visitors
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 20);
    
    const responseData = {
      totalVisitors,
      uniqueIPs: uniqueIPs.size,
      pageViews,
      recentVisitors,
      lastUpdated: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error getting visitor data:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to get visitor data',
      totalVisitors: 0,
      uniqueIPs: 0,
      pageViews: 0,
      recentVisitors: [],
      lastUpdated: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(req: Request) {

  // Get Request Arguments
  var {session, businessName, businessType} = await req.json();
  
  if (!session) {
    return Response.json("Unauthorized", { status: 401 });
  }
  if (!businessName) {
    console.log("name not provided");
    return Response.json("Please provide a Business Name!", { status: 400 });
  }
  if (!businessType) {
    console.log("type not provided");
    return Response.json("Please provide a Business Type!", { status: 400 });
  }

  // Create Interface
  var business_interface = `interface Business {
    name: string;
    type: string;
    info: {
      description: string;
      logo: string;
      website: string;
      industry: string;
      founded: number;
      headquarters: string;
      mission: string;
      vision: string;
      values: string[];
    };
  }`;

  // Create Prompt
  var prompt  = `populate a new business with the name: '${businessName}' and type of: '${businessType}'. Use the following interface as a guide: ${business_interface} + IMPORTANT!! ONLY RETURN JSON !!!`;

  // Send Prompt to OpenAI
  const baseUrl = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'
  const completion = await fetch(`${baseUrl}/api/openai/chat`, {
    method: "POST",
    body: JSON.stringify({ 
      prompt: prompt
     }),
  });
  var business_str = await completion.json();

  // Dummmy Test Data
  // var business_str = `{
  //   "name": "One Rock",
  //   "type": "Community Center",
  //   "info": {
  //     "description": "One Rock is a network of",
  //     "logo": "",
  //     "website": "https://www.onerock.com",
  //     "industry": "Service Community Center",
  //     "founded": 2021,
  //     "headquarters": "Acacia CT, Los Angeles, CA, United States, California",
  //     "mission": "Empowering individuals to lead projects and initiatives.",
  //     "vision": "To be an empowering network for individuals to run projects and initiatives.",
  //     "values": ["Customer-centric", "Innovation", "Dedication", "Community", "Empowerment"]
  //   }
  // }`;
  var business_obj = JSON.parse(business_str);

  return Response.json(JSON.stringify(business_obj), { status: 200 });
}

export default async function handler(req,res){
 const {title}=req.body;

 const r=await fetch(
 `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
 {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
   contents:[{parts:[{text:`Generate a viral Instagram caption, 30 hashtags and YouTube description for: ${title}` }]}]
  })
 });

 const data=await r.json();
 res.status(200).json({
  result:data.candidates[0].content.parts[0].text
 });
}
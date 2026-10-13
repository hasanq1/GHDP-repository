import { getDb } from '../../../db';
import { registrations } from '../../../db/schema';
const interests=['Attend the kickoff','Partnership inquiry','Company / organization partnership','Individual partnership','Sponsorship inquiry','Veteran / workforce interest'];
export async function POST(request:Request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Invalid origin'},{status:403});
 if(Number(request.headers.get('content-length')||0)>12000)return Response.json({error:'Too large'},{status:413});
 try{const raw=await request.text();if(raw.length>12000)return Response.json({error:'Too large'},{status:413});const data=JSON.parse(raw);const name=typeof data.name==='string'?data.name.trim():'';const email=typeof data.email==='string'?data.email.trim().toLowerCase():'';const organization=typeof data.organization==='string'?data.organization.trim():'';const message=typeof data.message==='string'?data.message.trim():'';
 if(!name||name.length>120||!/^\S+@\S+\.\S+$/.test(email)||email.length>200||!organization||organization.length>200||!interests.includes(data.interest)||message.length>2000||data.consent!=='yes')return Response.json({error:'Invalid fields'},{status:400});
 await getDb().insert(registrations).values({name,email,organization,interest:data.interest,message});return Response.json({ok:true},{status:201});
 }catch{return Response.json({error:'Unable to save request'},{status:500});}}

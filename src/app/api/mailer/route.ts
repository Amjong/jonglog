import { mailInfo } from './../../util/mailer';
import { sendMail } from '@/app/util/mailer';
import { NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
  if (!request || !request.nextUrl) {
    return new Response(`Error!`);
  }
  let mail = {};
  for (const item of request.nextUrl.searchParams.entries()) {
    mail[item[0]] = item[1];
  }
  return new Response('Success!');
}
export async function POST(request: Request) {
  return new Response(`${request}`);
}

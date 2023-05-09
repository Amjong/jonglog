import { mailInfo } from './../../util/mailer';
import { sendMail } from '@/app/util/mailer';
import { NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
  if (!request || !request.nextUrl) {
    return new Response(`Error!`);
  }
  let mail: mailInfo = {
    from: '',
    to: '',
    subject: '',
    text: '',
  };
  for (const item of request.nextUrl.searchParams.entries()) {
    if (Object.keys(mail).includes(item[0])) {
      mail[item[0]] = item[1];
    }
  }

  await sendMail(mail as mailInfo);

  return new Response('Success!');
}
export async function POST(request: Request) {
  const body = await request.json();
  return sendMail(body as mailInfo)
    .then(() => {
      return new Response(
        JSON.stringify({ message: '메일을 성공적으로 보냈음' }),
        {
          status: 200,
        }
      );
    })
    .catch((error) => {
      console.log(error);
      return new Response(
        JSON.stringify({ message: '메일 전송에 실패했습니다' }),
        { status: 500 }
      );
    });
}

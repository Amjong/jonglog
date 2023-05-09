import { mailInfo } from './mailer';

export async function requestEmail(mail: mailInfo) {
  const res = await fetch('/api/mailer', {
    method: 'POST',
    body: JSON.stringify(mail),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }
  return data;
}

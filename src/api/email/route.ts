import {Resend} from 'resend'
import Templatetwo from '../../emails/Templatetwo'
//import {NextResponse} from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const {firstName} = await request.json()

await resend.emails.send({
  from: 'you@example.com',
  to: 'wokeupbored@gmail.com',
  subject: 'hello world',
  react: Templatetwo ({
    firstName
  })

});

} 
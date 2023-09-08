import React from 'react'
import { Button } from '@react-email/button';
import { Tailwind } from '@react-email/tailwind';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Html } from '@react-email/html';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';




export default function temp() {
  return (


    <Html>

<Button
        href="https://example.com"
        style={{ background: '#06D6A0', color: '#8A89C0', width: 50 }}
      >
        fuck
      </Button>


      <Head style={{color:'#8A89C0'}}>
      <title style={head}>My email title</title>
    </Head>



<Container>


<Head>
      <title style={head}>My email title</title>
    </Head>


<Button
        href="https://example.com"
        style={{ background: '#06D6A0', color: '#8A89C0', width: 50 }}
      >
        fuck
      </Button>








</Container>



    </Html>
  )
}




const head = {

  fontSize: 30,
   color: "white"
}
import * as React from 'react';
import { Button } from '@react-email/button';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Container } from '@react-email/container';

export function MyTemplate(props) {
  return (
    <Html lang="en">

        <Container>
      <Text style={{color:'#06D6A0'}}>Some title</Text>
      <Hr />
      <Button href="https://example.com">Click me</Button>

      </Container>
      
    </Html>
  );
}

export default MyTemplate;
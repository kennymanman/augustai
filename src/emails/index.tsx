import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Button
      className=''
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#06D6A0', color: '#fff' }}
      >
        Click me
      </Button>
    </Html>
  );
}

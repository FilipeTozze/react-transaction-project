import React from 'react';

import { Container, Label, Value } from './styles';

function LabelValue({label, value}) {
  
  return (
      <Container>
          <Label>
            {label}
          </Label>
          <Value>
            {value}
          </Value>
      </Container>
  );
}

export default LabelValue;
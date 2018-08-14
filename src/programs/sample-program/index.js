/**
 * index
 **/
import React from 'react';
import {Content, Block} from 'htmplar';

let message = 'Hello World!'

const SampleTemplate = () => {
  return (
      <Content name="Sample Template">
          <Block>
            {message}
          </Block>
      </Content>
  )
}

export default SampleTemplate;
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {
    Container
} from "./styles"

const Loading = () => (
  <Container>
    <ActivityIndicator size="large" color="#FF6601" />
  </Container>
);

export default Loading;
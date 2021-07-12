import React from "react";
import { Appbar } from "react-native-paper";
import styled from "styled-components/native";

const AppBarContainer = styled(Appbar)`
  position: "absolute";
  left: 0;
  right: 0;
  bottom: 0;
`;

export const WelcomeScreen = () => {
  return (
    <AppBarContainer>
      <Appbar.Content title="ReactNativeTemplate" />
    </AppBarContainer>
  );
};

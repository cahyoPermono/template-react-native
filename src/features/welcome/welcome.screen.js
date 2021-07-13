import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";

// Example using styled component
const TextContainer = styled(View)`
  flex: 1;
  ${({ colors }) => `background-color: ${colors.background};`};
  align-items: center;
  justify-content: center;
`;

export const WelcomeScreen = () => {
  const { colors } = useTheme();
  return (
    <>
      <TextContainer colors={colors}>
        <Text variant="caption">
          {" "}
          some text in the middle center of the screen{" "}
        </Text>
      </TextContainer>
    </>
  );
};

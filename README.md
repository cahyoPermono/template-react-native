# template-react-native

Template For React Native Project

# Next Step

- adding context styled themes

# How to import google font

## Step 1

expo install @expo-google-fonts/`familyname`

expo install @expo-google-fonts/oswald
expo install @expo-google-fonts/lato

## Step 2

import it in app.js

> Only list weight that you need

```javascript
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const [oswaldLoaded] = useOswald({
  Oswald_400Regular,
});

const [latoLoaded] = useLato({
  Lato_400Regular,
});

if (!oswaldLoaded || !latoLoaded) {
  return null;
}
```

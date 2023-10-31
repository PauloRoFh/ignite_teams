import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {Groups} from '@screens/groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}

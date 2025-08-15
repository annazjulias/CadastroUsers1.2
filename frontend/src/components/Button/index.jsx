import { Button } from "./styles";

function DefalButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}

export default DefalButton;

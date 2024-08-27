declare module "react-toggle" {
  import * as React from "react";

  interface ToggleProps {
    defaultChecked?: boolean;
    icons?: boolean | { checked: React.ReactNode; unchecked: React.ReactNode };
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    id?: string;
  }

  const Toggle: React.FC<ToggleProps>;

  export default Toggle;
}

import { ButtonBase } from "@mui/material";

const Button = ({ action, children, disabled}) => {
  return (
    <ButtonBase
      disabled={disabled}
      data-action={action}
    
      sx={{
        color: "white",
        backgroundColor: "#f8a31e",
        height: "30px",
        width: "30px",
        cursor: "pointer",
        boxShadow: "0px 0px 3px 1px",
        borderRadius: "7px",
        fontSize: "40px",
        
      }}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;

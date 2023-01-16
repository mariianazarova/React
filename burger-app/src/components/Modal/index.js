import { useState } from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { ImageStyled } from "../Main/Controls/ItemControl";
import { useFormik } from "formik";
import * as yup from "yup";


const CheckoutModal = ({
  isOpen,
  closeCheckoutModal,
  orderSummary,
  orderPrice,
  handleFastDeliveryChange,
  burgerIngredients,
  clearBurger,
  totalPrice,
  t,
}) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderCreateStatus, setOrderCreateStatus] = useState(false);

  const handleChange = (event) => {
    handleFastDeliveryChange(event.target.checked);
    setChecked(event.target.checked);
  };

  //const burgerIngredients = Object.entries(orderSummary).filter(
  //  (product) => product[1] > 0
  //);

  const createData = (name, qty) => {
    return { name, qty };
  };

  //const rows = burgerIngredients.map((ingredient) =>
  // createData(ingredient[0], ingredient[1])
  // );

  const handleOrder = async (data) => {
    

    try {
      setLoading(true);
      //await createOrder(orderData);
      setLoading(false);
      setOrderCreateStatus(true);
      clearBurger();
    } catch (error) {
      setLoading(false);
      console.error(error);
      setOrderCreateStatus(false);
      clearBurger();
    }
  };
  const validationSchema = yup.object({
    orderPhone: yup
      .string("Enter your phone")
      .required("Phone is required"),
    orderAddress: yup
      .string("Enter your address")
      .required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      orderName:"",
      orderPhone:"",
      orderEmail:"",
      orderFast: false,
      orderAddress:"",
      orderProducts: {},
      orderPrice:"",
      
          },
    validationSchema: validationSchema,
    onSubmit: (values) => {
         const noneZeroBurgerIngredients = Object.fromEntries(Object 
        .entries(burgerIngredients) 
        .filter(([k, v]) => v !== 0) 
    );
      values.orderProducts={...noneZeroBurgerIngredients};
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              textAlign="center"
              fontFamily="Original Burger Font"
              textTransform="uppercase"
              fontSize="32px"
              variant="h6"
              gutterBottom
            >
              Order
            </Typography>
          </Grid>

          {Object.entries(burgerIngredients)
            .filter(([ingredient, count]) => count > 0)
            .map(([ingredient, count]) => {
              return (
                <Grid
                  item
                  xs={12}
                  display="flex"
                  direction="row"
                  justifyContent="space-between"
                  fontSize="18px"
                  fontWeight="700"
                >
                  <ImageStyled
                    key={ingredient}
                    src={require(`../../assets/ingredients/${ingredient}.png`)}
                    alt={ingredient}
                  />
                  {count}
                </Grid>
              );
            })}
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              
              id="orderPhone"
              name="orderPhone"
              label="Phone*"
              fullWidth
              autoComplete="phone"
              variant="standard"
              value={formik.values.orderPhone}
              onChange={formik.handleChange}
              error={formik.touched.orderPhone && Boolean(formik.errors.orderPhone)}
              helperText={formik.touched.orderPhone && formik.errors.orderPhone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              id="orderAddress"
              name="orderAddress"
              label="Address*"
              fullWidth
              autoComplete="shipping address"
              variant="standard"
              value={formik.values.orderAddress}
              onChange={formik.handleChange}
              error={formik.touched.orderAddress && Boolean(formik.errors.orderAddress)}
              helperText={formik.touched.orderAddress && formik.errors.orderAddress}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="saveAddress" value="yes" />}
              label="Quick delivery ($ 2.5 )"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              textAlign="left"
              fontSize="24px"
              variant="h6"
              gutterBottom
            >
              Total price: {totalPrice} ₴
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            direction="row"
            justifyContent="center"
            gap="20px"
          >
                      
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: "#F7C223",
                display: "flex",
                justifyContent: "center",
                width: "160px",
                height: "50px",
                fontFamily: "Original Burger Font",
                textTransform: "uppercase",
                color: "#3a3a3a",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Order
            </Button>
            <Button
              onClick={() => {
                closeCheckoutModal();
                formik.handleReset();
              }}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                width: "160px",
                height: "50px",
                fontFamily: "Original Burger Font",
                textTransform: "uppercase",
                color: "#3a3a3a",
                border: "1px solid #1565C0",
                fontSize: "20px",
                marginTop: "20px",
                boxShadow: "none",
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;

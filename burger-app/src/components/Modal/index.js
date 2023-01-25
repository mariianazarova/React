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
import * as React from "react";
import axios from "axios";

const CheckoutModal = ({
  isOpen,
  closeCheckoutModal,
  openOrderPostRequestModal,
  orderSummary,
  orderPrice,
  handleFastDeliveryChange,
  burgerIngredients,
  clearBurger,
  totalPrice,
  orderFast,
}) => {
  const [checked, setChecked] = React.useState(false);

  const addExtraCostIfOrderFast = () =>
    (+totalPrice + (checked ? 2.5 : 0)).toFixed(2);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const validationSchema = yup.object({
    orderName: yup
      .string("Enter your name")
      .required("Name is required"),
    orderPhone: yup
      .string("Enter your phone").required("Phone is required"),
    orderEmail: yup
      .string("Enter your email").required("Email is required"),
    orderAddress: yup
      .string("Enter your address")
      .required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      orderName: "",
      orderPhone: "",
      orderEmail: "",
      orderFast: false,
      orderAddress: "",
      orderProducts: {},
      orderPrice: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const noneZeroBurgerIngredients = Object.fromEntries(
        Object.entries(burgerIngredients).filter(([k, v]) => v !== 0)
      );
      values.orderPrice = totalPrice;
      values.orderProducts = { ...noneZeroBurgerIngredients };
      values.orderFast = checked;
      values.orderPrice = String(addExtraCostIfOrderFast());
     

      try {
        await axios.post("https://burger-api-xcwp.onrender.com/orders", values);
        openOrderPostRequestModal(
          "Thanks for your order! Our manager will contact you shortly!"
        );
      } catch (error) {
        console.log(error);
        openOrderPostRequestModal("Oops, something is wrong!");
      } finally {
        closeCheckoutModal();
      }
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
                id="orderName"
                name="orderName"
                label="First name*"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={formik.values.orderName}
                onChange={formik.handleChange}
                error={
                  formik.touched.orderName && Boolean(formik.errors.orderName)
                }
                helperText={formik.touched.orderName && formik.errors.orderName}
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
                error={
                  formik.touched.orderPhone && Boolean(formik.errors.orderPhone)
                }
                helperText={
                  formik.touched.orderPhone && formik.errors.orderPhone
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="orderEmail"
                name="orderEmail"
                label="Email*"
                fullWidth
                autoComplete="email"
                variant="standard"
                value={formik.values.orderEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.orderEmail && Boolean(formik.errors.orderEmail)
                }
                helperText={
                  formik.touched.orderEmail && formik.errors.orderEmail
                }
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
                error={
                  formik.touched.orderAddress &&
                  Boolean(formik.errors.orderAddress)
                }
                helperText={
                  formik.touched.orderAddress && formik.errors.orderAddress
                }
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="quickDelivery"
                    value="yes"
                    checked={checked}
                    onChange={handleChange}
                  />
                }
                label="Quick delivery ( 2.5 ₴ )"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                textAlign="left"
                fontSize="24px"
                variant="h6"
                gutterBottom
              >
                Total price: {addExtraCostIfOrderFast()} ₴
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

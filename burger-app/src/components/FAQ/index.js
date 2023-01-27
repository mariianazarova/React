import styled from "styled-components";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faq = () => {
  return (
    <FaqStyled>
      <TitleFaqStyled>FAQ</TitleFaqStyled>
      <Accordion
        sx={{
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#f7c223",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#3a3a3a",
            color: "#ffffff",
          }}
        >
          <Typography>Why can't I add 12 ingredients to the burger?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can't add 12 ingredients to the burger because you can add a
            maximum of 10 ingredients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#f7c223",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#3a3a3a",
            color: "#ffffff",
          }}
        >
          <Typography>How long does fast delivery take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fast delivery time depends on the district of the city where you
            live and it is individual.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#f7c223",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#3a3a3a",
            color: "#ffffff",
          }}
        >
          <Typography>
            Can I add my individual ingredient to the burger?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we can create an individual burger, then its price will be
            individual, you can contact us for this through Contact.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#f7c223",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#3a3a3a",
            color: "#ffffff",
          }}
        >
          <Typography>Will you open in other cities?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes, we will open in other cities soon.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "#f7c223",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#3a3a3a",
            color: "#ffffff",
          }}
        >
          <Typography>How can I pay for an order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can pay in cash upon delivery or through the terminal at the
            courier.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </FaqStyled>
  );
};

const FaqStyled = styled.div({
  width: "50%",
  margin: "0 auto",
});

const TitleFaqStyled = styled.h2({
  textAlign: "center",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  color: "#f7c223",
  marginBottom: "20px",
});
export default Faq;

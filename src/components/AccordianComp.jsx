import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const AccordianComp = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <Accordion
      sx={{ boxShadow: "none", color: "black" }}
      expanded={expanded === props.id}
      onChange={handleChange(props.id)}
    >
      <AccordionSummary expandIcon={<PlayArrowRoundedIcon/>}>
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "#f2f2f2" }}>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianComp;

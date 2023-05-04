import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { GET_TYPE } from "@/redux/reducer/products";
export default function Accordio({ elm }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Accordion className="cursor-pointer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{elm.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {elm?.suncatagory?.map((item) => (
            <Typography
              className=" p-3"
              onClick={() => dispatch(GET_TYPE(item.title))}
            >
              {item.title}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import CancelIcon from "@mui/icons-material/Cancel";
import Drawers from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART } from "@/redux/reducer/addtocart";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Modals({ elm }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(open, "open");
  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Detail View
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* <Item>
          <CancelIcon open={open} onClick={() => handleClose()} />
        </Item> */}
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item
                  sx={{
                    color: "red",
                    marginTop: "50px",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src={elm?.img}
                      height={200}
                      width={200}
                      className="object-contain"
                      alt="pics"
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "start",
                      color: "#00493B",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {elm?.type}
                  </Typography>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "start", color: "#6B7280" }}
                  >
                    1.5lb
                  </Typography>
                  <Typography
                    id="transition-modal-description"
                    sx={{ mt: 2, textAlign: "start" }}
                  >
                    The swordfish meat has a very delicate flavour, meaty and
                    mild. Swordfish, also known as broadbills, is an oily fish
                    similar to tuna, chunky meat with...
                  </Typography>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      marginTop: "30px",
                      textAlign: "start",
                      color: "#009F7F",
                    }}
                  >
                    {elm?.price}$
                    <del className="text-gray-500 ml-3  text-sm">150$</del>
                  </Typography>
                  <Button
                    sx={{ background: " #009F7F" }}
                    onClick={() => dispatch(ADDTOCART(elm))}
                  >
                    Add to cart
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

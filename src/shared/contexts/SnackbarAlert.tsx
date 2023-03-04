// import React from "react";
// import Stack from "@mui/material/Stack";
// import Snackbar from "@mui/material/Snackbar";
// import { Alert } from "@mui/material";

// interface SnackbarProps {
//   open: boolean;
//   severity: "error" | "success" | "info";
//   message: string;
// }
// const SnackbarContext = () => {
//   React.createContext({} as SnackbarProps);
// };
// export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [open, setOpen] = React.useState<boolean>(false);
// };

// export const SnackbarAlert: React.FC<SnackbarProps> = ({
//   severity,
//   message,
// }) => {
//   const [open, setOpen] = React.useState<boolean>(false);

//   const handleSnack = () => {
//     setOpen(true);
//   };
//   const handleClose = (
//     event?: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: "100%" }}>
//       <Snackbar
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message={"erro"}
//       >
//         <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
//           {message}
//         </Alert>
//       </Snackbar>
//       {/* <Alert severity="error">This is an error message!</Alert> */}
//     </Stack>
//   );
// };

export {};

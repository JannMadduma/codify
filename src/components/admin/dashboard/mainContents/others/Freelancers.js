// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";

// const styles = (theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 700,
//   },
// });

// let id = 0;
// function createData(name, Name, Email, Status, Actions) {
//   id += 1;
//   return { id, name, Name, Email, Status, Actions };
// }

// const rows = [
//   createData(1, "Ton Salingua", "ton@gmail.com", "Active"),
//   createData(2, "Jann Frauline", "jann@gmail.com", "Active"),
//   createData(3, "Russel Moon", "russel@gmail.com", "Active"),
// ];

// function Freelancers(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell align="center">Name</TableCell>
//             <TableCell align="center">Email</TableCell>
//             <TableCell align="center">Status</TableCell>
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="center">{row.Name}</TableCell>
//               <TableCell align="center">{row.Email}</TableCell>
//               <TableCell align="center">{row.Status}</TableCell>
//               <TableCell align="center">
//                 <Button>
//                   <VisibilityIcon />
//                 </Button>
//                 <Button>
//                   <EditIcon />
//                 </Button>
//                 <Button>
//                   <DeleteIcon />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// Freelancers.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Freelancers);

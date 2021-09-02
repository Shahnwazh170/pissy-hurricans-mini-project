// import "./App.css";
// import Home from "./Home";
// import About from "./About";
// import { Link, Route, BrowserRouter as Router , Switch } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <h2>Welcome to React Router Tutorial</h2>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//               <ul className="navbar-nav mr-auto">
//                 <li>
//                   <Link to={"/"} className="nav-link">
//                     Home
//                   </Link>
//                 </li>

//                 <li>
//                   <Link to={"/about"} className="nav-link">
//                     About
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <hr />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/about" component={About} />
//             </Switch>
//           </div>
//         </header>
//       </div>
//     </Router>
//   );
// };

// export default App;


import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import About from "./About";
import Registration from "./Registration";
import { Link, Route, BrowserRouter as Router , Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import { createTheme } from '@material-ui/core/styles';

// function
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Sharma', firstName: 'Amit', age: 35 },
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" href="/" className={classes.menuButton} color="inherit" aria-label="menu">
<AccountBalanceTwoToneIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
  KITE | Employee Registration System 
          </Typography>
        </Toolbar>
      </AppBar>
     
    </div>
<Switch>
  <Route exact path="/Employee">
    
  <Box m={2} />
      <Container className='my-5'>
      <Alert severity="success">Welcome to KITE — check it out!</Alert>

      <Box m={1} />

     
     <div  style={{ height: 470, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>   
    </Container>


  </Route>
  <Route exact path="/">
  <Box m={2} />

  <Container className='my-5'>
  <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={6}>
        <Typography variant="h5" component="h5">
        Employee Registration System 
        </Typography>
        <Typography variant="h6" component="h6">
        via React and Express
        </Typography>
        </Grid>
        <Grid item xs={6}>

        <Alert
        variant="outlined" 
        severity="info"
        action={
          <Button color="inherit" href="/Employee" size="small">
            SHOW EMPLOYEE DATA
          </Button>
        }
      >
       Kite! Employee Data is available 
      </Alert>
          
        <form className={classes.root} noValidate autoComplete="off">
    
      
      <div>
      <TextField id="outlined-search" label="Full Name" type="text" variant="outlined" />
      <TextField id="outlined-search" label="Email john@example.com" type="text" variant="outlined" />
      <TextField id="outlined-search" label="Phone Number" type="text" variant="outlined" />
      <TextField id="outlined-search" label="Employee ID" type="text" variant="outlined" />
      <TextField id="outlined-search" label="Department" type="text" variant="outlined" />
     
      
      <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          defaultValue="Address e.g Jabalpur, MP"
          variant="outlined"
        />
      </div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
         Picture Upload
        </Button>
      </label>
      
    </form>
    <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Register
      </Button>
        </Grid>
       
      </Grid>
    </div></Container>
  </Route>
</Switch>
  </Router>
  );
}


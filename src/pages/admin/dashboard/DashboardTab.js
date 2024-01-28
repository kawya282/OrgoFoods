import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Image } from 'react-bootstrap';

function DashboardTab() {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  } 

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Products" value="1" />
                    <Tab label="Orders" value="2" />
                    <Tab label="Users" value="3" />
	                <Tab label="Partners" value="4" />
                    <Tab label="Reviews" value="5" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Product Image</TableCell>
                            <TableCell align="right">Qunatity&nbsp;(kg)</TableCell>
                            <TableCell align="right">Price&nbsp;(Rs.)</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">P01</TableCell>
                            <TableCell align="right">Carrot</TableCell>
                            <TableCell align="right"><Image src='https://img.freepik.com/free-photo/carrots-fresh-organic-carrots-fresh-garden-carrots-bunch-f_1391-237.jpg' width={50} height={50}/></TableCell>
                            <TableCell align="right">2</TableCell>
                            <TableCell align="right">250.00</TableCell>
                            <TableCell align="right">Far far away, behind the word mountains, far from the countries Vokalia and <br/> Consonantia, there live the blind texts.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="2">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Street</TableCell>
                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Zip Code</TableCell>
                            <TableCell align="right">Contact No</TableCell>
                            <TableCell align="right">Total Bill&nbsp;(Rs.) </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">P01</TableCell>
                            <TableCell align="right">Nimal</TableCell>
                            <TableCell align="right">Perera</TableCell>
                            <TableCell align="right">185</TableCell>
                            <TableCell align="right">Kandy Road</TableCell>
                            <TableCell align="right">Kadawatha</TableCell>
                            <TableCell align="right">11456</TableCell>
                            <TableCell align="right">+94 1127896790</TableCell>
                            <TableCell align="right">1500.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="3">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">U01</TableCell>
                            <TableCell align="right">Nimal</TableCell>
                            <TableCell align="right">nimal@gmail.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="4">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patner ID</TableCell>
                            <TableCell align="right">Partner Name</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Contact No</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">PS01</TableCell>
                            <TableCell align="right">Mr. M.S.Perera</TableCell>
                            <TableCell align="right">Kadawatha</TableCell>
                            <TableCell align="right">msperera@gmail.com</TableCell>
                            <TableCell align="right">+94 77 1234 123</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="5">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">Nimal</TableCell>
                            <TableCell align="right">nimal@gmail.com</TableCell>
                            <TableCell align="right">Far far away, behind the word mountains, far from the countries Vokalia and <br/> Consonantia, there live the blind texts.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default DashboardTab;

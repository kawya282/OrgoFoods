import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

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
		        <h1>Product Details</h1>
		            <div className="relative overflow-x-auto ">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" >
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            <tr className="bg-gray-50 border-b  dark:border-gray-700" >
                                                <td className="px-6 py-4 text-black ">
                                                    1.
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                    <img className='w-16' src="https://dummyimage.com/720x400" alt="img" />
                                                </th>
                                                <td className="px-6 py-4 text-black ">
                                                    Title
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    ₹100
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    pots
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    12 Aug 2019
                                                </td>
                                                <td className="px-6 py-4">
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
	</TabPanel>
        <TabPanel value="2">
		<h1>Order Details</h1>
		<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
                                            <thead  className="text-xs text-black uppercase bg-gray-200 " >
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Payment Id
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Image
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Address
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Pincode
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Phone Number
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                                        <tr className="bg-gray-50 border-b  dark:border-gray-700"  >
                                                            <td className="px-6 py-4 text-black " >
                                                               3393939
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                                <img className='w-16' src="https://dummyimage.com/720x400" alt="img" />
                                                            </th>
                                                            <td className="px-6 py-4 text-black " >
                                                                Title
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                ₹100
                                                            </td>
                                                            <td className="px-6 py-4 text-black " >
                                                                pots
                                                            </td>
                                                          
                                                            <td className="px-6 py-4 text-black " >
                                                                name
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                india
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                82828
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                               929929929929
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                kkakka@gmail.com
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                               12 Aug 2019
                                                            </td>

                                                        </tr>
                                                
                                            </tbody>
                                        </table>
	</TabPanel>
        <TabPanel value="3">
		<h1>User details</h1>
		<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-black uppercase bg-gray-200 " >
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S.No
                                            </th>

                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Pincode
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                                <tr className="bg-gray-50 border-b  dark:border-gray-700" >
                                                    <td className="px-6 py-4 text-black " >
                                                        1.
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        Name
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        Address
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        181919
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        1991818818
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                       kkk@gmail.com
                                                    </td>
                                                    <td className="px-6 py-4 text-black " >
                                                        12 Aug 2019
                                                    </td>

                                                </tr>
                                    </tbody>
                                </table>
	</TabPanel>
	<TabPanel value="4">Item Three</TabPanel>
	<TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default DashboardTab;

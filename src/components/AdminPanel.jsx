
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useHistory } from 'react-router-dom';
import ProductComponent from '../containers/ProductComponent';
import InventoryComponent from '../containers/InventoryComponent';
import AddModal from "../components/AddModal"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar:{
    width: "50%",
    marginLeft:"10vw"
  },
  display:{
    display:"flex"
  }
}));

export default function AdminPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const history = useHistory();

  // const handleManagement = ()=>{
  //   return <ProductListing/>
           
  // }
  return (
    <div className={classes.root}>
      <div className={classes.display}>
        <h3>پنل مدیریت فروشگاه</h3>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="کالا ها" {...a11yProps(0)} />
            <Tab label=" موجودی و قیمت ها" {...a11yProps(1)} />
            <Tab label=" سفارش ها" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Tab onClick={()=> history.push("/home")} className="goBack"  label=" بازگشت به سایت"/>
      </div>
      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          مدیریت کالا ها
          <button className="btn3"><AddModal/></button>
          <ProductComponent/>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          مدیریت موجودی و قیمت ها 
          <button className="btn3"> ذخیره</button>
          <InventoryComponent/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          مدیریت سفارش ها
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}

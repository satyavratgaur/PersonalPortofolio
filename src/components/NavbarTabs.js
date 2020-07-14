import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/icons/ImportContactsTwoTone';
import { styled } from '@material-ui/core';

function TabPanel(props) {
  console.log(props);
  const { children, value, index, navbarContent, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const StyledAppbar = styled(AppBar)`
  background-color: white !important;
  color: white !important;
`;

export default function ScrollableTabsButtonForce({ navbarContent }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const myDivToFocus = React.createRef();

  return (
    <div>
      <StyledAppbar position='fixed' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          color='primary'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable force tabs example'
          centered
        >
          {navbarContent.segmentLinks.map((item) => {
            return (
              <Tab
                onClick={(e) => {
                  if (myDivToFocus.current) {
                    console.log(myDivToFocus.current);
                    myDivToFocus.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                    });
                  }
                }}
                disableRipple
                label={item.title}
                icon={<SvgIcon />}
              />
            );
          })}
        </Tabs>
      </StyledAppbar>
    </div>
  );
}

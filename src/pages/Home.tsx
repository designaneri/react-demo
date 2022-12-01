import React, { useState } from 'react';
// import CustomizedSelect from 'components/CustomSelect/CustomSelect';
import Typography from '@mui/material/Typography';
import CustomBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Link from '@mui/material/Link';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputAdornment from '@mui/material/InputAdornment';
import CustomizedInputs from '../components/formControl/formControl';
// import CustomDatePicker from '../components/dateAdapter/dateAdapter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPlus,
  faFileExcel,
  faFilter,
  faTimes,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import CustomDateRangePicker from 'common/dateRange/dateRange';
// import { addDays } from 'date-fns';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
    onClick={handleClick}
    className="cpointer"
  >
    MUI
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
  >
    Core
  </Link>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
];
function Home() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [openFilter, setOpenFilter] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const popperHandleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpenFilter((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
  const handleClickAway = () => {
    setOpenFilter(false);
  };
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection',
  //   },
  // ]);

  return (
    <div>
      <div className="heading-section">
        <div className="heading-section-left">
          <Typography variant="h3" sx={{ mb: 3 }}>
            Home
          </Typography>
          <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="heading-section-right">
          <div className="search-control-outer">
            <CustomizedInputs
              margin="normal"
              displayLabel=""
              inputType="text"
              placeholderText="Search"
              className="search-control small-form-control"
              adornmentValue={
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              }
            />
          </div>
          <div className="header-btn-wrap">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="filter-popper-outer">
                <Popper
                  open={openFilter}
                  anchorEl={anchorEl}
                  placement={placement}
                  transition
                  className="filter-popper"
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                      <Paper>
                        <Typography variant="h5" className="filter-heading">
                          Filter
                          <IconButton
                            aria-label="delete"
                            onClick={popperHandleClick('bottom-end')}
                          >
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="fa-sm close-icon"
                            />
                          </IconButton>
                        </Typography>
                        <div className="filter-content form-small-gap">
                          <Grid container spacing={2} className="grid-wrap">
                            <Grid item xs={6}>
                              {/* <CustomDatePicker displayLabel="Order Date" /> */}
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="Customer"
                                id="Customer"
                                inputType="text"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="City"
                                id="City"
                                inputType="text"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="Country"
                                id="Country"
                                inputType="text"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="Status"
                                id="Status"
                                inputType="text"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="Tracking Number"
                                id="TrackingNumber"
                                inputType="text"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <CustomizedInputs
                                margin="normal"
                                displayLabel="Reference Number"
                                id="ReferenceNumber"
                                inputType="text"
                              />
                            </Grid>
                          </Grid>
                          <div className="btn-wrap">
                            <Button
                              color="secondary"
                              disableElevation
                              variant="contained"
                            >
                              Reset
                            </Button>
                            <Button
                              color="primary"
                              disableElevation
                              variant="contained"
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Paper>
                    </Fade>
                  )}
                </Popper>

                <Button
                  color="info"
                  onClick={popperHandleClick('bottom-end')}
                  disableElevation
                  variant="outlined"
                  className="icon-btn is-filtered"
                >
                  <FontAwesomeIcon icon={faFilter} className="fa-lg" />
                </Button>
              </div>
            </ClickAwayListener>
            <Button className="small-btn text-white" disableElevation>
              <FontAwesomeIcon icon={faFileExcel} className="fa-md mr-2" />
              Export
            </Button>
            <Button
              color="info"
              className="small-btn"
              disableElevation
              variant="contained"
              // startIcon={<FontAwesomeIcon icon={faPlus} className="fa-md" />}
            >
              <FontAwesomeIcon icon={faPlus} className="fa-md mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="main-content-section">
        <Typography variant="h5" className="inner-heading">
          Add User
        </Typography>
        <Typography variant="h5" className="inner-heading has-button">
          Heading Name
          <div className="inner-btn-wrap">
            <Button className="small-btn text-grey" disableElevation>
              <FontAwesomeIcon icon={faEdit} className="fa-md" />
            </Button>
          </div>
        </Typography>
        {/* <CustomizedSelect
          displayLabel="Password"
          options={options}
          defaultValue={{}}
          onChange={() => alert('Hi')}
        ></CustomizedSelect> */}
        {/* <CustomDateRangePicker
          displayLabel="DateRangepicker"
          defaultRanges={state}
          handleChange={(item: any) => {
            setState([item.selection]);
          }}
        /> */}
      </div>
    </div>
  );
}

export default Home;

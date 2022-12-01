import {
  faEdit,
  faReplyAll,
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Accordion,
  AccordionSummary,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  AccordionDetails,
  Box,
} from '@mui/material';
import React from 'react';

export const FormAccordian = (props: any) => {
  const {
    title,
    details,
    expanded,
    isEdit,
    handleEditClick,
    handleExpandCollapseClick,
    addMode = false,
    isCancelButton = false,
    isSaveButton,
    onSaveClick,
    onCancelClick,
  } = props;

  return (
    <div>
      <Accordion expanded={expanded} className="custom-accordion">
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
            spacing={0}
          >
            <Grid xs={10}>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid xs={2} className="text-right">
              {addMode ? (
                <></>
              ) : (
                <ButtonGroup size="small" aria-label="small button group">
                  <Button
                    color="info"
                    className="small-btn"
                    disableElevation
                    variant="contained"
                    onClick={handleEditClick}
                  >
                    <FontAwesomeIcon
                      icon={!isEdit ? faEdit : faReplyAll}
                      className="fa-md"
                    />
                  </Button>
                  <Button
                    color="info"
                    className="small-btn"
                    disableElevation
                    variant="contained"
                    onClick={handleExpandCollapseClick}
                  >
                    <FontAwesomeIcon
                      icon={expanded ? faCircleChevronDown : faCircleChevronUp}
                      className="fa-md"
                    />
                  </Button>
                </ButtonGroup>
              )}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2} className="grid-wrap two-col">
              {details}
            </Grid>
          </Box>
          <div className="btn-wrap form-btn-wrap">
            {isSaveButton ? (
              <Button
                type="submit"
                color="primary"
                disableElevation
                variant="contained"
                onClick={onSaveClick}
              >
                Save
              </Button>
            ) : (
              <></>
            )}
            {isCancelButton ? (
              <Button
                type="submit"
                color="primary"
                disableElevation
                variant="contained"
                onClick={onCancelClick}
              >
               Cancel
              </Button>
            ) : (
              <></>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FormAccordian;

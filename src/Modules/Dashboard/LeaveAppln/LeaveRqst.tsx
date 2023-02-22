import {
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";

import {
  StyledFormLabel,
  StyledLeaveApplnRadios,
  StyledTdyTimeHeading,
} from "./tdytimesheet.style";

type Props = {};

const BANKS = [
  {
    id: 1,
    label: "HDFC",
    value: "hdfc",
  },
  {
    id: 2,
    label: "ICICI",
    value: "icici",
  },
  {
    id: 3,
    label: "Indian",
    value: "Indian",
  },
];

const NewTimeEvent = (props: Props) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      leaveType: "Casual",
      dayType: "fullday",
      startDay: "",
      endDay: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Controller
              name="leaveType"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <StyledLeaveApplnRadios>
                  <StyledFormLabel>Leave Type</StyledFormLabel>
                  <RadioGroup row {...field}>
                    <Grid
                      container
                      spacing={2}
                      marginLeft={"-5px"}
                      marginBottom={1}
                    >
                      <Grid item xs={4}>
                        <FormControlLabel
                          value="Casual"
                          control={<Radio />}
                          label="Casual"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value="Medical"
                          control={<Radio />}
                          label="Medical"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value="LOP"
                          control={<Radio />}
                          label="LOP"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </StyledLeaveApplnRadios>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="dayType"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <StyledLeaveApplnRadios>
                  <StyledFormLabel>Day Type</StyledFormLabel>
                  <RadioGroup row {...field}>
                    <Grid
                      container
                      spacing={2}
                      marginLeft={"-5px"}
                      marginBottom={1}
                    >
                      <Grid item xs={5}>
                        <FormControlLabel
                          value="fullday"
                          control={<Radio />}
                          label="Full Day"
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <FormControlLabel
                          value="half-day"
                          control={<Radio />}
                          label="Half Day"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </StyledLeaveApplnRadios>
              )}
            />
          </Grid>
        </Grid>
        <Grid container columnSpacing={2} rowSpacing={1} marginBottom={1.5}>
          <Grid item xs={6}>
            <Controller
              name="startDay"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <>
                  <StyledFormLabel>Leave From</StyledFormLabel>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={fieldState.error ? true : false}
                        helperText={fieldState.error && "Time is required"}
                      />
                    )}
                    {...field}
                  />
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="endDay"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <>
                  <StyledFormLabel>Leave To</StyledFormLabel>
                  <DatePicker
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={fieldState.error ? true : false}
                        helperText={fieldState.error && "Time is required"}
                      />
                    )}
                    {...field}
                  />
                </>
              )}
            />
          </Grid>
          <Grid item xs={6} marginTop={2}>
            <Button variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} marginTop={2}>
            <Button variant="contained" fullWidth type="submit">
              Apply
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default NewTimeEvent;

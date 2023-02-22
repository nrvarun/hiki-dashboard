import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";

import { StyledFormLabel, StyledTdyTimeHeading } from "./tdytimesheet.style";

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
      clientName: "",
      startTime: "",
      endTime: "",
      desc: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <StyledTdyTimeHeading>New Time Events</StyledTdyTimeHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Controller
              name="clientName"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <>
                  <StyledFormLabel>Client Name</StyledFormLabel>
                  <TextField
                    select
                    fullWidth
                    style={{
                      width: "100%",
                    }}
                    helperText={fieldState.error && "Bank name is required"}
                    error={fieldState.error ? true : false}
                    placeholder="Select Bank"
                    {...field}
                  >
                    {BANKS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="startTime"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <>
                  <StyledFormLabel>Start Time</StyledFormLabel>
                  <TimePicker
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
              name="endTime"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <>
                  <StyledFormLabel>Start Time</StyledFormLabel>
                  <TimePicker
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
          <Grid item xs={12} marginTop={2}>
            <Controller
              name="desc"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <TextField
                  multiline
                  maxRows={4}
                  fullWidth
                  style={{
                    width: "100%",
                  }}
                  placeholder="Type the description here"
                  {...field}
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} textAlign="right" marginTop={2}>
            <Button type="submit" variant="contained">
              Create Event
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default NewTimeEvent;

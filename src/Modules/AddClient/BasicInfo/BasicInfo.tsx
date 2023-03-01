import {
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker, DesktopDatePicker } from "@mui/x-date-pickers";
import { StyledFormLabel } from "Modules/Dashboard/LeaveAppln/tdytimesheet.style";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import {
  StyledFieldError,
  StyledFormCTA,
  StyledFormCTAOutlined,
  StyledFormRadios,
} from "Styles/Global";
import {
  StyledAddClientFooter,
  StyledFieldTitle,
  StyledFormBodyWrapper,
  StyledProfilePic,
  StyledProfilePicWrapper,
  StyledRadioLabel,
} from "../addclnt.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

type FormValues = {
  acType: "" | "status" | "individual";
  companyName: "";
  emailId: "";
  mobileNo: "";
  panNumber: "";
  gstNumber: "";
  regDate: "";
  assignTo: "";
  address: "";
};

const BasicInfo = ({ prevStep, updateForm, nextStep }: FormStepProps) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      acType: "status",
      companyName: "",
      emailId: "",
      mobileNo: "",
      panNumber: "",
      gstNumber: "",
      regDate: "",
      assignTo: "",
      address: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  const resetImage = (e: any) => {
    e.preventDefault();
    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormBodyWrapper>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Client/Account Type <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="acType"
                  control={control}
                  rules={{ required: false }}
                  render={({ field, fieldState }) => (
                    <StyledFormRadios>
                      <RadioGroup row {...field}>
                        <Grid
                          xs={8}
                          container
                          spacing={2}
                          marginLeft={"-5px"}
                          marginBottom={1}
                        >
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="status"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
                                  <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.00011 1.39922L3.00011 14.5992H10.2001V1.39922L3.00011 1.39922ZM2.40011 0.199219L10.8001 0.199219C10.9592 0.199219 11.1119 0.262433 11.2244 0.374955C11.3369 0.487476 11.4001 0.640089 11.4001 0.799219V15.1992C11.4001 15.3583 11.3369 15.511 11.2244 15.6235C11.1119 15.736 10.9592 15.7992 10.8001 15.7992H2.40011C2.24098 15.7992 2.08837 15.736 1.97585 15.6235C1.86333 15.511 1.80011 15.3583 1.80011 15.1992L1.80011 0.799219C1.80011 0.640089 1.86333 0.487476 1.97585 0.374955C2.08837 0.262433 2.24098 0.199219 2.40011 0.199219Z"
                                      fill="#888888"
                                    />
                                    <path
                                      d="M4.2001 3.79919L9.0001 3.79919V4.99919H4.2001V3.79919ZM4.2001 7.39919H9.0001V8.59918H4.2001V7.39919ZM4.2001 10.9992H9.0001V12.1992H4.2001V10.9992ZM11.4001 8.59918H13.8001V9.79918H11.4001V8.59918ZM11.4001 10.9992H13.8001V12.1992H11.4001V10.9992ZM0.600098 14.5992H17.4001V15.7992H0.600098V14.5992Z"
                                      fill="#888888"
                                    />
                                    <path
                                      d="M11.4001 6.1992V14.5992H15.0001V6.1992H11.4001ZM10.8001 4.9992L15.6001 4.9992C15.7592 4.9992 15.9118 5.06242 16.0243 5.17494C16.1368 5.28746 16.2001 5.44007 16.2001 5.5992V15.1992C16.2001 15.3583 16.1368 15.5109 16.0243 15.6235C15.9118 15.736 15.7592 15.7992 15.6001 15.7992L10.8001 15.7992C10.641 15.7992 10.4883 15.736 10.3758 15.6235C10.2633 15.5109 10.2001 15.3583 10.2001 15.1992V5.5992C10.2001 5.44007 10.2633 5.28746 10.3758 5.17494C10.4883 5.06242 10.6409 4.9992 10.8001 4.9992Z"
                                      fill="#888888"
                                    />
                                  </svg>
                                  <p>Status</p>
                                </StyledRadioLabel>
                              }
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="individual"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
                                  <svg
                                    width="16"
                                    height="18"
                                    viewBox="0 0 16 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.1998 17.1004V15.3004C15.1998 14.3456 14.8205 13.4299 14.1454 12.7548C13.4703 12.0797 12.5546 11.7004 11.5998 11.7004H4.3998C3.44503 11.7004 2.52935 12.0797 1.85422 12.7548C1.17909 13.4299 0.799805 14.3456 0.799805 15.3004V17.1004M11.5999 4.50039C11.5999 6.48861 9.98815 8.10038 7.99992 8.10038C6.0117 8.10038 4.39992 6.48861 4.39992 4.50039C4.39992 2.51216 6.0117 0.900391 7.99992 0.900391C9.98815 0.900391 11.5999 2.51216 11.5999 4.50039Z"
                                      stroke="#888888"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>

                                  <p>Individual</p>
                                </StyledRadioLabel>
                              }
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </StyledFormRadios>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Company name <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="companyName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "Company name is required"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="Full name..."
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Email ID <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="emailId"
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "Please enter a valid email"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="This will be username for HiKi login"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Mobile Number <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="mobileNo"
                  control={control}
                  rules={{ required: true, maxLength: 12 }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "Mobile Number is required"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="This will be username for HiKi login"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  PAN Number <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="panNumber"
                  control={control}
                  rules={{ required: true, maxLength: 16 }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "PAN Number is required"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="16 Digit number"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  GST Number <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="gstNumber"
                  control={control}
                  rules={{ required: true, maxLength: 16 }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "GST Number is required"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="GST Number"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Registered Date <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="regDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <DesktopDatePicker
                      label={""}
                      renderInput={(params) => (
                        <TextField
                          style={{
                            width: "100%",
                          }}
                          {...params}
                          error={fieldState.error ? true : false}
                          helperText={fieldState.error && "Date is required"}
                        />
                      )}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Assign To <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="assignTo"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        select
                        error={fieldState.isDirty && field.value === ""}
                        helperText={
                          fieldState.error && (
                            <StyledFieldError>
                              Select one option
                            </StyledFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select days..."
                      >
                        <MenuItem value={"asd"}>asd</MenuItem>
                        <MenuItem value={"xyz"}>xyz</MenuItem>
                      </TextField>
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Full Address <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        multiline
                        rows={1}
                        helperText={fieldState.error && "Address is required"}
                        error={fieldState.error ? true : false}
                        placeholder="Address..."
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <StyledFieldTitle>Company Logo</StyledFieldTitle>
            <StyledProfilePicWrapper>
              <StyledProfilePic>
                <img
                  src={
                    selectedImage ? selectedImage : "/images/profile-pic.svg"
                  }
                  alt=""
                />
              </StyledProfilePic>
            </StyledProfilePicWrapper>
            {selectedImage ? (
              <Button component="label" onClick={resetImage}>
                Remove logo
              </Button>
            ) : (
              <Button component="label">
                Upload logo
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(event: any) => {
                    setSelectedImage(
                      URL.createObjectURL(event.target.files[0])
                    );
                  }}
                />
              </Button>
            )}
          </Grid>
        </Grid>
      </StyledFormBodyWrapper>

      <Grid item xs={12}>
        <StyledAddClientFooter>
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} textAlign="center" alignItems="center"></Grid>
            <Grid item xs={4}>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <StyledFormCTA type="submit">
                  Next
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </StyledFormCTA>
              </div>
            </Grid>
          </Grid>
        </StyledAddClientFooter>
      </Grid>
    </form>
  );
};

export default BasicInfo;

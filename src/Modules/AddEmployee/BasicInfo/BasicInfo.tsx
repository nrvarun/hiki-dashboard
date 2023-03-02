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

import SVG from "react-inlinesvg";

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
} from "../addemployee.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

type FormValues = {
  gender: "" | "male" | "female";
  fullName: "";
  emailId: "";
  mobileNo: "";
  panNumber: "";
  gstNumber: "";
  regDate: "";
  doj: "";
  designation: "";
  reportsTo: "";
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
      gender: "male",
      fullName: "",
      emailId: "",
      mobileNo: "",
      panNumber: "",
      gstNumber: "",
      regDate: "",
      doj: "",
      designation: "",
      reportsTo: "",
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
                  name="gender"
                  control={control}
                  rules={{ required: false }}
                  render={({ field, fieldState }) => (
                    <StyledFormRadios>
                      <RadioGroup row {...field}>
                        <Grid
                          xs={6}
                          container
                          spacing={2}
                          marginLeft={"-5px"}
                          marginBottom={1}
                        >
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
                                  <SVG src="/images/icons/male.svg" />

                                  <p>male</p>
                                </StyledRadioLabel>
                              }
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
                                  <SVG src="/images/icons/female.svg" />
                                  <p>female</p>
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
                  Full name <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="fullName"
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
                  Designation <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="designation"
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
                              Select an option
                            </StyledFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select an option..."
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
                  Reports to <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="reportsTo"
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
                              Select an option
                            </StyledFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select an option..."
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
                  Date of Joining <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="doj"
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

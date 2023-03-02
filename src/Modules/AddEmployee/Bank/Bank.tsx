import { CheckCircle, CheckOutlined } from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  StyledFieldError,
  StyledFormCTA,
  StyledFormCTAOutlined,
  StyledFormRadios,
} from "Styles/Global";
import {
  StyledAddClientFooter,
  StyledBankClientInfo,
  StyledBankInfo,
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
  acType: "" | "Current" | "Savings";
  bank: "";
  acName: "";
  acNo: "";
  cnfrmAcNo: "";
  ifsc: "";
};

const Bank = ({ prevStep, updateForm, nextStep }: FormStepProps) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      acType: "Current",
      bank: "",
      acName: "",
      acNo: "",
      cnfrmAcNo: "",
      ifsc: "",
    },
    mode: "all",
  });

  const accountNo = watch("acNo");

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
          <Grid item xs={8} margin="0 auto">
            <Grid item xs={12}>
              <StyledBankClientInfo>
                <CheckCircle color="primary" />
                <p>Ask client to provide the details</p>
              </StyledBankClientInfo>
            </Grid>
            <Grid item xs={12} marginBottom={4}>
              <StyledBankInfo>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49835 0.599609C13.1378 0.599609 16.8988 4.36057 16.8988 9.00003C16.8988 13.6387 13.1378 17.3996 8.49835 17.3996C3.85889 17.3996 0.0996095 13.6387 0.0996095 9.00003C0.0987696 4.36057 3.85889 0.599609 8.49835 0.599609ZM8.49835 1.85942C7.55417 1.84918 6.61734 2.0263 5.74207 2.38054C4.8668 2.73477 4.07048 3.25909 3.39919 3.92313C2.7279 4.58717 2.19499 5.37776 1.83128 6.24914C1.46757 7.12052 1.2803 8.05537 1.2803 8.99961C1.2803 9.94384 1.46757 10.8787 1.83128 11.7501C2.19499 12.6215 2.7279 13.412 3.39919 14.0761C4.07048 14.7401 4.8668 15.2644 5.74207 15.6187C6.61734 15.9729 7.55417 16.15 8.49835 16.1398C10.373 16.111 12.1611 15.3462 13.4766 14.0103C14.7921 12.6745 15.5294 10.8749 15.5294 9.00003C15.5294 7.12519 14.7921 5.32556 13.4766 3.98973C12.1611 2.65389 10.373 1.88901 8.49835 1.86026V1.85942ZM8.49499 7.73854C8.64735 7.73834 8.79462 7.79338 8.90951 7.89344C9.02441 7.99351 9.09914 8.13183 9.11986 8.28278L9.12574 8.36844L9.1291 12.9894C9.13073 13.1502 9.07086 13.3054 8.96173 13.4235C8.85261 13.5415 8.7025 13.6133 8.54213 13.6243C8.38176 13.6352 8.22328 13.5845 8.09912 13.4824C7.97497 13.3803 7.89455 13.2346 7.87432 13.0751L7.86929 12.9903L7.86592 8.36928C7.86592 8.20222 7.93229 8.042 8.05042 7.92387C8.16855 7.80574 8.32877 7.73938 8.49583 7.73938L8.49499 7.73854ZM8.49919 4.8015C8.61155 4.79794 8.72348 4.817 8.82833 4.85755C8.93319 4.89809 9.02882 4.95929 9.10956 5.03752C9.1903 5.11574 9.25449 5.20939 9.29834 5.31291C9.34218 5.41642 9.36477 5.5277 9.36477 5.64011C9.36477 5.75253 9.34218 5.8638 9.29834 5.96732C9.25449 6.07084 9.1903 6.16449 9.10956 6.24271C9.02882 6.32093 8.93319 6.38214 8.82833 6.42268C8.72348 6.46322 8.61155 6.48228 8.49919 6.47873C8.28137 6.47183 8.07478 6.38046 7.92313 6.22394C7.77149 6.06742 7.6867 5.85804 7.6867 5.64011C7.6867 5.42218 7.77149 5.2128 7.92313 5.05629C8.07478 4.89977 8.28137 4.80839 8.49919 4.8015Z"
                    fill="#FF8B37"
                  />
                </svg>

                <p>Client will be prompted while signing up</p>
              </StyledBankInfo>
            </Grid>
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
                          xs={6}
                          container
                          spacing={2}
                          marginLeft={"-5px"}
                          marginBottom={1}
                        >
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="Current"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
                                  <p>Current</p>
                                </StyledRadioLabel>
                              }
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <FormControlLabel
                              value="Savings"
                              control={<Radio />}
                              label={
                                <StyledRadioLabel>
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
                  Bank <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="bank"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        select
                        helperText={fieldState.error && "Bank is required"}
                        error={fieldState.error ? true : false}
                        placeholder="Select Bank"
                        {...field}
                      >
                        <MenuItem value={"hdfc"}>hdfc</MenuItem>
                        <MenuItem value={"axis"}>axis</MenuItem>
                      </TextField>
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Account Name <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="acName"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "Please enter an Account Name"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="As per the bank records"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Account Number <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="acNo"
                  control={control}
                  rules={{ required: true, maxLength: 12 }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error && "Account Number is required"
                        }
                        error={fieldState.error ? true : false}
                        placeholder="As per the records"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  Confirm Account Number <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="cnfrmAcNo"
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 16,
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={
                          fieldState.error
                            ? "Account Number is required"
                            : fieldState.isTouched && field.value !== accountNo
                            ? "Accounts do not Match"
                            : ""
                        }
                        error={
                          fieldState.error
                            ? true
                            : fieldState.isTouched && field.value !== accountNo
                            ? true
                            : false
                        }
                        placeholder="Re-enter the account number"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <StyledFieldTitle>
                  IFSC <span> *</span>
                </StyledFieldTitle>
                <Controller
                  name="ifsc"
                  control={control}
                  rules={{ required: true, maxLength: 16 }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        helperText={fieldState.error && "IFSC is required"}
                        error={fieldState.error ? true : false}
                        placeholder="As per the bank"
                        {...field}
                      />
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledFormBodyWrapper>

      <Grid item xs={12}>
        <StyledAddClientFooter>
          <Grid container spacing={2}>
            <Grid item xs={8} margin="0 auto">
              <Grid container>
                <Grid item xs={4}>
                  <StyledFormCTAOutlined type="button" onClick={prevStep}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#0052CC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Previous
                  </StyledFormCTAOutlined>
                </Grid>
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
            </Grid>
          </Grid>
        </StyledAddClientFooter>
      </Grid>
    </form>
  );
};

export default Bank;

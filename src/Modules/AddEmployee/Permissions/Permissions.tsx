import { CheckCircle } from "@mui/icons-material";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import {
  StyledFormCTA,
  StyledFormCTAOutlined,
  StyledFormRadios,
} from "Styles/Global";

import {
  StyledActivePermissionItem,
  StyledAddClientFooter,
  StyledDocsEntry,
  StyledDocsEntryContent,
  StyledDocsListing,
  StyledDocsListingItem,
  StyledFieldTitle,
  StyledFormBodyWrapper,
  StyledRadioLabel,
} from "../addemployee.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

const KeyDocs = ({
  activeStep,
  nextStep,
  updateForm,
  prevStep,
}: FormStepProps) => {
  const { control, watch, handleSubmit } = useForm<any>({
    defaultValues: { permissionLevel: "hiki-subscription" },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  const permissionLevel = watch("permissionLevel");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormBodyWrapper>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Controller
              name="permissionLevel"
              control={control}
              rules={{ required: false }}
              render={({ field, fieldState }) => (
                <RadioGroup {...field}>
                  <Grid xs={8} container spacing={2} margin="0 auto">
                    <Grid item xs={12}>
                      <StyledActivePermissionItem
                        className={
                          field.value === "hiki-subscription"
                            ? "active"
                            : "in-active"
                        }
                      >
                        <FormControlLabel
                          value="hiki-subscription"
                          control={<Radio checkedIcon={<CheckCircle />} />}
                          label={
                            <StyledRadioLabel>
                              <p>HiKi Subscription - Renew or Change Plan</p>
                            </StyledRadioLabel>
                          }
                        />
                      </StyledActivePermissionItem>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledActivePermissionItem
                        className={
                          field.value === "add-client" ? "active" : "in-active"
                        }
                      >
                        <FormControlLabel
                          value="add-client"
                          control={<Radio checkedIcon={<CheckCircle />} />}
                          label={
                            <StyledRadioLabel>
                              <p>Add New Client</p>
                            </StyledRadioLabel>
                          }
                        />
                      </StyledActivePermissionItem>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledActivePermissionItem
                        className={
                          field.value === "add-employee"
                            ? "active"
                            : "in-active"
                        }
                      >
                        <FormControlLabel
                          value="add-employee"
                          control={<Radio checkedIcon={<CheckCircle />} />}
                          label={
                            <StyledRadioLabel>
                              <p>Add New Employee</p>
                            </StyledRadioLabel>
                          }
                        />
                      </StyledActivePermissionItem>
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
          </Grid>
        </Grid>
      </StyledFormBodyWrapper>
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
                    Submit
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
    </form>
  );
};

export default KeyDocs;

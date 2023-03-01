import { Grid } from "@mui/material";

import { useFieldArray, useForm } from "react-hook-form";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";

import {
  StyledAddClientFooter,
  StyledDocsEntry,
  StyledDocsEntryContent,
  StyledDocsListing,
  StyledDocsListingItem,
  StyledFieldTitle,
  StyledFormBodyWrapper,
} from "../addclnt.style";

import KeyDocEntry from "./KeyDocEntry";

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
  const { control, handleSubmit } = useForm<any>({
    defaultValues: {
      documents: [{ docType: "driving-license", docNumber: "", file: "" }],
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents",
  });

  const onSubmit = (values: any) => {
    alert("did we submit");
    updateForm(values);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormBodyWrapper>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <StyledDocsListing>
              {fields.map((field, index) => {
                return (
                  <StyledDocsListingItem key={field.id}>
                    <KeyDocEntry
                      item={field}
                      id={index}
                      onDelete={remove}
                      control={control}
                    />
                  </StyledDocsListingItem>
                );
              })}
            </StyledDocsListing>
          </Grid>
          <Grid item xs={6} margin="0 auto">
            <StyledDocsListing>
              <StyledFormCTAOutlined
                minwidth="auto"
                fullWidth
                type="button"
                onClick={() => {
                  append({
                    docType: "driving-license",
                    docNumber: "",
                    file: "",
                  });
                }}
              >
                + Add Document
              </StyledFormCTAOutlined>
            </StyledDocsListing>
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
                  <StyledFormCTA type="submit" disabled={fields.length === 0}>
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

import { DeleteOutlined, FileUploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { StyledFieldError } from "Styles/Global";
import {
  StyledDocDeleteBtn,
  StyledDocsEntry,
  StyledDocsEntryContent,
  StyledDocsEntryFileDetail,
  StyledDocsEntryFileDetailsWrapper,
  StyledFieldTitle,
  StyledFileSelectInputOverlay,
  StyledFileSelectWrapper,
} from "../addclnt.style";

type Props = {
  item?: any;
  id?: any;
  onDelete?: any;
  control?: any;
};

const KeyDocEntry = ({ control, item, id, onDelete }: Props) => {
  console.log(item);

  return (
    <StyledDocsEntry>
      <StyledDocDeleteBtn onClick={onDelete}>
        <DeleteOutlined color="error" />
      </StyledDocDeleteBtn>
      <StyledDocsEntryContent>
        <Grid container>
          <Grid item xs={12} marginBottom={4}>
            <StyledFieldTitle>
              Document Type <span> *</span>
            </StyledFieldTitle>
            <Controller
              name={`documents.${id}.docType`}
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  style={{
                    width: "100%",
                  }}
                  select
                  error={fieldState.isDirty && field.value === ""}
                  helperText={
                    fieldState.isTouched &&
                    fieldState.error && (
                      <StyledFieldError>Select a document </StyledFieldError>
                    )
                  }
                  {...field}
                  placeholder="Select days..."
                >
                  <MenuItem value={"aadhar"}>Aadhar card</MenuItem>
                  <MenuItem value={"pan"}>PAN card</MenuItem>
                  <MenuItem value={"driving-license"}>Driver License</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} marginBottom={4}>
            <StyledFieldTitle>
              Number<span> *</span>
            </StyledFieldTitle>
            <Controller
              name={`documents.${id}.docNo`}
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    error={fieldState.isDirty && field.value === ""}
                    helperText={
                      fieldState.error && (
                        <StyledFieldError>
                          Enter the document number
                        </StyledFieldError>
                      )
                    }
                    {...field}
                    placeholder="Enter number..."
                  ></TextField>
                </>
              )}
            />
          </Grid>
          <Grid item xs={12} marginBottom={4}>
            <StyledDocsEntryFileDetailsWrapper>
              <p>Max resolution is 640x640 file size</p>
              <Controller
                control={control}
                name={`documents.${id}.file`}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  if (field.value !== "") {
                    return (
                      <StyledDocsEntryFileDetail>
                        <div>
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.6998 10.8007L11.6998 6.80073L3.6998 14.8007M2.7398 0.800781H14.2598C15.0518 0.800781 15.6998 1.61078 15.6998 2.60078V13.4008C15.6998 14.3908 15.0518 15.2008 14.2598 15.2008H2.7398C1.9478 15.2008 1.2998 14.3908 1.2998 13.4008V2.60078C1.2998 1.61078 1.9478 0.800781 2.7398 0.800781ZM7.2998 5.00078C7.2998 5.99489 6.49392 6.80078 5.4998 6.80078C4.50569 6.80078 3.6998 5.99489 3.6998 5.00078C3.6998 4.00667 4.50569 3.20078 5.4998 3.20078C6.49392 3.20078 7.2998 4.00667 7.2998 5.00078Z"
                              stroke="#0052CC"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>{field?.value?.name}</p>
                        </div>
                        <IconButton
                          component="label"
                          onClick={() => field.onChange("")}
                        >
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.2998 0.800781L8.4998 8.00078M8.4998 8.00078L15.6998 15.2008M8.4998 8.00078L1.2998 15.2008M8.4998 8.00078L15.6998 0.800781"
                              stroke="#EB4747"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </StyledDocsEntryFileDetail>
                    );
                  }

                  return (
                    <>
                      <StyledFileSelectWrapper>
                        <StyledFileSelectInputOverlay>
                          <p>
                            <span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1998 10.4008V13.6008C15.1998 14.0251 15.0312 14.4321 14.7312 14.7322C14.4311 15.0322 14.0242 15.2008 13.5998 15.2008H2.3998C1.97546 15.2008 1.56849 15.0322 1.26843 14.7322C0.968376 14.4321 0.799805 14.0251 0.799805 13.6008L0.799805 10.4008M11.9998 4.80078L7.99976 0.800781M7.99976 0.800781L3.99976 4.80078M7.99976 0.800781L7.99971 10.4008"
                                  stroke="#0052CC"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>{" "}
                            Click to uplaod
                          </p>
                        </StyledFileSelectInputOverlay>
                        <TextField
                          fullWidth
                          {...field}
                          label=""
                          type="file"
                          onChange={(event: any) =>
                            field.onChange(event.target.files[0])
                          }
                          error={fieldState.isDirty && field.value === ""}
                          helperText={
                            fieldState.error && (
                              <StyledFieldError>
                                Select a document
                              </StyledFieldError>
                            )
                          }
                        />
                      </StyledFileSelectWrapper>
                    </>
                  );
                }}
              />
            </StyledDocsEntryFileDetailsWrapper>
          </Grid>
        </Grid>
      </StyledDocsEntryContent>
    </StyledDocsEntry>
  );
};

export default KeyDocEntry;

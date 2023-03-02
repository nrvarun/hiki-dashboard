import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import AddLayout from "Layout/AddLayout";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledAddClientBody,
  StyledAddClientHeader,
  StyledAddClientWrapper,
} from "./addemployee.style";
import Bank from "./Bank";
import BasicInfo from "./BasicInfo";
import KeyDocs from "./KeyDocs";

import InfoIcon from "./InfoIcon";
import BankIcon from "./BankIcon";
import DocsIcon from "./DocsIcon";
import PermissionsIcon from "./PermissionsIcon";
import Permissions from "./Permissions";

type Props = {};

const STEPS = [
  {
    id: 1,
    title: "Basic Information",
    icon: InfoIcon,
  },
  {
    id: 2,
    title: "Bank Account Details",
    icon: BankIcon,
  },
  {
    id: 3,
    title: "Key Documents",
    icon: DocsIcon,
  },
  {
    id: 4,
    title: "Permissions",
    icon: PermissionsIcon,
  },
];

const AddClient = (props: Props) => {
  const [activeStep, setActiveStep] = useState(3);
  const [formValues, setFormValues] = useState({});

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const nextFormStep = () => setActiveStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setActiveStep((currentStep) => currentStep - 1);

  const updateUserForm = (values: any) => {
    console.log(values);

    setFormValues((prevValues: any) => ({
      ...prevValues,
      ...values,
    }));
  };

  const renderFormStep = (step: Number) => {
    const actionProps = {
      activeStep: activeStep,
      nextStep: nextFormStep,
      prevStep: prevFormStep,
      updateForm: updateUserForm,
    };

    switch (step) {
      case 0:
        return <BasicInfo {...actionProps} />;

      case 1:
        return <Bank {...actionProps} />;

      case 2:
        return <KeyDocs {...actionProps} />;

      case 3:
        return <Permissions {...actionProps} />;

      default:
        return <BasicInfo {...actionProps} />;
    }
  };

  return (
    <AddLayout addView={true}>
      <Grid container>
        <Grid item xs={12} marginBottom={6}>
          <NavLink to={"/"}>
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1998 6.49923L1.7998 6.49923M1.7998 6.49923L6.59973 11.2992M1.7998 6.49923L6.59973 1.69922"
                stroke="#0052CC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              style={{
                margin: "0 0 0 12px",
              }}
            >
              Add Colleague
            </span>
          </NavLink>
        </Grid>
        <Grid item xs={12}>
          <StyledAddClientWrapper>
            <StyledAddClientHeader>
              <Grid container>
                <Grid item xs={10} margin="0 auto">
                  <Stepper activeStep={activeStep} className="add-form-stepper">
                    {STEPS.map(({ id, title, icon }, index) => (
                      <Step
                        key={id}
                        className={
                          index === activeStep ? "custom-current-step" : ""
                        }
                      >
                        <StepLabel StepIconComponent={icon}>{title}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
              </Grid>
            </StyledAddClientHeader>
            <Grid item xs={12}>
              <StyledAddClientBody>
                {renderFormStep(activeStep)}
              </StyledAddClientBody>
            </Grid>
          </StyledAddClientWrapper>
        </Grid>
      </Grid>
    </AddLayout>
  );
};

export default AddClient;

import { Grid, Link } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import React from "react";
import { StyledDashCardSummary, StyledDocumentItem } from "../dashboard.style";

type Props = {};

const Documents = (props: Props) => {
  return (
    <DashboardCard
      title="Documents"
      action={
        <Link href="#" variant="subtitle2">
          Upload Document
        </Link>
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StyledDocumentItem>
            <img src="/images/doc1.png" alt="doc" />
            <p>Bill</p>
          </StyledDocumentItem>
        </Grid>
        <Grid item xs={6}>
          <StyledDocumentItem>
            <img src="/images/doc1.png" alt="doc" />
            <p>GST Fillings</p>
          </StyledDocumentItem>
        </Grid>
        <Grid item xs={6}>
          <StyledDocumentItem>
            <img src="/images/doc1.png" alt="doc" />
            <p>Amazon-Bills</p>
          </StyledDocumentItem>
        </Grid>
        <Grid item xs={6}>
          <StyledDocumentItem>
            <img src="/images/doc1.png" alt="doc" />
            <p>Bill</p>
          </StyledDocumentItem>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Documents;

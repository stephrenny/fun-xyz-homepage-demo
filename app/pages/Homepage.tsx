"use client";

import React, { useState, useEffect } from "react";
import ScrollableBannerContainer from "../components/ScrollableBannerContainer";
import FillerCard from "../components/FillterCard";
import CallToActionCard from "../components/CallToActionCard";
import { integrationText } from "../components/copy/IntegrationCopy";
import { TEXT_SCROLL_SPACING, TEXT_INIT_OFFSET } from "../constants/values";

const TOTAL_SCROLL_HEIGHT =
  TEXT_SCROLL_SPACING * integrationText.length + TEXT_INIT_OFFSET;

const Homepage: React.FC = () => {
  return (
    <div>
      <FillerCard>
        <h1> Main content here</h1>
      </FillerCard>
      <ScrollableBannerContainer totalScrollHeight={TOTAL_SCROLL_HEIGHT}>
        <CallToActionCard />
      </ScrollableBannerContainer>
      <FillerCard>
        <h1> Other content here </h1>
      </FillerCard>
    </div>
  );
};

export default Homepage;

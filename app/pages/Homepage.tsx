"use client";

import React from "react";
import ScrollableBannerContainer from "../components/ScrollableBannerContainer";
import FillerCard from "../components/FillerCard";
import CallToActionCard from "../components/CallToActionCard/CallToActionStickyComponent";
import CallToActionscrollView from "../components/CallToActionCard/CallToActionScrollView";

const Homepage: React.FC = () => {
  return (
    <div>
      <FillerCard>
        <h1> Main content here</h1>
      </FillerCard>
      <ScrollableBannerContainer
        parallaxScrollView={<CallToActionscrollView />}
      >
        <CallToActionCard />
      </ScrollableBannerContainer>
      <FillerCard>
        <h1> Other content here </h1>
      </FillerCard>
    </div>
  );
};

export default Homepage;

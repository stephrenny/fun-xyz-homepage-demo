import React from "react";
import { integrationText } from "../copy/IntegrationCopy";

const CallToActionscrollView: React.FC = ({}) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex-1 mx-36">
        {integrationText.map((text, index) => (
          <div
            key={index}
            className="h-screen flex items-center justify-center"
          >
            {text}
          </div>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default CallToActionscrollView;

import React, { useMemo } from "react";

/**
 * This component allows for a sticky component that stays at the top of the page until a certain scroll height is reached
 */

export interface IScrollableBannerContainerProps {
  children?: React.ReactNode;
  totalScrollHeight: number;
}

const ScrollableBannerContainer: React.FC<IScrollableBannerContainerProps> = ({
  totalScrollHeight,
  children,
}) => {
  return (
    <div
      style={{
        height: totalScrollHeight,
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100&",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableBannerContainer;

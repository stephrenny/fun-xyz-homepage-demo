import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * This component allows for a sticky component that stays at the top of the page until a certain scroll height is reached
 */

export interface IScrollableBannerContainerProps {
  children?: React.ReactNode;
  parallaxScrollView?: React.ReactNode;
  totalScrollHeight?: number;
}

const ScrollableBannerContainer: React.FC<IScrollableBannerContainerProps> = ({
  totalScrollHeight,
  parallaxScrollView,
  children,
}) => {
  const childRef = useRef<HTMLDivElement | null>(null);
  const [scrollableHeight, setScrollableHeight] = useState(0);

  useEffect(() => {
    if (childRef.current) {
      const { height } = childRef.current.getBoundingClientRect();
      setScrollableHeight(height);
    }
  }, [childRef, setScrollableHeight]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        minHeight: totalScrollHeight
          ? totalScrollHeight
          : parallaxScrollView
          ? scrollableHeight
          : "none",
      }}
    >
      {parallaxScrollView && (
        <div className="absolute z-10 top-0" ref={childRef}>
          {parallaxScrollView}
        </div>
      )}
      {children}
    </div>
  );
};

export default ScrollableBannerContainer;

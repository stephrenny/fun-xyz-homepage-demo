import React, { useRef, useEffect, useState } from "react";
import { integrationText } from "./copy/IntegrationCopy";
import {
  PIXEL_MARGIN_POSITIVE,
  PIXEL_MARGIN_NEGATIVE,
  TEXT_SCROLL_SPACING,
  TEXT_INIT_OFFSET,
} from "../constants/values";

const CallToActionCard: React.FC = ({}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);

  // We need to find where the "logical" position if this component lies within the website
  const [foundStickyPosition, setFoundStickyPosition] = React.useState(false);
  const [positionalYOffset, setPositionalYOffset] = React.useState(0);

  useEffect(() => {
    const getYPosition = () => {
      const rect = ref!.current!.getBoundingClientRect();
      const yPosition = rect.top;
      const scrollDistance = window.scrollY;
      if (
        yPosition <= PIXEL_MARGIN_POSITIVE &&
        yPosition >= PIXEL_MARGIN_NEGATIVE &&
        !foundStickyPosition
      ) {
        setFoundStickyPosition(true);
        setPositionalYOffset(scrollDistance);
      }
    };

    getYPosition();

    window.addEventListener("resize", getYPosition);
    window.addEventListener("scroll", getYPosition);

    return () => {
      window.removeEventListener("resize", getYPosition);
      window.removeEventListener("scroll", getYPosition);
    };
  }, [setFoundStickyPosition, setPositionalYOffset, foundStickyPosition]);

  return (
    <div className="p-10 w-screen h-screen" ref={ref}>
      <div
        className={`w-full h-full rounded-3xl flex align-middle justify-between overflow-hidden relative gap-4`}
        style={{
          background: "#1D1D1F",
        }}
      >
        <div className="relative flex-1 mx-32">
          {integrationText.map((text, index) => (
            <div
              style={{
                position: "absolute",
                top:
                  -(scrollPosition - positionalYOffset) +
                  TEXT_INIT_OFFSET +
                  TEXT_SCROLL_SPACING * index,
                left: 20,
              }}
              key={index}
            >
              {text}
            </div>
          ))}
        </div>

        <div className="flex-1 flex-col flex justify-center items-center">
          <div
            className="flex items-center flex-col justify-center w-96 h-96 rounded-xl mr-16"
            style={{
              background:
                "linear-gradient(176deg, rgba(224, 223, 226, 0.07) 0%, rgba(234, 233, 237, 0.03) 100%)",
              boxShadow:
                "0px 0px 16px -4px rgba(0, 0, 0, 0.50), 0px 1px 2px 0px #525154 inset",
              height: 600,
              width: 600,
            }}
          >
            <p> Code snipet lives here </p>
            <p> Also do animation based on scroll </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;

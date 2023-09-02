import React, { useEffect, useState } from "react";

interface ICallToActionCardProps {
  marginY?: number;
}

const CallToActionCard: React.FC<ICallToActionCardProps> = ({ marginY }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Due to z-indexing weirdness we need to make separate "padding" components that hides the text on scroll
  return (
    <>
      <div
        className="sticky z-20 w-screen top-0"
        style={{
          height: marginY ?? 30,
          background: "black",
        }}
      />
      <div
        className={`w-full px-10 sticky rounded-3xl flex`}
        style={{
          height: windowHeight - 2 * (marginY ?? 30),
          top: marginY ?? 30,
        }}
      >
        <div
          className="rounded-3xl flex items-middle justify-between overflow-hidden gap-4 flex-1"
          style={{
            background: "#1D1D1F",
          }}
        >
          <div className="flex-1"></div>

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
              <p> Code snipet lives here </p>{" "}
              <p> Also do animation based on scroll. </p>
              <p> You can do this by doing a query for the scroll position. </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sticky z-20 w-screen"
        style={{
          height: marginY ?? 30,
          top: windowHeight - (marginY ?? 30),
          background: "black",
        }}
      />
    </>
  );
};

export default CallToActionCard;

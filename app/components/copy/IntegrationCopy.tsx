export const integrate_this_evening_text = (
  <p style={{ color: "white", fontSize: 32 }}>
    Integrate into your project this{" "}
    <span
    // style={{
    //   backgroundClip: "text",
    //   WebkitTextFillColor: "transparent",
    //   WebkitBackgroundClip: "text",
    //   background:
    //     "var(--Orange-Gradient, linear-gradient(236deg, color(display-p3 0.925 0.6745 0.3237) 15.88%, color(display-p3 0.85 0.4817 0.2975) 50.17%, color(display-p3 0.85 0.2975 0.2975) 86.68%))",
    // }}
    >
      evening
    </span>
    .
  </p>
);

export const import_wallet_text = (
  <p style={{ color: "white", fontSize: 32 }}>
    Import Wallet from{" "}
    <span
    // style={{
    //   backgroundClip: "text",
    //   WebkitTextFillColor: "transparent",
    //   WebkitBackgroundClip: "text",
    //   background:
    //     "linear-gradient(90deg, color(display-p3 0.851 0.298 0.5966) 0.03%, color(display-p3 0.851 0.298 0.37) 22.81%, color(display-p3 0.851 0.298 0.298) 33.09%)",
    // }}
    >
      FunKit
    </span>
    .
  </p>
);

// In theory this gradient should be working but I think webkit is broken somehow
export const create_wallet_text = (
  <p style={{ color: "white", fontSize: 28 }}>
    Create your{" "}
    <span
      style={{
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        background:
          "linear-gradient(270deg, color(display-p3 0.28 0.5504 0.8) -2.19%, color(display-p3 0.5712 0.28 0.8) 43.69%)",
      }}
    >
      wallet
    </span>
    .
  </p>
);

export const integrationText = [
  integrate_this_evening_text,
  import_wallet_text,
  create_wallet_text,
];

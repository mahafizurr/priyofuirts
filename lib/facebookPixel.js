// lib/facebookPixel.js

export const initFacebookPixel = (pixelId) => {
  if (typeof window !== "undefined") {
    import("react-facebook-pixel")
      .then((ReactPixel) => {
        ReactPixel.init(pixelId, {
          autoConfig: true,
          debug: false,
        });
        ReactPixel.pageView();
      })
      .catch((error) => console.error("Failed to load Facebook Pixel", error));
  }
};

export const trackPageView = () => {
  if (typeof window !== "undefined") {
    import("react-facebook-pixel")
      .then((ReactPixel) => {
        ReactPixel.pageView();
      })
      .catch((error) => console.error("Failed to load Facebook Pixel", error));
  }
};

export const trackEvent = (event, data) => {
  if (typeof window !== "undefined") {
    import("react-facebook-pixel")
      .then((ReactPixel) => {
        ReactPixel.track(event, data);
      })
      .catch((error) => console.error("Failed to load Facebook Pixel", error));
  }
};

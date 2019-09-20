module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-plugin-pxtoviewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [],
      propList: [],
      minPixelValue: 0,
      mediaQuery: false,
      rootValue: 16,
      toRem: false,
      toViewport: true,
      isSavePx: false
    }
  }
};

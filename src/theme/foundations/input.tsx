// "use client";
// import { inputAnatomy } from "@chakra-ui/anatomy";
// import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// const { definePartsStyle, defineMultiStyleConfig } =
//   createMultiStyleConfigHelpers(inputAnatomy.keys);

// const baseStyle = definePartsStyle({
//   field: {
//     height: "60px",
//     borderRadius: "10px",
//     color: "black.300",
//     background: "gray.200",
//     fontSize: "15px",
//     fontWeight: "normal",
//     _placeholder: {
//       color: "gray",
//       fontWeight: "normal",
//       fontSize: "18px",
//     },
//   },
// });

// export const inputTheme = defineMultiStyleConfig({ baseStyle });

import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  field: {
    height: "60px",
    borderRadius: "10px",
    color: "black.300",
    background: "#E2E2E2",
    fontSize: "15px",
    fontWeight: "normal",
    _placeholder: {
      color: "gray",
      fontWeight: "normal",
      fontSize: "18px",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });

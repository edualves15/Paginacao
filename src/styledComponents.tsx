import React, { FC } from "react";
import { Flex, FlexProps } from "@react-yuki/ui";

export const SlideContainer: FC<FlexProps> = props => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem"
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1
      }
    }}
  />
);

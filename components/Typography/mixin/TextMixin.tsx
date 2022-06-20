import { css } from "styled-components";

const possibleTextTransform = ["capitalize", "lowercase", "uppercase"];
const possibleFontWeight = ["bold", "bolder", "lighter", "normal"];
const possibleAlignments = ["left", "right", "center"];

export const textMixin = (props: any) => css`
  ${Object.keys(props).reduce((fields: any, property) => {
    if (possibleTextTransform.includes(property)) {
      return [...fields, `text-transform: ${property};`];
    }

    if (possibleFontWeight.includes(property)) {
      return [...fields, `font-weight: ${property};`];
    }

    if (possibleAlignments.includes(property)) {
      return [...fields, `text-align: ${property};`];
    }

    return fields;
  }, [])}
`;

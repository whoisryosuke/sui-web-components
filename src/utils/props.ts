const namespace = "sui";
const unit = "em";
const breakpoints = ["desktop", "tablet", "mobile"];

const convertNumToPercent = number => {
  if (typeof number == "number") {
    return `${Math.floor(number * 100)}%`;
  }
  return number;
};

/**
 * Checks if value is number and create spacing calculation
 * Or return value if possible CSS property (px/em)
 * @param number Component prop
 */
const convertNumToUnit = number => {
  if (
    typeof number === "number" ||
    (typeof number === "string" &&
      (!number.includes("px") || !number.includes("em")))
  ) {
    return `var(--${namespace}-spacing-${number})`;
  }
  return number;
};

/**
 * Takes string and returns CSS var
 * @param string CSS custom property name
 */
const convertStringToVar = string => `var(--${namespace}-[${string}])`;

export function setCustomProperty(componentName, prop, propName, elementStyle) {
  if (prop !== undefined) {
    return elementStyle.setProperty(
      `--${namespace}-${componentName}-${propName}`,
      prop
    );
  }
}

export function convertProps

/**
 * Sets CSS custom properties on component using elementStyle
 * Checks if prop is array, then loops to set CSS Custom Props
 * Converts any numbers to units based on prop name/type
 *
 * @param componentName
 * @param prop
 * @param propName
 * @param elementStyle
 */
export function responsiveProps(componentName, prop, propName, elementStyle) {
  const customProperty = `--${namespace}-${componentName}-${propName}`;
  // Convert width/height to percent
  // Or convert to unit (em/px)
  const conversion =
    propName === "width" || propName === "height"
      ? convertNumToPercent
      : convertNumToUnit;

  

  // Check if prop is an array we can loop through
  // Or sets prop to CSS var by default
  if (prop && (Array.isArray(prop) || typeof prop === "object")) {
    // Loop through array and set CSS vars
    prop.reverse().map((currentValue, index) => {
      elementStyle.setProperty(
        `${customProperty}-${breakpoints[index]}`,
        conversion(currentValue)
      );
      // Sets last array value to default breakpoint prop value
      if (prop.length - 1 === index) {
        elementStyle.setProperty(`${customProperty}`, conversion(currentValue));
      }
    });
  } else if (
    typeof prop === "string" &&
    (!prop.includes("px") || !prop.includes("em"))
  ) {
    elementStyle.setProperty(`${customProperty}`, conversion(prop));
  } else if (prop !== undefined) {
    elementStyle.setProperty(`${customProperty}`, prop);
  }
}

// Sizing

export function width(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "width", elementStyle);
}

export function maxWidth(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "max-width", elementStyle);
}

export function minWidth(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "min-width", elementStyle);
}

export function height(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "height", elementStyle);
}

export function maxHeight(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "max-height", elementStyle);
}

export function minHeight(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "min-height", elementStyle);
}

export function padding(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "padding", elementStyle);
}

export function margin(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "margin", elementStyle);
}

// Font

export function fontSize(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "font-size", elementStyle);
}

export function textAlign(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "text-align", elementStyle);
}

export function lineHeight(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "line-height", elementStyle);
}

export function fontWeight(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "font-weight", elementStyle);
}

export function letterSpacing(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "letter-spacing", elementStyle);
}

// Color

export function color(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "color", elementStyle);
}

export function bg(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "background-color", elementStyle);
}

// Border

export function border(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border", elementStyle);
}

export function borderTop(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-top", elementStyle);
}

export function borderBottom(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-bottom", elementStyle);
}

export function borderLeft(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-left", elementStyle);
}

export function borderRight(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-right", elementStyle);
}

export function borderWidth(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-width", elementStyle);
}

export function borderStyle(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-style", elementStyle);
}

export function borderColor(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-color", elementStyle);
}

export function borderRadius(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "border-radius", elementStyle);
}

// Position

export function display(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "display", elementStyle);
}

export function position(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "position", elementStyle);
}

export function zIndex(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "z-index", elementStyle);
}

export function top(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "top", elementStyle);
}

export function bottom(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "bottom", elementStyle);
}

export function left(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "left", elementStyle);
}

export function right(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "right", elementStyle);
}

// Flex values

export function alignItems(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "align-items", elementStyle);
}

export function alignContent(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "align-content", elementStyle);
}

export function justifyContent(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "justify-content", elementStyle);
}

export function flexWrap(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "flex-wrap", elementStyle);
}

export function flexDirection(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "flex-direction", elementStyle);
}

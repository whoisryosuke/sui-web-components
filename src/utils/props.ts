const namespace = "sui";
const unit = "em";
const breakpoints = ["desktop", "tablet", "mobile"];

const convertNumToPercent = number => {
  if (typeof number == "number") {
    return `${Math.floor(number * 100)}%`;
  }
  return number;
};

const convertNumToUnit = number => {
  if (
    typeof number === "string" &&
    (!number.includes("px") || !number.includes("em"))
  ) {
    console.log(
      "number detected",
      `calc(var(--sui-spacing-${number}) * 1${unit})`
    );
    return `calc(var(--sui-spacing) * ${number} * 1px)`;
  }
  return number;
};

const convertStringToVar = string => `var(--sui-[${string}])`;

export function setCustomProperty(componentName, prop, propName, elementStyle) {
  if (prop !== undefined) {
    return elementStyle.setProperty(
      `--${namespace}-${componentName}-${propName}`,
      prop
    );
  }
}

export function responsiveProps(componentName, prop, propName, elementStyle) {
  const customProperty = `--${namespace}-${componentName}-${propName}`;
  console.log(componentName, prop, propName, typeof prop);
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
    console.log("prop is number", prop, propName);
    elementStyle.setProperty(`${customProperty}`, conversion(prop));
  } else if (prop !== undefined) {
    elementStyle.setProperty(`${customProperty}`, prop);
  }
}

export function width(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "width", elementStyle);
}

export function height(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "height", elementStyle);
}

export function padding(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "padding", elementStyle);
}

export function margin(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "margin", elementStyle);
}

export function fontSize(componentName, prop, elementStyle) {
  responsiveProps(componentName, prop, "font-size", elementStyle);
}

export function color(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "color", elementStyle);
}

export function bg(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "background-color", elementStyle);
}

export function display(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "display", elementStyle);
}

export function alignItems(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "align-items", elementStyle);
}

export function alignContent(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "align-content", elementStyle);
}

export function flexWrap(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "flex-wrap", elementStyle);
}

export function flexDirection(componentName, prop, elementStyle) {
  setCustomProperty(componentName, prop, "flex-direction", elementStyle);
}

module.exports = function (prevDoc) {
  const { stylings = {}, ...rest } = prevDoc;
  const {
    colourByField,
    colourPalettes,
    defaultColour,
    defaultShape,
    fieldsColourPalettes,
    labelByField,
    legendDirection,
    shapeByField,
    shapePalettes,
  } = stylings;

  const nextDoc = {
    ...rest,
    styles: {
      coloursField: colourByField,
      colourPalettes,
      defaultColour,
      defaultShape,
      colourSettings: (
        Object.entries(fieldsColourPalettes || {}).reduce(
          (colourSettings, [ field, palette ]) => {
            colourSettings[field] = { palette };
            return colourSettings;
          },
          {},
        )
      ),
      labelsField: labelByField,
      legendDirection,
      shapesField: shapeByField,
      shapePalettes,
    },
  };

  return nextDoc;
};

module.exports = function (prevDoc) {
  const nextDoc = { ...prevDoc };

  for (const mapState of Object.values(nextDoc.maps || {})) {
    mapState.dataType = mapState["map-type"];
    mapState["map-type"] = undefined;

    mapState.longitudeField = mapState.fields.longitude;
    mapState.latitudeField = mapState.fields.latitude;
    mapState.iso3166Field = mapState.fields.value;
    mapState.iso3166Subdivisions = mapState.fields.subdivisions;
    mapState.fields = undefined;
  }

  for (const timelineState of Object.values(nextDoc.timelines || {})) {
    timelineState.dataType = timelineState.type;
    timelineState.type = undefined;

    timelineState.yearField = timelineState.fields?.year;
    timelineState.monthField = timelineState.fields?.month;
    timelineState.dayField = timelineState.fields?.day;
    timelineState.valueField = timelineState.fields?.value;
    timelineState.fields = undefined;
  }

  return nextDoc;
};

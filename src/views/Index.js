import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Modal, ModalBody
} from "reactstrap";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import RadialControl from "components/Control/RadialControl";

am4core.useTheme(am4themes_animated);

const Index = (props) => {
  const [privacyModal, setPrivacyModal] = useState(true);

  useEffect(() => {
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    try {
      chart.geodata = am4geodata_worldLow;
    }
    catch (e) {
      console.log(e);
    }

    var gradient = new am4core.LinearGradient();

    gradient.addColor(am4core.color("#D91D7A", 1, 1));
    gradient.addColor(am4core.color("#68B0BD", 1, 1));
    gradient.cx = am4core.percent(100);
    gradient.cy = am4core.percent(100);
    gradient.gradientUnits = "userSpaceOnUse";

    chart.projection = new am4maps.projections.Miller();
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    chart.fill = gradient;
    polygonSeries.useGeodata = true;

    polygonSeries.exclude = ["AQ"];

    polygonSeries.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.strokeWidth = 0;
    polygonTemplate.fill = gradient;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#6887AA");
  }, []);

  const onAccept = () => {  // Accept processing
    setPrivacyModal(false);
  }
  const onReject = () => {  // Reject processing
    setPrivacyModal(false);
  }

  return (
    <>
      <div className="map_wrap">
        <div id="chartdiv"></div>
      </div>

      <RadialControl />

      {/* Privacy modal */}
      <Modal className="privacyModal" toggle={() => setPrivacyModal(true)} isOpen={privacyModal}>
        <ModalBody className="m-1">
            <img alt="Logo" src={require("assets/img/theme/privacypolicy.png").default} />
            <p className="privacy--msg m-3">
              This website uses cookies to help personalize content and improve your experiences. 
              By clicking on or navigating this website you are agreeing to allow us to collect information through cookies: Cookie policy. 
              At any time you can opt-out if you wish.
            </p>
            <div className="privacy--btn m-3">
              <Button className="btn-primary col-3 m-2" color="primary" type="button" onClick={() => onAccept()}>Accept</Button>
              <Button className="btn-primary col-3 m-2" color="primary" type="button" onClick={() => onReject()}>reject</Button>
            </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Index;

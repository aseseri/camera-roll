import './index.css';
import Map from 'ol/Map.js';
//import {setView} from "ol/Map.js";
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {fromLonLat} from 'ol/proj.js';
import "./index.js";

let popupImage = document.querySelector(".popup img");
let popupImageSrc = popupImage.getAttribute("src");
const coordinates = {
  "icons/images/aliso-and-wood-canyon-wilderness-trail.JPEG": [-117.73148887071179,33.513842066484614],
  "icons/images/badlands-trail.JPEG": [-117.733404,33.500900],
  "icons/images/cave.JPEG": [-117.744279,33.551659],
  "icons/images/dana-point-docks.JPEG": [-117.710443,33.461182],
  "icons/images/dana-point-rocks.JPEG": [-117.715014,33.460398],
  "icons/images/dartmoor-trail.JPEG": [-117.802112,33.554849],
  "icons/images/hollywood-sign.JPEG": [-118.32603306004222,34.12584788335869],
  "icons/images/malibu-pch.JPEG": [-118.50803601458188,34.021335462175266],
  "icons/images/ovation-hollywood.JPEG": [-118.33997091047351,34.1017962904816],
  "icons/images/water-lantern-festival.JPEG": [-118.057421,34.033764]
}

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',  // map id of selector
  view: new View({
    center: fromLonLat(coordinates[popupImageSrc]),
    zoom: 16,
  }),
});

popupImage.addEventListener("open-popup",()=>{
  console.log("Entered open-popup event");
  popupImage = document.querySelector(".popup img");
  popupImageSrc = popupImage.getAttribute("src");
  map.getView().setCenter(fromLonLat(coordinates[popupImageSrc]));
  map.getView().setZoom(16);
});
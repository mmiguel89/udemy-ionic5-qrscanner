import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {
  lat: number;
  lng: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.activatedRoute.snapshot.paramMap.get("geo");
    geo = geo.substr(4);
    geo = geo.split(",");
    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
  }

  ngAfterViewInit() {
    // Map
    const MapBoxGl = require('mapbox-gl/dist/mapbox-gl.js');
    let map = new MapBoxGl.Map({
      accessToken: 'pk.eyJ1IjoibW1pZ3VlbDg5IiwiYSI6ImNrdWQybWJ5ajBtbnQycG85Nm4ydGo1cmMifQ.5pssOGsU1WGiEerIiVfbNw',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 10,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });
    map.on('load', () => {
      map.resize();
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;
      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
    // Marker
    new MapBoxGl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(map);
  }
}
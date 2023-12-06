import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customMarkerIcon = L.icon({
    iconUrl: '/leaflet-images/marker-icon.png',
    iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
    shadowUrl: '/leaflet-images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


export default function MyMap() {
    const position = [45.177065, 14.7041295];

    return (
    <section className="relative z-0">
        <section className="map-container relative w-full py-60 p-4 border-2 border-red-200 dark:border-sky-700">
            <MapContainer
                center={position}
                zoom={15}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customMarkerIcon}></Marker>

            </MapContainer>
        </section>
    </section>
    );
};
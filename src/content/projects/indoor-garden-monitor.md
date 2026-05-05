---
title: "Indoor Garden Monitor"
summary: "Indoor-garden control system built around a custom ESP32 PCB, with sensors, actuators, and a Home Assistant dashboard tying it together."
start: "2024-03"
end: "2024-08"
tech: ["ESP32", "C++", "PCB Design", "Home Assistant", "MQTT"]
links: []
order: 4
draft: false
---

Monitored temperature, humidity, tVOC (CO₂), soil moisture, and PPFD;
delivered water from a 5-gallon reservoir via pumps and solenoid valves;
ran a dehumidifier on a relay; and pulled in a Wyze camera feed. Designed
a PCB that integrates the ESP32, ADCs, shift registers, and relays into a
single board so the whole system could be managed from one Home Assistant
dashboard.

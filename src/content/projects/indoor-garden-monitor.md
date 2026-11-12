---
title: "Indoor Garden Monitor"
summary:
  "Indoor-garden control system built around a custom ESP32 PCB, with sensors,
  actuators, and a Home Assistant dashboard tying it together."
year: 2024
tech: ["ESP32", "C++", "PCB Design", "Home Assistant", "MQTT"]
links: []
highlight: "Developed a PCB and firmware to monitor indoor conditions"
order: 5
draft: false
---

I like growing plants, and for a time I was really honing in on how to maximize
the growth of a plant. I would get custom nutrients, I learned how to properly
supplement and ph-balance water, how to listen to what the plants need and not
give it too much either, etc.

So, when I was in New York for my second Capital One internship, I still wanted
to be able to monitor my plants and water them if I needed to. So I decided to
move my plants indoors, where they could be controlled more, and I designed a
system that would monitor the conditions of the environment, and be able to
modify them as I saw fit.

So I looked at the conditions I would need to monitor and control. Temperature,
humidity, soil moisture, CO₂, and light intensity (PPFD). By using sensors such
as the SCD41, BME280, photoresistors, and capacitive soil meters, I was able to
fulfill those requirements. Then, I had to be able to control them. Controlling
CO₂ was kinda out of the question, because other than opening a window you
couldn't really do anything about it, unless you wanted to experiment with
canisters or dry ice. Controlling PPFD was sort of unattainable as well, since
no indoor lights have a pin you can communicate with to dim, so I would have had
to open the fixtures, and I didn't feel like running that risk/voiding that
warranty. But I was able to control humidity with a humidifier/dehumidifier,
temperature with fans & a space heater, and soil moisture using the
aforementioned meters.

The soil moisture was the hardest (and most fun) part actually, because to
change that I had to water the plant. What I did was design a system based on a
5-gallon bucket. I had two pumps in the bucket: one to mix up the water, and one
to water the plant. They have setups for this where you can sort of use a
sprinkler system to run tubes along the ground of your garden with black tubes
and t-joints and spouts, allowing you to choose where you would like to water a
plant. Since I was working in an indoor tent, I did not have the ability to use
a system like that, but I was able to take the attachments and hook them up to
one of the water pumps, allowing me to use the tubing system.

Someone would think that just connecting the piping and using relays to control
when the pumps operated would be enough, but they would be hit with the siphon
effect, where the spout keeps pouring until it equalizes with the water line,
which could drown your plant, or flood the environment with humidity which could
lead to mold. So I had to use relays and solenoid valves: I used one for the
spout end, making sure water was cut off when I wanted it to be cut off, and one
inside the bucket that would siphon the water that was in the tube back out,
preventing anything from growing inside the system.

I ended up designing a PCB for this too, which would centralize the sensors,
meter connections, relays, and even USB-PD/120V power delivery to the relays.
Ultimately, I decided that focusing on my education and career opportunities was
more important, but I do plan on coming back to this project to see what can be
improved on.

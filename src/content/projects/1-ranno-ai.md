---
title: "Ranno.ai: Safe Route Agent"
description: "Built an on-device AI agent with Chrome Prompt API and Gemini Nano to parse natural-language requests into structured intents, then combined Google Maps with San Francisco crime and municipal amenity data to generate personalized, safety-aware routes."
tags: ["Gemini Nano", "Chrome Prompt API", "Google Maps API", "TypeScript"]
date: "Oct 2025"
repoUrl: "https://github.com/TomChen01/ranno.ai"
publishDate: 2025-10-15
---

<figure>
  <a href="/projects/1-ranno-ai/architecture.png" target="_blank" rel="noopener noreferrer" aria-label="Open architecture diagram at full size">
    <img src="/projects/1-ranno-ai/architecture.png" alt="Route generation, followed by route risk analysis and nearby amenities." width="1752" height="897" loading="eager" decoding="async" />
  </a>
  <figcaption>Route generation, followed by route risk analysis and nearby amenities. <a href="/projects/1-ranno-ai/architecture.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>


## The problem
Route planning needs more than a destination when a user also cares about nearby amenities and the surrounding environment. Ranno.ai connects natural-language requests to a structured route-planning workflow.

## My contribution
I implemented on-device natural-language understanding with the Chrome Prompt API and Gemini Nano, translating user requests into structured intents. I also worked on the route-planning and interaction system with React and TypeScript, combining Google Maps with San Francisco crime-event and municipal-amenity data.

## Key design
The structured intent acts as the handoff between language understanding and route planning. This separates interpreting a request from querying map and contextual data, so the route workflow can use explicit inputs rather than free-form model output.

## Implemented route flow
The inspected implementation resolves an origin, constructs loop waypoints, optionally inserts nearby water or restroom stops, and requests a route from Google Directions. It then computes a crime-data-based risk summary and identifies amenities near the returned path for presentation.

In this implementation, the risk summary is computed after route generation. It should not be described as a demonstrated crime-aware path optimizer.

## Outcome and scope
The project connects request interpretation, contextual data, and route presentation in an interactive application. “Safety-aware” describes the use of contextual information; it is not a validated guarantee that a suggested route is safer.

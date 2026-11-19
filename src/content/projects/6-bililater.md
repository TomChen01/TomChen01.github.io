---
title: "BiliLater: AI-Powered Watch Later Organizer"
description: "Built a local-first Chromium extension that organizes Bilibili Watch Later videos into AI-generated topics, with support for seven model providers. Added collection visualizations, manual categorization, resumable processing, and user-confirmed cleanup, with settings and classification results stored locally."
tags: ["JavaScript", "Chrome Manifest V3", "LLM", "Local-First"]
date: "Sep 2026"
repoUrl: "https://github.com/TomChen01/bililater"
publishDate: 2026-09-20
---

<figure>
  <a href="/projects/6-bililater/architecture.png" target="_blank" rel="noopener noreferrer" aria-label="Open architecture diagram at full size">
    <img src="/projects/6-bililater/architecture.png" alt="Progressive title, metadata, and subtitle classification, with checkpoints and manual overrides." width="1752" height="897" loading="eager" decoding="async" />
  </a>
  <figcaption>Progressive title, metadata, and subtitle classification, with checkpoints and manual overrides. <a href="/projects/6-bililater/architecture.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>


## The problem
A growing Bilibili Watch Later list becomes difficult to browse by topic. BiliLater turns that queue into a collection that users can classify, inspect, and organize.

## What I built
I built a Chromium extension using JavaScript and Chrome Manifest V3. It supports AI-generated topic grouping with seven model providers, collection visualizations, and manual categorization.

## The interaction flow
1. Classify Watch Later videos into topics with a selected model provider.
2. Inspect the collection and adjust categories manually.
3. Resume interrupted processing when needed.
4. Review and confirm cleanup actions before they are applied.

## Progressive classification
The implementation first selects new or changed videos and discovers candidate topics before constructing the topic catalog. Classification then proceeds through titles, additional metadata, and subtitles. Only uncertain items advance to the next evidence stage.

Responses are validated against the catalog. Manual overrides take precedence, and local checkpoints allow deferred work to resume. This concentrates deeper processing on the items that need it instead of retrieving subtitles for the entire collection.

## Key design
Settings and classification results are stored locally. Manual categorization keeps the user in control of the organization, while resumable processing supports longer classification tasks.

Local storage describes where settings and results persist; it does not mean that all model inference runs on the device.

## Deliverable
The result is a browser extension that combines topic classification, collection exploration, and user-confirmed organization. The repository provides the implementation and usage information.

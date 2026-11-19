---
title: "LLM Polysemanticity Study"
description: "Designed a Pythia-6.9B evaluation framework using causal tracing and collision analysis to locate polysemantic neurons and compare the collateral damage of neuron-level FiNE editing with layer-level ROME editing."
tags: ["PyTorch", "Model Editing", "Causal Tracing", "Transformers"]
date: "Nov 2025 – Dec 2025"
repoUrl: "https://github.com/pekingappG/CS182-Project"
publishDate: 2025-12-10
---

<figure>
  <a href="/projects/2-model-editing/architecture.png" target="_blank" rel="noopener noreferrer" aria-label="Open architecture diagram at full size">
    <img src="/projects/2-model-editing/architecture.png" alt="Conceptual experimental design comparing neuron-level and layer-level editing. This illustration is not a reconstruction of the original code." width="1752" height="897" loading="eager" decoding="async" />
  </a>
  <figcaption>Conceptual experimental design comparing neuron-level and layer-level editing. This illustration is not a reconstruction of the original code. <a href="/projects/2-model-editing/architecture.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>


## Research question
When a language model is edited to change one fact, what happens to unrelated knowledge that shares the same internal representations? This project investigates that question through polysemanticity: neurons that participate in more than one concept.

## My contribution
I independently designed and built an experimental framework around Pythia-6.9B. I used causal tracing and collision analysis to locate polysemantic neurons, then compared neuron-level FiNE editing with layer-level ROME editing.

## Experimental focus
The comparison examines collateral effects on non-target knowledge alongside the intended edit. The aim is to understand the tradeoff between targeted changes and robustness, rather than judging an edit only by whether the requested fact changes.

## Outcome and scope
The work produced an experimental framework and a comparison of the two editing approaches within the project’s setup. Findings from this setup should not be interpreted as a universal ranking of the methods.

---
title: "SkinGPT-X: Medical LLM Evaluation and Memory"
description: "Built a medical-model evaluation framework and contributed to a self-evolving memory mechanism that combines historical cases with iterative diagnostic guidance."
tags: ["Medical AI", "LLM Evaluation", "Memory", "RAG"]
date: "Dec 2025 – Apr 2026"
publishDate: 2025-12-01
---

<figure>
  <a href="/projects/skingpt-x/fig1.png" target="_blank" rel="noopener noreferrer" aria-label="Open Figure 1 at full size">
    <img src="/projects/skingpt-x/fig1.png" alt="SkinGPT-X architecture: visual findings, diagnostic hypotheses, medical knowledge and historical cases feed case review; confirmed cases support memory evolution." width="1144" height="1600" loading="eager" decoding="async" />
  </a>
  <figcaption>System overview and self-evolving diagnostic memory. Source: <a href="https://arxiv.org/html/2603.26122v1" target="_blank" rel="noopener noreferrer">SkinGPT-X, Fig. 1</a> · <a href="/projects/skingpt-x/fig1.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>

## Research problem
Medical language models can struggle with complex and low-confidence cases. Understanding those failures is important when designing mechanisms that help a model revisit its initial diagnosis.

## My contribution
I was responsible for the evaluation framework, comparing models including Qwen3, MedGemma, and HuLuMed. Through error analysis of complex and low-confidence cases, I identified a tendency to favor common diseases, which informed the exploration of memory-based support.

I also contributed substantially to the design and implementation of the self-evolving memory mechanism, including historical-case retrieval and iterative updates to diagnostic guidance.

## How the approach works
The memory mechanism brings prior case experience into diagnostic review. It works alongside the system’s retrieval of medical knowledge, combining case-based experience with supporting knowledge rather than treating them as interchangeable sources.

Memory knowledge can be updated without retraining the model parameters.

## Evaluating the memory mechanism
The paper evaluates the memory mechanism through comparisons with a memory-free baseline, diagnostic-guideline evolution, and physician review. The figure below reports results from the collaborative research project.

<figure>
  <a href="/projects/skingpt-x/fig5.png" target="_blank" rel="noopener noreferrer" aria-label="Open Figure 5 at full size">
    <img src="/projects/skingpt-x/fig5.png" alt="Memory ablation on Fitzpatrick-17k and DermNet498, diagnostic-guideline evolution timeline, and physician evaluation." width="1810" height="1708" loading="lazy" decoding="async" />
  </a>
  <figcaption>Memory ablation, guideline evolution, and physician evaluation. Source: <a href="https://arxiv.org/html/2603.26122v1" target="_blank" rel="noopener noreferrer">SkinGPT-X, Fig. 5</a> · <a href="/projects/skingpt-x/fig5.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>

## Research scope
My work focused on evaluation and memory design and implementation within the broader research project. This page does not attribute the entire system to me or report an unverified improvement on the complex-case subset.

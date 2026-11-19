---
title: "CardioFormer: Clinical Imputation and Troponin Trends"
description: "Adapting pretrained MedBERT for eight clinical-field reconstruction tasks and five time-bucketed troponin direction outputs."
tags: ["Medical AI", "EHR", "Model Adaptation", "Evaluation"]
date: "Apr 2026 – Present"
publishDate: 2026-04-01
---

<figure>
  <a href="/projects/8-cardioformer/architecture.png" target="_blank" rel="noopener noreferrer" aria-label="Open architecture diagram at full size">
    <img src="/projects/8-cardioformer/architecture.png" alt="Two independent MedBERT adaptations: eight clinical-field reconstruction tasks and five troponin direction outputs." width="1754" height="897" loading="eager" decoding="async" />
  </a>
  <figcaption>Two independent MedBERT adaptations: eight clinical-field reconstruction tasks and five troponin direction outputs. <a href="/projects/8-cardioformer/architecture.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>


## Current research questions
The current work focuses on two tasks: reconstructing masked categorical clinical fields and predicting whether the next measured troponin value will rise or fall, evaluated across five follow-up time buckets.

## MedBERT adaptation
The implementation starts from a verified external MedBERT checkpoint. Task-specific linear projections and learned field or position embeddings map the inputs into a 192-dimensional representation. A learned classification token summarizes the encoded sequence for the output layer.

The two branches are independently adapted from the same checkpoint. The last encoder layer and newly added input and output modules are fine-tuned in the inspected configuration; the imputation outputs are not fed into the troponin model.

## Eight clinical-field tasks
The reconstruction branch jointly trains a four-class Killip output and seven binary medical-history outputs: hypertension, type 2 diabetes, hyperlipidemia, atrial fibrillation, cancer, cerebrovascular disease, and prior myocardial infarction. These occupy 18 logits in a shared linear output layer, with task-specific slices and cross-entropy losses.

Inputs include available clinical values and availability indicators. For a history reconstruction target, both its value and availability indicator are masked. HbA1c is retained as an input following paired development experiments; history reconstruction is evaluated in a retrospective, post-examination setting.

## Five troponin outputs
The direction branch uses the latest 16 valid observations from the current encounter. Each observation encodes the transformed troponin-to-reference-limit ratio, the preceding time gap, and a valid-position flag.

A five-logit output layer supports separate conditional probabilities for the next measurement increasing within the five follow-up intervals: 0-6, 6-12, 12-24, 24-48, and more than 48 hours. Only the actual next-test interval supplies the binary training loss; ties are excluded from the direct direction analysis. Per-bucket calibration uses a separate patient partition.

## Evaluation design
Clinical-field reconstruction is evaluated through artificial single-cell masking. Naturally missing fields are treated separately: their missingness can be described, but their unknown values cannot be counted as ground-truth accuracy.

Troponin prediction is conditioned on an available repeat measurement. Patient partitions and task-specific input boundaries are kept consistent to reduce leakage, and the independent test set remains held out.

## My work and current status
My work concerns medical-model adaptation and prediction modules within the broader CardioFormer research effort. The latest implementation records document completed development experiments and ongoing candidate and evaluation review. Earlier plans for sequential examination scoring are separate from the current two-task scope.

This overview reports the research setup rather than final clinical performance. It does not claim validated clinical safety or deployment.

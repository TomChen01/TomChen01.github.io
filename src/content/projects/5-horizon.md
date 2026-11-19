---
title: "Horizon: Personalized AI News Radar"
description: "Contributed an asynchronous Python workflow for multi-source ingestion, deduplication, LLM importance scoring, summarization, and webhook delivery. Designed the Balanced Digest selection strategy, combining LLM scores with category quotas to control topic coverage and downstream processing scope."
tags: ["Python", "Async Workflows", "LLM", "Webhooks"]
date: "Jun 2026"
repoUrl: "https://github.com/Thysrael/Horizon"
publishDate: 2026-06-01
---

## The problem
A personalized news digest needs to balance relevance with coverage. Selecting only the highest-scoring stories can allow one topic to dominate, while processing every candidate adds unnecessary downstream work.

## My contribution
I contributed an asynchronous Python workflow connecting multi-source ingestion, deduplication, LLM importance scoring, summarization, and webhook delivery. I also designed the Balanced Digest selection strategy.

## Balanced Digest
The strategy combines model scores with category quotas and a total digest-size limit. Scores guide relevance, while the quotas control the mix of topics so that a single category does not crowd out the rest.

Selection happens before content enrichment, limiting the set of articles passed to later processing stages. This makes the processing order part of the design, alongside the ranking policy.

## Outcome and scope
My contribution concerns the news-processing workflow and digest-selection strategy within the wider project. The design controls digest composition and downstream processing scope; no quantified cost reduction or coverage improvement is claimed here.

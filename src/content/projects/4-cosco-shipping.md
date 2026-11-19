---
title: "Industry-University Collaboration with COSCO SHIPPING Technology"
description: "Led development of a commodity and shipping intelligence platform connecting vessel, port, freight-rate, and arrival information, with dashboards, controlled natural-language queries, anomaly review, and news analysis."
tags: ["FastAPI", "PostgreSQL", "LangGraph", "NL2SQL", "Maritime Data"]
date: "Jul 2026 – Sep 2026"
publishDate: 2026-07-01
---

<figure>
  <a href="/projects/4-cosco-shipping/architecture.png" target="_blank" rel="noopener noreferrer" aria-label="Open architecture diagram at full size">
    <img src="/projects/4-cosco-shipping/architecture.png" alt="Current controlled queries and parallel analysis modules, with the planned SQLBot-based next phase shown separately." width="1774" height="887" loading="eager" decoding="async" />
  </a>
  <figcaption>Current controlled queries and parallel analysis modules, with the planned SQLBot-based next phase shown separately. <a href="/projects/4-cosco-shipping/architecture.png" target="_blank" rel="noopener noreferrer">View full size</a>.</figcaption>
</figure>


## The problem
Commodity and shipping analysis draws on information spread across vessel movements, ports, freight rates, and arrivals. Analysts need a way to connect these sources and ask domain-specific questions without manually assembling every query.

## My contribution
I led development of the Hangmaobao commodity-trading intelligence platform, using FastAPI and PostgreSQL to integrate the core data sources. I built LangGraph workflows that connect data-query and analysis tools through function calling, supporting conversational analytics, sentiment analysis, and anomaly alerts.

## Current implementation
The current local trial runs on local business data. PostgreSQL is an optional integration rather than a requirement of the default runtime. The interface brings together a dashboard, route-chain views, competitor comparisons, anomaly review, natural-language queries, and news analysis.

## Controlled natural-language queries
In the current query workflow, an optional language model normalizes the user’s wording. A local rule parser then constructs and validates an allowlisted query plan, and a shared data provider executes the query. The model does not generate SQL or metric values in this implementation.

This separates language interpretation from controlled data access and makes the metric definition, time range, and source available for review.

## Next phase: SQLBot-based analytics
The planned next phase will build on [DataEase SQLBot](https://github.com/dataease/SQLBot), an open-source LLM- and RAG-based Text-to-SQL system, as the foundation for shipping-domain conversational analytics.

This is the next-phase direction, separate from the current rule-parser and query-plan implementation described above. Domain adaptation and integration remain planned work; the website does not present SQLBot integration as an already delivered capability.

## Status and scope
The implementation documentation describes an internal local-data trial. Earlier LangGraph and NL2SQL work forms part of the project history; it should not be confused with the current runtime. This page does not claim measured business impact or production deployment.

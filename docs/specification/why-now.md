# Why Now

Agentic workflows are increasingly executing real tasks with side effects.

Without deterministic guardrails, common failures include:

- unverified claims
- skipped tool calls
- unauthorized writes
- poor auditability

UAICP standardizes the reliability controls needed to make these workflows production-safe.

## First Principles

- LLM output is probabilistic.
- Workflow control must be deterministic.
- Verification must be mechanical, not self-assessed.

UAICP operationalizes these principles through contracts and invariants.

## Market Pull

UAICP is aimed at enterprise and regulated execution contexts where non-silent failure and auditability are mandatory. It is not optimized for demo-first autonomous agent showcases.

## Why a Separate Layer

Frameworks such as LangGraph, Microsoft Agent Framework runtimes, AutoGen, and CrewAI are strong orchestration systems. UAICP is the reliability governance layer that remains portable across all of them.

Without a shared contract layer, every team reinvents:

- evidence contracts
- verifier report semantics
- policy gating behavior
- conformance criteria

# Integration Overview

UAICP is designed to sit beneath existing orchestrators.

## Why This Matters

Your framework can stay unchanged for planning and tool orchestration.
UAICP adds a portable reliability contract so enterprise controls are not tied to one vendor stack.

## Integration Pattern

1. map framework context into UAICP envelope
2. normalize tool outputs as evidence objects
3. run verifier checks before delivery
4. enforce policy gates for writes

## Benefits

- keeps your existing framework
- adds deterministic reliability controls
- improves auditability and replay capability

Use adapter templates in this section to integrate with your runtime.

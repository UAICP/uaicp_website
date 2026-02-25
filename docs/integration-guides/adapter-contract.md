# Adapter Contract

Adapter implementations must provide deterministic hooks for:

- envelope creation
- evidence persistence
- verifier execution
- policy gate decisions

## Minimum Error Codes

- `EVIDENCE_MISSING`
- `VERIFICATION_FAILED`
- `POLICY_BLOCKED`
- `APPROVAL_REQUIRED`
- `TOOL_TIMEOUT`

# Workflow

### From now on, every feature follows this exact cycle to maintain a clear and organized workflow and documentation.

1. Design
   ↓
2. Update roadmap.md
   ↓
3. Implement
   ↓
4. Test manually
   ↓
5. Update api.md
   ↓
6. Update database.md (if schema changed)
   ↓
7. Record architectural decisions (if any)
   ↓
8. Commit
   ↓
9. Update milestones.md

## I recommend we adopt this process for every feature.

### Definition of Done (DoD) for every feature.

#### For example, a module is only considered complete when:

[x] Database schema (if needed) is finished.
[x] Types are defined.
[x] Service layer is implemented.
[x] Controller is implemented.
[x] Routes are added.
[x] Authentication/authorization is applied where required.
[x] API is manually tested.
[x] Documentation is updated (api.md, roadmap.md, and any other affected docs).
[x] Git commit is created.

This gives us a consistent quality bar and makes it much harder to lose track as HireFlow grows.

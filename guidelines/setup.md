## Package Installation

**CRITICAL**: You MUST explicitly install every package listed below as a direct dependency, exactly as written.

Rules:
- Even if a package is already available as a transitive dependency (i.e., installed by another package), you MUST still add it as a direct dependency. Transitive availability does NOT count as installed.
- Use the **exact** package name shown. Packages with similar names (e.g., `@scope-a/foo` vs `@scope-b/foo`, or `foo` vs `foo-core`) are **different packages** and are NOT interchangeable. Never substitute one for another.
- Do not skip any package. Do not reorder, rename, or omit any entry.

Add the following to your `package.json` dependencies:

```json
{
  "dependencies": {
    "primereact": "10.9.7"
  }
}
```

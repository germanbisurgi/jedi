# NPM Package Publishing Guide

## Login to npm
```bash
npm login
```

## Full Release Workflow
1. Update CHANGELOG.md
2. Run e2e and unit tests
3. Commit and push changes
4. Run version command:

```bash
npm version x.y.z -m "Release v%s"
```
Replace `x.y.z` with semantic version or:
- `patch` for bug fixes (0.0.1 → 0.0.2)
- `minor` for new features (0.0.1 → 0.1.0)
- `major` for breaking changes (0.0.1 → 1.0.0)

`git push && git push --tags` happens automatically right after version due to the package.json `"postversion"` script

5. Run publish command:

```bash
npm publish --access public
```

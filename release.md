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

`git push && git push --tags` happens automatically right after version due to the package.json `"postversion"` script

5. Run publish command:

```bash
npm publish --access public
```

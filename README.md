# Pull Request Enforcer

## Development

```bash
$ npm install
$ npm run build && npm run package
$ npm test
```

## Publish to a distribution branch
asdff
```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```
3
## Refferences
- [action.yml](https://help.github.com/en/articles/metadata-syntax-for-github-actions)
- [actions toolkit](https://github.com/actions/toolkit)
- [ncc](https://github.com/zeit/ncc)
- [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
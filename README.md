# Pull Request Enforcer

Enforce title and body of your pull requests via regular expressions.

```yml
name: Pullforcer (Pull Request Enforcer)
on:
  pull_request_target:
    types:
      - opened
      - reopened
      - edited
      - synchronize

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: radulle/pullforcer@v1.0.0
        with:
          title-regexp: '^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(?:\(([a-z\-\.,]+)\))?(!)?: ([0-9a-z\-\., <>()\[\]]{8,})$'
```

This title regexp would enforce all lowercase Conventional Commit with subject being at least 8 characters long.

## Development

```bash
$ npm install
$ npm run build && npm run package
$ npm test
```

## Publish to a distribution branch

```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

## Refferences
- [action.yml](https://help.github.com/en/articles/metadata-syntax-for-github-actions)
- [actions toolkit](https://github.com/actions/toolkit)
- [ncc](https://github.com/zeit/ncc)
- [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
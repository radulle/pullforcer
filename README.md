# Pull Request Enforcer

Enforce title and body of your pull requests via regular expressions.

## Usage

Add `./github/workflows/ci.yml` to your `main` branch:

```yml
name: CI
on:
  pull_request_target:
    types:
      - opened
      - reopened
      - edited
      - synchronize

jobs:
  pr:
    name: Pullforcer
    runs-on: ubuntu-latest
    steps:
      - uses: radulle/pullforcer@v1.0.0 
      # If you run locally copy action.yml and dist contents to .github/actions/pullforcer and replace previous line with:
      # - uses: actions/checkout@v3
      # - uses: ./.github/actions/pullforcer 
        with:
          pr-title-regexp: '^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(?:\(([a-z\-\.,]+)\))?(!)?: ([0-9a-z\-\., <>()\[\]]{4,})$'
```

## Width

### `pr-title-regexp`

Regular expression. `^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(?:\(([a-z\-\.,]+)\))?(!)?: ([0-9a-z\-\., <>()\[\]]{4,})$` would enforce all lowercase [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) with subject being at least 4 characters long.

### `pr-body-regexp`

Regular expression. `(\r\n.+){2}` would require body to be at least two lines long

## Development

```bash
$ npm install
$ npm run build && npm run package
```

## References
- [action.yml](https://help.github.com/en/articles/metadata-syntax-for-github-actions)
- [actions toolkit](https://github.com/actions/toolkit)
- [ncc](https://github.com/zeit/ncc)
- [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
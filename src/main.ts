import * as core from '@actions/core';
import { context } from '@actions/github';

async function run(): Promise<void> {
  try {
    const pullRequest = context.payload.pull_request;
    if (!pullRequest) {
      throw new Error(
        "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
      );
    }

    const title = pullRequest.title as string;

    const regExp = '(.*):.*';
    const validTitle = new RegExp(regExp).test(title);

    if (!validTitle)
      throw new Error(`Pull Request title does not satisfy /${regExp}/.`);

    core.setOutput('success', (validTitle === true).toString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();

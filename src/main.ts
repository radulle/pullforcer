import * as core from '@actions/core';
import { context } from '@actions/github';

async function run(): Promise<void> {
  try {
    const titleRegExp = core.getInput('title-regexp');
    const bodyRegExp = core.getInput('body-regexp');

    const pullRequest = context.payload.pull_request;
    if (!pullRequest) {
      throw new Error(
        "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
      );
    }

    const title = pullRequest.title as string;
    if (titleRegExp && !new RegExp(titleRegExp).test(title))
      throw new Error(`Pull Request title does not satisfy /${titleRegExp}/.`);
    const body = pullRequest.body as string;
    if (bodyRegExp && !new RegExp(bodyRegExp).test(body))
      throw new Error(`Pull Request body does not satisfy /${bodyRegExp}/.`);

    core.setOutput('success', 'Pull request is valid.');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();

import * as core from '@actions/core';
import { context } from '@actions/github';

async function run(): Promise<void> {
  try {
    const regExp = core.getInput('reg-exp');
    // const minLength = Math.max(Number(core.getInput('min-len')), 0);
    // const maxLength = Math.min(Number(core.getInput('max-len')), Infinity);
    console.info(context);
    const pullRequest = context.payload.pull_request;
    if (!pullRequest) {
      throw new Error(
        "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
      );
    }

    const title = pullRequest.title as string;
    // if (title.length > minLength)
    //   throw new Error(`Pull Request title must be at least ${minLength} long.`);
    // if (title.length < maxLength)
    //   throw new Error(
    //     `Pull Request title must not be longer than ${maxLength}.`
    //   );
    if (!new RegExp(regExp).test(title))
      throw new Error(`Pull Request title does not satisfy /${regExp}/.`);

    core.setOutput('success', 'Pull request is valid.');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();

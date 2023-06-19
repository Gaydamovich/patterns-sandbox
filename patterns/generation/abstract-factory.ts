abstract class GitRepository {
  abstract create(): void
  abstract delete(): void
  abstract pull(): void
}

abstract class GitIssue {
  abstract create(): void
  abstract comment(): void
  abstract close(): void
}

abstract class GitFactory {
  // for example...
  init(): void {
    const repo = this.createGitRepo()
    repo.create()
    const issue = this.createGitIssue()
    issue.create()
    console.log('Your app has been initialized!!!')
  }

  abstract createGitRepo(): GitRepository
  abstract createGitIssue(): GitIssue
}

class GitHubRepository extends GitRepository {
  create() {
    console.log('GitHub repo created!')
  }
  delete() {}
  pull() {}
}

class GitLabRepository extends GitRepository {
  create() {
    console.log('GitLab repo has been created.')
  }
  delete() {}
  pull() {}
}

class GitHubIssue extends GitIssue {
  create() {
    console.log('GitHub issue created!')
  }
  comment() {}
  close() {}
}

class GitLabIssue extends GitIssue {
  create() {
    console.log('GitLab issue has been created.')
  }
  comment() {}
  close() {}
}

class GitHubFactory extends GitFactory {
  createGitRepo(): GitHubRepository {
    return new GitHubRepository()
  }

  createGitIssue(): GitHubIssue {
    return new GitHubIssue()
  }
}

class GitLabFactory extends GitFactory {
  createGitRepo(): GitLabRepository {
    return new GitLabRepository()
  }

  createGitIssue(): GitLabIssue {
    return new GitLabIssue()
  }
}

function gitGui(gui: GitFactory) {
  gui.init()
}

// Example
function main(type: string): void {
  let factory: GitFactory

  if (type === 'gitlab') {
    factory = new GitLabFactory()
  } else {
    factory = new GitHubFactory()
  }

  gitGui(factory)
}

// main('gitlab')

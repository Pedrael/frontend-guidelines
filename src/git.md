# GIT guideline

## General information

The git workflow in development consists looks like this:

1. Main branch is a release of your application
2. Dev branch is a current development version we work on - fork of main (during learning it can be ommited)
3. Feature branches that represent a new functionality unit of the application - fork of dev (fork of main if dev is ommited)

## Common used commands

Here's a short list of commonly used commands for GitHub:

`git clone [repository-url]` Clone a repository from GitHub to your local machine.

`git branch` List all branches in your local repository.

`git branch [branch-name]` Create a new branch.

`git checkout [branch-name]` Switch to a different branch.

`git add [file]` Add a file to the staging area.

`git commit -m "[commit-message]"` Commit changes to the repository with a descriptive message.

`git push [remote] [branch-name]` Push changes to a remote repository.

`git pull [remote] [branch-name]` Fetch and merge changes from a remote repository.

`git merge [branch-name]` Merge changes from another branch into the current branch.

`git status` Check the status of your repository, including modified files and untracked changes.

`git log` View the commit history of the repository.

`git remote add [remote-name] [remote-url]` Add a remote repository.

`git remote -v` List all remote repositories.

`git rm [file]` Remove a file from the repository.

`git stash` Temporarily save changes that are not ready to be committed.

## Creating a new branch

When you create a new branch there are general rules regarding the name.

The name of the branch should represent the feature you are working on, the verbs should be in Present Simple, the name should be written in kebab case (`word1-word2-word3`). For example, if your task is to implement an authentification form component, the good name of the branch is `create-authentification-form`.

## Commiting and pull request

The verbs in the commit should be in Present Simple. The commit should start from one of the following shortcuts:

Here are a few examples of conventional commit messages with different prefixes provided in the following example:

    feat: Add user authentication feature
    fix: Fix validation issue in registration form
    docs: Update README with new usage instructions
    test: Add unit tests for the user service
    refactor: Simplify data processing logic

However, most used on practice are `feat` and `fix`.

Before the pull request you should check that your feature branch is up-to-date. In project there can me cases when dev (main) branch is modified while your feature branch still relates to old version of main. In that case you will need `git rebase` command.

1. Go to dev (main) branch
2. Make `git pull` command
3. Go to your feature branch
4. Make `git rebase main` command
5. Move to Source Control tab in VS Code
6. Fix conflicts if they occur
7. Click on Commit button
8. Repeat untill all commits end

**After it is done you must run `git push --force`! This is must have!**

When you fix the code review issues the algorytm is the same.

The pull request is created on the github website where the branches list is located.

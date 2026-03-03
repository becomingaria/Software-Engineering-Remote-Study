# Git Flow Practice

# Github Collaboration Workflow

## Set Up

- One team member will create the project repo.
- The repo owner will then add **Collaborators** to the repo.
- Owner will create the project **Boilerplate**.
    - Add, Commit, and push to **main** branch
- Owner create a new branch called **development**.
    - `git checkout -b development`
    - `git push origin development` to push **development** up to Github.
- Collaborators can now clone the project repo.
- Collaborators checkout to **development** branch.
    - `git checkout development`
- All Team members create their own working branch.
    - `git checkout -b <branch name>`

## Workflow

- Verify you are in our own branch.
    - `git branch`
- Make edits.
- Git add, Commit.
- Checkout **development** and verify branch is up to date.
    - `git checkout development`
    - `git pull origin development`
- **IF THERE ARE UPDATES** to **development** merge updates to working branch.
    - `git checkout <branch name>` (i.e. your name)
    - `git merge development`
    - `git push origin <branch name>`
- **IF THERE ARE NO UPDATES** to **development**, checkout your working branch and push to origin.
    - `git checkout <branch name>`
    - `git push origin <branch name>`
- Go to public repo on github and create a new pull request from **Your Branch** to **development**.
- Ask a team member to validate your pull request on github.
- **If all teammates agree** and **there are no conflicts** accept the pull request.
- Make sure everyone knows there are new changes available to be pulled down.
- **EVERYONE** save edits to working branch and and update all local branches.
    - `git add -A && git commit -m "message"` in working branch.
    - `git checkout development`
    - `git pull origin development` (resolve conflicts if any)
    - `git checkout <branch name>`
    - `git merge development`
- Repeat from the start of workflow

**Github Team Flow Steps**

1. Have someone create a repo, possibly with some minimal starter code that everyone helps create together, and add all collaborators to the repository. Make sure that all who are added accept the invitation
2. Anyone who is cloning down the repo after being added should remember to npm i in order to install all dependencies (this creates the node modules hidden from Github)
3. Have everyone work on their own branches using git checkout -b (branch-name)
4. Separate the work so that everyone is working on different files and people aren’t adding to the same one because we want to avoid merge conflicts. It’s better to over-communicate!
5. Whenever you are done with a feature, add and commit the code before making the push to your branch. Then go into the browser (or app) and make a pull request to either the dev or the main branch depending on your team’s flow.
6. Have someone else review the code and make sure it makes sense before confirming the merge to the dev/main branch
7. Before starting on your new feature, go back to the dev/main you’re making pull requests to and pull down the changes from anyone else’s pull requests to that branch before continuing.
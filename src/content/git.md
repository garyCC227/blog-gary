---
title: What is git and why we should have a knowledge of it.
author: Puskar Adhikari
date: May 03 2020
tag: git
---

Git is a version control system that is primarily used for source-code management in software development. It is designed to handle all kinds of small and big types of projects. Using git we can keep a track of changes in any set of files among multiple people and with its help we can work offline.

**Why I use git**

Being a learner and a front-end web developer a lot of time I tend to work on local development sites then just upload everything when I am done coding. This is fine when I work on a small project or for practice purposes. But when I have to deal with lots of complicated projects with a different team member that is simply not feasible. That’s when I turn to something called git.

Git allows me to have a “version” of a project which shows the changes that were made to the code over time, and allows me to backtrack if necessary and undo the changes. This ability alone of being able to compare two versions of the code or reverse changes, make it fairly invaluable when working on a larger project.

Using git operation, I can control the version of any big and small project and handle it in a short period of time. Some of the basic operations of git are:

- Init
- Add
- Commit
- Pull
- Push
- Branch
- Merge
- Rebase

These are some basic operations used on a daily basis, all of the operations require to have an origin, also known as repo or repository. A Git Repository is a virtual storage of your project. It allows you to save a version of your code which can be accessed when needed.

**Initialize**

In order to initialize we use the “git init” command. This command creates a new git repository or no-initializes an exiting one. It is used to convert an existing, non-versioned project to a git repository or initialize a new, empty repository. It basically creates a “.git” directory with subdirectories and template files.

**Add**

This command updates the index using the current content found in the working tree, to prepare the content staged for the next commit. Thus, after making changes to the working tree, and before running the commit command we must use “git add <filename>” command to add any new or modified files to the index. With this command, we also need the git status command to obtain the summary of the working directory and the staging area.

**Commit**

This command is used to store the current contents of the index in the new commit. In git, a commit adds the latest changes to the source code to the repository, making these changes part of the head revision of the repository. Some important options of git commit are:

- -m:- It sets the commit message.
- -a:- It includes all the currently changed files in the commit.
- --amend:- It rewrites the very last commit with any currently staged changes and/or a new commit message.

**Pull**

The “pull” command is used to fetch and download content from a remote repository and immediately update the local repository to match the content. The git pull command is actually a combination of two other commands, git fetch followed by git merge. In the first stage of operation, git pull will execute a git fetch scoped to the local branch that HEAD is printed at. Once the content is downloaded, git pull will enter a merge workflow. A new merge commit will be created and HEAD updated to point at the new commit.

**Push**

The “push” command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository. It’s the counterpart to the git fetch, but whereas fetching imports commits to a local branch, pushing exports commits to the remote branches. Remote branches are configured using the git remote command. Pushing has the potential to overwrite changes, caution should be taken when pushing.

**Branching**

Branching means you diverge from the mainline of development and continue to do work without messing with that mainline. In git, branching is a part of your everyday development process. Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix bug, matter how big or how small you spawn a new branch to encapsulate your changes.
The git branch command lets you create, list, rename, and delete branches. It doesn’t let you switch between branches or put a forked history back together again.

**Merging**

Merging is a git way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by the git branch and integrate them into a single branch. Git merge will combine multiple sequences of commit into one unified history. In the most frequent use cases, git merge is used to combine two branches.

**Rebasing**

Rebasing is the process of moving or combining a sequence of commit to a new base commit. Rebasing is most useful and easily visualized in the context of a feature branching workflow.

\***\*Version Control Hosting Software\*\***

Version control hosting solution are a product that host multiple code repository in the cloud and integrate with and often provide online tools that enhance the use of version control system. Version control hosting solutions allows developers who collaborate on the source code to manage a master repository in which they can commit their code changes and pull down the new code to their local computer. Some of the version control hosting software are:-

- GitHub
- GitLab
- Bitbucket
- JFrog
- Assembla
- Beanstalk

> ### HappyCoding 🚀

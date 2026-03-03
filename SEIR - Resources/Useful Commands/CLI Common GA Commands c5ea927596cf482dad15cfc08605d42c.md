# CLI Common GA Commands

# Terminal Cheatsheet

## Basic Commands

| Command | Action |
| --- | --- |
| **pwd** | print working directory |
| **ls** | list content of current directory |
| **ls -a** | list content of current directory, including hidden files |
| **ls -l** | list content of current directory with extra details |
| **man** | manual |
| **cd child-directory** | change directory |
| **cd ..** | parent directory |
| **cd** ~ | home directory |
| **mkdir** [*name*] | create a directory |
| **touch** [*name.ext*] | create a file - will not overwrite a file if it exists |
| **open** [*name.ext*] | opens file |
| **clear** | empties terminal screen |
| **cat** [*name.ext*] | displays content of file in bash (terminal) |
| **mv** [-options] [*path/to/file*] [*path/to/directory*] | move file to specified location |
| **mv** [-options] [*path/to/file*] [*new name*] | renames file or directory |
| **cp** [*path/to/file*] [*path/to/directory*] | copies files to specified directory or file name |
| **cp -r** [*path/to/file*] [*path/to/directory*] | copies files and folders to specified directory or file name |
| **rm** [*path/to/file*] | removes file PERMANENTLY! |
| **rm -r** [*path/to/directory*] | removes directory PERMANENTLY! |
| **rmdir** | removes empty directory PERMANENTLY! |
| [*name of program*] [*arguments*] | start a program (example: atom [*path/to/file*]), node [*path/to/file*] ...) |
| **Ctrl + C** | abort a program that is currently active in the terminal |
| **Ctrl + A** | jump to beginning of line |
| **Ctrl + E** | jump to end of line |
| **Ctrl + K** | clear the screen |
| **tab** | autocomplete |
| **arrow up** | fill line with previously entered command |
| **arrow left/right** | jump to next/previous word |
| **q** | end view of text in terminal (with some programs/views) |
| **history** | see a list of previously typed commands |

## Git Commands

| Command | Action |
| --- | --- |
| **git status** | get current status for repo |
| **git init** | initialize a current folder as a repo, i.e. start tracking changes |
| **git clone** [*link*] | makes copied remote repo a new local repo |
| **git add** [*path/to/file*] | stage file |
| **git commit -m** [*"message"*] | commit changes and include a message describing commit |
| **git log** | display timeline |
| **git diff** [*path/to/file*] | show tracked but unstaged changes |
| **git push origin master** | send changes to remote repository (push to gitHub) |
| **git pull upstream master** | get latest changes from a remote repository |

## NPM Commands

| Command | Action |
| --- | --- |
| **npm init** | initialize a directory with package.json file for saving dependencies |
| **npm install** [*package-name*] | install a package |
| **npm i** [*package-name*] | install a package |
| **npm install** [*package-name*] **--save** | install a package and keep a record of it in package.json . `--save` is not needed/the default in versions 5.0.0 of NPM and up |
| **npm install** [*package-name*] **-g** | install a package as a global terminal command. You may need your administer password/ us `sudo` to compete a global install |
| **npm install** | read package.json and install all listed dependencies |

For reference: [List of bash commands via University of Washington's System and Software Tools course](http://courses.cs.washington.edu/courses/cse391/17wi/bash.html)
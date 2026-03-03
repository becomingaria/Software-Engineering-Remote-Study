# Day 1 - Ubuntu 20.04 Focal Fossa

![](Day%201%20-%20Ubuntu%2020%2004%20Focal%20Fossa/Untitled.png)

<aside>
⚠️ This guide is for the LTS release of Ubuntu 20.04 (Focal Fossa), but this guide may work in earlier versions of Ubuntu or even entirely different flavors of Linux. If you can do so, we recommend you run Ubuntu 20.04, as we will be more prepared to troubleshoot issues that may arise throughout the course.

</aside>

# Contents

# Notion

Notion is an all-in-one workspace which all the course content will be hosted on. The Notion application is not available on Linux, but you will still have access to the course content through the Notion web app. Sign up for an account at [https://notion.so/signup](https://notion.so/signup).

***DO NOT*** select **Continue with Apple** or **Continue with Google**. Instead, **enter the email you used to register for this course** in the provided area and select **Continue with email**.

After doing so, you will be prompted to check your email for a login code. Do so and enter the code to create a new account.

Upon signing up, you should have access to the course content, including this installfest! Continue on from here in the app.

<aside>
🚨 Don't have access to the course content? Let your instructor know immediately so that you can complete the installfest and have access to the course content!

</aside>

![](Day%201%20-%20Ubuntu%2020%2004%20Focal%20Fossa/Screen_Shot_2021-02-02_at_9.51.43_PM.png)

# Slack

We will be using slack to communicate throughout the course. You will receive an invite to the relevant channels via email. You can log in via the web browser, but using the app instead is highly recommended. Download Slack [here](https://slack.com/downloads/) and install it.

# Zoom

If you haven't already, [download the Zoom client](https://zoom.us/download#client_4meeting) and install it.

# A Note On Copying Commands

When possible, ***please copy the commands from this page***. You will use most of the commands here once and never again. Typing them out will only introduce the possibility for you to make errors. Certain commands will require you to alter portions of them - this is specifically called out when they appear. There are no bonus points for doing work that has already been done for you.

# Updating and Upgrading Packages

Windows **does not** manage your Linux installation and will not automatically perform updates. To manually do this use this command:

```bash
sudo apt update && sudo apt upgrade
```

![](Day%201%20-%20WSL%202/Untitled%206.png)

Do this now. Enter your password when prompted, and accept changes to be made.

Also run this command to ensure you have wget (to retrieve content from web servers) and ca-certificates (to ensure SSL-based apps can check the authenticity of the connections they make):

```bash
sudo apt-get install wget ca-certificates
```

You may get notifications that these are already installed. If so, great.

# zsh

zsh is the shell of taste and class. Install it with this command:

```bash
apt install zsh
```

Verify the installation with this command:

```bash
zsh --version
```

The version number should be 5.4.2 or greater

Make zsh the default shell with this command

```bash
chsh -s $(which zsh)
```

End your terminal session by closing the terminal window.

Open a new terminal window. You may be prompted to run a configuration setup for new users. If you are, populate the ~/.zshrc with the configuration recommended by the system administrator. 

Confirm the new shell is installed with this command:

```bash
echo $SHELL
```

This should return `/usr/bin/zsh`.

Finally, just to be extra sure use this command:

```bash
$SHELL --version
```

This should return the same version number as the `zsh --version` command you ran earlier.

We're also going to install Oh My Zsh - an "open source, community-driven framework for managing your zsh configuration." Use this command:

```bash
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

The vanilla configuration of Oh My Zsh is great for our needs, but you can further customize it if you want to - check out [their website](https://ohmyz.sh/) and [their documentation](https://github.com/ohmyzsh/ohmyzsh/wiki) to see how.

# Visual Studio Code

We will use VS Code as our editor in class. Download and install VS Code [here](https://code.visualstudio.com/).

# Git

Git comes pre-installed with Ubuntu, but ensure you have the most recent stable version with:

```
sudo add-apt-repository ppa:git-core/ppa
```

When prompted, press `Enter`

Then enter:

```
sudo apt-get update
```

and

```
sudo apt-get install git
```

Add your GitHub username, email, and password to your git configuration:

```
git config --global user.name "Username"
```

Replace `Username` with your name. Ensure you leave the quotes surrounding your username.

```
git config --global user.email "user@email.com"
```

Replace `user@email.com` with the email address associated with your GitHub. Ensure you leave the quotes surrounding your email.

Set the default branch name to main with this command:

```
git config --global init.defaultBranch main
```

Set the default git editor to VS Code with this command:

```bash
git config --global core.editor "code --wait"
```

and finally turn off rebasing as the default behavior when making a pull:

```
git config --global pull.rebase false
```

## Configuring a Global Git Ignore File

<aside>
🚨 ***Note: This step is vital to you getting a job after the course. If you do not complete these steps exactly, it will look extremely bad to a future employer when they look over your GitHub repos.***

</aside>

Proper code, utilities, and the use of Git ignore files prevent us from uploading private secrets to the public internet.

A global Git ignore file will prevent us from uploading private secrets to the public internet across all of your projects so that you don't have to worry about making the appropriate entries in every project's Git ignore.

First, create the file:

```
touch ~/.gitignore_global
```

Next, configure Git to use this file:

```
git config --global core.excludesfile ~/.gitignore_global
```

Open the new .gitignore_global file in VS Code:

```
code ~/.gitignore_global
```

### Here is a [.gitignore_global file for you to use](https://raw.githubusercontent.com/DavidStinson/gitignore_global/main/.ga_gitignore_global).

Open the above page and copy all of its contents.

Paste the contents of the file you copied into VS Code, then save the file.

<aside>
💡 This is a great time to turn on **Auto Save** as well! This setting is in the **File** menu - select it, then re-open the **File** menu to ensure a checkmark is next to the **Auto Save** option.

</aside>

![Auto Save with a check next to the option, indicating that it is turned on.](Day%201%20-%20WSL%202/Untitled%2016.png)

Auto Save with a check next to the option, indicating that it is turned on.

# Github

[Github](https://github.com/) provides a way to host Git repos in the cloud. It enables collaboration and is wildly popular. If you have not already created an account there, do so now.

You will need a GitHub account. If you don't have one, [sign up here](https://github.com/signup).

## GitHub CLI

We'll be using the GitHub command line utility to perform some actions on GitHub as well. Install it with this command:

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh
```

Then login with this command:

```bash
gh auth login
```

You will be prompted to login to a github.com account or a GitHub Enterprise account. Select the **github.com** option.
A second prompt will appear asking how you would like to authenticate. Select the **Login with a web browser** option.

You will then be prompted to copy the one time code from the terminal. Do this now. Then press the **Enter** key to open the github.com login page in your browser.

Complete the login process, authorize the GitHub CLI, and return to your terminal. If you were successful, you will receive a message that says authentication is complete. Press **Enter**.

The final prompt will ask you to choose whether you want to use HTTPS or SSH. Select the **HTTPS** option.

![The `gh auth login` process.](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-10_at_9.42.06_PM.png)

The `gh auth login` process.

<aside>
🧠 If you are given the option to Authenticate Git with your GitHub credentials, do so - this allows you to skip the next step: *Generating a GitHub Personal Access Token.*

</aside>

## Generating a GitHub Personal Access Token

GitHub is deprecating the use of password authentication via the command line starting on August 13, 2021, as detailed in [this GitHub blog post](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/). To prepare for this change, we will be authenticating using GitHub's preferred authentication method: Personal Access Tokens (PATs).

First, visit [https://github.com](https://github.com) and ensure that you are signed in. Also, ensure that you have [verified your email address](https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address) with GitHub. After doing so, navigate to [https://github.com/settings/tokens](https://github.com/settings/tokens).

On the **Personal access tokens** page, click **Generate new token**.

![The **Personal access tokens** page in **Developer Settings**. The **Generate new token** button is highlighted.](Day%201%20-%20macOS%20for%20Intel%20Macs/Untitled%201.png)

The **Personal access tokens** page in **Developer Settings**. The **Generate new token** button is highlighted.

You will be taken to a page prompting you to create a **new personal access token**. Fill the **Note** field with the name of the device you are using the token with. Select all the **repo** scopes - ensure your selections match what is in the screenshot below. When you have done so, click the **Generate token** button.

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Untitled%202.png)

You will be taken back to the **Personal access tokens** page, and the token you just created will be visible:

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Untitled%203.png)

Click the clipboard button to copy the newly created token.

<aside>
🚨 You will only see the token on this page ***ONCE***. You ***MUST*** copy it now and paste it in a secure and private place (preferably in a password manager). Treat this PAT as you would a password! The PAT will be used in place of a password to interact will GitHub on the command line!

</aside>

<aside>
🧠 Using multiple machines? It is best practice to create a new PAT for each device requiring command-line access to GitHub - this way, if you need to revoke access to any single device, none of your other devices are impacted.

</aside>

***Place the token in a secure place!***

# Node.js

Use this command to install nvm which we will use to install node:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

The enter this command block, which will append the nvm directory to your **~/.zshrc** file: 

```bash
cat << EOF >> ~/.zshrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
EOF
```

After doing so, restart the terminal session, and run the `nvm --version` command once more. If you still do not get a version number, alert your instructor.

Restart the terminal session.

Use nvm to install node with this command:

```bash
nvm install node
```

With node installed install nodemon globally with this command:

```bash
npm i -g nodemon
```

# Being More Productive By Using the Keyboard Instead of the Mouse in Ubuntu

## Launching Apps with System Search

Developers avoid using the mouse whenever possible because they are more productive when their hands are on the keyboard. Ubuntu lets us do this by opening applications using *System Search* instead of the mouse by:

1. Pressing `Windows Key` (referred to as the `Super` key in Ubuntu) to open *System Search*
2. Start typing the name of the app until the app is highlighted
3. Press `Enter` to open the app!

## Switching Between Applications

Quickly switch between running applications by pressing `Alt` + `Tab`.

## Switching Between Windows Instead of Applications

You can switch between multiple windows of the same application using **`cmd` + ```** (that's a back-tick character, which is above the `Tab` key).

<aside>
💡 Note that it's best to minimize how many windows/applications you have open when developing to make switching between applications quicker and minimize distractions to the job at hand.

</aside>

# Taking Screenshots

You'll periodically need to take screenshots. To do this you can use the Gnome Screenshot Utility, which should be installed by default.

## Uploading Screenshots and Images to [imgur](https://imgur.com/)

Often you will need to share images with others or use them in your applications, notes, readme files, etc. Unfortunately, if an image exists only on your computer, you lose the ability to use it anywhere but on your computer. To get around this, we can upload images to a cloud service like imgur, one of the most popular image hosting services on the internet. 

Feel free to open an account there, so you can keep track of what you upload, but you can also use their service without an account.

# Level Up 🚀

## A Password Manager

While this is optional, we recommend using a password manager to help keep track of the various accounts and logins you will be creating throughout the course and in the rest of your digital life. [Bitwarden](https://bitwarden.com/) is free, open-source, and provides a great user experience, but if you're using a different one, that is no problem.
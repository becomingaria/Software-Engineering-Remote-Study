# Day 1 - macOS for Apple Silicon Macs

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Untitled.png)

<aside>
⚠️ This guide is for Macs with the Apple Silicon chips using a public release of macOS 11 (Big Sur) or greater.

</aside>

<aside>
🚨 ***This guide is NOT for Macs with Intel processors!***

</aside>

## Table of Content

# Checking Your Processor Type in Big Sur

Check your processor type in macOS by selecting the  logo in the top left of your screen and select the **About This Mac** option. Macs with the Apple Silicon will have a chip type of Apple, like in the screenshot to the right.

<aside>
‼️ If your chip type is Intel you need to switch to the [Day 1 - macOS for Intel Macs](Day%201%20-%20macOS%20for%20Intel%20Macs%20ef09ffc50a35496db6881bec53374ddc.md) install guide now.

</aside>

![A Mac running macOS Big Sur with an Apple M1 chip.](Day%201%20-%20macOS%20for%20Apple%20Silicon%20Macs/Screen_Shot_2020-12-13_at_3.41.41_PM.png)

A Mac running macOS Big Sur with an Apple M1 chip.

# Running Applications Built for Intel Macs on Macs Equipped with Apple Silicon Processors

The first time you run an application that was uses Intel-based features you will see something like the prompt to the right telling you to install Rosetta. When this happens, select **Install**, and re-launch the application.

![The prompt for installing Rosetta.](Day%201%20-%20macOS%20for%20Apple%20Silicon%20Macs/Screen_Shot_2020-12-14_at_8.42.00_AM.png)

The prompt for installing Rosetta.

# Rectangle

Rectangle is an open-source window management tool that offers extensive customization. No more fiddling with window position in macOS! Install Rectangle from [here](https://rectangleapp.com/). Read more on the [project's GitHub](https://github.com/rxhanson/Rectangle). Once it is installed by moving it into the **Applications** directory, launch it with **Spotlight** (with **Command ⌘** + **Space**). 

The first time you launch it, you will be prompted to give it permission to control your window positions. Allow this by clicking the **Open System Preferences** button in the dialog box, and selecting the checkbox next to the **Rectangle** app. If the checkbox is disabled, click the padlock and enter your password. 

![The Security and Privacy pane, after Rectangle has been given the appropriate system permissions.](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-02_at_11.38.50_AM.png)

The Security and Privacy pane, after Rectangle has been given the appropriate system permissions.

After you have given Rectangle the appropriate permissions, you will be asked which control scheme you prefer - opt for the Rectangle control scheme.

Try getting familiar with Rectangle today and the rest of this week. Here is a cheat sheet for all the different keyboard shortcuts that are pre-configured.

![The default keyboard shortcuts for the window layouts provided by Rectangle.](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2020-10-29_at_12.01.49_PM.png)

The default keyboard shortcuts for the window layouts provided by Rectangle.

# Slack

We will be using slack to communicate throughout the course. You will receive an invite to the relevant channels via email. You can log in via the web browser, but using the app instead is highly recommended. Download Slack [here](https://slack.com/downloads/). Make sure you choose the **Apple Silicon** option if you're prompted.

Remember to drag the Slack app into the Applications folder when you open the downloaded archive.

# Zoom

If you haven't already, [download the Zoom client](https://zoom.us/download#client_4meeting) and install it. Make sure you choose the **Apple Silicon** option on the download page.

The Zoom client requires certain permissions to access your camera, microphone, and screen - let's enable those now.

Open the **System Preferences** application, and navigate to the **Security & Privacy** panel. Ensure that the **zoom.us** application has permission to use the Camera, Microphone, and Screen Recording.

<aside>
🧠 You may have to try sharing your screen before the Screen Recording privacy option is available in the **Security & Privacy** panel.

</aside>

<aside>
⚠️ These permissions won't be applied until the next time you start zoom, so you may not be able to share your screen until then.

</aside>

# A Note On Copying Commands

When possible, ***please copy the commands from this page***. Most of the commands here will be used once and never again. Typing them out will only introduce the possibility for you to make errors. Certain commands will require you to alter portions of them - this is specifically called out when they appear. There are no bonus points for doing work that has already been done for you.

# zsh

We will use zsh as the default shell. Open the Terminal application from your **Applications** directory now. To do so, press **Command ⌘ + Space** to launch **Spotlight** and type **Terminal**, then Select the Terminal application by pressing **Enter** when it appears. After the Terminal application starts, check if zsh is already your default shell with this command:

```bash
echo $SHELL
```

<aside>
👍 If this command outputs `/bin/zsh` you can skip to the **Oh My Zsh** section below.

</aside>

## If zsh is Not Your Mac's Default Shell

If the `echo $SHELL` command outputs anything other than `/bin/zsh`, you will need to make zsh your default shell with this command:

```bash
chsh -s $(which zsh)
```

End your terminal session by closing the terminal window.

Open a new terminal window. You may be prompted to run a configuration setup for new users. If you are, populate the ~/.zshrc with the configuration recommended by the system administrator. 

After doing that, rerun this command:

```bash
echo $SHELL
```

It should now output `/bin/zsh`.

# Oh My Zsh

We're also going to install Oh My Zsh - an "open-source, community-driven framework for managing your zsh configuration." Use this command:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

When you run this command you may be prompted to install certain command line tools. Do so.

The vanilla configuration of Oh My Zsh is great for our needs, but you can further customize it if you want to - check out [their website](https://ohmyz.sh/) and [their documentation](https://github.com/ohmyzsh/ohmyzsh/wiki) to see how.

## Handling Errors 💔

You are likely to see an error like the one to the right after installing Oh My Zsh. It is possible to fix this by running the command that is specified:

```bash
compaudit | xargs chmod g-w,o-w
```

![A common minor error when launching zsh](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2020-12-15_at_11.42.15_AM.png)

A common minor error when launching zsh

# Visual Studio Code

We will use VS Code as our editor in class. Download VS Code [here](https://code.visualstudio.com/).

<aside>
🚨 **Extremely Important**: Be sure that **Visual Studio Code** is in your Mac's **Applications** directory. Open the **Finder** application and navigate to the **Applications** directory. With it open, drag the downloaded **Visual Studio Code** application into it. Do not close Finder, we will be using it again momentarily.

</aside>

# Setting up Terminal to Run in Rosetta

<aside>
🧠 Many of the command line applications we use in the course may not been updated to run natively on Apple Silicon, so we will be running the terminal using Rosetta emulation.

</aside>

To turn on Rosetta emulation navigate into the **Utilities** directory within the **Applications** directory. Find the **Terminal** Application and hold Ctrl when you click it. Select **Get Info**. A pane like the one to the right will appear. Ensure **Open using Rosetta** is selected, like it is in the image to the right. After you have done this, close the window.

![The **Terminal Info** window with **Open using Rosetta** selected.](Day%201%20-%20macOS%20for%20Apple%20Silicon%20Macs/Screen_Shot_2020-12-14_at_4.53.27_PM.png)

The **Terminal Info** window with **Open using Rosetta** selected.

# Install the `code` Command in your PATH

1. Launch VS Code using spotlight (**Command ⌘ + Space** - then start typing **Visual Studio Code** until you see the app, then press enter).
2. Type **Command ⌘ + Shift + P** to open the command palette.
3. Start typing `shell command` and when you see the `Shell Command: Install 'code' command in PATH` command - click it!
    
    ![The command palette, with the **Shell Command: Install 'code' command in PATH** option highlighted.](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-03_at_11.00.45_AM.png)
    
    The command palette, with the **Shell Command: Install 'code' command in PATH** option highlighted.
    
4. VS Code will prompt you to allow osascript to make changes. Allow this by entering the password for your user account.
5. Quit VS Code and Terminal.
6. Relaunch Terminal
7. You should now be able to open a folder to edit by typing:
    
    ```bash
    code .
    ```
    

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

# Homebrew

Homebrew is a package manager that we will use to install various command-line tools in our class. Learn more [here](https://brew.sh).

Open up Terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<aside>
⚠️ If you are prompted to install the XCode CLI, say yes.

</aside>

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding.

Lastly, make sure to run `brew update` to make sure you have the latest list of available software.

## Handling Warnings

You may encounter a warning at the end of your installation that says something like this:

```bash
Warning: /opt/homebrew/bin is not in your path
```

If this occurs, you will need to add the directory specified to your PATH. You can do so with this command:

```bash
export PATH=$PATH:/opt/homebrew/bin
```

# Xcode

We do not use Xcode in class, but some other applications that we do use do require some Xcode libraries. Normally, all you need is the Xcode CLI, which should have already been installed when you installed Homebrew or zsh. If it didn't get installed in one of the previous steps, you can use this command:

```bash
xcode-select --install
```

<aside>
⚠️ Under certain circumstances, you may be required to install Xcode from the Mac App Store in order to get command line tools - if you are still getting errors that the command line tools are not installed even after running the above command this may be required. Pair with an instructor if this happens to you.

</aside>

# Git

Git is the version control software we will be using - it's an extremely popular tool among developers.

```bash
brew install git
```

Once it has been installed, add your GitHub username, email, and password to your git configuration:

```bash
git config --global user.name "Username"
```

Replace `Username` with your name. Ensure you leave the quotes surrounding your username.

```bash
git config --global user.email "user@email.com"
```

Replace `user@email.com` with the email address associated with your GitHub. Ensure you leave the quotes surrounding your email.

Set the default branch name to main with this command:

```bash
git config --global init.defaultBranch main
```

Set the default git editor to VS Code with this command:

```bash
git config --global core.editor "code --wait"
```

and finally turn off rebasing as the default behavior when making a pull from a repo:

```bash
git config --global pull.rebase false
```

## Configuring a Global Git Ignore File

<aside>
🚨 ***Note: This step is vital to you getting a job after the course. If you do not complete these steps exactly, it will look extremely bad to a future employer when they look over your GitHub repos.***

</aside>

Proper code, utilities, and the use of Git ignore files prevent us from uploading private secrets to the public internet.

A global Git ignore file will prevent us from uploading private secrets to the public internet across all of your projects so that you don't have to worry about making the appropriate entries in every project's Git ignore.

First, create the file:

```bash
touch ~/.gitignore_global
```

Next, configure Git to use this file:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

Open the new .gitignore_global file in VS Code:

```bash
code ~/.gitignore_global
```

### ➡️ Here is a [.gitignore_global file for you to use](https://raw.githubusercontent.com/DavidStinson/gitignore_global/main/.ga_gitignore_global). ⬅️

Open the above page and copy all of its contents.

Paste the contents of the file you copied into VS Code, then save the file.

<aside>
💡 This is a great time to turn on **Auto Save** as well! This setting is in the **File** menu - select it, then re-open the **File** menu to ensure a checkmark is next to the A**uto Save** option.

</aside>

# GitHub

[Github](https://github.com/) provides a way to host Git repos in the cloud. It enables collaboration and is wildly popular. If you have not already created an account there, do so now.

## GitHub CLI

We'll be using the GitHub command line utility to perform some actions on GitHub as well. Install it with this command:

```bash
brew install gh
```

Then login with this command:

```bash
gh auth login
```

You will be prompted to login to a github.com account or a GitHub Enterprise account. Select the **github.com** option.

The Second prompt will ask you to choose whether you want to use HTTPS or SSH. Select the **HTTPS** option.

<aside>
🧠 A third prompt may appear asking you if you want to authenticate with your GitHub credentials. If you are given the option to Authenticate Git with your GitHub credentials, do so - this allows you to skip the next step: *Generating a GitHub Personal Access Token.*

</aside>

The fourth will appear asking how you would like to authenticate. Select the **Login with a web browser** option.

You will then be prompted to copy the one time code from the terminal. Do this now. Then press the **Enter** key to open the github.com login page in your browser.

Complete the login process, authorize the GitHub CLI, and return to your terminal. If you were successful, you will receive a message that says authentication is complete. Press **Enter**.

![](Day%201%20-%20macOS%20for%20Apple%20Silicon%20Macs/Screen_Shot_2021-05-24_at_11.31.11_PM.png)

<aside>
‼️ If you were given the option to Authenticate Git with your GitHub credentials, and said yes - you may skip the next step: *Generating a GitHub Personal Access Token.*

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

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

```bash
brew install node
```

Verify the installation afterwards by running:

```bash
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install *nodemon* globally:

```bash
npm i -g nodemon
```

# Being More Productive By Using the Keyboard Instead of the Mouse in macOS

## Launching Apps with Spotlight

Developers avoid using the mouse whenever possible because they are more productive when their hands are on the keyboard. The Mac lets us do this by open applications using *Spotlight* instead of the mouse by:

1. Pressing `Command ⌘` + `Space` to open *Spotlight*
2. Start typing the name of the app until the app is highlighted
3. Press `Return` to open the app!

## Switching Between Applications

Quickly switch between running applications by pressing `Command ⌘` + `Tab`.

If a minimized application does not display after tabbing to it with `Command ⌘` + `Tab`:

1. Continue to hold down `Command ⌘` and release `Tab`
2. Press `Option ⌥`, then release `Command ⌘`

## Switching Between Instances of an Application

You can switch between multiple windows of the same application using **`cmd` + ```** (that's a back-tick character above the `Tab` key).

<aside>
💡 Note that it's best to minimize how many windows/applications you have open when developing to make switching between applications quicker and minimize distractions to the job at hand.

</aside>

# Taking Screenshots

You'll periodically need to take screenshots. Use `Command ⌘` + `Shift` + `3` to take a screenshot of your entire screen space, or use `Command ⌘` + `Shift` + `4` to take a screenshot of a selected area instead. `Command ⌘` + `Shift` + `5` will allow you to view more advanced screenshot options.

By default, screenshots will be saved to your desktop.

## Uploading Screenshots and Images to [imgur](https://imgur.com/)

Often you will need to share images with others or use them in your applications, notes, readme files, etc. Unfortunately, if an image exists only on your computer, you lose the ability to use it anywhere but on your computer. To get around this, we can upload images to a cloud service like imgur, one of the most popular image hosting services on the internet. 

Feel free to open an account there, so you can keep track of what you upload, but you can also use their service without an account.

# Level Up 🚀

## A Password Manager

While this is optional, we recommend using a password manager to help keep track of the various accounts and logins you will be creating throughout the course and in the rest of your digital life. [Bitwarden](https://bitwarden.com/) is free, open-source, and provides a great user experience, but if you're using a different one (or decide against using one entirely), that is no problem.
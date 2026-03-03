# Day 1 - macOS for Intel Macs

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Untitled.png)

<aside>
⚠️ This guide is for Macs with the Intel chips using a public release of macOS 11 (Big Sur) or greater.

</aside>

<aside>
🚨 ***This guide is NOT for Macs with Apple Silicon processors!***

</aside>

# Contents

# Checking Your Processor Type in Big Sur

Check your processor type in macOS by selecting the  logo in the top left of your screen and select the **About This Mac** option. Macs with the Intel chips will have a Processor type of Intel, like in the screenshot to the right.

<aside>
‼️ If your chip type is Apple you need to switch to the [Day 1 - macOS for Apple Silicon Macs](Day%201%20-%20macOS%20for%20Apple%20Silicon%20Macs%20e63ad5829adc45aba7b0b8564e618c5f.md) install guide now.

</aside>

![A Mac running macOS Big Sur with an Intel chip](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2020-12-17_at_11.26.00_AM.png)

A Mac running macOS Big Sur with an Intel chip

# Notion

Notion is an all-in-one workspace which all the course content will be hosted on. You can download Notion [here](https://www.notion.so/desktop). Be sure to select the **For Macs with Intel Processors** option when it is given. ****Install it by opening the downloaded .dmg file and drag the **Notion** application into the **Applications** directory.

[Moving the Notion application into the Applications directory.](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Recording_2021-02-02_at_10.35.13_AM.mov)

Moving the Notion application into the Applications directory.

Open the Notion application from your **Applications** directory now. To do so, press **Command + Space** to launch **Spotlight** and type **Notion**, then Select the Notion application by pressing **Enter** when it appears, as shown in the screenshot below.

![Launching the Notion application using Spotlight. Get used to seeing this often; it's the fastest way to start applications on the mac!](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-02_at_10.39.28_AM.png)

Launching the Notion application using Spotlight. Get used to seeing this often; it's the fastest way to start applications on the mac!

When the application launches, you will be presented with a login screen. ***DO NOT*** select **Continue with Apple** or **Continue with Google**. Instead, **enter the email you used to register for this course** in the provided area and select **Continue with email**.

After doing so, you will be prompted to check your email for a login code. Do so and enter the code to create a new account.

Upon signing up, you should have access to the course content, including this installfest! Continue on from here in the app.

<aside>
🚨 Don't have access to the course content? Let your instructor know immediately so that you can complete the installfest and have access to the course content!

</aside>

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-02_at_10.49.06_AM.png)

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

We will be using slack to communicate throughout the course. You will receive an invite to the relevant channels via email. You can log in via the web browser, but using the app instead is highly recommended. Download Slack [here](https://slack.com/downloads/). Make sure you choose the **Download** option - not the **Download (Apple Silicon)** option.

Remember to drag the Slack app into the Applications folder when you open the downloaded archive.

# Zoom

If you haven't already, [download the Zoom client](https://zoom.us/download#client_4meeting) and install it.

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
🚨 **Extremely Important**: Be sure that **Visual Studio Code** is in your Mac's **Applications** directory. Open the **Finder** application and navigate to the **Applications** directory. With it open, drag the downloaded **Visual Studio Code** application into it.

</aside>

## Install the `code` Command in your PATH

1. Launch VS Code using spotlight (**Command ⌘ + Space** - then start typing **Visual Studio Code** until you see the app, then press enter).
2. Type **Command ⌘ + Shift + P** to open the command palette.
3. Start typing `shell command` and when you see the `Shell Command: Install 'code' command in PATH` command - select it it!
    
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

You will be prompted to enter the user password for your device. Do so. It will not be displayed on the screen in any form as you type it - this is common for command-line password entry. After entering it, you will be prompted to allow the script to install various applications and create various directories, as shown in the screenshot below. Press **Return** to allow this.

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-04_at_8.16.56_AM.png)

<aside>
⚠️ If you are prompted to install the XCode CLI, say yes.

</aside>

## Next Steps

![](Day%201%20-%20macOS%20for%20Intel%20Macs/Screen_Shot_2021-02-04_at_8.38.14_AM.png)

After the installation has been completed you may be prompted to enter further commands to finalize the installation. **You must do this before proceeding.**

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding.

Lastly, make sure to run `brew update` to make sure you have the latest list of available software.

# Xcode

We do not use Xcode in class, but some other applications that we do use do require some Xcode libraries. Normally, all you need is the Xcode CLI, which should have already been installed when you installed Homebrew. If it didn't get installed, you can use this command:

```bash
xcode-select --install
```

<aside>
⚠️ Under certain circumstances, you may be required to install Xcode from the Mac App Store in order to get command-line tools - if you are still getting errors that the command line tools are not installed even after running the above command this may be required. Pair with an instructor if this happens to you.

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

### Here is a [.gitignore_global file for you to use](https://raw.githubusercontent.com/DavidStinson/gitignore_global/main/.ga_gitignore_global).

Open the above page and copy all of its contents.

Paste the contents of the file you copied into VS Code, then save the file.

<aside>
💡 This is a great time to turn on **Auto Save** as well! This setting is in the **File** menu - select it, then re-open the **File** menu to ensure a checkmark is next to the A**uto Save** option.

</aside>

# Github

[Github](https://github.com/) provides a way to host Git repos in the cloud. It enables collaboration and is wildly popular. If you have not already created an account there, do so now.

You will need a GitHub account. If you don't have one, [sign up here](https://github.com/signup).

## GitHub CLI

We will be using the GitHub CLI to take basic actions on GitHub. Install it with this command:

```bash
brew install gh
```

Then login with this command:

```bash
gh auth login
```

You will be prompted to login to a github.com account or a GitHub Enterprise account. Select the g**ithub.com** option.
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
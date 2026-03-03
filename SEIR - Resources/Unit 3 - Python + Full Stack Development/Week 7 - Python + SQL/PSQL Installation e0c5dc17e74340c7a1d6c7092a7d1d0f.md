# PSQL Installation

Time to start putting our data into the machine...

![](https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif)

## macOS Instructions:

Install PostgreSQL using [Homebrew](https://formulae.brew.sh/formula/postgresql@14) using the following commands:

```bash
brew install postgresql@14
```

Start the Postgres database service with the following command:

```bash
brew services start postgresql@14
```

The above command also ensures that the PSQL engine runs after restarting your computer.

More info about installing PostgreSQL using Homebrew can be found [here](https://wiki.postgresql.org/wiki/Homebrew).

## Debian/Ubuntu Linux  Instructions

Install PostgreSQL using `apt` with the following commands:

```bash
sudo apt install postgresql
```

To start the postgres service, enter the following command in your terminal:

```bash
sudo service postgresql start
```

> Note: After restarting your computer, you may need to run the sudo service `postgresql` start command again to start and access the database.
> 

## Windows WSL PostGreSQL:

Instructions for WSL: [Link](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql)

## Windows Powershell:

Install PostgreSQL from the installer on the website: [Link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Follow along with this tutorial to install PostgreSQL: [Link](https://www.postgresqltutorial.com/install-postgresql/)

To open PostgreSQL, run the "SQL Shell (psql)" program from your start menu.

Windows users will not have access to `psql` command in their shells.

# Verifying installation:

If you don't get errors, once everything is done, type `psql`. You should have something that looks about like this:

```bash
psql (13.2)
Type "help" for help

[yourusername]=#
```

(You can exit by typing `\q` then hitting enter)

If you do, everything went smoothly! If you didn't, there was a problem somewhere - please reach out to an instructor!

## Setup a Database Superuser:

On some machines, you may be required to set up your linux account as a "Superuser" in Postgres before you can continue.

This is a step that is usually required on WSL environments, but sometimes necessary on macOS and Ubuntu as well.

If the previous `psql` command failed with an error similar to `FATAL: cannot find user <your_username>`, run the following commands:

Enter the postgres shell as the "postgres" admin:

```bash
sudo -u postgres psql
```

If that command doesn't work, try the following one instead:

```bash
psql -d postgres -U <your_username>
```

Next we'll create a SUPER USER. Change "your_username" to your linux username:

```bash
CREATE USER your_username WITH SUPERUSER LOGIN;
```

To exit the shell:

```bash
\q
```

Once you're back in your main shell, enter the following command in your terminal:

```bash
createdb `whoami`
```
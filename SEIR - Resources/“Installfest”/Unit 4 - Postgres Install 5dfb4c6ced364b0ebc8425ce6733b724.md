# Unit 4 - Postgres Install

# Installing Postgres (Mac)

1. Run the command `brew install postgres`
2. Run `brew tap homebrew/services` to install brew services.
3. Then run `brew services start postgresql` to start postgres as a background service
4. To stop postgres manually, run `brew services stop postgresql`. You can also use brew services to restart Postgres `brew services restart postgresql`

# Installing Postgres (Ubuntu + WSL)

1. Follow instructions [found here](https://itsfoss.com/install-postgresql-ubuntu/)

# Testing Postgres Connection

To test your postgres connection we will be using the psql command. 

```bash
psql postgres
```

Your output should look similar to this 

![](Unit%204%20-%20Postgres%20Install/postgresql.png)

If the above throws an error saying there’s a 5432 connection error because there’s no database with your username, replace the below command with the name of your user:

```jsx
createdb yourUsername
```

In the psql terminal you will use the following command 

```bash
\l
```

This will display all available tables 

![](Unit%204%20-%20Postgres%20Install/postgresqltables.png)

# Want to make it pretty? 💅

If you want a customized output for your psql terminal you can do the following steps: }

1. In your home directory create a .psqlrc file

```bash
touch .psqlrc
```

1. modify the file with code to include the following:

```
--\\set PROMPT1 '%[%033[1m%]%M %n@%/%R%[%033[0m%]%# '

\set PROMPT1 '\n%[%033[1;31;40m%] ➤ %[%033[32m%]%M %[%033[36m%]%n%[%033[34m%]@%[%033[36m%]%[%033[33m%]%/ %[%033[K%]%[%033[0m%]\n\n%[%033[1;33m%]%#%[%033[0m%] '

\set PROMPT2 '%[%033[1;33m%]% > %[%033[0m%]'

\x on

-- By default, NULL displays as an empty space. Is it actually an empty
-- string, or is it null? This makes that distinction visible.
\pset null '[NULL]'
-- Use table format (with headers across the top) by default, but switch to
-- expanded table format when there's a lot of data, which makes it much
-- easier to read.
\x auto
-- Verbose error reports.
\set VERBOSITY verbose
-- Use a separate history file per-database.
\set HISTFILE ~/.psql_history- :DBNAME
-- If a command is run more than once in a row, only store it once in the
-- history.
\set HISTCONTROL ignoredups
-- Autocomplete keywords (like SELECT) in upper-case, even if you started
-- typing them in lower case.
\set COMP_KEYWORD_CASE upper

```
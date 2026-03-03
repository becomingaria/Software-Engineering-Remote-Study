# Command Line Fu

Level up your terminal skills with these progressive challenges.

## Instructions

Complete each challenge using **only terminal commands**. No GUIs allowed!

---

## Level 1 – Navigation & Exploration

1. Print the absolute path of your home directory.
2. List all files (including hidden) in your home directory sorted by modification time.
3. Find out how much disk space the `/usr` directory uses.
4. Display the last 10 lines of `/etc/hosts`.
5. Count how many files are in `/usr/bin`.

## Level 2 – File Manipulation

1. Create a directory called `fu_practice/` on your Desktop.
2. Inside it, create 5 files named `file1.txt` through `file5.txt` using a single command (hint: brace expansion `{1..5}`).
3. Copy `file1.txt` to a new file called `backup.txt`.
4. Move `file2.txt` into a new sub-folder called `archive/`.
5. Delete `file3.txt` and `file4.txt` in a single command.
6. Rename `file5.txt` to `important.txt`.

## Level 3 – Search & Filter

1. Search for all `.txt` files anywhere in your home directory.
2. Find all files modified in the last 1 day in `fu_practice/`.
3. Use `grep` to find every line containing the word "localhost" in `/etc/hosts`.
4. Print only the first 5 lines of `/etc/hosts`.
5. Count how many lines are in `/etc/hosts`.

## Level 4 – Pipes & Redirection

1. List the contents of `/usr/bin` and pipe the output to `less`.
2. List all files in `/usr/bin` and save the output to a file called `bin_contents.txt`.
3. Append the text `# added by me` to the end of `bin_contents.txt`.
4. Use `grep` and a pipe to search `bin_contents.txt` for any line containing "python".
5. Chain commands with `&&` to: create a directory `test/`, change into it, and create a file `hello.txt` — all in one line.

## Level 5 – Bonus Challenges

1. Write a one-liner that finds all `.log` files in `/var/log` and prints the number of lines in each.
2. Use `curl` to print the HTML of `https://example.com` to the terminal.
3. Use `man` to read the manual for the `find` command. What does the `-mtime` flag do?
4. Find the 5 largest files in your home directory.

---

## Solutions

<details>
<summary>Level 1 Solutions</summary>

```bash
# 1
echo $HOME
# 2
ls -lat ~
# 3
du -sh /usr
# 4
tail -10 /etc/hosts
# 5
ls /usr/bin | wc -l
```

</details>

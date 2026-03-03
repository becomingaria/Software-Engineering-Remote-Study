# Kitchen Organizer

Practice your CLI skills by organizing a messy kitchen directory!

## Getting Started

Clone this repo, change into the project directory, and open it in VS Code.

```bash
cd kitchen-organizer
code .
```

## The Scenario

You've been hired to help organize a kitchen that's an absolute mess. Files are in the wrong places, some folders are missing, and nothing is named properly. Your job is to use only terminal commands to fix it all.

## Instructions

All work should be done from the terminal. **Do not use Finder/Explorer or VS Code's file explorer.**

### Part 1 – Explore

1. `cd` into the `kitchen/` folder.
2. Use `ls` to see what's in there.
3. Use `ls -la` to see hidden files and permissions.
4. Use `pwd` to confirm where you are.

### Part 2 – Reorganize

The kitchen has the following problems to fix:

1. There is no `pantry/` folder — **create it**.
2. There is no `fridge/` folder — **create it**.
3. There is no `freezer/` folder — **create it**.
4. Move `milk.txt` and `eggs.txt` into `fridge/`
5. Move `ice_cream.txt` and `frozen_peas.txt` into `freezer/`
6. Move `pasta.txt`, `rice.txt`, and `canned_beans.txt` into `pantry/`
7. The file `mouldy_bread.txt` should be **deleted** — it's gone off.
8. Rename `spageti.txt` to `spaghetti.txt` (fix the typo).
9. Create a file called `shopping_list.txt` in the kitchen root and add at least 3 items to it using `echo` and `>>`.

### Part 3 – Verify

Run `ls -R` from the `kitchen/` root to see the full organized tree. It should look like:

```
kitchen/
├── fridge/
│   ├── eggs.txt
│   └── milk.txt
├── freezer/
│   ├── frozen_peas.txt
│   └── ice_cream.txt
├── pantry/
│   ├── canned_beans.txt
│   ├── pasta.txt
│   └── rice.txt
├── shopping_list.txt
└── spaghetti.txt
```

## Hungry for More?

- Create a `recipes/` folder and add a `pasta_recipe.txt` with at least 5 steps.
- Use `cat` to read back your shopping list and recipe.
- Research the `man` command and use it to read the manual for `ls`.

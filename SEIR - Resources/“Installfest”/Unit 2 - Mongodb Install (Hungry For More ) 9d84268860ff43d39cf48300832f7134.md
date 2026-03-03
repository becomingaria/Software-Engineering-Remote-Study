# Unit 2 - Mongodb Install (Hungry For More?)

# **Mac OS**

You will install via Homebrew.

We need to tap into mongodb to install it.

```bash
brew tap mongodb/brew
```

This will install mongodb.

```bash
brew install mongodb-community@5.0
```

For more detailed instructions you can find them [Here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#homebrew).

<aside>
🚨 **IF YOU ARE USING THE M1 CHIP**

</aside>

`arch -x86_64 brew install mongodb-community@5.0`

# **Linux**

Your install is going to vary depending on your linux distro.

**NOTE: You will need to restart your machine for mongodb to start properly**

## **Ubuntu/ Pop OS**

Detailed instructions can be found [HERE](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## **Manjaro/Arch**

You will have to build from source which is a long process and could take several hours. You can view the install steps [HERE](https://wiki.archlinux.org/index.php/MongoDB)

If you have a software store like in manjaro you can download and build from the source by searching for MongoDB in the store.

# **Windows WSL**

**Follow the instructions provided by Microsoft [here](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb).**

# **Using MongoDB**

To connect to MongoDB use:

```bash
mongo
```

If you get back an error about no connection it is because you are not running the mongodb service. The server must be active for mongo to connect.

## F**or Mac**

You will need to start the service

```
brew services run mongodb-community@5.0
```

## F**or Windows**

You will need to start the service

***Important!!*** You'll have to run this command ***on each restart*** to start up the MongoDB service:

```bash
sudo service mongodb start
```

# **Troubleshooting** 🔧

## **No data/db or permission denied error**

If you are receiving this error it is because mongodb can not find the folder/ can not access the folder where it stores the documents. To resolve this issue you will need to do the following...

Create the folders:

```
sudo mkdir -p /data/db

```

Give permission to the folder:

```
sudo chown -R $USER /data/db

```

for Mac Catalina:

```
sudo mkdir -p /System/Volumes/Data/data/db

```

```
sudo chown -R `id -un` /System/Volumes/Data/data/db

```
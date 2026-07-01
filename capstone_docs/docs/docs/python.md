# Using python on the cluster

We have a few different installations of python on the cluster - there is a default system version of python (v3.9) and we have newer versions installed as software modules which you can optionally load if you need something newer.

## Editing and running Python scripts

You can easily run python scripts from within an SSH shell and can submit these to the batch queue using the normal ```ssub``` wrapper.

For editing scripts we have a number of both graphical and text editors available on the cluster

* Nano (text)
* vi (text)
* emacs (text and graphical)

However, personnally I find it easiest to use the [VSCode](https://code.visualstudio.com/) editor to write scripts on the cluster.  This is an editor which you would run locally on your machine, but you can use a [Remote SSH plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) which allows you to log into the cluster and edit files and run scripts on the cluster from your local VSCode.  It's a really nice way to handle this type of development.

## Managing Python Environments

Many python projects will require the use of packages from outside the standard library.  Because we quickly hit issues of incompatibility if we try to install many packages in the central package repository, we recommend that you use the [Python venv package](https://docs.python.org/3/library/venv.html) to create a virtual environment for each project you work on.

Virtual environments create a lightweight copy of your main python installation into which you can install just the packages you need for a given project.

### Creating a venv

To create a virtual environment you need to run

```python3 -m venv venv```

This will create a virtual environment in the current folder in a sub-folder called ```venv```.  You don't have to call it this (although it's pretty standard) - you could do

```python3 -m venv mynewvirtualenvironment```

..to call it something else.

### Activating a venv

Once you've created the environment you need to activate it before using it.  To activate a venv on linux you would use

```source venv/bin/activate```

You should see your command prompt change to show the name of the environment which is active

```(venv) [andrewss@capstone ~]$```

Note that if you created your environment with a version of python from our software module system, you must do

```module load python/X.X.X``` (where X.X.X is the version of python you originally used to create the venv)

..before activating the environment otherwise it won't work.

### Installing packages
Once your environment is active you can install packages into it using the ```pip``` package

```python3 -m pip install [packagename]```

This will be installed locally to your venv and won't affect other venvs or the central python packages.

```
(venv) [andrewss@capstone ~]$ python -m pip install scipy
Collecting scipy
  Using cached scipy-1.13.1-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (38.6 MB)
Collecting numpy<2.3,>=1.22.4
  Using cached numpy-2.0.2-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (19.5 MB)
Installing collected packages: numpy, scipy
Successfully installed numpy-2.0.2 scipy-1.13.1
```

Conventionally it's a good idea to use a ```requirements.txt``` file to list the packages you're using for a given project.  You can create one of these automatically by using

```
(venv) [andrewss@capstone ~]$ python -m pip freeze > requirements.txt

(venv) [andrewss@capstone ~]$ cat requirements.txt
numpy==2.0.2
scipy==1.13.1
```

If you have a requirements file you can install all of the packages from it by running

```
python3 -m pip install -r requirements.txt
```
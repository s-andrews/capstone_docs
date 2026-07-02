# Using R on the cluster

You can access R in one of two ways

1. By making an SSH connection to the cluster and loading the R software module
2. By using RStudio Server via the cluster web interface

The first of these is more useful if you are automating the running of R scripts and submitting them to the batch queue for processing.

The second is more practical for day to day interactive analysis.

## Using R packages

As of July 2026 we have changed the way that R packages are handled to make their use more scalable, reproducible and friendly.  We now use the [Renv](https://rstudio.github.io/renv/) system to manange R packages, and we have this set up so that everyone can share the same central copy of the most commonly used packages.

The idea with Renv is that instead of having one big collection of packages associated with an R installation, that you set up a separate package repository for each project containing just the packages you're using for that project.  It will also record the packages you're using in a way which makes it simple to replicate the package set if you want to share your code with someone else, or if you want to use someone else's code on your machine.

## Setting up an Renv

Renvs inherently work well with R projects so if you're not using those already this is a good time to start.  In RStudio you can create a project with

```File > New Project```

If you're on a command line you can just create a folder, move into it and start R from there to do something similar.

Once you've started your project you need to initialise Renv by running the following in the console

```renv::init()```

If you want to use bioconductor packages such as DESeq2, EdgeR, LIMMA, clusterProfiler, etc then you should do the following - you can also do this later on if you decide you want to add this to an existing Renv.

```renv::init(bioconductor=TRUE)```

This will set up the basic Renv structure.  You then need to restart your R session.  In RStudio you can do this with:

```Session > Terminate R```

It will automatically restart and you should see something like this at the bottom of your console

```- Project '~/renv_test' loaded. [renv 1.2.3]```

## Installing packages

### From CRAN and Bioconductor

You can now install the packages you want from the global package cache.  You can do this using the standard ```install.packages``` command.  For BioConductor packages you should still use ```install.packages``` rather than the ```BiocManager::install``` function as Renv will handle this for you.  Most of the time the packages you install will come from the existing package cache so should be installed in a few seconds.  If there is anything missing from the cache Renv will try to install it for you and add it to the future cache.

```
> install.packages("dplyr")
The following package(s) will be installed:
- cli        [3.6.6]
- dplyr      [1.2.1]
- generics   [0.1.4]
- glue       [1.8.1]
- lifecycle  [1.0.5]
- magrittr   [2.0.5]
- pillar     [1.11.1]
- pkgconfig  [2.0.3]
- R6         [2.6.1]
- rlang      [1.2.0]
- tibble     [3.3.1]
- tidyselect [1.2.1]
- utf8       [1.2.6]
- vctrs      [0.7.3]
- withr      [3.0.3]
These packages will be installed into "~/renv_test/renv/library/linux-almalinux-9.7/R-4.6/x86_64-pc-linux-gnu".

Do you want to proceed? [Y/n]: Y

# Installing packages --------------------------------------------------------
✔ tidyselect 1.2.1                         [linked from cache]
✔ R6 2.6.1                                 [linked from cache]
✔ magrittr 2.0.5                           [linked from cache]
✔ generics 0.1.4                           [linked from cache]
✔ cli 3.6.6                                [linked from cache]
✔ withr 3.0.3                              [linked from cache]
✔ pillar 1.11.1                            [linked from cache]
✔ glue 1.8.1                               [linked from cache]
✔ dplyr 1.2.1                              [linked from cache]
✔ tibble 3.3.1                             [linked from cache]
✔ utf8 1.2.6                               [linked from cache]
✔ vctrs 0.7.3                              [linked from cache]
✔ lifecycle 1.0.5                          [linked from cache]
✔ pkgconfig 2.0.3                          [linked from cache]
✔ rlang 1.2.0                              [linked from cache]
Successfully installed 15 packages in 75 milliseconds.
```

Remember that BioConductor packages will only work if you used ```bioconductor=TRUE``` with the ```init``` command.


### From Github

You can directly install from github with ```renv::install``` by using ```username/repository``` as the name of the package

```
> install.packages("s-andrews/qtemplate")
The following package(s) will be installed:
- qtemplate [s-andrews/qtemplate]
- whisker   [0.4.1]
These packages will be installed into "~/renv_demo/renv/library/linux-almalinux-9.7/R-4.6/x86_64-pc-linux-gnu".

Do you want to proceed? [Y/n]: 
# Downloading packages -------------------------------------------------------
✔ qtemplate 0.1.0                          [27 kB in 0.56s]                   
✔ whisker 0.4.1                            [74 kB in 0.59s]                   
Successfully downloaded 2 packages in 1 second.                               

# Installing packages --------------------------------------------------------
✔ whisker 0.4.1                            [installed binary]                 
✔ qtemplate 0.1.0                          [built from source in 2.4s]        
Successfully installed 2 packages in 4.8 seconds.
```

### Package Installation Problems
If you find packages which you're not able to install then please contact Bioinformatics who can install them for you and add them to the cache.


## Updating an Renv

Sometimes you will see a warning that some of the packages you have installed are not correctly recorded in your renv lock file.  This isn't a problem and just means you need to update the file. You can do this with:

```
renv::snapshot()
```

This won't do any harm if there's nothing to be done.

## Restoring an Renv

If you are given a project which used Renv or your coming back to an old project which you'd cleaned up then getting all of your packages back is as simple as

```
renv::restore()
```
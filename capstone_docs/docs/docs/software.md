# Accessing Software

We have tried to make it as easy as possible for you to get at the software you need on the cluster. If you find some software which you think would be useful to others, and which is available under an open source license then let us know and we can install it for you (and everyone else).

## Software Packages
Once you are logged into the cluster you will need to set up your environment to add in whichever software packages you want to be able to use.  There are very few packages available within the default shell you get having just logged in but it’s easy to add in what you need.

Most of the software on the cluster is controlled by a system called "environment modules".  This allows you to install a lot of different packages on the cluster, including multiple versions of the same package, or even conflicting packages and then provides a mechanism for each user to select which of these packages they want to use in their session.

All of the options relating to environment modules are accessed through a program called ```module```.

### Listing available packages

To see which packages are available to you on the cluster you can run the command

```module avail```

This will produce a list of the packages and versions you can choose from.

```
$ module avail

-------------------------------- /bi/apps/modulefiles ---------------------------
   R/4.3.2                  cutadapt/4.6           nextflow/23.10.1
   UmiBam/0.2.0             deeptools/3.5.4        python/3.9.16
   bcftools/1.19            diann/1.8.1            python/3.11.8
   bedtools/2.31.0          emboss/6.6.0           python/3.12.2        (D)
   bismark/0.24.2           fastq_screen/0.15.3    rstudio/2023.12.1
   bowtie2/2.5.3            fastqc/0.12.1          samtools/1.19.2
   bwa/0.7.17               gatk/4.5.0.0           seqmonk/1.48.1
   cellprofiler/4.2.6       hisat2/2.2.1           sradownloader/latest
   cellranger-arc/2.0.2     igv/2.17.2             sratoolkit/3.0.10
   cellranger-atac/2.1.0    java/21.0.2            ssub/latest
   cellranger/7.2.0         macs2/2.2.9.1          template
   clustertest/0.1          macs3/3.0.0            trim_galore/0.6.10
   codonuse/latest          maxquant/2.4.14.0      umitools/1.1.4
   compter/latest           minimap/2.26
   cufflinks/2.2.1          multiqc/1.20
```

You can see that each package has both a name and an associated version number.  Some packages have multiple versions installed whereas others will have only one.

### Using a software package


To use a package you use the ```module load``` command.  You can choose to specify a specific module to load (eg ```bowtie2/2.5.3```) or you can just use the module name (bowtie2) in which case you’ll get the latest version of that module.

Loading a module will immediately make that software package available in your current session as demonstrated below.

```
$ bismark --version
-bash: bismark: command not found

$ module load bismark
$ bismark --version

            Bismark - Bisulfite Mapper and Methylation Caller.

                       Bismark Version: v0.22.1
        Copyright 2010-19 Felix Krueger, Babraham Bioinformatics
              www.bioinformatics.babraham.ac.uk/projects/
                https://github.com/FelixKrueger/Bismark
```

If you’re not sure what modules you’ve already loaded then you can see this using ```module list```.  Modules know about dependencies on other modules, so loading one module may also load several others to allow it to work.

```
$ module list
No Modulefiles Currently Loaded.

$ module load trim_galore
$ module list
Currently Loaded Modulefiles:
  1) java/1.7.0_09       3) cutadapt/1.2.1
  2) fastqc/0.10.1       4) trim_galore/0.2.5
```

### Removing packages

If you want to reset the loaded modules in your current shell then you can remove them all by running

```module purge```

Module loading is reset every time you start a new shell.

If you need a package which isn’t available either by default or through the environment modules then please come to speak to someone in the bioinformatics group who can help you to work out the best way to add in the software you need.

 
## Installing your own software

If possible it's always good to get software installed into the central software modules system, but you can also install software yourself.

All installed software should be kept in your home directory.  You don't have permission to install in any of the system directories.

If you are installing software you should generally do this directly on the head node.  All of the compilers, build tools and development libraries are only installed on the head node and not on any of the compute nodes.  Runtime libraries are on all nodes.

### Installation with a package manager

One of the most common ways to install software is the use of a third party package manager. Many packages will now recommend this method for installing software, and it can be very convenient when it works (but also quite a pain if it fails!).

Historically people tended to use the [conda](https://anaconda.org/anaconda/conda) package manager, but due to [legal problems associated with the use of this software](https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/) the use of conda on the cluster is **not permitted**.  The software itself is open source and not problematic, but the default configuration uses repositories which require a paid license.  There are also better solutions available which are a drop in replacement.

Instead of conda we recommend the use of [mamba](https://github.com/mamba-org/mamba) which is more functional, quicker and not legally encumbered.  If you have instructions for installing using conda you can just swap in mamba and things should just work.

### Using containers

Some workflows use containers such as [docker](https://www.docker.com/) to distribute software.  Because of the permissions it requires we cannot allow normal users to run docker on the cluster.  Instead we provide [singularity](https://docs.sylabs.io/guides/latest/user-guide/) which is a compatible container environment which can prepare its own containers, but can also [run docker containers](https://docs.sylabs.io/guides/2.6/user-guide/singularity_and_docker.html).

### Manual compilation and installation

If required you can manually compile and install software to your home directory.  You cannot install to system directories or perform any actions which require root privileges.  Generally, in a standard build procedure you will need to provide a ```--prefix``` argument (or similar) to specify a directory under your home directory into which software should be installed after compilation.  

If you have any problems installing or running the software you need then please [get in touch](../help.html) and we'll be happy to help.

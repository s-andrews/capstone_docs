# Accessing Software

We have tried to make it as easy as possible for you to get at the software you need on the cluster. If you find some software which you think would be useful to others, and which is available under an open source license then let us know and we can install it for you (and everyone else).

## Software Packages
Once you are logged into the cluster you will need to set up your environment to add in whichever software packages you want to be able to use.  There are very few packages available within the default shell you get having just logged in but it’s easy to add in what you need.

Most of the software on the cluster is controlled by a system called "environment modules".  This allows you to install a lot of different packages on the cluster, including multiple versions of the same package, or even conflicting packages and then provides a mechanism for each user to select which of these packages they want to use in their session.

All of the options relating to environment modules are accessed through a program called ```module```.

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

If you want to reset the loaded modules in your current shell then you can remove them all by running

```module purge```

Module loading is reset every time you start a new shell.

If you need a package which isn’t available either by default or through the environment modules then please come to speak to someone in the bioinformatics group who can help you to work out the best way to add in the software you need.

 


# Storing Data on the Cluster

The cluster has an attached storage system onto which you can save your data.  There are three main areas into which you can put data and which are appropriate for different kinds of data.  All of the areas are situated under the ```/bi``` directory and you shouldn’t try to save data outside of these locations.

For all of the storage areas please try to manage the data you create.  We have a relatively large storage area, but with the size of datasets we are now creating it will start to fill up surprisingly quickly.  At the moment we do not put limits on the amount of space which can be taken up by individual users or groups, but this relies on people managing their storage usage and cleaning up data which is no longer required.


## Home shares
Every user has a home directory under ```/bi/home/[username]``` and this is where you’ll start each session on the cluster.  The home directory is suitable for relatively small files which are only relevant to you.  Examples might be scripts that you’re working on or configuration or results files.

## Group shares
Most of your important data should go into your group share which is situated under ```/bi/group```.  If you’re not sure which group you’re in you can just run ```groups``` on the command line which will tell you.  

```
[andrewss@capstone ~]$ groups andrewss
andrewss : bioinf
```

In this case you can see that I am part of the ```bioinf``` group, so my group share is at ```/bi/group/bioinf```.

How files inside each group share are organised is left up to the head of that group so you’ll need to discuss with the other members of your group how you are going to manage this.

All data saved in either your home directory or the group share will be backed up to a second storage cluster at regular intervals.  The backups are filesystem snapshots so although they provide some resilience they do not provide long term backups.  If you accidentally delete something from one of these areas you need to get it restored as quickly as possible as the snapshots will roll over and the data will be permanently lost.

## Scratch area
For data which doesn’t need to be backed up there is a separate storage area which you can use and you should try to use this area where possible so that we don’t end up wasting space in the backups for data which can easily be recreated.  This scratch area can be found under ```/bi/scratch``` and its permissions are open so that anyone can write data into this area.


## Other data areas
There are a couple of other storage areas on the cluster which can be useful for retrieving data rather than having to store a copy in your own space.

### Sequencing data
If you have run samples through the Babraham sequencing facility, or had them run elsewhere and imported to Babraham, then you can access the data for these samples in the ```/bi/sequencing``` share.  The ```/bi/sequencing``` share is a virtual file system, so every user will see something different in there.  You should see a list of folders relating to the samples you submitted, or samples from other people to which you’ve been given permission in sierra.  Under these folders you’ll see the lanes of sequencing run for each sample, and under these the unaligned and aligned data from those runs.

The sequencing share is read-only so you can’t modify the data in there.  We recommend therefore that you either read the data you need directly out of this share or, if you want to refer to those files within your own area, that you create a symlink from ```/bi/sequencing``` to your own area.  To create a symlink you use the ```ln -s``` command which will make a virtual file which you can use just like a normal file, but doesn’t actually take up any space in the file system.

If you find that you don't see your data in ```/bi/sequencing``` but just a text file called ```README_UNREGISTERED.txt``` then contact the bioinformatics group who can link your sierra account to your cluster account to make this feature work.

### Imaging Data
If you have data stored on the ImageDataStore then this will be visible on the cluster under ```/bi/imaging```.  This is another virtual filesystem which only shows your data to you.  Access to this data is read-only.

If you can’t see your imaging data then contact bioinformatics and we can configure the appropriate linkage between your user account and the folder(s) that you own on the imaging system.

### Cached public datasets
To try to cut down on the number of copies of popular public datasets we stored on the cluster we have created a common area for these downloads which is /bi/pubcache.  Although you can write into this area, we would prefer that any new datasets are requested by using the Labrador web system (at [https://bioinfdev/labrador](https://bioinfdev/labrador)) so that everyone can see where they are.  As for the sequencing share you can use symlinks to make the data under ```/bi/pubcache``` appear within your own working area.

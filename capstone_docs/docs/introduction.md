# Introduction

This is an introduction to what the cluster is and why you might (or might not) want to use it.

## What is the cluster?

The Capstone cluster is a shared computational resource which is now available to anyone on campus doing research which requires a powerful computing platform.

Physically, the cluster is a collection of around 30 pretty standard Dell servers, whose hardware isn't that different to the PC you have sat on your desk. The power of the cluster comes from the number of CPUs and amount of memory it has.

The system is currently an 880 node linux cluster.  It has around 2 Petabytes of attached storage. It has a wide variety of common bioinformatics packages installed and should provide a powerful platform for all manner of large scale computational analyses.

The servers in the cluster are split into compute nodes and a head nodes.  When using the cluster you only normally directly interact with the head node and it can communicate with the processing nodes to actually carry out the work you request.


## What is the cluster good for?

The cluster can be brilliant for computational problems which satisfy any of of the following criteria:

* They require a lot of CPU power, and the processing can be split across multiple CPUs
* The require a large amount of memory (RAM).  Realistically we can support jobs using up to around 400GB RAM
* They use large amounts of data

## What is the cluster not good for?

The cluster is good at some things but it's not going to magically solve all of your problems.

* If you need to use software which doesn't run under linux the cluster won't help
* If you have a single threaded application the cluster likely won't run it any quicker than your desktop
* If your application is limited by the speed at which data is being read / written the cluster probably won't help



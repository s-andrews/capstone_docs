# Connecting to the cluster

## Registering to use the cluster
Before you can use the cluster, you need to be registered as a user on the system. Anyone at the institute can just drop an email to simon.andrews@babraham.ac.uk and he will set your account up for you. Everyone at the institute has free access to the cluster.

Anyone from a campus company who wishes to use the cluste can also contact simon.andrews@babraham.ac.uk to go through the options for using the cluster and the different levels of access which are available. Access to the cluster for campus companies is not free, and we can go through the costs for different levels of access to work out what would work for you.

## Where can I access the cluster from?

### Babraham Institute Intranet
The cluster is directly visible on the Babraham Institute Intranet, so when you're connected via a network cable on site, or connected on an institute machine to the Eduroam wireless network on site.   Direct access is *not* available from any of the following:

* A non Babraham-instistute machine, even if connected to Eduroam at Babraham
* A Babraham institute machine connected to Eduroam on another site (ie at the university)
* A Babraham institute machine connected to the cloud wireless network

### Off site access
You can connect to the cluster from outside the institute in one of the following ways

* By using the Babraham VPN service on an institute laptop
* By using the RDWeb service from any machine (once you have registered for RDWeb access)
* By using a network which has been specifically permitted to access the cluster (mostly for campus companies)

## Software required to use the cluster
There are two ways you can connect to the cluster

1. A command line SSH connection.  This is the most direct and flexible way to use the cluster. It gives you command line access to the head node and lets you run linux commands directly.
2. A connection to the cluster web interface. The cluster web interface can be used to monitor your cluster use, and also to run certain types of application such as Rstudio sessions or Jupyter labs notebooks. Use of the web interface only requires a web browser.

The software you'll need to connect to the cluster varies depending on what operating system you're using.

### Windows
Windows users will need to install two pieces of software to access the cluster.  To allow a command line connection they should use PuTTY.  For running graphical programs you will need an additional piece of software called VcXsrv Windows X Server. For institute machines, both of these pieces of software are available in the windows software centre.

### OSX
Mac users can connect to the cluster just using the Terminal.app program, which should already be available on your system. If you want to use graphical programs then you will also need to install the XQuartz app.  For institute users this is available in the managed software application.

### Linux
Anyone using Linux as their desktop operating system generally won't need to install anything additional to connect to the cluster as all of the software required will be present already.
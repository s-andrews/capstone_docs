# Managing Jobs

In the [/docs/jobs](running jobs) page you can see how to submit jobs to the batch queue.  Here we will look at how to monitor the progress of jobs you have submitted, or look at the metrics from jobs you have submitted in the past.

## Looking at the queue
Once you have submitted some jobs to the queue there will be no indication of progress until the job is returned to you.  However, you can monitor the current state of the queue to see what jobs you have running and where they are.
For simple monitoring there is a command line tool called ```show_queue``` which will show you what is currently in the queue.  If you run this it will show you a summary of all of the jobs that you are currently running.  By default it will show jobs from all users, but if you add ```-u [your username]``` then it will only show your jobs.

```
$ show_queue -u inglesfs
JOBID   PARTITI NAME              USER     STATE   TIME       MIN_MEM TASKS   MIN_CPU NODELIST
83842   normal  wait_R2           inglesfs PENDING 0:00       1G      1       1       Dependency
89681   normal  nf-BISMARK_(EM_He inglesfs RUNNING 4:05:56    20G     1       5       compute-0-8
89677   normal  nf-BISMARK_(EM_Bu inglesfs RUNNING 4:07:07    20G     1       5       compute-0-2
89675   normal  nf-BISMARK_(EM_Bu inglesfs RUNNING 4:07:09    20G     1       5       compute-0-10
89672   normal  nf-BISMARK_(EM_So inglesfs RUNNING 4:11:07    20G     1       5       compute-0-3
89668   normal  nf-BISMARK_(EM_He inglesfs RUNNING 4:11:14    20G     1       5       compute-0-7
89664   normal  nf-BISMARK_(EM_Bu inglesfs RUNNING 4:13:07    20G     1       5       compute-0-7
```

You’ll obviously use your own username in the command (unless you want to see what everyone is running)

The ```STATE``` column tells you the status of each job. The main ones you’re likely to see are:

•	```RUNNING```  The job is running
•	```PENDING``` The job is paused waiting for resources to become available or dependent jobs to finish

Initially, if you submit multiple jobs you may only see one of them starting, but others should start after a brief delay.  The cluster will work through your jobs in order until they are all complete.

## Monitoring completed jobs
If you want to look at jobs which have finished running to see if they completed OK, how long they took, and how much memory they used then you can do this using the ```show_jobs``` command.

```
$ show_jobs
ID    Date        Name            CPU Rmem   Umem   Elapsed Stat
----- ----------- --------------- --- ----- ----- --------- ----
89790 24/09@15:44 test_job        2   2.0     0.0        2s COMP
89789 24/09@15:44 test_job        2   2.0     0.0        2s COMP
89788 24/09@15:44 test_job        2   2.0     0.0        2s COMP
89787 24/09@15:44 test_job        2   2.0     0.0        1s COMP
89786 24/09@15:44 test_job        2   2.0     0.0        1s COMP
89689 24/09@12:26 juypterserv     1   20.0    0.1       33s CANC
89688 24/09@12:23 juypterserv     1   20.0    0.1       44s CANC
89686 24/09@12:17 juypterserv     1   20.0    0.1     2m24s CANC
89684 24/09@12:12 bash            1   19.5    0.0     1m12s COMP
89683 24/09@12:08 juypterserv     1   20.0    0.0        2s FAIL
```

By default this will show you your 20 most recent jobs which finished in the last 2 weeks.  If you want to see more jobs then you can add ```-n 100``` to show you the last 100 jobs.

The last column in this output says what happened to the job

```COMP``` = completed successfully
```CANC``` = cancelled by you
```FAIL``` = job exited in an error state
```OOM ``` = job used more memory than it was allocated

The ```Rmem``` and ```Umem``` show the amount of memory requested, and then actually used. 

## Removing jobs from the queue
If you decide that having started a job you no longer want it to run then you can delete it from the queue at any time.  You can only delete your own jobs though.

To remove a job first use squeue to find the job id for the job you want to remove.  You can then use ```scancel``` to remove the job.  You can specify multiple ids separated by spaces.

```
$ show_queue
             JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
              2914    normal    test1 rodrigue  R       0:04      1 pebble001
              2915    normal    test2 rodrigue  R       0:04      1 pebble001
              2916    normal    test3 rodrigue  R       0:04      1 pebble001
              2917    normal    test4 rodrigue  R       0:04      1 pebble001
              2918    normal    test5 rodrigue  R       0:04      1 pebble002
              2919    normal    test6 rodrigue  R       0:04      1 pebble002
              2920    normal    test7 rodrigue  R       0:04      1 pebble002
              2921    normal    test8 rodrigue  R       0:04      1 pebble002
              2922    normal    test9 rodrigue  R       0:04      1 pebble003
              2923    normal   test10 rodrigue  R       0:04      1 pebble003

$ scancel 2918 2919 2920


$ show_queue
             JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
              2914    normal    test1 rodrigue  R       0:04      1 pebble001
              2915    normal    test2 rodrigue  R       0:04      1 pebble001
              2916    normal    test3 rodrigue  R       0:04      1 pebble001
              2917    normal    test4 rodrigue  R       0:04      1 pebble001
              2921    normal    test8 rodrigue  R       0:04      1 pebble002
              2922    normal    test9 rodrigue  R       0:04      1 pebble003
              2923    normal   test10 rodrigue  R       0:04      1 pebble003
```
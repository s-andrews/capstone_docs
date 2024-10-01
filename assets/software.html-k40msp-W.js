import{_ as s,c as i,a as l,b as t,d as a,e as o,w as r,r as d,o as c}from"./app-Bf8etsdx.js";const p={};function u(h,e){const n=d("RouteLink");return c(),i("div",null,[e[3]||(e[3]=l(`<h1 id="accessing-software" tabindex="-1"><a class="header-anchor" href="#accessing-software"><span>Accessing Software</span></a></h1><p>We have tried to make it as easy as possible for you to get at the software you need on the cluster. If you find some software which you think would be useful to others, and which is available under an open source license then let us know and we can install it for you (and everyone else).</p><h2 id="software-packages" tabindex="-1"><a class="header-anchor" href="#software-packages"><span>Software Packages</span></a></h2><p>Once you are logged into the cluster you will need to set up your environment to add in whichever software packages you want to be able to use. There are very few packages available within the default shell you get having just logged in but it’s easy to add in what you need.</p><p>Most of the software on the cluster is controlled by a system called &quot;environment modules&quot;. This allows you to install a lot of different packages on the cluster, including multiple versions of the same package, or even conflicting packages and then provides a mechanism for each user to select which of these packages they want to use in their session.</p><p>All of the options relating to environment modules are accessed through a program called <code>module</code>.</p><h3 id="listing-available-packages" tabindex="-1"><a class="header-anchor" href="#listing-available-packages"><span>Listing available packages</span></a></h3><p>To see which packages are available to you on the cluster you can run the command</p><p><code>module avail</code></p><p>This will produce a list of the packages and versions you can choose from.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ module avail</span>
<span class="line"></span>
<span class="line">-------------------------------- /bi/apps/modulefiles ---------------------------</span>
<span class="line">   R/4.3.2                  cutadapt/4.6           nextflow/23.10.1</span>
<span class="line">   UmiBam/0.2.0             deeptools/3.5.4        python/3.9.16</span>
<span class="line">   bcftools/1.19            diann/1.8.1            python/3.11.8</span>
<span class="line">   bedtools/2.31.0          emboss/6.6.0           python/3.12.2        (D)</span>
<span class="line">   bismark/0.24.2           fastq_screen/0.15.3    rstudio/2023.12.1</span>
<span class="line">   bowtie2/2.5.3            fastqc/0.12.1          samtools/1.19.2</span>
<span class="line">   bwa/0.7.17               gatk/4.5.0.0           seqmonk/1.48.1</span>
<span class="line">   cellprofiler/4.2.6       hisat2/2.2.1           sradownloader/latest</span>
<span class="line">   cellranger-arc/2.0.2     igv/2.17.2             sratoolkit/3.0.10</span>
<span class="line">   cellranger-atac/2.1.0    java/21.0.2            ssub/latest</span>
<span class="line">   cellranger/7.2.0         macs2/2.2.9.1          template</span>
<span class="line">   clustertest/0.1          macs3/3.0.0            trim_galore/0.6.10</span>
<span class="line">   codonuse/latest          maxquant/2.4.14.0      umitools/1.1.4</span>
<span class="line">   compter/latest           minimap/2.26</span>
<span class="line">   cufflinks/2.2.1          multiqc/1.20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can see that each package has both a name and an associated version number. Some packages have multiple versions installed whereas others will have only one.</p><h3 id="using-a-software-package" tabindex="-1"><a class="header-anchor" href="#using-a-software-package"><span>Using a software package</span></a></h3><p>To use a package you use the <code>module load</code> command. You can choose to specify a specific module to load (eg <code>bowtie2/2.5.3</code>) or you can just use the module name (bowtie2) in which case you’ll get the latest version of that module.</p><p>Loading a module will immediately make that software package available in your current session as demonstrated below.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ bismark --version</span>
<span class="line">-bash: bismark: command not found</span>
<span class="line"></span>
<span class="line">$ module load bismark</span>
<span class="line">$ bismark --version</span>
<span class="line"></span>
<span class="line">            Bismark - Bisulfite Mapper and Methylation Caller.</span>
<span class="line"></span>
<span class="line">                       Bismark Version: v0.22.1</span>
<span class="line">        Copyright 2010-19 Felix Krueger, Babraham Bioinformatics</span>
<span class="line">              www.bioinformatics.babraham.ac.uk/projects/</span>
<span class="line">                https://github.com/FelixKrueger/Bismark</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you’re not sure what modules you’ve already loaded then you can see this using <code>module list</code>. Modules know about dependencies on other modules, so loading one module may also load several others to allow it to work.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ module list</span>
<span class="line">No Modulefiles Currently Loaded.</span>
<span class="line"></span>
<span class="line">$ module load trim_galore</span>
<span class="line">$ module list</span>
<span class="line">Currently Loaded Modulefiles:</span>
<span class="line">  1) java/1.7.0_09       3) cutadapt/1.2.1</span>
<span class="line">  2) fastqc/0.10.1       4) trim_galore/0.2.5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removing-packages" tabindex="-1"><a class="header-anchor" href="#removing-packages"><span>Removing packages</span></a></h3><p>If you want to reset the loaded modules in your current shell then you can remove them all by running</p><p><code>module purge</code></p><p>Module loading is reset every time you start a new shell.</p><p>If you need a package which isn’t available either by default or through the environment modules then please come to speak to someone in the bioinformatics group who can help you to work out the best way to add in the software you need.</p><p></p><h2 id="installing-your-own-software" tabindex="-1"><a class="header-anchor" href="#installing-your-own-software"><span>Installing your own software</span></a></h2><p>If possible it&#39;s always good to get software installed into the central software modules system, but you can also install software yourself.</p><p>All installed software should be kept in your home directory. You don&#39;t have permission to install in any of the system directories.</p><p>If you are installing software you should generally do this directly on the head node. All of the compilers, build tools and development libraries are only installed on the head node and not on any of the compute nodes. Runtime libraries are on all nodes.</p><h3 id="installation-with-a-package-manager" tabindex="-1"><a class="header-anchor" href="#installation-with-a-package-manager"><span>Installation with a package manager</span></a></h3><p>One of the most common ways to install software is the use of a third party package manager. Many packages will now recommend this method for installing software, and it can be very convenient when it works (but also quite a pain if it fails!).</p><p>Historically people tended to use the <a href="https://anaconda.org/anaconda/conda" target="_blank" rel="noopener noreferrer">conda</a> package manager, but due to <a href="https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/" target="_blank" rel="noopener noreferrer">legal problems associated with the use of this software</a> the use of conda on the cluster is <strong>not permitted</strong>. The software itself is open source and not problematic, but the default configuration uses repositories which require a paid license. There are also better solutions available which are a drop in replacement.</p><p>Instead of conda we recommend the use of <a href="https://github.com/mamba-org/mamba" target="_blank" rel="noopener noreferrer">mamba</a> which is more functional, quicker and not legally encumbered. If you have instructions for installing using conda you can just swap in mamba and things should just work.</p><h3 id="using-containers" tabindex="-1"><a class="header-anchor" href="#using-containers"><span>Using containers</span></a></h3><p>Some workflows use containers such as <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">docker</a> to distribute software. Because of the permissions it requires we cannot allow normal users to run docker on the cluster. Instead we provide <a href="https://docs.sylabs.io/guides/latest/user-guide/" target="_blank" rel="noopener noreferrer">singularity</a> which is a compatible container environment which can prepare its own containers, but can also <a href="https://docs.sylabs.io/guides/2.6/user-guide/singularity_and_docker.html" target="_blank" rel="noopener noreferrer">run docker containers</a>.</p><h3 id="manual-compilation-and-installation" tabindex="-1"><a class="header-anchor" href="#manual-compilation-and-installation"><span>Manual compilation and installation</span></a></h3><p>If required you can manually compile and install software to your home directory. You cannot install to system directories or perform any actions which require root privileges. Generally, in a standard build procedure you will need to provide a <code>--prefix</code> argument (or similar) to specify a directory under your home directory into which software should be installed after compilation.</p>`,36)),t("p",null,[e[1]||(e[1]=a("If you have any problems installing or running the software you need then please ")),o(n,{to:"/help.html"},{default:r(()=>e[0]||(e[0]=[a("get in touch")])),_:1}),e[2]||(e[2]=a(" and we'll be happy to help."))])])}const g=s(p,[["render",u],["__file","software.html.vue"]]),v=JSON.parse('{"path":"/docs/software.html","title":"Accessing Software","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Software Packages","slug":"software-packages","link":"#software-packages","children":[{"level":3,"title":"Listing available packages","slug":"listing-available-packages","link":"#listing-available-packages","children":[]},{"level":3,"title":"Using a software package","slug":"using-a-software-package","link":"#using-a-software-package","children":[]},{"level":3,"title":"Removing packages","slug":"removing-packages","link":"#removing-packages","children":[]}]},{"level":2,"title":"Installing your own software","slug":"installing-your-own-software","link":"#installing-your-own-software","children":[{"level":3,"title":"Installation with a package manager","slug":"installation-with-a-package-manager","link":"#installation-with-a-package-manager","children":[]},{"level":3,"title":"Using containers","slug":"using-containers","link":"#using-containers","children":[]},{"level":3,"title":"Manual compilation and installation","slug":"manual-compilation-and-installation","link":"#manual-compilation-and-installation","children":[]}]}],"git":{"updatedTime":1727773973000,"contributors":[{"name":"Simon Andrews","email":"simon@proteo.me.uk","commits":3}]},"filePathRelative":"docs/software.md"}');export{g as comp,v as data};

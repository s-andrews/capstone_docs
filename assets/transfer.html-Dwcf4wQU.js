import{_ as n,c as e,a,o as i}from"./app-BlEJ3rZJ.js";const l={};function t(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="transferring-data-to-and-from-the-cluster" tabindex="-1"><a class="header-anchor" href="#transferring-data-to-and-from-the-cluster"><span>Transferring data to and from the cluster</span></a></h1><p>The storage on the cluster isn&#39;t generally visible from other machines on site, including your desktop or laptop. If you want to move data on to or off the cluster you will need to do an explicit transfer to some other storage system.</p><p>In general we urge people to not duplicate data. The <code>home</code> and <code>group</code> shares on the cluster are secure forms of storage which are automatically backed up so it&#39;s perfectly OK to keep your data on there long term. Please also remember that any data you see on <code>/bi/sequencing</code> and <code>/bi/imaging</code> are also backed up, so whilst you can do futher processing of this data in your own areas you don&#39;t need to copy data from there.</p><p>If you need to move data to/from the cluster then you can do this in one of two ways:</p><ol><li>Using the cluster web interface</li><li>Using an SFTP transfer program</li></ol><h2 id="move-data-using-the-cluster-web-interface" tabindex="-1"><a class="header-anchor" href="#move-data-using-the-cluster-web-interface"><span>Move data using the cluster web interface</span></a></h2><p>The cluster web interface at <a href="https://capstone.babraham.ac.uk" target="_blank" rel="noopener noreferrer">https://capstone.babraham.ac.uk/&quot;</a>, under the <code>Programs</code> tab, has a FileBrowser program which lets you look at your data, but also upload or download from the cluster.</p><p>After starting the file browser in the share you want to work on (<code>home</code>, <code>group</code> or <code>scratch</code>) you can then either select a file or folder in the main view and press the download button in the toolbar to download it.</p><p>To upload you can just drag and drop onto the web interface. You can upload either single files, or entire directories this way.</p><h2 id="move-data-using-an-sftp-program" tabindex="-1"><a class="header-anchor" href="#move-data-using-an-sftp-program"><span>Move data using an SFTP program</span></a></h2><h3 id="graphical-programs" tabindex="-1"><a class="header-anchor" href="#graphical-programs"><span>Graphical Programs</span></a></h3><p>There are a number of graphical programs which can be used to do data transfer using the SFTP protocol, which is what the cluster uses. Commonly used ones are:</p><ul><li><a href="Cyberduck">https://cyberduck.io/</a> (Windows or OSX)</li><li><a href="Filezilla">https://filezilla-project.org/</a> (Windows or OSX)</li><li>[https://bitvise.com/ssh-client](Bitvise SSH Client) (Windows only)</li><li><a href="WinSCP">https://winscp.net/</a> (Windows only)</li></ul><p>When setting up a connection in these clients you will either be asked for a connection URL, or for the separate details of the connection.</p><p>The connection URL will be:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sftp://[username]@capstone.babraham.ac.uk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For programs which ask for the details separately the information you need will be:</p><ul><li><strong>Hostname</strong>: <code>capstone.babraham.ac.uk</code></li><li><strong>Protocol</strong>: <code>sftp</code></li></ul><p>Username and password are your normal login username and password.</p><p>Once you have connected via these programs you will either have a single window from which you can drag and drop data to and from your local machine, or you will have a two panel window where the left side is your local machine and the right is the cluster and you can move data from one side to the other.</p><h3 id="command-line-transfers" tabindex="-1"><a class="header-anchor" href="#command-line-transfers"><span>Command line transfers</span></a></h3><p>If you want to copy data using a command line interface then you can use a command line sftp program on any platform which supports this.</p><p>The command to connect will be:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sftp [username]@capstone.babraham.ac.uk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Once connected you can use commands as shown below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># List all files in the current directory</span>
<span class="line">sftp&gt; ls</span>
<span class="line">10XCourse</span>
<span class="line">10X_Integration</span>
<span class="line">3_ChIP-Seq</span>
<span class="line">ATAC seq second.smk</span>
<span class="line">Aaron</span>
<span class="line">Angelman</span>
<span class="line">Annotated Probe Report for ID All vs All.txt</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line"># Move to a different directory</span>
<span class="line">sftp&gt; cd Temp</span>
<span class="line"></span>
<span class="line"># Download a single file</span>
<span class="line">sftp&gt; get fastqc_v0.12.1.zip</span>
<span class="line">Fetching /bi/home/andrewss/Temp/fastqc_v0.12.1.zip to fastqc_v0.12.1.zip</span>
<span class="line">fastqc_v0.12.1.zip</span>
<span class="line"></span>
<span class="line"># Download a whole folder</span>
<span class="line">sftp&gt; get -r FastQC/</span>
<span class="line">Fetching /bi/home/andrewss/Temp/FastQC/ to FastQC</span>
<span class="line">Retrieving /bi/home/andrewss/Temp/FastQC</span>
<span class="line">htsjdk.jar                                         100% 1757KB   3.7MB/s   00:00    </span>
<span class="line">README.md                                          100% 1044    13.9KB/s   00:00    </span>
<span class="line">INSTALL.txt                                        100% 6477   101.2KB/s   00:00    </span>
<span class="line">LICENSE                                            100%   34KB 429.6KB/s   00:00 </span>
<span class="line">...</span>
<span class="line"></span>
<span class="line"># Download multiple files</span>
<span class="line">sftp&gt; mget *jar</span>
<span class="line">Fetching /bi/home/andrewss/Temp/FastQC/cisd-jhdf5.jar to cisd-jhdf5.jar</span>
<span class="line">cisd-jhdf5.jar                                                            100% 9050KB   5.3MB/s   00:01    </span>
<span class="line">Fetching /bi/home/andrewss/Temp/FastQC/htsjdk.jar to htsjdk.jar</span>
<span class="line">htsjdk.jar                                                                100% 1757KB   7.9MB/s   00:00    </span>
<span class="line">Fetching /bi/home/andrewss/Temp/FastQC/jbzip2-0.9.jar to jbzip2-0.9.jar</span>
<span class="line">jbzip2-0.9.jar                                                            100%   49KB 872.4KB/s   00:00</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># List local files</span>
<span class="line">sftp&gt; lls</span>
<span class="line">cisd-jhdf5.jar  connecting.md  docs  FastQC  fastqc_v0.12.1.zip  help.md  htsjdk.jar  introduction.md</span>
<span class="line"></span>
<span class="line"># Upload a single file</span>
<span class="line">sftp&gt; put help.md</span>
<span class="line">Uploading help.md to /bi/home/andrewss/Temp/help.md</span>
<span class="line">help.md                                              100%    0     0.0KB/s   00:00   </span>
<span class="line"></span>
<span class="line"># Upload multiple files</span>
<span class="line">sftp&gt; mput *jar</span>
<span class="line">Uploading cisd-jhdf5.jar to /bi/home/andrewss/Temp/cisd-jhdf5.jar</span>
<span class="line">cisd-jhdf5.jar                                                                 100% 9050KB   2.7MB/s   00:03    </span>
<span class="line">Uploading htsjdk.jar to /bi/home/andrewss/Temp/htsjdk.jar</span>
<span class="line">htsjdk.jar                                                                     100% 1757KB   2.7MB/s   00:00    </span>
<span class="line">Uploading jbzip2-0.9.jar to /bi/home/andrewss/Temp/jbzip2-0.9.jar</span>
<span class="line">jbzip2-0.9.jar   </span>
<span class="line"></span>
<span class="line"># Upload an entire folder</span>
<span class="line">sftp&gt; put -r FastQC/</span>
<span class="line">Uploading FastQC/ to /bi/home/andrewss/Temp/temp/FastQC</span>
<span class="line">Entering FastQC/</span>
<span class="line">cisd-jhdf5.jar                                              100% 9050KB   2.8MB/s   00:03    </span>
<span class="line">Entering FastQC/Configuration</span>
<span class="line">adapter_list.txt                                            100% 1355    52.6KB/s   00:00    </span>
<span class="line">contaminant_list.txt                                        100%   13KB 391.9KB/s   00:00 </span>
<span class="line">...</span>
<span class="line"></span>
<span class="line"># Exit the connection</span>
<span class="line">sftp&gt; bye</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const o=n(l,[["render",t],["__file","transfer.html.vue"]]),c=JSON.parse('{"path":"/docs/transfer.html","title":"Transferring data to and from the cluster","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Move data using the cluster web interface","slug":"move-data-using-the-cluster-web-interface","link":"#move-data-using-the-cluster-web-interface","children":[]},{"level":2,"title":"Move data using an SFTP program","slug":"move-data-using-an-sftp-program","link":"#move-data-using-an-sftp-program","children":[{"level":3,"title":"Graphical Programs","slug":"graphical-programs","link":"#graphical-programs","children":[]},{"level":3,"title":"Command line transfers","slug":"command-line-transfers","link":"#command-line-transfers","children":[]}]}],"git":{"updatedTime":1727455225000,"contributors":[{"name":"Simon Andrews","email":"simon@proteo.me.uk","commits":2}]},"filePathRelative":"docs/transfer.md"}');export{o as comp,c as data};

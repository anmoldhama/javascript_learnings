🧠 1. OS Fundamentals (30 Questions)
Q) What is an operating system?
ans : it is a layer betweent the user and the hardware
   it is responsible for the resource management, file management, I/o management
   Isolation and protection

Q) What are the main functions of an OS?
ans: process managmeent, resource management, I/O management, file management

Q) Differentiate between kernel and user space.
ans : kernel interact with the hardware
      user space has the application which is interected by the user like shell

Q) What is a system call?

Q) Explain the concept of a shell.

Q) What is a bootstrap program?

Q) Describe monolithic and microkernel architectures.
ans : In monolithic architecture file managment, process management, I/O managment, resource managment
     all the placed inside the kernel level.
      it makes it bulky
      but very fast for communication

Q) What is a hybrid kernel?
ans : 

Q) Define multitasking, multiprogramming, and multiprocessing.
ans : multitasking : multiple processes are used to share the time of execution, single cpu
                     context switch, shared seperate resource
     multiprogramming : single cpu, context switching, but no time sharing
     multiprocessing : multiple cpus, context switching, time sharing to execute the tasks parallely

Q) What is a real-time operating system?
ans : these are very fast error free os, used for real time computations.

Q) Differentiate between batch and time-sharing systems.
ans : batch means that multiple tasks are executed in a set
      time sharing means that the cpus are stop the process already running and saved the state in PCB 
      and give the chance to another process to execute. 

Q) What is a distributed operating system?
ans : distributed operating system are the os which are distrubuted in seperate cpu and memory
   and connected to a central os.

Q) Explain the concept of a virtual machine.

Q) What is the purpose of device drivers?

Q) How does an OS handle interrupts?

Q) What is a daemon process?

Q) Define the term "context switch."
ans : context switch means that the cpu gives the chance to another process to executes.

Q) What is the role of the BIOS in OS operations?

Q) Explain the concept of system booting.

Q) What is the difference between firmware and an operating system?

Q) Describe the function of the command interpreter.

Q) What is the role of the OS in security?

Q) How does an OS manage user accounts and permissions?

Q) What is the significance of the system clock in an OS?

Q) Explain the concept of system calls and APIs.

Q) What are the different types of operating systems?

Q) How does an OS manage hardware resources?

Q) What is the role of the OS in networking?

Q) Describe the concept of a file system.

Q) What is the difference between a process and a program?

🧵 2. Process Management (30 Questions)
Q) What is a process?
ans : process is a program (compiled code) under execution.

Q) Explain the different states of a process.
ans : 

Q) What is a process control block (PCB)?
ans : process control block holds the state of processes store and retrieve on demand. 

Q) Differentiate between process and thread.
ans : process in program under execution
      thread is a part of process.

Q) What is a thread? How does it differ from a process?
ans : process in program under execution
      thread is a part of process that can be used to execute the tasks

Q) Explain multithreading and its benefits.
ans : multithreading means to executes parallel tasks using multiple threads.
      tasks are executes symultaneously.

Q) What is a context switch, and when does it occur?
ans : context switch means the cpu give the chance to another process to execute.

Q) Describe the process scheduling algorithms.
ans : 

Q) What is preemptive and non-preemptive scheduling?

Q) Explain the Round Robin scheduling algorithm.

Q) What is priority scheduling?

Q) Describe the Shortest Job First (SJF) scheduling algorithm.

Q) What is a zombie process?

Q) What is an orphan process?

Q) How does the OS handle process synchronization?

Q) What are semaphores?

Q) Explain mutexes and their role in process synchronization.

Q) What is a critical section?

Q) Describe the concept of deadlock.

Q) What are the necessary conditions for a deadlock?

Q) How can deadlocks be prevented?

Q) What is the Banker's algorithm?

Q) Explain the concept of starvation in process scheduling.

Q) What is aging in scheduling?

Q) How does the OS handle inter-process communication (IPC)?

Q) What are the different IPC mechanisms?

Q) What is a race condition?

Q) How can race conditions be avoided?

Q) What is a signal in the context of processes?

Q) How does the OS manage process priorities?

🧠 3. Memory Management (30 Questions)
Q) What is memory management in an OS?

Q) Explain the concept of virtual memory.

Q) What is paging?

Q) What is segmentation?

Q) Compare paging and segmentation.

Q) What is demand paging?

Q) What is a page fault?

Q) How does the OS handle page replacement?

Q) Describe the Least Recently Used (LRU) algorithm.

Q) What is the First-In-First-Out (FIFO) page replacement algorithm?

Q) What is thrashing?

Q) How can thrashing be prevented?

Q) What is the working set model?

Q) Explain the concept of memory fragmentation.

Q) Differentiate between internal and external fragmentation.

Q) What is compaction in memory management?

Q) What is the role of the Memory Management Unit (MMU)?

Q) How does the OS allocate memory to processes?

Q) What are memory allocation strategies?

Q) What is the buddy system in memory allocation?

Q) Explain the concept of swapping.

Q) What is a memory leak?

Q) How does the OS detect and handle memory leaks?

Q) What is the role of garbage collection in memory management?

Q) What is a stack and a heap?

Q) How does the OS manage stack and heap memory?

Q) What is a segmentation fault?

Q) How does the OS protect memory?

Q) What is address binding?

Q) Explain logical and physical addresses.

💾 4. File Systems & Storage (20 Questions)
Q) What is a file system?

Q) Explain the different types of file systems.

Q) What is the role of the inode in a file system?

Q) What is the difference between a hard link and a soft link?

Q) How does the OS manage file permissions?

Q) What is a directory structure?

Q) Explain the concept of mounting in file systems.

Q) What is journaling in file systems?

Q) How does the OS handle file allocation?

Q) What are the different file allocation methods?

Q) What is a file descriptor?

Q) How does the OS manage file metadata?

Q) What is the purpose of the superblock?

Q) Explain the concept of file buffering.

Q) What is the difference between synchronous and asynchronous I/O?

Q) What is disk scheduling?

Q) Describe the FCFS disk scheduling algorithm.

Q) What is the SCAN disk scheduling algorithm?

Q) Explain the concept of RAID.

Q) What are the different levels of RAID?

🔒 5. Concurrency, Synchronization & Deadlocks (20 Questions)
Q) What is concurrency in operating systems?

Q) How does the OS handle concurrent processes?

Q) What are the challenges of concurrency?

Q) Explain the concept of mutual exclusion.

Q) What is a semaphore, and how is it used?

Q) What is a mutex?

Q) Describe the producer-consumer problem.

Q) What is the readers-writers problem?

Q) How does the OS prevent race conditions?

Q) What is a monitor in synchronization?

Q) Explain the concept of a critical section.

Q) What is deadlock?

Q) What are the necessary conditions for deadlock?

Q) How can deadlocks be prevented?

Q) What is deadlock avoidance?

Q) Explain the Banker's algorithm.

Q) What is deadlock detection?

Q) How does the OS recover from deadlock?

Q) What is starvation in process scheduling?

Q) How can starvation be prevented?

🖥️ 6. Advanced Topics (20 Questions)
Q) What is a real-time operating system?

Q) How does an RTOS differ from a general-purpose OS?

Q) What is a distributed operating system?

Q) How does the OS handle virtualization?

Q) What is a hypervisor?

Q) Differentiate between Type 1 and Type 2 hypervisors.

Q) What is containerization?

Q) How does the OS manage containers?

Q) What is the role of the OS in cloud computing?

Q) How does the OS handle security?

Q) What are access control lists (ACLs)?

Q) What is SELinux?

Q) How does the OS manage user authentication?

Q) What is the role of the OS in networking?

Q) How does the OS handle sockets?

Q) What is the role of the OS in mobile devices?

Q) How does the OS manage power consumption?

Q) What is the role of the OS in embedded systems?

Q) How does the OS handle system updates?

Q) What are the challenges in OS design?

🧠 1. Linux Internals: cgroups, Namespaces, Kernel Modules (20 Questions)
Q) What are Linux namespaces, and how do they isolate system resources?

Q) How do cgroups manage and limit system resources for processes?

Q) Describe the hierarchy and types of cgroups in Linux.

Q) How can you create and manage cgroups using systemd?

Q) Explain the difference between cgroup v1 and cgroup v2.

Q) What are the different types of Linux namespaces?

Q) How do PID namespaces work, and what is their significance?

Q) How do network namespaces provide network isolation?

Q) What is the role of mount namespaces in containerization?

Q) How can you create a new namespace using the unshare command?

Q) What is a kernel module, and how is it different from a kernel?

Q) How do you load and unload kernel modules in Linux?

Q) What are the steps to write a simple "Hello World" kernel module?

Q) How can you view information about loaded kernel modules?

Q) What is the purpose of the modprobe command?

Q) How do kernel modules interact with the kernel?

Q) What are the risks associated with loading third-party kernel modules?

Q) How can you prevent certain kernel modules from loading?

Q) What is the difference between built-in and loadable kernel modules?

Q) How do you debug issues related to kernel modules?

⏱️ 2. Modern OS Scheduling: Completely Fair Scheduler (CFS) (20 Questions)
Q) What is the Completely Fair Scheduler (CFS) in Linux?

Q) How does CFS differ from traditional scheduling algorithms?

Q) What is the concept of virtual runtime (vruntime) in CFS?

Q) How does CFS use red-black trees for process scheduling?

Q) How does CFS ensure fairness among processes?

Q) What is the role of the sched_latency_ns parameter in CFS?

Q) How does CFS handle I/O-bound vs. CPU-bound processes?

Q) What are the advantages of CFS over O(1) scheduler?

Q) How can you tune CFS parameters for performance optimization?

Q) What is the impact of process niceness on CFS scheduling?

Q) How does CFS handle real-time processes?

Q) What are the limitations of CFS?

Q) How does CFS prevent starvation of low-priority processes?

Q) How does the task_struct relate to CFS scheduling?

Q) What tools can be used to monitor CFS behavior?

Q) How does CFS interact with multi-core processors?

Q) What is the impact of CFS on system responsiveness?

Q) How does CFS handle process migration between CPUs?

Q) What are the default values for CFS parameters in Linux?

Q) How can you simulate CFS scheduling behavior for testing?

🐞 3. OS Debugging Tools: strace, gdb, perf, SystemTap, LTTng (20 Questions)
Q) What is strace, and how is it used for debugging?

Q) How can you trace system calls made by a process using strace?

Q) What is gdb, and how is it used for debugging applications?

Q) How do you set breakpoints and watchpoints in gdb?

Q) How can you debug a running process using gdb?

Q) What is perf, and how is it used for performance analysis?

Q) How do you record and analyze performance data using perf?

Q) What is SystemTap, and how does it assist in system tracing?

Q) How do you write and execute a simple SystemTap script?

Q) What is LTTng, and how is it used for tracing Linux systems?

Q) How do you set up and use LTTng for kernel tracing?

Q) What are the differences between SystemTap and LTTng?

Q) How can you monitor file system activity using strace?

Q) How do you analyze memory leaks using valgrind?

Q) What is the role of lsof in debugging?

Q) How can you trace network activity using tcpdump?

Q) How do you monitor process behavior using top and htop?

Q) How can you use vmstat for performance monitoring?

Q) What is the purpose of iotop, and how is it used?

Q) How do you interpret the output of dstat?

⚙️ 4. System Performance Tuning: sysctl, I/O Throttling, CPU Affinity (20 Questions)
Q) What is sysctl, and how is it used for kernel parameter tuning?

Q) How do you view and modify kernel parameters using sysctl?

Q) What are some common sysctl parameters for performance tuning?

Q) How can you make sysctl parameter changes persistent?

Q) What is I/O throttling, and why is it important?

Q) How do you implement I/O throttling using cgroups?

Q) What is CPU affinity, and how does it affect process performance?

Q) How do you set CPU affinity for a process using taskset?

Q) What is NUMA, and how does it impact performance?

Q) How can you optimize memory usage in a NUMA system?

Q) What are huge pages, and how do they improve performance?

Q) How do you enable and configure huge pages in Linux?

Q) What is the role of the nice and renice commands?

Q) How can you prioritize processes using ionice?

Q) What is the impact of swapping on system performance?

Q) How do you monitor and control swap usage?

Q) What are the benefits of using zswap and zram?

Q) How can you analyze disk I/O performance using iostat?

Q) What is the purpose of the tuned daemon?

Q) How do you use tuned profiles for performance optimization?

🔐 5. Security and Isolation: SELinux, AppArmor, seccomp (20 Questions)
Q) What is SELinux, and how does it enhance system security?

Q) How do you configure and manage SELinux policies?

Q) What are the different modes of SELinux operation?

Q) How does AppArmor differ from SELinux?

Q) How do you create and enforce AppArmor profiles?

Q) What is seccomp, and how does it restrict system calls?

Q) How do you implement seccomp filters in applications?

Q) What is the role of capabilities in Linux security?

Q) How do you assign and manage capabilities for processes?

Q) What are Linux namespaces, and how do they provide isolation?

Q) How do you use chroot for process isolation?

Q) What is the purpose of the sudo command?

Q) How do you configure sudoers for fine-grained access control?

Q) What is the role of PAM in Linux authentication?

Q) How do you configure PAM modules for security?

Q) What are Linux security modules (LSMs)?

Q) How do you audit system events using auditd?

Q) What is the purpose of the fail2ban utility?

Q) How do you secure SSH access to a Linux server?

Q) What are best practices for hardening a Linux system?
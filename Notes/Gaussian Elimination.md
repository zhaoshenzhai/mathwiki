<br />
<br />

Date Created: 25/03/2022 15:55:27
Tags: #Theorem #Closed 

Proved by: [[Gaussian Algorithm]], [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Gaussian Elimination).

_Let $K$ be a field and consider any linear system_
$$\begin{equation}
    A\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. Let $R\coloneqq\l(e_l\circ\cdots\circ e_1\r)\l(A\r)\sim A$ be any row-echelon matrix, say with $r$ non-zero rows each with its pivot column $k_i$, and let $\v{z}\coloneqq\l(e_l\circ\cdots\circ e_1\r)\l(\v{b}\r)$. For convenience, we shall denote_
$$\begin{equation}
    \fa j\in\l\{1,\dots,n\r\}:\mc{C}_j\coloneqq\l\{j+1,\dots,n\r\},\ \ \ \ \ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\textit{ is a pivot column}\r\},\ \ \ \ \textit{and}\ \ \ \ \fa k\in\mc{K}:\mc{K}_k\coloneqq\l\{j\in\N\mid j>k\land j\in\mc{K}\r\}.
\end{equation}$$
_If_ $z_{r+1}=\cdots=z_m=0$_, then $A\v{x}=\v{b}$ is consistent and all solutions thereof can be expressed in the form of $\l\langle s_1,\dots,s_n\r\rangle\in K^n$ where_
$$\begin{equation}
    \fa\alpha\in\l\{1,\dots,n\r\}:s_\alpha\coloneqq
        \begin{dcases}
            z_i-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j-\sum_{\mathclap{j\in\mc{K}_\alpha}}r_{ij}s_j & \textit{i\!f\hspace{0.1in}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textit{else}
        \end{dcases}
\end{equation}$$
_and each_ $t_\alpha$_, if any, is an arbitrary element of $K$. Otherwise, $A\v{x}=\v{b}$ is inconsistent._

```

_Proof_. Such a matrix $R$ exists and can be constructed by the Gaussian Algorithm. If there exists some $j\in\l\{r+1,\dots,m\r\}$ such that $z_j\neq0$, then the $j^\textrm{th}$ equation in $R\v{x}=\v{z}$ reads $0+\cdots+0=z_j$ which is a contradiction. Thus the linear system $R\v{x}=\v{z}$, and thus $A\v{x}=\v{b}$, is inconsistent.

Otherwise, we need to show that the tuples $\l\langle s_1,\dots,s_n\r\rangle$ are solutions of $R\v{x}=\v{z}$, and, moreover, that all solutions can be expressed in this form. Firstly, note that $s_\alpha$ is well-defined for all $\alpha\in\l\{1,\dots,n\r\}$, by which we mean that if there exists $i\in\l\{1,\dots,r\r\}$ such that $\alpha=k_i$, then $i$ is unique; this is guaranteed by $\axiref[3]$ of $R$.

Moving on, take $i\in\l\{1,\dots,r\r\}$ and consider the equation
$$\begin{equation}
    \phi_i\l(x_1,\dots,x_n\r)\ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \sum_{j=1}^nr_{ij}s_j=z_i;
\end{equation}$$
we wish to show that $\phi_i\l(s_1,\dots,s_n\r)$. By definition of $s_{k_i}$, we have that
$$\begin{equation}
    s_{k_i}=z_i-\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}t_j-\sum_{\mathclap{j\in\mc{K}_{k_i}}}r_{ij}s_j
\end{equation}$$
for arbitrary $t_j\in K$, and thus
$$\begin{equation}
    \begin{aligned}
        z_i&=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}t_j+\sum_{\mathclap{j\in\mc{K}_{k_i}}}r_{ij}s_j && \textrm{Rearranging}\\
        &=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}s_j+\sum_{\mathclap{j\in\mc{K}_{k_i}}}r_{ij}s_j && \fa j\in\mc{C}_{k_i}\setminus\mc{K}:s_j=t_j\\
        &=s_{k_i}+\sum_{\mathclap{j=k_i+1}}^nr_{ij}s_j && \l(\mc{C}_{k_i}\setminus\mc{K}\r)\cup\mc{K}_{k_i}=\l\{k_i+1,\dots,n\r\}\\
        &=r_{ik_i}s_{k_i}+\sum_{\mathclap{j=k_i+1}}^nr_{ij}s_j && \axiref[2]\textrm{ of }R\\
        &=\sum_{\mathclap{j=k_1}}^nr_{ij}s_i && \textrm{Combine sums}\\
        &=\sum_{j=1}^{\mathclap{k_i-1}}r_{ij}s_j+\sum_{\mathclap{j=k_1}}^nr_{ij}s_i && k_i=\min\l\{j\in\l\{1,\dots,n\r\}\mid r_{ij}\neq0\r\}\\
        &=\sum_{j=1}^nr_{ij}s_j. && \textrm{Combine sums}
    \end{aligned}
\end{equation}$$
The last equality precisely states that $\phi_i\l(s_1,\dots,s_n\r)$; since $i$ is arbitrary, this holds for all linear equations in $R\v{x}=\v{z}$ and thus $\l\langle s_1,\dots,s_n\r\rangle$ is a solution thereof. Finally, the proof that all solutions are of the form stated above amounts to observing that all the steps are reversible; if $\phi_1\l(s_1,\dots,s_n\r)$, we can split the sum, observe that $r_{ij}=0$ for all $j\in\l\{1,\dots,k_i-1\r\}$, combine the sums, split off the first term, observe that $r_{ik_i}=1$, split the sum into the leading and non-pivot columns, and make the substitution $t_j\coloneqq s_j$ for all $j\in\mc{C}_{k_i}\setminus\mc{K}$. Rearranging shows that our solution must be of the form we stated here.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** When calculating $s_\alpha$, start from $\alpha=n$ and work your way backwards since previous $s_\alpha\textrm{'}$s may depend on this result, but never otherwise; hence this method is also called **back-substitution**. This is guaranteed by $\axiref[3]$ of $R$, which states that $k_i<k_{i+1}$ for all $i\in\l\{1,\dots,r\r\}$.<span style="float:right;">$\blacklozenge$</span>

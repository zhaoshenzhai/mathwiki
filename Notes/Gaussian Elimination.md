<br />
<br />

Date Created: 25/03/2022 15:55:27
Tags: #Theorem #Closed

Proved by: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Justifications: [[Gaussian Algorithm]], [[RREF of a matrix is unique]]

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Gaussian Elimination).

_Let $K$ be a field and let $A\v{x}=\v{b}$ be an $m\times n$ linear system of equations over $K$ for some fixed $m,n\in\N^\ast$. Let $R\coloneqq\rref A$, say with $r$ non-zero rows each with its pivot column $k_i$, and let $\v{z}\in\mat{m\times1}{K}$ be the matrix obtained by applying the same elementary row operations to $\v{b}$ that reduces $A$ to $R$. For convenience, we shall denote_
$$\begin{equation}
    \fa j\in\l\{1,\dots,n\r\}:\mc{C}_j\coloneqq\l\{j+1,\dots,n\r\}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\text{\it{ is a pivot column}}\r\}.
\end{equation}$$
_If_ $z_{r+1}=\cdots=z_m=0$_, then $A\v{x}=\v{b}$ is consistent and every solution thereof can be expressed in the form of $\v{s}\coloneqq\tpl{s_1,\dots,s_n}\in K^n$ where_
$$\begin{equation}
    s_\alpha\coloneqq
        \begin{dcases}
            z_i-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j & \textrm{\it{if}\hspace{0.1in}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textrm{\it{else}}
        \end{dcases}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \l(t_\alpha\in K\textrm{\it{ arbitrary}}\r)
\end{equation}$$
_for all $\alpha\in\l\{1,\dots,n\r\}$. Otherwise, $A\v{x}=\v{b}$ is inconsistent._

```

_Proof_. Such a matrix $R$ exists and can be constructed by the Gaussian Algorithm. If there exists some $j\in\l\{r+1,\dots,m\r\}$ such that $z_j\neq0$, then the $j^\textrm{th}$ equation in $R\v{x}=\v{z}$ reads $0+\cdots+0=z_j$ which is a contradiction. Hence the linear system $R\v{x}=\v{z}$, and thus $A\v{x}=\v{b}$, is inconsistent.

Otherwise, since $\l[A\mid\v{b}\r]\sim\l[R\mid\v{z}\r]$, we need to show that $R\v{s}=\v{z}$ iff $\v{s}$ is of the form above.
* Note that $s_\alpha$ is well-defined for all $\alpha\in\l\{1,\dots,n\r\}$, by which we mean that if there exists $i\in\l\{1,\dots,r\r\}$ such that $\alpha=k_i$, then $i$ is unique; this is guaranteed by $\axiref[2]$ of $R$.

To this end, it suffices to show that
$$\begin{equation}
    \fa i\in\l\{1,\dots,r\r\}:\sum_{j=1}^nr_{ij}s_j=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}s_j,\tag{$\ast$}
\end{equation}$$
for then
$$\begin{equation}
    \begin{aligned}
        R\v{s}=\v{z}&\Leftrightarrow\fa i\in\l\{1,\dots,m\r\}:z_i=\sum_{j=1}^nr_{ij}s_j && \textrm{Definition of matrix multiplication} \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:z_i=\sum_{j=1}^nr_{ij}s_i && \axiref[1]:r_{ij}=z_i=0\textrm{ for all $i>r$ } \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:z_i=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}s_j && \textrm{Substitution} \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:s_{k_i}=z_i-\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}s_j && \textrm{Rearranging} \\
        &\Leftrightarrow\fa\alpha\in\mc{K}:s_\alpha=z_i-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}s_j. && \textrm{Set }\alpha\coloneqq k_i\textrm{; $i\in\l\{1,\dots,r\r\}$ unique}
    \end{aligned}
\end{equation}$$
We obtain the desired result by setting $t_j\coloneqq s_j$ for all $j\not\in\mc{K}$. To obtain $\ref{\ast}$, fix $i\in\l\{1,\dots,r\r\}$ and compute
$$\begin{align}
    \sum_{j=1}^nr_{ij}s_j&=\sum_{j=1}^{\mathclap{k_i-1}}r_{ij}s_j+\sum_{j=k_i}^nr_{ij}s_j && \textrm{Split into sums} \\
    &=\sum_{j=k_i}^nr_{ij}s_j && \axiref[2]:r_{ij}=0\textrm{ for all }j<k_i \\
    &=r_{ik_i}s_{k_i}+\sum_{\mathclap{j=k_i+1}}^nr_{ij}s_j && \textrm{Split off first term} \\
    &=s_{k_i}+\sum_{\mathclap{j=k_i+1}}^nr_{ij}s_j && \axiref[2]:r_{ik_i}=1 \\
    &=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}}}r_{ij}s_j && \textrm{Definition of $\mc{C}_{k_i}$} \\
    &=s_{k_i}+\sum_{\mathclap{j\in\mc{C}_{k_i}\setminus\mc{K}}}r_{ij}s_i. && \axiref[3]:r_{ij}=0\textrm{ for all }j\in\mc{K}\setminus\l\{k_i\r\}\qedin
\end{align}$$

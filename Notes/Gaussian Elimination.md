<div class="topSpace"></div>

Date Created: 25/03/2022 15:55:27
Tags: #Theorem

Proved by: [[Row-equivalent augmented matrices implies equivalent linear systems]]
Justifications: [[Gaussian Algorithm]], [[RREF of a matrix is unique]]

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Gaussian Elimination).

_Let $K$ be a field and let $A\v{x}=\v{b}$ be an $m\times n$ linear system of equations over $K$ for some fixed $m,n\in\N^\ast$. Let $R\coloneqq\rref A$, say with $r$ non-zero rows each with its pivot column $k_i$, and let $\v{z}\in\mat{m\times1}{K}$ be the matrix obtained by applying the same elementary row operations to $\v{b}$ that reduces $A$ to $R$. For convenience, we shall denote_
$$\begin{equation}
    \mc{K}\coloneqq\l\{k\in\N\mid k\text{\it{ is a pivot column}}\r\}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \mc{J}\coloneqq\l\{1,\dots,n\r\}\setminus\mc{K}.
\end{equation}$$
_If_ $z_{r+1}=\cdots=z_m=0$_, then $A\v{x}=\v{b}$ is consistent and there exist $t_j\in K$ for all $j\in\l\{1,\dots,n\r\}$ such that every solution $\v{s}$ thereof can be expressed as_
$$\begin{equation}
    \v{s}=\v{s}_p+\sum_{j\in\mc{J}}t_j\v{u}_j,
\end{equation}$$
_where_
$$\begin{equation}
    \l(\v{s}_p\r)_\alpha\coloneqq
        \begin{dcases}
            z_i & \textrm{\it{if}\hspace{0.1in}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            0 & \textrm{\it{else}}
        \end{dcases}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \l(\v{u}_j\r)_\alpha\coloneqq
        \begin{dcases}
            -r_{ij} & \textrm{\it{if}\hspace{0.1in}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            \frac{t_\alpha\delta_{\alpha j}}{t_j} & \textrm{\it{else}}
        \end{dcases}
\end{equation}$$
_for all $j\in\mc{J}$ and $\alpha\in\l\{1,\dots,n\r\}$. Otherwise, $A\v{x}=\v{b}$ is inconsistent._

```

**Remark.** Note that both $\l(\v{s}_p\r)_\alpha$ and $\l(\v{u}_j\r)_\alpha$ are well-defined for all $\alpha\in\l\{1,\dots,n\r\}$, by which we mean that if there exists $i\in\l\{1,\dots,r\r\}$ such that $\alpha=k_i$, then $i$ is unique; this is guaranteed by $\axiref[2]$ of $R$.

Setting $t_j=0$ for all $j\in\mc{J}$, we see that $\v{s}_p$ is a solution of $A\v{x}=\v{b}$. Indeed, it can be proven that $\rank A=r=\l|\mc{K}\r|$ and that the set $\l\{\v{u}_j\r\}_{j\in\mc{J}}$ forms a basis of $\nullsp A$, so Gaussian Elimination can be used to simultaneously
* test whether the system $A\v{x}=\v{b}$ is consistent, and if it is, obtain the solution set of $A\v{x}=\v{b}$ as a decomposition $\l\{\v{s}_p\r\}+\nullsp A$,
* obtain a basis for $\nullsp A$, and
* compute $\rank A$ by counting the number of pivot columns or non-zero rows of $\rref A$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Such a matrix $R$ exists and can be constructed by the Gaussian Algorithm. If there exists some $i\in\l\{r+1,\dots,m\r\}$ such that $z_i\neq0$, then the $i^\textrm{th}$ equation in $R\v{x}=\v{z}$ reads $0+\cdots+0=z_i$ which is a contradiction. Hence the linear system $R\v{x}=\v{z}$, and thus $A\v{x}=\v{b}$, is inconsistent.

Otherwise, since $\l[A\mid\v{b}\r]\sim\l[R\mid\v{z}\r]$, we need to show that $R\v{s}=\v{z}$ iff $\v{s}=\tpl{s_1,\dots,s_n}$ where
$$\begin{equation}
    \begin{aligned}
        s_\alpha&=\l(\v{s}_p\r)_\alpha+\sum_{j\in\mc{J}}t_j\l(\v{u}_j\r)_\alpha && \textrm{Components} \\
        &=
            \begin{dcases}
                z_i-\sum_{j\in\mc{J}}r_{ij}t_j & \textrm{if }\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
                \sum_{j\in\mc{J}}t_\alpha\delta_{\alpha j} & \textrm{else}
            \end{dcases} && \textrm{Substitution} \\
        &=
            \begin{dcases}
                z_i-\sum_{j\in\mc{J}}r_{ij}t_j & \textrm{if }\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
                t_j & \textrm{else}
            \end{dcases} && \alpha\in\mc{J}\textrm{ in latter case}
    \end{aligned}
\end{equation}$$
for all $\alpha\in\l\{1,\dots,n\r\}$. To this end, it suffices to show that
$$\begin{equation}
    \fa i\in\l\{1,\dots,r\r\}:\sum_{j=1}^nr_{ij}s_j=s_{k_i}+\sum_{j\in\mc{J}}r_{ij}s_j,\cref{\ast}
\end{equation}$$
for then
$$\begin{equation}
    \begin{aligned}
        R\v{s}=\v{z}&\Leftrightarrow\fa i\in\l\{1,\dots,m\r\}:z_i=\sum_{j=1}^nr_{ij}s_j && \textrm{Definition of matrix multiplication} \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:z_i=\sum_{j=1}^nr_{ij}s_i && \axiref[1]:r_{ij}=z_i=0\textrm{ for all $i>r$ } \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:z_i=s_{k_i}+\sum_{j\in\mc{J}}r_{ij}s_j && \textrm{Substitution} \\
        &\Leftrightarrow\fa i\in\l\{1,\dots,r\r\}:s_{k_i}=z_i-\sum_{j\in\mc{J}}r_{ij}s_j && \textrm{Rearranging} \\
        &\Leftrightarrow\fa\alpha\in\mc{K}:s_\alpha=z_i-\sum_{j\in\mc{J}}r_{ij}s_j. && \textrm{Set }\alpha\coloneqq k_i\textrm{; $i\in\l\{1,\dots,r\r\}$ unique}
    \end{aligned}
\end{equation}$$
We obtain the desired result by setting $t_j\coloneqq s_j$ for all $j\not\in\mc{K}$. To obtain $\ref{\ast}$, fix $i\in\l\{1,\dots,r\r\}$ and compute
$$\begin{align}
    \sum_{j=1}^nr_{ij}s_j&=r_{ik_i}s_{k_i}+\sum_{j\neq k_i}r_{ij}s_j && \textrm{Split off the $k_i^\textrm{th}$ term} \\
    &=s_{k_i}+\sum_{j\neq k_i}r_{ij}s_j && \axiref[2]:r_{ik_i}=1 \\
    &=s_{k_i}+\sum_{j\in\mc{J}}r_{ij}s_i. && \axiref[3]:r_{ij}=0\textrm{ for all }j\in\mc{K}\setminus\l\{k_i\r\}\qedin
\end{align}$$

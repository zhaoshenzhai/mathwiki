<br />
<br />

Date Created: 26/03/2022 14:27:26
Tags: #Theorem #Closed

Proved by: [[Gaussian Elimination]], [[Gauss-Jordan Algorithm]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Gauss-Jordan Elimination).

_Let $K$ be a field and consider any linear system_
$$\begin{equation}
    A\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. Let $R\coloneqq\l(e_l\circ\cdots\circ e_1\r)\l(A\r)\sim A$ be the reduced row-echelon matrix corresponding to $A$, say with $r$ non-zero rows each with its pivot column $k_i$, and let $\v{z}\coloneqq\l(e_l\circ\cdots\circ e_1\r)\l(\v{b}\r)$. For convenience, we shall denote_
$$\begin{equation}
    \fa j\in\l\{1,\dots,n\r\}:\mc{C}_j\coloneqq\l\{j+1,\dots,n\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column}}\r\}.
\end{equation}$$
_If_ $z_{r+1}=\cdots=z_m=0$_, then $A\v{x}=\v{b}$ is consistent and all solutions thereof can be expressed in the form of $\l\langle s_1,\dots,s_n\r\rangle\in K^n$ where_
$$\begin{equation}
    \fa\alpha\in\l\{1,\dots,n\r\}:s_\alpha\coloneqq
        \begin{dcases}
            z_i-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j & \textrm{\it{if\hspace{0.1in}}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textrm{\it{else}}
        \end{dcases}
\end{equation}$$
_and each_ $t_\alpha$_, if any, is an arbitrary element of $K$. Otherwise, $A\v{x}=\v{b}$ is inconsistent._

```

_Proof_. The matrix $R$ exists and is given by the Gauss-Jordan Algorithm. By Gaussian Elimination, we know that the system $A\v{x}=\v{b}$ is consistent iff all solutions are of the form $\l\langle s_1,\dots,s_n\r\rangle\in K^n$ where
$$\begin{equation}
    \fa\alpha\in\l\{1,\dots,n\r\}:s_\alpha\coloneqq
        \begin{dcases}
            z_i-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j-\sum_{\mathclap{j\in\mc{K}_\alpha}}r_{ij}s_j & \textit{i\!f\hspace{0.1in}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textit{else}
        \end{dcases}
\end{equation}$$
and
$$\begin{equation}
    \mc{K}_k\coloneqq\l\{j\in\N\mid j>k\land j\in\mc{K}\r\}
\end{equation}$$
for all $k\in\mc{K}$. Fix $i\in\l\{1,\dots,r\r\}$ and take any $j\in\mc{K}_{k_i}$; it suffices to show that $r_{ij}=0$, for then the second sum for $s_{k_i}$ vanishes and we obtain the desired result. But this follows directly from the fact that $R$ is in RREF, so for all columns containing a leading entry, all other entries in that column is zero. In particular, since each $j$ is a pivot column after $k_i$, its corresponding leading 1 occurs on a row $l$ below $i$, $r_{ij}=0$. The result follows since $i$ is arbitrary.<span style="float:right;">$\blacksquare$</span>

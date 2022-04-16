<br />
<br />

Date Created: 13/04/2022 21:05:54
Tags: #Proposition #In_Progress

Proved by: [[Gauss-Jordan Elimination]], [[Linear span is set of all linear combinations]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$. Let $R\coloneqq\rref\l(A\r)$, say with $r$ non-zero rows each with its pivot column $k_i$. For convenience, we shall denote_
$$\begin{equation}
    \mc{J}\coloneqq\l\{1,\dots,n\r\},\ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column}}\r\},\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{U}\coloneqq\mc{J}\setminus\mc{K}.
\end{equation}$$
_Then the set $B$ of all tuples_ $\v{b}_u$_, defined by_
$$\begin{equation}
    \l(\v{b}_u\r)_\alpha\coloneqq
        \begin{dcases}
            -r_{iu} & \textrm{\it{if\hspace{0.1in}}}u\in\mc{U}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            \delta_{u\alpha} & \textrm{\it{else}}
        \end{dcases}
\end{equation}$$
_for all $u\in\mc{U}$ and $\alpha\in\l\{1,\dots,n\r\}$, form a basis for $\null\l(A\r)$._

```

_Proof_. We first verify that the tuples $\v{b}_u$ for all $u\in\mc{U}$ are solutions of $A\v{x}=\v{0}$.
* Take $u\in\mc{U}$. By Gauss-Jordan Elimination, $\v{b}_u\in K^n$ is a solution of $A\v{x}=\v{0}$ iff
$$\begin{equation}
    \l(\v{b}_u\r)_\alpha=
        \begin{dcases}
            -\sum_{\mathclap{j\in\mc{U}}}r_{ij}t_j & \textrm{if }\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textrm{else}
        \end{dcases}\ \ \ \ \ \ \ \ \l(t_j,t_\alpha\in K\textrm{ arbitrary}\r)
\end{equation}$$
for all $\alpha\in\l\{1,\dots,n\r\}$. The $\textrm{`}$parameters$\textrm{'}$ $t_j$ and $t_\alpha$ may depend on $u$ (as they are arbitrary), so we may choose $t_j\coloneqq\delta_{u j}$ and $t_\alpha\coloneqq\delta_{u\alpha}$. Thus
$$\begin{equation}
    -\sum_{\mathclap{j\in\mc{U}}}r_{ij}t_j=-\sum_{\mathclap{j\in\mc{U}}}r_{ij}\delta_{u j}
\end{equation}$$
which can be simplified to $-r_{iu}$ if $u\in\mc{U}$; otherwise, the sum evaluates to $0$. Thus $\v{b}_u$ simplifies to
$$\begin{equation}
    \l(\v{b}_u\r)_\alpha=
        \begin{dcases}
            -r_{iu} & \textrm{if\ }u\in\mc{U}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            0 & \textrm{if\ }u\not\in\mc{U}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            \delta_{u\alpha} & \textrm{else.}
        \end{dcases}
\end{equation}$$
To remove the second case, observe that $\alpha\in\mc{K}$ and thus $u\neq\alpha$ (since $u\in\mc{U}\Rightarrow u\not\in\mc{K}$). The result follows since $\delta_{u\alpha}=0$, so the last two cases can be combined.

It remains to show that $\span\l(B\r)=\null\l(A\r)$ and that $B$ is linearly independent.
* ($\span\l(B\r)=\null\l(A\r)$): Take $\v{s}\in\null\l(A\r)$, so $A\v{s}=\v{0}$ and thus
$$\begin{equation}
    s_\alpha=
        \begin{dcases}
            -\sum_{\mathclap{j\in\mc{U}}}r_{ij}t_j & \textrm{if }\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textrm{else}
        \end{dcases}\ \ \ \ \ \ \ \ \l(t_j,t_\alpha\in K\textrm{ arbitrary}\r)
\end{equation}$$
by Gauss-Jordan Elimination. In the former case, observe that
$$\begin{equation}
    \begin{aligned}
        s_{k_i}&=-\sum_{\mathclap{j\in\mc{U}}}r_{ij}t_j && \ex i\in\l\{1,\dots,r\r\}:\alpha=k_i \\
        &=\sum_{\mathclap{j\in\mc{U}}}t_j\l(-r_{ij}\r) && \textrm{Arithmetic} \\
        &=\sum_{\mathclap{j\in\mc{U}}}t_j\l(\v{b}_j\r)_{k_i}. && \textrm{Substitution}
    \end{aligned}
\end{equation}$$
The latter case is similar:
$$\begin{equation}
    \begin{aligned}
        s_\alpha&=t_\alpha && \alpha\not\in\mc{K} \\
        &=\sum_{\mathclap{j\in\mc{U}}}t_\alpha\delta_{j\alpha} && \delta_{j\alpha}=0\textrm{ if }j\neq\alpha\textrm{; }\alpha\in\mc{U} \\
        &=\sum_{\mathclap{j\in\mc{U}}}t_\alpha\l(\v{b}_j\r)_\alpha. && \textrm{Substitution}
    \end{aligned}
\end{equation}$$
Since $\v{s}=\l\langle s_1,\dots,s_n\r\rangle$ and each $s_j$ is expressed as a sum of components of $\v{b}_j$, we can factor out the sum and write $\v{s}$ as a linear combination of $B$. It follows then that $\v{s}\in\span\l(B\r)$, and since $\span\l(B\r)$ is an intersection of subspaces of $\null\l(A\r)$, we have that $\span\l(B\r)\subseteq\null\l(A\r)$. Equality follows.

* ($B$ is linearly independent): 

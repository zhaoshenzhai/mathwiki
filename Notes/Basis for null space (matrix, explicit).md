<br />
<br />

Date Created: 13/04/2022 21:05:54
Tags: #Proposition #In_Progress

Proved by: [[Gauss-Jordan Elimination]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$. Let $R\coloneqq\rref\l(A\r)$, say with $r$ non-zero rows each with its pivot column $k_i$. For convenience, we shall denote_
$$\begin{equation}
    \fa j\in\l\{1,\dots,n\r\}:\mc{C}_j\coloneqq\l\{j+1,\dots,n\r\},\ \ \ \ \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column}}\r\},\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{U}\coloneqq\l\{1,\dots,n\r\}\setminus\mc{K}.
\end{equation}$$
_Then the set $B$ of all tuples_ $\v{b}_u$_, defined by_
$$\begin{equation}
    \l(\v{b}_u\r)_\alpha\coloneqq
        \begin{dcases}
            -r_{iu} & \textrm{\it{if\hspace{0.1in}}}u\in\mc{C}_\alpha\setminus\mc{K}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
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
            -\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j & \textrm{if }\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            t_\alpha & \textrm{else}
        \end{dcases}\ \ \ \ \ \ \ \ \l(t_j,t_\alpha\in K\textrm{ arbitrary}\r)
\end{equation}$$
for all $\alpha\in\l\{1,\dots,n\r\}$. The $\textrm{`}$parameters$\textrm{'}$ $t_j$ and $t_\alpha$ may depend on $u$ (as they are arbitrary), so we may choose $t_j\coloneqq\delta_{u j}$ and $t_\alpha\coloneqq\delta_{u\alpha}$. Thus
$$\begin{equation}
    -\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}t_j=-\sum_{\mathclap{j\in\mc{C}_\alpha\setminus\mc{K}}}r_{ij}\delta_{u j}
\end{equation}$$
which can be simplified to $-r_{iu}$ if $u\in\mc{C}_\alpha\setminus\mc{K}$; otherwise, the sum evaluates to $0$. Thus $\v{b}_u$ simplifies to
$$\begin{equation}
    \l(\v{b}_u\r)_\alpha=
        \begin{dcases}
            -r_{iu} & \textrm{if\ }u\in\mc{C}_\alpha\setminus\mc{K}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            0 & \textrm{if\ }u\not\in\mc{C}_\alpha\setminus\mc{K}\land\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i\\
            \delta_{u\alpha} & \textrm{else.}
        \end{dcases}
\end{equation}$$
To remove the second case, observe that $\alpha\in\mc{K}$ and thus $u\neq\alpha$ (since $u\in\mc{U}\Rightarrow u\not\in\mc{K}$). The result follows since $\delta_{u\alpha}=0$, so the last two cases can be combined.

It remains to show that $\span\l(B\r)=\null\l(A\r)$ and that $B$ is linearly independent.

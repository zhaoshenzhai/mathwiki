<br />
<br />

Date Created: 26/03/2022 14:26:12
Tags: #Proposition #Closed 

Proved by: [[Solution of system of linear combinations contains solution of original system]], [[Gaussian Elimination]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $\v{M}\in\mat{m\times n}{K}$, there exists a unique reduced row-echelon matrix $\v{R}\in\mat{m\times n}{K}$ with $\v{M}\sim\v{R}$._

```

_Proof_. We proceed by induction on $n$. Empty matrices are vacuously in RREF, so take $n\in\N$ and assume that the RREF of $m\times n$ matrices are unique. Take $\v{M}\in\mat{m\times\l(n+1\r)}{K}$ and let $\v{M}'\in\mat{m\times n}{K}$ be the matrix $\v{M}$ with its last column removed; formally, we let $\v{M}'\coloneqq\l\langle m,n,f'\r\rangle$ where
$$\begin{equation}
        \fa i\in\l\{1,\dots,m\r\},\fa j\in\l\{1,\dots,n\r\}:f'\l(i,j\r)\coloneqq f\l(i,j\r)
\end{equation}$$
and where $f$ is the defining function of $\v{M}$. Assume, for sake of contradiction, that $\v{R},\v{S}\in\mat{m\times\l(n+1\r)}{K}$ are distinct matrices in RREF with $\v{M}\sim\v{R}\sim\v{S}$, say with $r$ non-zero rows; our induction hypothesis states that $\v{R}'=\v{S}'$.

Since $\v{R}$ and $\v{S}$ are distinct, they must differ by at least one entry in their last columns; that is, there exists $l\in\l\{1,\dots,r\r\}$ such that $R_{ln}\neq S_{ln}$. Consider the systems $\v{R}\v{x}=\v{0}$ and $\v{S}\v{x}=\v{0}$. Any solution to both systems must then be a solution of the system $\l(\v{R}-\v{S}\r)\v{x}=\v{0}$, which is of the form
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-26_212642/image.svg", width=280></center>

since $\v{R}'-\v{S}'=\v{0}$; formally, this is justified by taking a system of linear combinations of either system, say $\v{R}\v{x}=\v{0}$, whose $l^\textrm{th}$ equation is given by the constants $c_{i1}=1$, $c_{i2}=-S_{i1}/R_{i2}$, and $c_{ij}=0$ for all $j\in\l\{3,\dots,n\r\}$. Performing matrix multiplication and extracting the $l^\textrm{th}$ row, we see that
$$\begin{equation}
    \l(R_{ln}-S_{ln}\r)x_n=0
\end{equation}$$
and thus $x_n=0$. It follows that any solution $\l\langle s_1,\dots,s_n\r\rangle$ of both systems must have $s_n=0$, and hence the last column of both $\v{R}$ and $\v{S}$ are pivot columns; for if not, then Gaussian Elimination dictates that $s_n\in K$ is arbitrary. Because both $\v{R}$ and $\v{S}$ are in RREF, we have that $R_{l_1n}=1$, $S_{l_2n}=1$, and that
$$\begin{equation}
    \begin{aligned}
        \fa i\neq l_1:R_{in}=0\ \ \ \ \textrm{and}\ \ \ \ \fa i\neq l_2:S_{in}=0 && \l(i\in\l\{1,\dots,m\r\}\r)
    \end{aligned}
\end{equation}$$
for some $l_1,l_2\in\l\{1,\dots,m\r\}$. Observe that $l_1\neq l_2$, for if otherwise, then the last columns of $\v{R}$ and $\v{S}$, and hence the matrices themselves, coincide. W.l.o.g, assume that $l_1<l_2$, so $S_{l_1j}=R_{l_1j}=0$ for all $j\in\l\{1,\dots,n-1\r\}$. But $S_{l_1n}=0$ too, so the $l_1^\textrm{th}$ row of $\v{S}$ is a zero-row. Because the $l_2^\textrm{th}$ row of $\v{S}$ is non-zero, we see that there exists a zero row above a non-zero row, contradicting $\axiref[1]$ of $\v{S}$. The result follows.<span style="float:right;">$\blacksquare$</span>

<br />
<br />

Date Created: 26/03/2022 14:26:12
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
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
and where $f$ is the defining function of $\v{M}$. Assume, for sake of contradiction, that $\v{R},\v{S}\in\mat{m\times\l(n+1\r)}{K}$ are distinct matrices in RREF with $\v{M}\sim\v{R}\sim\v{S}$; our induction hypothesis states that $\v{R}'=\v{S}'$.

Since $\v{R}$ and $\v{S}$ are distinct, they must differ by at least one entry in their last columns; that is, there exists $i\in\l\{1,\dots,m\r\}$ such that $R_{in}\neq S_{in}$. Consider the systems $\v{R}\v{x}=\v{0}$ and $\v{S}\v{x}=\v{0}$. Any solution to both systems must then be a solution of the system $\l(\v{R}-\v{S}\r)\v{x}=\v{0}$, which is of the form
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-26_212642/image.svg", width=280></center>

since $\v{R}'-\v{S}'=\v{0}$. Formally, this is justified by taking a system of linear combinations of either system, say $\v{R}\v{x}=\v{0}$, whose $i^\textrm{th}$ equation is given by the constants $c_{i1}=1$, $c_{i2}=-S_{i1}/R_{i2}$, and $c_{ij}=0$ for all $j\in\l\{3,\dots,n\r\}$.

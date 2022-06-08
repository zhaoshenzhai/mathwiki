<br />
<br />

Date Created: 26/03/2022 14:26:12
Tags: #Proposition #Later/Linear_Algebra/RREF

Proved by: [[Gaussian Elimination]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$, there exists a unique reduced row-echelon matrix $R\in\mat{m\times n}{K}$ with $A\sim R$._

```

_Proof_. We proceed by induction on $n$. $1\times 1$ matrices are trivially in RREF, so take $n>1$ and assume that the RREF of $m\times n$ matrices are unique. Take $A\in\mat{m\times\l(n+1\r)}{K}$ and let $A'\in\mat{m\times n}{K}$ be the matrix $A$ with its last column removed. Assume, for sake of contradiction, that $R,U\in\mat{m\times\l(n+1\r)}{K}$ are distinct matrices in RREF with $A\sim R\sim U$, say with $r$ non-zero rows; our induction hypothesis states that $R'=U'$.

Since $R$ and $U$ are distinct, they must differ by at least one entry in their last columns; that is, there exists $l\in\l\{1,\dots,r\r\}$ such that $r_{ln}\neq u_{ln}$. Consider the systems $R\v{x}=\v{0}$ and $U\v{x}=\v{0}$. Any solution to both systems must then be a solution of the system $\l(R-U\r)\v{x}=\v{0}$, which is of the form
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-26_212642/image.svg", width=280></center>

since $R'-U'=\v{0}$; formally, this is justified by taking a system of linear combinations of either system, say $R\v{x}=\v{0}$, whose $l^\textrm{th}$ equation is given by the constants $c_{i1}=1$, $c_{i2}=-u_{i1}/r_{i2}$, and $c_{ij}=0$ for all $j\in\l\{3,\dots,n\r\}$. Performing matrix multiplication and extracting the $l^\textrm{th}$ row, we see that
$$\begin{equation}
    \l(r_{ln}-u_{ln}\r)x_n=0
\end{equation}$$
and thus $x_n=0$. It follows that any solution $\tpl{s_1,\dots,s_n}$ of both systems must have $s_n=0$, and hence the last column of both $R$ and $U$ are pivot columns; for if not, then Gaussian Elimination dictates that $s_n\in K$ is arbitrary. Because both $R$ and $U$ are in RREF, we have that $r_{l_1n}=1$, $u_{l_2n}=1$, and that
$$\begin{equation}
    \begin{aligned}
        \fa i\neq l_1:r_{in}=0\ \ \ \ \textrm{and}\ \ \ \ \fa i\neq l_2:u_{in}=0 && \l(i\in\l\{1,\dots,m\r\}\r)
    \end{aligned}
\end{equation}$$
for some $l_1,l_2\in\l\{1,\dots,m\r\}$. Observe that $l_1\neq l_2$, for if otherwise, then the last columns of $R$ and $U$, and hence the matrices themselves, coincide. W.l.o.g, assume that $l_1<l_2$, so $u_{l_1j}=r_{l_1j}=0$ for all $j\in\l\{1,\dots,n-1\r\}$. But $u_{l_1n}=0$ too, so the $l_1^\textrm{th}$ row of $U$ is a zero-row. Because the $l_2^\textrm{th}$ row of $U$ is non-zero, we see that there exists a zero row above a non-zero row, contradicting $\axiref[1]$ of $U$. The result follows.<span style="float:right;">$\blacksquare$</span>

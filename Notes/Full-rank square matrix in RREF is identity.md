<br />
<br />

Date Created: 08/04/2022 08:28:01
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^\ast$. Then $R\in\mat{n}{K}$ is in RREF and is of full rank iff $R=I$._

```

_Proof_. Since $R$ is of full-rank, we have that $r=n$ and hence $R$ has no non-zero rows. By $\axiref[2]$, each row $i$ of $R$ has a leading $1$ in some column $k_i$. We claim that $\axiref[3]$ forces $k_i=i$ for all rows $i$.
* Set $l\coloneqq k_i$ and observe that there are $n-l$ columns to the right of $l$ and $n-i$ rows, each containing a leading $1$, below $i$. The pivot columns corresponding to these leading $1\textrm{'}$s must, by $\axiref[3]$, occur to the right of $l$; since there are $\l(n-i\r)$-many, we need
$$\begin{equation}
    n-i\leq n-l\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ l\leq i.
\end{equation}$$
Similarly, there are $l-1$ columns to the left of $l$ and $i-1$ rows, each containing a leading $1$, above $i$. The pivot columns corresponding to these leading $1\textrm{'}$s must, by $\axiref[3]$, occur to the left of $l$; since there are $\l(i-1\r)$-many, we need
$$\begin{equation}
    i-1\leq l-1\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ l\geq i.
\end{equation}$$

Furthermore, $\axirref$ forces all entries above and below all leading $1\textrm{'}$s to vanish, so $R$ is the matrix with $1\textrm{'}$s on its diagonal and $0\textrm{'}$s everywhere else; that is, $R=I$. The converse is trivial.<span style="float:right;">$\blacksquare$</span>

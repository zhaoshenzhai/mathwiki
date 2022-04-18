---
alias: auto_aliasing
---

<br />
<br />

Date Created: 03/04/2022 14:39:34
Tags: #Proposition #Closed

Proved by: [[Algebraic consequences (vector space)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot,0\r\rangle$ be a field and consider a vector space $\mc{V}\coloneqq\l\langle V,K,\oplus,\odot,0_V\r\rangle$. Then, for every subset $U\subseteq V$, the quintuple $\mc{U}\coloneqq\l\langle U,K,\l.\oplus\r|_U,\l.\odot\r|_U,0_V\r\rangle$ is a linear subspace of $\mc{V}$ iff_
* _$0_V\in U$,_
* _$\fa u_1,u_2\in U:u_1\l.\oplus\r|_Uu_2\in U$, and_
* _$\fa\alpha\in K,\fa u\in U:\alpha\l.\odot\r|_Uu\in U$._

```

_Proof_.
* ($\Rightarrow$): Assume that $\mc{U}$ is a linear subspace of $\mc{V}$, so $\l.\oplus\r|_U$ and $\l.\odot\r|_U$ are both functions with codomain $U$; the fact that these operations are closed in $U$ follows readily. To see that $0_V\in U$, recall that for all $u\in U$, we have that $0\odot u=0_V$; since scalar-multiplication closes in $U$, the result follows.

* ($\Leftarrow$): Conversely, we need to verify that $\mc{U}$ contains the data of a vector space and that the vector space axioms hold; the former is exactly our assumptions. For the axioms, observe that $\axigrp[1]$, $\axigrp[2]$, $\axiablngp$, and all $\axivec$ quantify over elements in $V$. Since $U\subseteq V$, these axioms evidently also hold for elements in $U$.

    Thus it suffices to check $\axigrp[3]$; that is, we need to verify that every $u\in U$ has an additive inverse $-u\in U$. Existence of such a $-u\in V$ is follows from $\axigrp[3]$ of $\mc{V}$, so it suffices to show that $-u\in U$. Observe, from the algebraic consequences of $\axivec$ on $\mc{V}$, that $-u=\l(-1\r)\odot u$. Since $-1\in K$ and $u\in U$, we see that $\l(-1\r)\odot u=\l(-1\r)\l.\odot\r|_Uu$ and thus $-u\in U$ because scalar multiplication on $\mc{U}$ is closed.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The last two conditions are equivalent to the statement that
$$\begin{equation}
    \fa\alpha\in K,\fa u_1,u_2\in U:\l(\alpha\l.\odot\r|_Uu_1\r)\l.\oplus\r|_Uu_2\in U,
\end{equation}$$
or, written in more sensible notation, that $\textrm{`}\alpha u_1+u_2\in U\textrm{'}$. By induction, it follows that $U$ is a linear subspace of $V$ iff all linear combinations of finite subsets of $U$ are in $U$.<span style="float:right;">$\blacklozenge$</span>

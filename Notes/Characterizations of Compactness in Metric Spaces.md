<div class="topSpace"></div>

Date Created: 29/12/2022 21:53:42
Tags: #Theorem #Topics/Analysis

Proved by: [[Sequential characterization of closure (metric)]], [[Sequentially compact implies separable]], [[Q is dense in R]], [[Sequentially compact implies countably compact]]
References: [[Compact implies limit point compact]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Characterizations of Compactness in Metric Spaces).

_Let $\tpl{X,d}$ be a metric space and fix a subspace $K\subseteq X$. Then the following are equivalent._
1. _$K$ is compact._
2. _$K$ is limit point compact; that is, every infinite subset of $K$ has a cluster (limit) point in $K$._
3. _$K$ is sequentially compact; that is, every sequence in $K$ has a subsequence converging to $K$._

```

_Proof_. Observe that $1\Rightarrow2$ holds in general topological spaces, so it remains to show that $2\Rightarrow3\Rightarrow1$.
* ($2\Rightarrow3$): Let $\tpl{p_n}$ be a sequence in $K$, so $\l\{p_n\r\}\coloneqq\im\tpl{p_n}\subseteq K$ is an infinite subset. Thus there exists some $p\in K$ such that $p\in\bar{\l\{p_n\r\}\comp\l\{p\r\}}$, so there exists a sequence $\tpl{p_{n_k}}$ in $\l\{p_n\r\}$ such that $p_n\to p$. Observe that $\tpl{p_{n_k}}$ is a subsequence of $\tpl{p_n}$, so we are done.

* ($3\Rightarrow1$): Let $\l\{U_\alpha\r\}_{\alpha\mc{A}}$ be an open cover for $K$. Since $K$ is sequentially compact, $K$ admits a countable dense set $D\coloneqq\tpl{p_n}$. Then the set $\ms{B}$ of all balls with center $p_n$ and rational radii is countable, so we may let
$$\begin{equation}
    \mc{B}\coloneqq\l\{B_1,B_2,\dots\r\}\coloneqq\l\{B\in\ms{B}\mid\ex\alpha\in\mc{A}:B\subseteq U_\alpha\r\}.
\end{equation}$$
Now, for all $\alpha\in\mc{A}$, let $\mc{B}_\alpha\coloneqq\l\{B\in\mc{B}\mid B\subseteq U_\alpha\r\}$. We now show that $U_\alpha=\bigcup\mc{B}_\alpha$. Clearly $\bigcup\mc{B}_\alpha\subseteq U_\alpha$, so we prove the other direction.
  * Take $p\in U_\alpha$, so there exists some $r\in\R$ such that $B\l(p,r\r)\subseteq U_\alpha$. Since $D$ is dense in $K$, we have $d\l(p,p_m\r)<r/3$ for some $m\in\N$. But density of $\Q$ in $\R$ furnishes some $s\in\Q$ such that $r/3<s<r/2$, so $d\l(p,p_m\r)<s$. Then $p\in B\l(p_m,s\r)$, so it suffices to show that $B\l(p_m,s\r)\subseteq B\l(p,r\r)$. But this is immediate, for if $q\in B\l(p_m,s\r)$, then
      $$\begin{equation}
          d\l(p,q\r)\leq d\l(p,p_m\r)+d\l(p_m,q\r)<s+s<2s<r.
      \end{equation}$$

  We now have that
$$\begin{equation}
    K\subseteq\bigcup_{\alpha\in\mc{A}}U_\alpha=\bigcup_{\alpha\in\mc{A}}\l(\bigcup\mc{B}_\alpha\r)\subseteq\bigcup_{i=1}^\infty B_i.
\end{equation}$$
  But for each $i\in\N$ we can choose $\alpha_i$ such that $B_i\subseteq U_{\alpha_i}$, so we have $K\subseteq\bigcup_{i=1}^\infty U_{\alpha_i}$. Thus $K$ admits a countable subcover, so the result follows since $K$ is countably compact.<span style="float:right;">$\blacksquare$</span>

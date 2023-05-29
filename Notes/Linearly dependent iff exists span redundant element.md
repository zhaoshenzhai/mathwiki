---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 05/04/2022 20:13:04
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a $K$-vector space and consider a set $S\coloneqq\l\{s_1,\dots,s_n\r\}$ of non-zero vectors in $V$ for some $n\in\N^+$. Then $S$ is linearly dependent iff there exists some $l\in\l\{2,\dots,n\r\}$ such that $s_l\in\span\l\{s_1,\dots,s_{l-1}\r\}$.

```

_Proof_.
* ($\Rightarrow$): Since $S$ is linearly dependent, there exist $\alpha_1,\dots,\alpha_n\in K$, not all of which are zero, such that $\sum_{i=1}^n\alpha_is_i=0_V$; we claim that
$$\begin{equation}
    l=\max\l\{i\in\l\{1,\dots,n\r\}\mid\alpha_i\neq0\r\}.
\end{equation}$$
Note that $l\neq1$, for if not, then $\alpha_1\neq0$ and $\alpha_1s_1=0$, so $s_l=0$. Thus $l>1$, so $\sum_{i=1}^l\alpha_is_i=0_V$ which implies that $\alpha_ls_l=-\sum_{i=1}^{l-1}\alpha_is_i$. Since $\alpha_l\neq0$, we see that $s=\sum_{i=1}^{l-1}\l(-\frac{\alpha_i}{\alpha_1}\r)s_i$ from which the result follows.

* ($\Leftarrow$): The converse is easy since $s_l\in\span\l\{s_1,\dots,s_{l-1}\r\}$ implies that $s_l=\sum_{i=1}^{l-1}\beta_is_i$ for some $\beta_1,\dots,\beta_{l-1}\in K$. Setting $\beta_l\coloneqq-1$, we see that $\sum_{i=1}^l\beta_is_i=0$, so $S$ is linearly dependent.<span style="float:right;">$\blacksquare$</span>

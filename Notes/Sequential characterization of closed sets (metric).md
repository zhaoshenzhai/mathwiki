<div class="topSpace"></div>

Date Created: 29/12/2022 20:54:44
Tags: #Proposition #Topics/Analysis

Proved by: [[Sequential characterization of closure (metric)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space and fix $S\subseteq X$. Then $S$ is closed iff for all sequences $\tpl{x_n}$ in $S$ that converge, its limit is in $S$._

```

_Proof_.
* ($\Rightarrow$): Since $S$ is closed, we see that $S=\bar{S}$. Let $\tpl{x_n}$ be a convergent sequence in $S$, so, tautologically, there exists a sequence $\tpl{x_n}$ in $S$ such that $x_n\to\lim\limits_{n\to\infty}x_n$. Thus $\lim\limits_{n\to\infty}x_n\in\bar{S}=S$.

* ($\Leftarrow$): It suffices to show that $\bar{S}\subseteq S$. Indeed, for all $x\in\bar{S}$, there exists a sequence $\tpl{x_n}$ in $S$ such that $x_n\to x$. In particular, $\tpl{x_n}$ converges in $S$, so $x\in S$.<span style="float:right;">$\blacksquare$</span>

<div class="topSpace"></div>

Date Created: 01/02/2022 16:00:16
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Strict lexicographical order is a strict partial order]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $<$ and $\prec$ be strict total orders on the sets $X$ and $Y$ respectively. Then their lexicographical order $\sqsubset$ is a strict total order on $X\times Y$._

```

_Proof_. Since $\sqsubset$ is a strict partial order on $X\times Y$, it suffices to show that it is also connected on $X\times Y$. To do so, take $\tpl{x_1,y_1},\tpl{x_2,y_2}\in X\times Y$. We argue by cases.
* If $x_1<x_2$, then $\tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}$ regardless of how $y_1$ and $y_2$ relate.  Similarly for if $x_1>x_2$.
* If $x_1=x_2$ and $y_1\neq y_2$, then, since $\prec$ is connected on $Y$, either $y_1\prec y_2$ or $y_1\succ y_2$. In the former case, we have $\tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}$; in the latter case, we have $\tpl{x_1,y_1}\sqsupseteq\tpl{x_2,y_2}$.
* If $x_1=x_2$ and $y_1=y_2$, then obviously $\tpl{x_1,y_1}=\tpl{x_2,y_2}$.<span style="float:right;">$\blacksquare$</span>

<div class="topSpace"></div>

Date Created: 31/01/2022 11:12:51
Tags: #Proposition

Proved by: [[Well-ordering well-orders subsets]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_For all ordinals $\alpha$ and $\beta$, we have $\alpha\cap\beta\in\ord$._

```

_Proof_. Since $\in$ well-orders $\alpha$ and $\alpha\cap\beta\subseteq\alpha$, we see that $\in$ well-orders $\alpha\cap\beta$ too. To show that $\alpha\cap\beta$ is a transitive set, take sets $x$ and $y$ such that $x\in y$ and $y\in\alpha\cap\beta$, and thus $y\in\alpha\land y\in\beta$. Since both $\alpha,\beta\in\ord$, they are transitive sets and thus $x\in\alpha\land x\in\beta$. Hence $x\in\alpha\cap\beta$ and thus $\alpha\cap\beta\in\ord$.<span style="float:right;">$\blacksquare$</span>

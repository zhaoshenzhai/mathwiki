<div class="topSpace"></div>

Date Created: 31/01/2022 11:53:36
Tags: #Proposition

Proved by: [[Transitive set iff every element is a subset]], [[Well-ordering well-orders subsets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_For all ordinals $\alpha$ and $\beta$, we have $\alpha\subseteq\beta\Leftrightarrow\alpha\in\beta\lor\alpha=\beta$._

```

_Proof_. ($\Leftarrow$): If $\alpha\in\beta$, then $\alpha\subseteq\beta$ follows from the fact that $\beta$ is transitive. If $\alpha=\beta$, then trivially $\alpha\subseteq\beta$.

($\Rightarrow$): Assume that $\alpha\subseteq\beta$ but $\alpha\neq\beta$; we shall show that $\alpha\in\beta$. Let $X\coloneqq\beta\comp\alpha$, and since $\alpha\subset\beta$, there exists $x\in\beta$ such that $x\not\in\alpha$; in other words, $X\neq\em$. Since $\in$ well-orders $\beta$, it also well-orders $X=\beta\comp\alpha\subseteq\beta$ and hence $\in$ is well-founded on $X$. It follows that there exists some $\in$-minimal element $\xi\in X$. Observe that $\xi\in\beta$, so it suffices to show that $\xi=\alpha$.
* ($\xi\subseteq\alpha$): Take $\mu\in\xi$. Since $\xi\in\beta$ and $\beta$ is transitive, we see that $\mu\in\beta$ too. Also, $\mu\not\in X$, for if it were, then $\xi$ would not be $\in$-minimal. It follows that $\mu\in\alpha$ and hence $\xi\subseteq\alpha$.
* ($\xi\not\subset\alpha$): Assume otherwise, so $\xi\subset\alpha$ and hence there exists $\nu\in\alpha\comp\xi$. Since $\alpha\subseteq\beta$, we see that $\nu\in\beta$. Recall that $\xi\in X\subseteq\beta$ too and that $\nu\not\in\xi$ since $\xi$ is $\in$-minimal in $X$ and hence in $\beta$ too. The total ordering of $\in$ on $\beta$ then implies that either $\xi=\nu$ or $\xi\in\nu$, but both are contradictory. For equality, observe that $\nu\in\alpha$ but $\xi\not\in\alpha$; for membership, observe that $\xi\in\nu\in\alpha$ and hence $\xi\in\alpha$.<span style="float:right;">$\blacksquare$</span>

<div class="topSpace"></div>

Date Created: 31/01/2022 12:28:22
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Intersection of ordinals is an ordinal]], [[Reflexive closure of ordering on ordinals]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

The membership relation $\in$ is a well-order on $\ON$.

```

<i>Proof.</i> We need to prove that $\in$ is a transitive, irreflexive, connected, and well-founded relation on $\ON$.
* (Transitive): Since $\gamma\in\ON$, this is the statement that $\gamma$ is a transitive set.

* (Irreflexive): Since $\in$ is a strict total order on $\alpha$, it is, in particular, also irreflexive on $\alpha$ and hence $\fa x\in\alpha:x\not\in x$.
* (Connected): Set $\gamma\coloneqq\alpha\cap\beta\in\ON$, so $\gamma\subseteq\alpha$ and $\gamma\subseteq\beta$. It follows that $\l(\gamma\in\alpha\lor\gamma=\alpha\r)\land\l(\gamma\in\beta\lor\gamma=\beta\r)$. If either $\gamma=\alpha$ or $\gamma=\beta$, say $\gamma=\alpha\cap\beta=\alpha$, then $\beta\subseteq\alpha$ and hence either $\beta\in\alpha$ or $\beta=\alpha$. Otherwise, we have $\gamma\in\alpha$ and $\gamma\in\beta$ and thus $\gamma\in\alpha\cap\beta=\gamma$. But this contradicts the fact that $\in$ is irreflexive on $\ON$.
* (Well-founded): Fix $\alpha\in X$; if $\alpha=\lambda$, then we are done. Otherwise, consider the set $\alpha\cap X=\l\{\xi\in X\mid\xi\in\alpha\r\}$ which, by virtue of $\alpha\neq\lambda$, is non-empty. Since $\alpha\in\ON$, we see that $\in$ is well-founded on $\alpha$ and is thus well-founded on $\alpha\cap X\subseteq\alpha$ too. It follows that there exists an $\in$-minimal element $\lambda$ in $\alpha\cap X$. Observe then that $\lambda$ must also be $\in$-minimal in $X$, for if $\mu\in X$ and $\mu\in\lambda$, then, since $\lambda\in\alpha$ and $\alpha$ is transitive, we have $\mu\in\alpha$ and hence $\mu\in\alpha\cap X$. It follows that $\mu\not\in\alpha$ and hence either $\mu=\lambda$ or $\lambda\in\mu$, both of which implies $\lambda\in\lambda$ which is contradictory since $\in$ is irreflexive on $\ON$.<span style="float:right;">$\blacksquare$</span>

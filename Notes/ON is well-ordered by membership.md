<br />
<br />

Date Created: 31/01/2022 12:28:22
Tags: #Proposition #Closed 

Proved by: [[Intersection of ordinals is an ordinal]], [[Reflexive closure of ordering on ordinals]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_The membership relation $\in$ is a well-order on $\ord$._

```

_Proof_. We need to prove that $\in$ is a transitive, irreflexive, connected, and well-founded relation on $\ord$.
* ($\in$ is transitive on $\ord$; formally: $\fa\alpha,\beta,\gamma\in\ord:\l(\alpha\in\beta\land\beta\in\gamma\r)\Rightarrow\alpha\in\gamma$): Since $\gamma\in\ord$, this is the statement that $\gamma$ is a transitive set.

* ($\in$ is irreflexive on $\ord$; formally: $\fa\alpha\in\ord:\alpha\not\in\alpha$): Since $\in$ is a strict total order on $\alpha$, it is, in particular, also irreflexive on $\alpha$ and hence $\fa x\in\alpha:x\not\in x$. It follows that if $\alpha\in\alpha$, then $\alpha\not\in\alpha$ which is contradictory.
* ($\in$ is connected on $\ord$; formally; $\fa\alpha,\beta\in\ord:\alpha\in\beta\lor\beta\in\alpha\lor\alpha=\beta$): Set $\gamma\coloneqq\alpha\cap\beta\in\ord$, so $\gamma\subseteq\alpha$ and $\gamma\subseteq\beta$. It follows that$$\begin{equation}
    \l(\gamma\in\alpha\lor\gamma=\alpha\r)\land\l(\gamma\in\beta\lor\gamma=\beta\r).
 \end{equation}$$
    * If either $\gamma=\alpha$ or $\gamma=\beta$, say $\gamma=\alpha\cap\beta=\alpha$, then $\beta\subseteq\alpha$ and hence either $\beta\in\alpha$ or $\beta=\alpha$.
    * If neither $\gamma=\alpha$ nor $\gamma=\beta$, then we have $\gamma\in\alpha$ and $\gamma\in\beta$ and thus $\gamma\in\alpha\cap\beta=\gamma$. But this contradicts the fact that $\in$ is irreflexive on $\ord$.
* ($\in$ is well-founded on $\ord$; formally: $\fa X\subseteq\ord:\l[X\neq\em\Rightarrow\l(\ex\lambda\in X,\fa\xi\in X:\xi\not\in\lambda\r)\r]$): Fix $\alpha\in X$; if $\alpha=\lambda$, then we are done. Otherwise, consider the set $\alpha\cap X=\l\{\xi\in X\mid\xi\in\alpha\r\}$ which, by virtue of $\alpha\neq\lambda$, is non-empty. Since $\alpha\in\ord$, we see that $\in$ is well-founded on $\alpha$ and is thus well-founded on $\alpha\cap X\subseteq\alpha$ too. It follows that there exists an $\in$-minimal element $\lambda$ in $\alpha\cap X$. Observe then that $\lambda$ must also be $\in$-minimal in $X$, for if $\mu\in X$ and $\mu\in\lambda$, then, since $\lambda\in\alpha$ and $\alpha$ is transitive, we have $\mu\in\alpha$ and hence $\mu\in\alpha\cap X$. It follows that $\mu\not\in\alpha$ and hence either $\mu=\lambda$ or $\lambda\in\mu$, both of which implies $\lambda\in\lambda$ which is contradictory since $\in$ is irreflexive on $\ord$.<span style="float:right;">$\blacksquare$</span>

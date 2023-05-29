<div class="topSpace"></div>

Date Created: 29/12/2022 16:47:16
Tags: #Type/Theorem #Topic/Topology

Proved by: [[De Morgan's Laws]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Finite Intersection Theorem).

Let $X$ be a topological space. Then $X$ is compact iff for every collection $\l\{F_\alpha\r\}_{\alpha\in\mc{A}}$ of closed sets such that the intersection of any finite subcollection is non-empty, then $\bigcap_{\alpha\in\mc{A}}F_\alpha\neq\em$.

```

_Proof_.
* ($\Rightarrow$): Assume that $X$ is compact and suppose, for sake of contradiction, that $\bigcap_{\alpha\in\mc{A}}F_\alpha=\em$. For each $\alpha\in\mc{A}$, set $U_\alpha\coloneqq X\comp U_\alpha$, which is open, and observe that
$$\begin{equation}
    \bigcup_{\alpha\in\mc{A}}U_\alpha=\bigcup_{\alpha\in\mc{A}}X\comp F_\alpha=X\comp\bigcap_{\alpha\in\mc{A}}F_\alpha=X.
\end{equation}$$
Thus $\l\{U_\alpha\r\}$ is an open cover of $X$, so compactness of $X$ furnishes indices $\alpha_1,\dots,\alpha_k\in\mc{A}$ such that $X=\bigcup_{i=1}^{k}U_{\alpha_i}$. But then
$$\begin{equation}
    \bigcap_{i=1}^{k}F_{\alpha_i}=\bigcap_{i=1}^{k}X\comp U_{\alpha_i}=X\comp\bigcup_{i=1}^{k}U_{\alpha_i}=X\comp X=\em,
\end{equation}$$
contradicting the $\textrm{`}$finite-intersection property$\textrm{'}$ of $\l\{F_\alpha\r\}$.

* ($\Leftarrow$): Let $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}$ be an open cover of $X$ and suppose, for sake of contradiction, that it has no finite subcover. For each $\alpha\in\mc{A}$, set $F_\alpha\coloneqq X\comp U_\alpha$, which is closed, and observe that
$$\begin{equation}
    \bigcap_{i=1}^{k}F_{\alpha_i}=\bigcap_{i=1}^{k}X\comp U_{\alpha_i}=X\comp\bigcup_{i=1}^{k}U_{\alpha_i}\neq\em
\end{equation}$$
for any finite subcollection $\l\{\alpha_1,\dots,\alpha_k\r\}\subseteq\mc{A}$. Thus $\bigcap_{\alpha\in\mc{A}}F_\alpha\neq\em$, so
$$\begin{equation}
    \bigcup_{\alpha\in\mc{A}}U_\alpha=\bigcup_{\alpha\in\mc{A}}X\comp F_\alpha=X\comp\bigcap_{\alpha\in\mc{A}}F_\alpha\neq X,
\end{equation}$$
contradicting the fact that $\l\{U_\alpha\r\}$ is a cover of $X$.<span style="float:right;">$\blacksquare$</span>

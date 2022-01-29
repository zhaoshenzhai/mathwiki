<br />
<br />

Date Created: 29/01/2022 16:31:03
Tags: #Theorem #Closed 

Proved by: [[Same equivalence class iff related]]
Generalizations: _Not Applicable_

!!! ad-Theorem Theorem.

Let $X$ be a set.
1. Let $\Pi$ be a partition on $X$. Then the binary relation $R_\Pi$ induced by $\Pi$ is an equivalence relation on $X$.
2. Let $R$ be an equivalence relation on $X$. Then the quotient set $X/R$ is a partition of $X$.

Furthermore, we have $X/R_\Pi=\Pi$ and $R_{X/R}=R$.

--- admonition

_Proof_.
1. Take $x,y,z\in X$; we verify that $R_\Pi$ is reflexive, symmetric, and transitive on $X$:
    * (Reflexive): By $\axipartition{3}$, we have $x\in\bigcup\Pi$ and thus there exists $P\in\Pi$ such that $x\in P$. Certainly then $x\in P\land x\in P$, so $xR_\Pi x$.
    * (Symmetric): Suppose that $xR_\Pi y$, so there exists $P\in\Pi$ such that $x\in P\land y\in P$. Since logical conjunction commutes, we see that $y\in P\land x\in P$ and thus $yR_\Pi x$.
    * (Transitive): Suppose that $xR_\Pi y$ and $yR_\Pi z$, so there exist $P,P'\in\Pi$ such that $x\in P\land y\in P$ and $y\in P'\land z\in P'$; it suffices to show that $P=P'$. If not, i.e. if $P\neq P'$, then, by $\axipartition{2}$, we see that $P\cap P'=\em$. But observe that $y\in P$ and $y\in P'$, a contradiction.
2. Observe that, by definition of the quotient set, we have $X/R\subseteq\mc{P}\l(X\r)$. We now verify the axioms for a partition on $X$:
    * ($\axipartition{1}$): Take $\l[x\r]_R\in X/R$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$ and thus elements of $X/R$ are non-empty.
    * ($\axipartition{2}$): Take $\l[x\r]_R,\l[y\r]_R\in X/R$; we shall verify the contrapositive by assuming that there exists a common element of $\l[x\r]_R$ and $\l[y\r]_R$, say $t$. It follows that $xRt$ and $yRt$, so, by symmetry and transitivity, we see that $xRy$ and hence $\l[x\r]_R=\l[y\r]_R$.
    * ($\axipartition{3}$): Take $x\in X$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$. But $\l[x\r]_R\in X/R$, so $x\in\bigcup X/R$.

Proof that $X/R_\Pi=\Pi$:
* ($\subseteq$): Take $x\in X$ so that $\l[x\r]_{R_\Pi}\in X/R_\Pi$. Let $y\in\l[x\r]_{R_\Pi}$ so $yR_\Pi x$, that is, there exists $P\in\Pi$ such that $x,y\in P$; we shall prove that $\l[x\r]_{R_\Pi}=P\in\Pi$. To this end, take $z\in\l[x\r]_{R_\Pi}$. Observe that $zR_\Pi x$ and thus $zR_\Pi y$ too. It follows that there exists $P'\in\Pi$ such that $y\in P'\land z\in P'$, but, as we have seen, this forces $P=P'$ and thus $z\in P$. Conversely, note that $P\in\Pi\subseteq\mc{P}\l(X\r)$ and so $P\subseteq X$. Therefore, for all $p\in P$, we have $p\in X$ and thus, by definition of $R_\Pi$, we have $pR_\Pi x$. It follows that $p\in\l[x\r]_{R_\Pi}$.
* ($\supseteq$): Take $P\in\Pi$. Since $P\neq\em$ by $\axipartition{1}$, take $p\in P$. Recall that $P\subseteq X$, so $p\in X$ and thus $p\in\l[p\r]_{R_\Pi}$. It follows that $P\subseteq\l[p\r]_{R_\Pi}$. By the argument above, we have $\l[p\r]_{R_\Pi}\subseteq P$ and thus $P=\l[p\r]_{R_\Pi}\in X/R_\Pi$.

Proof that $R_{X/R}=R$:
* ($\subseteq$): Take $x,y\in X$ such that $\l\langle x,y\r\rangle\in R_{X/R}$, which, by definition, implies that there exists $P\in X/R$ such that $x,y\in P$. However, the set $P$ is also an equivalence class of the form $\l[t\r]_R$ for some $t\in X$ such that $xRt$ and $yRt$. It follows that $xRy$ and hence $R_{X/R}\subseteq R$.
* ($\supseteq$): Take $x,y\in X$ such that $xRy$ from which it follows that $\l[x\r]_R=\l[y\r]_R$. Since $\l[x\r]_R,\l[y\r]_R\in X/R$ and $X/R$ is a partition on $X$, set $P\coloneqq\l[x\r]_R=\l[y\r]_R\in X/R$ and observe that $x,y\in P$. It follows, by definition of $R_{X/R}$, that $\l\langle x,y\r\rangle\in R_{X/R}$.<span style="float:right;">$\blacksquare$</span>

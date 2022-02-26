<br />
<br />

Date Created: 20/01/2022 13:53:33
Tags: #Proposition #Open 

Proved by: [[Axiom Schema of Replacement]], [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $v$ be a set and let $\phi\l(x,y\r)$ be a formula, not free in $z$, such that $\fa x\in v,\ex!y:\phi\l(x,y\r)$. Then there exists a unique set $z$ whose elements are exactly the sets $y$ that (uniquely) correspond to each $x\in v$. Formally,_
$$\begin{equation}
    \fa v\l[\l(\fa x\in v,\ex!y:\phi\l(x,y\r)\r)\Rightarrow\ex!z\l(y\in z\Leftrightarrow\ex x\in v:\phi\l(x,y\r)\r)\r].
\end{equation}$$

```

_Proof_. The existence of a superset of $z$ is established by Replacement:
$$\begin{equation}
    \ex z',\fa x\in v,\ex y\in z':\phi\l(x,y\r).
\end{equation}$$
From this, we can use Specification to construct the desired set $z$:
$$\begin{equation}
    \ex z\fa y\l[y\in z\Leftrightarrow\l(y\in z'\land\ex x\in v:\phi\l(x,y\r)\r)\r].
\end{equation}$$
We now need to verify that the biconditional does, in fact, hold for such a set $z$. Fix any set $y$.
* (proof that $y\in z\Rightarrow\ex x\in v:\phi\l(x,y\r)$): This follows from our construction of $z$.
* (proof that $\l[\ex x\in v:\phi\l(x,y\r)\r]\Rightarrow y\in z$): It suffices to prove that $y\in z'$. For such an $x\in v$, we have, by Replacement, some $y'\in z'$ such that $\phi\l(x,y'\r)$. However, since $\fa x\in v,\ex!y:\phi\l(x,y\r)$, we see that $y=y'$. Since $y'\in z'$, we have $y\in z'$ too.<span style="float:right;">$\blacksquare$</span>

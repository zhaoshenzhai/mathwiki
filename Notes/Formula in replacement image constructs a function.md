<br />
<br />

Date Created: 21/01/2022 08:57:57
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Open 

Proved by: [[Replacement image of a set is a set]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $v$ be a set and let $\phi\l(x,y\r)$ be a formula such that $\fa x\in v,\ex!y:\phi\l(x,y\r)$. Then there exists a function $f$ with $\dom f=v$ such that $\fa x\in v:\phi\l(x,f\l(x\r)\r)$._

```

_Proof_. Let $\psi\l(x,z\r)\,\colon\!\Leftrightarrow\ex y\l[\phi\l(x,y\r)\land z=\l\langle x,y\r\rangle\r]$ and construct the set
$$\begin{equation}
    f\coloneqq\l\{z\mid\ex x\in v:\psi\l(x,z\r)\r\}.
\end{equation}$$
* ($f$ is a set): To do so, we verify that $\fa x\in v,\ex!z:\psi\l(x,z\r)$. Take $x\in v$; by hypothesis, there exists a unique set $y$ such that $\phi\l(x,y\r)$, so set $z=\l\langle x,y\r\rangle$ which is trivially unique.
* ($f$ is a binary relation): This is trivial; observe that, in particular, we have $\fa z\in f,\ex x,y:z=\l\langle x,y\r\rangle$.

We can now prove that $f$ is a function with the remaining properties. Take any $x\in v$, so there exists a unique $y$ with $\phi\l(x,y\r)$. It suffices to prove that this is the unique $y$ with $\l\langle x,y\r\rangle\in f$, for then $f\l(x\r)$ is defined to be this unique $y$ and thus $\phi\l(x,f\l(x\r)\r)$ holds. By definition of $f$, $\l\langle x,y\r\rangle\in f$ implies that, in particular, we have $\phi\l(x,y\r)$. If $\ex y':\l\langle x,y'\r\rangle\in f$, then $\phi\l(x,y'\r)$ too and thus $y=y'$.<span style="float:right;">$\blacksquare$</span>

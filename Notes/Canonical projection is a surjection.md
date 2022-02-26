<br />
<br />

Date Created: 29/01/2022 18:29:59
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $\sim$ be an equivalence relation on $X$. The canonical projection_
$$\begin{equation}
    \pi_\sim:X\to X/\!\sim\ \ \ \ \textit{mapping}\ \ \ \ x\mapsto\l[x\r]_\sim
\end{equation}$$
is a surjection.

```

_Proof_. Take $\l[x\r]_\sim\in X/\!\sim$. Since $\sim$ is reflexive on $X$, we see that $x\in\l[x\r]_\sim=\pi_\sim\l(x\r)$ and so $\pi_\sim$ is a surjection.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Note that $\pi_\sim$ is generically _not_ an injection for related elements $x,y\in X$ need not be equal.<span style="float:right;">$\blacklozenge$</span>

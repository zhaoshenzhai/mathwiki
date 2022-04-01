<br />
<br />

Date Created: 14/01/2022 15:01:47
Tags: #Proposition #Open 
 
Proved by: [[Axiom Schema of Specification]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.(Russel's Paradox).

_The collection of all sets is a proper class. Formally, $\fa v\ex u\l(u\not\in v\r)$._

```

_Proof._ Suppose, for contradiction, that such a set $v$ exists, i.e., $\ex v\fa u\l(u\in v\r)$. By the Axiom Schema of Specification with the formula $\phi$ being $x\not\in x$, we have
$$\begin{equation}
    \ex z\fa x\l[x\in z\Leftrightarrow\l(x\in v\land x\not\in x\r)\r].
\end{equation}$$
Now, because $u\in v$ for all sets $u$ and $z$ is a set, we have $z\in v$ too.
* If $z\in z$, then, by $\textrm{`}$construction$\textrm{'}$, we have $z\in v\land z\not\in z$. In particular, we have $z\in z\Rightarrow z\not\in z$.
* If $z\not\in z$, then, because we already have $z\in v$, we see that $z\in z$ too. Therefore, $z\not\in z\Rightarrow z\in z$.

By definition of the biconditional, we have $z\in z\Leftrightarrow z\not\in z$, a contradiction.<span style="float:right;">$\blacksquare$</span>

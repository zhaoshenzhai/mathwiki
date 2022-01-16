<br />
<br />

Date Created: 14/01/2022 15:01:47
Categories: #Set_Theory
Status: _Closed_
 
Lemmas: [[Axiom Schema of Specification]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition (Russel's Paradox).

There is no universal set. Formally, $\fa v\ex u\l(u\not\in v\r)$.

--- admonition

_Proof._ Suppose, for contradiction, that such a set $v$ exists, i.e., $\ex v\fa u\l(u\in v\r)$. By the Axiom Schema of Specification with the formula $\phi$ being $x\not\in x$, we have
$$\begin{equation}
    \ex y\fa x\l[x\in y\Leftrightarrow\l(x\in v\land x\not\in x\r)\r].
\end{equation}$$
Now, because $u\in v$ for all sets $u$, and $y$ is a set, we have $y\in v$ too.
* If $y\in y$, then, by $\textrm{`}$construction$\textrm{'}$, we have $y\in v\land y\not\in y$. In particular, we have $y\in y\Rightarrow y\not\in y$.
* If $y\not\in y$, then, because we already have $y\in v$, we see that $y\in y$ too. Therefore, $y\not\in y\Rightarrow y\in y$.

By definition of the biconditional, we have $y\in y\Leftrightarrow y\not\in y$, a contradiction.<span style="float:right;">$\blacksquare$</span>

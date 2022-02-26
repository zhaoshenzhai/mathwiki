<br />
<br />

Date Created: 31/01/2022 16:33:49
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: [[Reflexive closure of ordering on ordinals]],  [[ON is a transitive class]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\alpha$ be an ordinal. Then the successor ordinal $S\l(\alpha\r)=\alpha\cup\l\{\alpha\r\}$ is an ordinal, $\alpha\in S\l(\alpha\r)$, and_
$$\begin{equation}
    \fa\gamma\in\ord:\gamma\in S\l(\alpha\r)\Leftrightarrow\gamma\subseteq\alpha.
\end{equation}$$

```

_Proof_. Obviously $\alpha\in\l\{\alpha\r\}\subseteq\alpha\cup\l\{\alpha\r\}=S\l(\alpha\r)$. Take $\gamma\in\ord$; the fact that $S\l(\alpha\r)$ is the smallest such ordinal follows from the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        \gamma\in S\l(\alpha\r)&\Leftrightarrow\gamma\in\alpha\cup\l\{\alpha\r\}&&\textrm{Definition of successor ordinal}\\
        &=\gamma\in\alpha\lor\gamma=\alpha\ \ \ \ \ \ \ \ &&\textrm{Definition of union}\\
        &=\gamma\subseteq\alpha.&&\textrm{Reflexive closure of}\in\textrm{on ordinals}
    \end{alignedat}
\end{equation}$$
Thus it suffices to show that $S\l(\alpha\r)$ is, in fact, an ordinal. To do so, we verify that $S\l(\alpha\r)$ is a transitive set that is well-ordered by $\in$.
* ($S\l(\alpha\r)$ is a transitive set): Take sets $x$ and $y$ with $x\in y$ and $y\in S\l(\alpha\r)$, so either $y\in\alpha$ or $y=\alpha$. In the former case, we have $x\in\alpha$ since $\alpha$ is a transitive set; the latter case is trivial.

* ($\in$ is well-founded on $S\l(\alpha\r)$): Since $\in$ is well-founded on $\alpha$, we see that
$$\begin{equation}
    \ex\lambda\in\alpha,\fa\xi\in\alpha:\xi\not\in\lambda;
\end{equation}$$
it suffices to show that $\alpha\not\in\lambda$ from which it follows that $\lambda$ is $\in$-minimal on $\alpha\cup\l\{\alpha\r\}$. Suppose otherwise, so $\alpha\in\lambda$ and thus $\alpha\in\alpha$ since $\alpha$ is transitive. But this contradicts the fact that $\in$ is irreflexive on $\alpha$.
* ($\in$ is transitive on $S\l(\alpha\r)$): Take $x,y,z\in\alpha\cup\l\{\alpha\r\}$ such that $x\in y$ and $y\in z$. If $z=\alpha$, then $x\in\alpha$ too since $\alpha$ is a transitive set. Otherwise, if $z\in\alpha$, then $y\in\alpha$ and hence $x\in\alpha$ too; both statements follow from the fact that $\alpha$ is a transitive set.
* ($\in$ is irreflexive on $S\l(\alpha\r)$): Take $x\in\alpha\cup\l\{\alpha\r\}$; if $x=\alpha$, we have $\alpha\not\in\alpha$ since $\in$ is irreflexive on $\alpha$. If $x\in\alpha$, then, since $\ord$ is a transitive class, we see that $x$ is an ordinal too and hence satisfies irreflexivity.
* ($\in$ is connected on $S\l(\alpha\r)$): Take $x,y\in\alpha\cup\l\{\alpha\r\}$. If both $x,y\in\alpha$, there is nothing to show. If $x\in\alpha$ and $y=\alpha$, then $x\in y$; similarly for if $y\in\alpha$ and $x=\alpha$. If $x=\alpha$ and $y=\alpha$, then $x=y$.<span style="float:right;">$\blacksquare$</span>

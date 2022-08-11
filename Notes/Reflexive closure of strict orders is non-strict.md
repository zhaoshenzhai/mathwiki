<div class="topSpace"></div>

Date Created: 01/02/2022 11:05:40
Tags: #Proposition #Closed 

Proved by: [[Reflexive closure of connected relation is connected]], [[Reflexive closure is the smallest reflexive relation]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $\prec$ and $<$ be strict partial and total orders on $X$, respectively. Then_
$$\begin{equation}
    \preceq\,\coloneqq\rfcl\prec\ \ \ \ \textrm{\it{and}}\ \ \ \ \leq\,\coloneqq\rfcl<
\end{equation}$$
_are (non-strict) partial and total orders on $X$, respectively._

```

_Proof_. It suffices to show that $\preceq$ is a partial order on $X$ since the reflexive closure of connected relations remain connected. To do so, we check that $\preceq$ is transitive and antisymmetric on $X$; reflexivity is already ensured.
* (Transitive): Take $x_1,x_2,x_3\in X$ with such that $x_1\preceq x_2$ and $x_2\preceq x_3$.
    * If $x_1=x_2$ or $x_2=x_3$, then $x_1\preceq x_3$ by substitution.
    * If $x_1\prec x_2$ and $x_2\prec x_3$, then $x_1\prec x_3$ since $\prec$ is transitive on $X$. It follows that$$\begin{equation}
    \tpl{x_1,x_3}\in\,\prec\,\subseteq\,\prec\cup\id_X=\rfcl\prec\,=\,\preceq.
 \end{equation}$$
* (Antisymmetric): Take $x_1,x_2\in X$ such that $x_1\preceq x_2$ and $x_2\preceq x_1$. Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        x_1\preceq x_2\land x_2\preceq x_1&\Leftrightarrow\l(x_1\prec x_2\land x_1=x_2\r)\land\l(x_2\prec x_1\lor x_1=x_2\r)\ \ \ \ \ \ \ \ &&\preceq\,=\rfcl\prec\,=\,\prec\cup\id_X\\
        &\Leftrightarrow x_1=x_2\lor\l(x_1\prec x_2\land x_2\prec x_1\r),&&\textrm{Distribution of }\lor\textrm{ over }\land
    \end{alignedat}
\end{equation}$$
but the latter case implies, from the transitivity of $\prec$ on $X$, that $x_1\prec x_1$. This contradicts the fact that $\prec$ is irreflexive of $X$, so it must be the case that $x_1=x_2$.<span style="float:right;">$\blacksquare$</span>

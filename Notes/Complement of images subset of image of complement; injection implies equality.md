---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/01/2022 15:34:05
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation and fix subsets $A,B\subseteq\dom R$. Then_
$$\begin{equation}
    \im_R\l(A\r)\comp\im_R\l(B\r)\subseteq\im_R\l(A\comp B\r).
\end{equation}$$
_Equality holds if for all $y\in\ran R$, there exists a unique $x$ such that $xRy$. If $R$ is a function, this is equivalent to saying that $f$ is injective._

```

_Proof_. Take $y\in\im_R\l(A\r)\comp\im_R\l(B\r)$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        y\in\im_R\l(A\r)\comp\im_R\l(B\r)&\Leftrightarrow y\in\im_R\l(A\r)\land\lnot y\in\im_R\l(B\r)&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l(R\rest A\r)\land\lnot y\in\ran\l(R\rest B\r)&&\textrm{Definition of image}\\
        &\Leftrightarrow\ex x:\tpl{x,y}\in R\rest A\land\lnot\ex t:\tpl{t,y}\in R\rest B&&\textrm{Definition of range}\\
        &\Leftrightarrow\ex x\in A:\tpl{x,y}\in R\land\lnot\ex t\in B:\tpl{t,y}\in R\ \ \ \ \ \ \ \ &&\textrm{Definition of restriction}\\
        &\Leftrightarrow\ex x\in A:\tpl{x,y}\in R\land\fa t\in B:\tpl{t,y}\not\in R&&\textrm{Negation of quantifier}\\
        &\Rightarrow\ex x\in A:\tpl{x,y}\in R\land x\not\in B&&\textrm{Universal instantiation; contradiction}\\
        &\Leftrightarrow\ex x\in A\comp B:\tpl{x,y}\in R&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l[R\rest\l(A\comp B\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of range}\\
        &\Leftrightarrow y\in\im_R\l(A\comp B\r).&&\textrm{Definition of image}
    \end{alignedat}   
\end{equation}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \ex x\in A\comp B:\tpl{x,y}\in R\ \ \ \ \Rightarrow\ \ \ \ \fa t\in B:\tpl{t,y}\not\in R.
\end{equation}$$
Suppose, for sake of contradiction, that $\ex t\in B:\tpl{t,y}\in R$. Since $y\in\ran R$, we see, by hypothesis, that $x=t$. However, we have that $x\not\in B$ which is a contradiction. This justifies why equivalence holds.<span style="float:right;">$\blacksquare$</span>

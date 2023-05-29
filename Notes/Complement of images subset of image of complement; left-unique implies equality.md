---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/01/2022 15:34:05
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $R$ be a binary relation and fix subsets $A_1,A_2\subseteq\dom R$. Then
$$\begin{equation}
    \im_R\l(A_1\r)\comp\im_R\l(A_2\r)\subseteq\im_R\l(A_1\comp A_2\r).
\end{equation}$$
Equality holds if for all $y\in\ran R$, there exists a unique $x$ such that $xRy$.

```

**Remark.** If $R$ is a function, then equality holds if $f$ is injective.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $y\in\im_R\l(A_1\r)\comp\im_R\l(A_2\r)$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        y\in\im_R\l(A_1\r)\comp\im_R\l(A_2\r)&\Leftrightarrow y\in\im_R\l(A_1\r)\land\lnot y\in\im_R\l(A_2\r)&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l(R\rest A_1\r)\land\lnot y\in\ran\l(R\rest A_2\r)&&\textrm{Definition of image}\\
        &\Leftrightarrow\ex x_1:\tpl{x_1,y}\in R\rest A_1\land\lnot\ex x_2:\tpl{x_2,y}\in R\rest A_2&&\textrm{Definition of range}\\
        &\Leftrightarrow\ex x_1\in A_1:\tpl{x_1,y}\in R\land\lnot\ex x_2\in A_2:\tpl{x_2,y}\in R\ \ \ \ \ \ \ \ &&\textrm{Definition of restriction}\\
        &\Leftrightarrow\ex x_1\in A_1:\tpl{x_1,y}\in R\land\fa x_2\in A_2:\tpl{x_2,y}\not\in R&&\textrm{Negation of quantifier}\\
        &\Rightarrow\ex x_1\in A_1:\tpl{x_1,y}\in R\land x_1\not\in A_2&&\textrm{Universal instantiation; contradiction}\\
        &\Leftrightarrow\ex x_1\in A_1\comp A_2:\tpl{x_1,y}\in R&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l[R\rest\l(A_1\comp A_2\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of range}\\
        &\Leftrightarrow y\in\im_R\l(A_1\comp A_2\r).&&\textrm{Definition of image}
    \end{alignedat}   
\end{equation}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \ex x_1\in A_1\comp A_2:\tpl{x_1,y}\in R\land x_1\not\in A_2\ \ \ \ \Rightarrow\ \ \ \ \fa x_2\in A_2:\tpl{x_2,y}\not\in R.
\end{equation}$$
Suppose, for sake of contradiction, that $\ex x_2\in A_2:\tpl{x_2,y}\in R$. Since $y\in\ran R$, we see, by hypothesis, that $x_1=x_2$. However, we have that $x_1\not\in A_2$ which is a contradiction. This justifies why equivalence holds.<span style="float:right;">$\blacksquare$</span>

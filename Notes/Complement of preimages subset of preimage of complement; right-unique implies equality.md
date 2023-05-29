---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 10/09/2022 23:55:17
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: [[Domain and range of inverse relation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $R$ be a binary relation and fix subsets $B_1,B_2\in\ran R$. Then
$$\begin{equation}
    \preim_R\l(B_1\r)\comp\preim_R\l(B_2\r)\subseteq\preim_R\l(B_1\comp B_2\r).
\end{equation}$$
Equality holds if for all $x\in\dom R$, there exists a unique $y$ such that $xRy$.

```

<b>Remark.</b> If $R$ is a function, then equality always hold.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $x\in\preim_R\l(B_1\r)\comp\preim_R\l(B_2\r)$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        x\in\preim_R\l(B_1\r)\comp\preim_R\l(B_2\r)&\Leftrightarrow x\in\preim_R\l(B_1\r)\land\lnot x\in\preim_R\l(B_2\r)&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow x\in\ran\l(R^{-1}\rest B_1\r)\land\lnot x\in\ran\l(R^{-1}\rest B_2\r)&&\textrm{Definition of preimage}\\
        &\Leftrightarrow\ex y_1:\tpl{y_1,x}\in R^{-1}\rest B_1\land\lnot\ex y_2:\tpl{y_2,x}\in R^{-1}\rest B_2&&\textrm{Definition of range}\\
        &\Leftrightarrow\ex y_1\in B_1:\tpl{y_1,x}\in R^{-1}\land\lnot\ex y_2\in B_2:\tpl{y_2,x}\in R^{-1}\ \ \ \ \ \ \ \ &&\textrm{Definition of restriction}\\
        &\Leftrightarrow\ex y_1\in B_1:\tpl{y_1,x}\in R^{-1}\land\fa y_2\in B_2:\tpl{y_2,x}\not\in R^{-1}&&\textrm{Negation of quantifier}\\
        &\Rightarrow\ex y_1\in B_1:\tpl{y_1,x}\in R^{-1}\land y_1\not\in B_2&&\textrm{Universal instantiation; contradiction}\\
        &\Leftrightarrow\ex y_1\in B_1\comp B_2:\tpl{y_1,x}\in R^{-1}&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow x\in\ran\l[R^{-1}\rest\l(B_1\comp B_2\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of range}\\
        &\Leftrightarrow x\in\preim_R\l(B_1\comp B_2\r).&&\textrm{Definition of preimage}
    \end{alignedat}   
\end{equation}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \ex y_1\in B_1\comp B_2:\tpl{y_1,x}\in R^{-1}\land y_1\not\in B_2\ \ \ \ \Rightarrow\ \ \ \ \fa y_2\in B_2:\tpl{y_2,x}\not\in R^{-1}.
\end{equation}$$
Suppose, for sake of contradiction, that $\ex y_2\in B_2:\tpl{y_2,x}\in R^{-1}$. Since $x\in\dom R$, we see, by hypothesis, that $y_1=y_2$. However, we have that $y_1\not\in B_2$ which is a contradiction. This justifies why equivalence holds.<span style="float:right;">$\blacksquare$</span>

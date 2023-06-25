---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 10/09/2022 23:22:23
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: [[Domain and range of inverse relation]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a binary relation and fix a non-empty subset $\mc{B}\subseteq\pow\l(\ran R\r)$; that is, fix a non-empty collection of subsets of $\ran R$. Then
$$\begin{equation}
    \preim_R\l(\bigcap\mc{B}\r)\subseteq\bigcap\l\{\preim_R\l(B\r)\st B\in\mc{B}\r\}.
\end{equation}$$
Equality holds if for all $x\in\dom R$, there exists a unique $y$ such that $xRy$.

```

<b>Remark.</b> If $R$ is a function, then equality always hold.
* If $\mc{B}=\l\{A,B\r\}$, then the above reads $\preim_R\!\l(A\cap B\r)\subseteq\preim_R\!\l(A\r)\cap\preim_R\!\l(B\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $x\in\preim_R\l(\bigcap\mc{B}\r)$. The result follows from the following chain of implications:

$$\begin{align}
    x\in\preim_R\l(\bigcap\mc{B}\r)&\Leftrightarrow x\in\ran\l(R^{-1}\rest\bigcap\mc{B}\r)&&\textrm{Definition of preimage}\\
    &\Leftrightarrow\ex y:\tpl{y,x}\in R^{-1}\rest\l(\bigcap\mc{B}\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\ex y:\tpl{y,x}\in R^{-1}\land y\in\bigcap\mc{B}&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\ex y:\tpl{y,x}\in R^{-1}\land\l(\fa B\in\mc{B}:y\in B\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of intersection}\\
    &\Leftrightarrow\ex y,\fa B\in\mc{B}:\tpl{y,x}\in R^{-1}\land y\in B&&A\textrm{ not free in }\tpl{y,x}\in R^{-1}\\
    &\Rightarrow\fa B\in\mc{B},\ex y:\tpl{y,x}\in R^{-1}\land y\in B&&\textrm{Quantifier shift}\\
    &\Leftrightarrow\fa B\in\mc{B},\ex y:\tpl{y,x}\in R^{-1}\rest B&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\fa B\in\mc{B}:y\in\ran\l(R\rest B\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\fa B\in\mc{B}:y\in\preim_R\l(B\r)&&\textrm{Definition of preimage}\\
    &\Leftrightarrow y\in\bigcap\l\{\preim_R\l(B\r)\st B\in\mc{B}\r\}.&&\textrm{Definition of intersection}
\end{align}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \fa B\in\mc{B},\ex y:\tpl{y,x}\in R^{-1}\land y\in B\ \ \ \ \Rightarrow\ \ \ \ \ex y,\fa B\in\mc{B}:\tpl{y,x}\in R^{-1}\land y\in B,
\end{equation}$$
so equivalence holds. Take $B\in\mc{B}$, so there exists some $y$, _that may depend on $B$_, such that $\tpl{y,x}\in R^{-1}$ and $y\in B$. It suffices to prove that the choice of $y$ does <i>not</i> depend on $B$. Simply observe that $x\in\dom R$, so such an $y$ must, by hypothesis, be unique. It follows that if $\tpl{y,x}\in R^{-1}$ and $y\in B$ for some specific $B\in\mc{B}$, then $y\in B'$ for some other $B'\in\mc{B}$ too. Thus $y\in B$ for all $B\in\mc{B}$. This justifies why the quantifiers may be swapped, and hence why equivalence holds.<span style="float:right;">$\blacksquare$</span>

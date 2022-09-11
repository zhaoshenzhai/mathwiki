---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/01/2022 13:54:27
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation and fix a non-empty subset $\mc{A}\subseteq\pow\l(\dom R\r)$; that is, fix a non-empty collection of subsets of $\dom R$. Then_
$$\begin{equation}
    \im_R\l(\bigcap\mc{A}\r)\subseteq\bigcap\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.
\end{equation}$$
_Equality holds if for all $y\in\ran R$, there exists a unique $x$ such that $xRy$._

```

**Remark.** If $R$ is a function, then equality holds if $f$ is injective.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $y\in\im_R\l(\bigcap\mc{A}\r)$. The result follows from the following chain of implications:

$$\begin{align}
    y\in\im_R\l(\bigcap\mc{A}\r)&\Leftrightarrow y\in\ran\l(R\rest\bigcap\mc{A}\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\rest\l(\bigcap\mc{A}\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\land x\in\bigcap\mc{A}&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\land\l(\fa A\in\mc{A}:x\in A\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of intersection}\\
    &\Leftrightarrow\ex x,\fa A\in\mc{A}:\tpl{x,y}\in R\land x\in A&&A\textrm{ not free in }\tpl{x,y}\in R\\
    &\Rightarrow\fa A\in\mc{A},\ex x:\tpl{x,y}\in R\land x\in A&&\textrm{Quantifier shift}\\
    &\Leftrightarrow\fa A\in\mc{A},\ex x:\tpl{x,y}\in R\rest A&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\fa A\in\mc{A}:y\in\ran\l(R\rest A\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\fa A\in\mc{A}:y\in\im_R\l(A\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow y\in\bigcap\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.&&\textrm{Definition of intersection}
\end{align}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \fa A\in\mc{A},\ex x:\tpl{x,y}\in R\land x\in A\ \ \ \ \Rightarrow\ \ \ \ \ex x,\fa A\in\mc{A}:\tpl{x,y}\in R\land x\in A,
\end{equation}$$
so equivalence holds. Take $A\in\mc{A}$, so there exists some $x$, _that may depend on $A$_, such that $\tpl{x,y}\in R$ and $x\in A$. It suffices to prove that the choice of $x$ does _not_ depend on $A$. Simply observe that $y\in\ran R$, so such an $x$ must, by hypothesis, be unique. It follows that if $\tpl{x,y}\in R$ and $x\in A$ for some specific $A\in\mc{A}$, then $x\in A'$ for some other $A'\in\mc{A}$ too. Thus $x\in A$ for all $A\in\mc{A}$. This justifies why the quantifiers may be swapped, and hence why equivalence holds.<span style="float:right;">$\blacksquare$</span>

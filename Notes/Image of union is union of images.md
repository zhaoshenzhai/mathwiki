<div class="topSpace"></div>

Date Created: 28/01/2022 13:28:47
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation and fix $\mc{A}\subseteq\pow\l(\dom R\r)$; that is, fix a collection of subsets of $\dom R$. Then_
$$\begin{equation}
    \im_R\l(\bigcup\mc{A}\r)=\bigcup\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.
\end{equation}$$

```

_Proof_. Take $y\in\im_R\l(\bigcup\mc{A}\r)$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    y\in\im_R\l(\bigcup\mc{A}\r)&\Leftrightarrow y\in\ran\l(R\rest\bigcup\mc{A}\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\rest\l(\bigcup\mc{A}\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\land x\in\bigcup\mc{A}&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\ex x:\tpl{x,y}\in R\land\l(\ex A\in\mc{A}:x\in A\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of union}\\
    &\Leftrightarrow\ex x,\ex A\in\mc{A}:\tpl{x,y}\in R\land x\in A&&A\textrm{ not free in }\tpl{x,y}\in R\\
    &\Leftrightarrow\ex A\in\mc{A},\ex x:\tpl{x,y}\in R\land x\in A&&\textrm{Like quantifiers commute}\\
    &\Leftrightarrow\ex A\in\mc{A},\ex x:\tpl{x,y}\in R\rest A&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\ex A\in\mc{A}:y\in\ran\l(R\rest A\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\ex A\in\mc{A}:y\in\im_R\l(A\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow y\in\bigcup\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.&&\textrm{Definition of union}\qedin
\end{alignat}$

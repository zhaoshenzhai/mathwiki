<div class="topSpace"></div>

Date Created: 10/09/2022 22:49:51
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a binary relation and fix $\mc{B}\subseteq\pow\l(\ran R\r)$; that is, fix a collection of subsets of $\ran R$. Then
$$\begin{equation}
    \preim_R\l(\bigcup\mc{B}\r)=\bigcup\l\{\preim_R\l(B\r)\mid B\in\mc{B}\r\}.
\end{equation}$$

```

<b>Remark.</b> If $\mc{B}=\l\{A,B\r\}$, then the above reads $\preim_R\!\l(A\cup B\r)=\preim_R\!\l(A\r)\cup\preim_R\!\l(B\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $x\in\preim_R\l(\bigcup\mc{B}\r)$. The result follows from the following chain of equivalences:

$\begin{align}
    x\in\preim_R\l(\bigcup\mc{B}\r)&\Leftrightarrow x\in\ran\l(R^{-1}\rest\bigcup\mc{B}\r) && \textrm{Definition of preimage} \\
    &\Leftrightarrow\ex y:\tpl{y,x}\in R^{-1}\rest\bigcup\mc{B} && \textrm{Definition of range} \\
    &\Leftrightarrow\ex y:\tpl{y,x}\in R^{-1}\land y\in\bigcup\mc{B} && \textrm{Definition of restriction} \\
    &\Leftrightarrow\ex y:\tpl{y,x}\in Y^{-1}\land\l(\ex B\in\mc{B}:y\in B\r) && \textrm{Definition of union} \\
    &\Leftrightarrow\ex y,\ex B\in\mc{B}:\tpl{y,x}\in R^{-1}\land y\in B && B\textrm{ is not free in }\tpl{y,x}\in R^{-1} \\
    &\Leftrightarrow\ex B\in\mc{B},\ex y:\tpl{y,x}\in R^{-1}\land y\in B && \textrm{Like quantifiers commute} \\
    &\Leftrightarrow\ex B\in\mc{B},\ex y:\tpl{y,x}\in R^{-1}\rest B && \textrm{Definition of restriction} \\
    &\Leftrightarrow\ex B\in\mc{B}:x\in\ran\l(R^{-1}\rest B\r) && \textrm{Definition of range} \\
    &\Leftrightarrow\ex B\in\mc{B}:x\in\preim_R\l(B\r) && \textrm{Definition of preimage} \\
    &\Leftrightarrow x\in\bigcup\l\{\preim_R\l(B\r)\mid B\in\mc{B}\r\}. && \textrm{Definitionf of union}\qedin
\end{align}$

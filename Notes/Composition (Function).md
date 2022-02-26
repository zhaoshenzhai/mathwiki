<br />
<br />

Date Created: 26/01/2022 18:27:58
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_ 
Constructions: [[Category of Sets]]
Generalizations: [[Composition (Relation)]]

Properties: [[Composition with identities preserve functions]], [[Composition of bijections is a bijection]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Composition of functions is a function]]

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Definition
title: Definition.

_Let $f:X\to Y$ and $g:Y'\to Z$ be functions. The **composition of $g$ after $f$** is the function_
$$\begin{equation}
    g\circ f:\l\{x\in X\mid f\l(x\r)\in Y'\r\}\to Z\ \ \ \ \textit{mapping}\ \ \ \ x\mapsto g\l(f\l(x\r)\r).
\end{equation}$$

```

**Remark.**  If $\ran f\cap Y'=\em$, we see that $g\circ f=\em$; usually, one only talks about the composition when $\ran f\subseteq Y'$ in which case $\dom\l(g\circ f\r)=\dom f$ and thus $g\circ f:X\to Z$.<span style="float:right;">$\blacklozenge$</span>

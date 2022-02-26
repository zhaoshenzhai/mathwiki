<br />
<br />

Date Created: 22/02/2022 12:14:26
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Opposite category is a category]]

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category. The **opposite category of $\cat{C}$** is the category $\cat{C}^\textrm{op}$ whose objects are $\cat{C}$-objects and whose morphisms are $\cat{C}$-morphisms with arrows reversed. Formally,_
* $\obj\l(\cat{C}^\textrm{op}\r)\coloneqq\obj\l(\cat{C}\r)$,
* _for all_ $X,Y\in\obj\l(\cat{C}^\textrm{op}\r)$_,_ $\hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)\coloneqq\hom_\cat{C}\!\l(Y,X\r)$_,_
* _for all_ $X\in\obj\l(\cat{C}^\textrm{op}\r)$_, the $\cat{C}^\textrm{op}$-identity on $X$ is the $\cat{C}$-identity on $X$, and_
* _for all $X,Y,Z\in\obj\l(\cat{C}^\textrm{op}\r)$, the composition function is_
$$\begin{equation}
    \begin{aligned}
        \ast:\hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)\times\hom_{\cat{C}^\textrm{op}}\!\l(Y,Z\r)&\to\hom_{\cat{C}^\textrm{op}}\!\l(X,Z\r)\\
        \l\langle f,g\r\rangle&\mapsto\ast\l(f,g\r)\eqqcolon g\ast f\coloneqq f\circ g
    \end{aligned}
\end{equation}$$
_where $f\circ g$ is the $\cat{C}$-composite of $f$ after $g$._

```

**Remark.** It is obvious that $\l(\cat{C}^\textrm{op}\r)^\textrm{op}=\cat{C}$.<span style="float:right;">$\blacklozenge$</span>

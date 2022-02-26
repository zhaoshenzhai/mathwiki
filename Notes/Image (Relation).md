<br />
<br />

Date Created: 20/01/2022 09:50:24
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_ 
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Image of union is union of images]], [[Image of intersection subset of intersection of images; equal iff injection]], [[Complement of images subset of image of complement; equal if injection]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $R$ be a binary relation and let $S$ be a set. The **image of $S$ under $R$** is the set_
$$\begin{equation}
    \im_R\l(S\r)\coloneqq R\l[S\r]\coloneqq\ran\l(R\rest S\r).
\end{equation}$$

```

**Remark.** Expanding, we see that $\im_R\l(S\r)=\l\{y\mid\ex x\in S:xRy\r\}$. Usually, the set $S$ is a subset of $\dom R$. Observe that $\im_R\l(\dom R\r)=\ran R$.<span style="float:right;">$\blacklozenge$</span>

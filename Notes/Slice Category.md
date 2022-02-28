<br />
<br />

Date Created: 25/02/2022 14:25:38
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Slice category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. The **slice category of $\cat{C}$ over $X$** is the category $\l(\cat{C}\downarrow X\r)$ defined by the following data:_
* _The objects are $\cat{C}$-morphisms $f$ with $\cdm f=X$, that is,_
$$\begin{equation}
    \obj\l(\cat{C}\downarrow X\r)\coloneqq\l\{f\in\hom_\cat{C}\!\l(Z,X\r)\mid Z\in\obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* _For all $\l(\cat{C}\downarrow X\r)$-objects $f$ and $g$, the morphisms from $f$ to $g$ are $\cat{C}$-morphisms $\phi:\dom f\to\dom g$ such that the diagram_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/25-02-2022_145240/image.svg", width=200></center>

  _commutes, that is,_$$\begin{equation}
      \hom_{\l(\cat{C}\downarrow X\r)}\!\l(f,g\r)\coloneqq\l\{\phi\in\hom_\cat{C}\!\l(\dom f,\dom g\r)\mid f=g\circ\phi\r\}.
  \end{equation}$$
* _For all $\l(\cat{C}\downarrow X\r)$-objects $f$, the identity morphism on $f$ is the $\cat{C}$-identity on $\dom f$._
* _For all $\l(\cat{C}\downarrow X\r)$-morphisms $\phi:f\to g$ and $\psi:g\to h$, the composite morphism of $\psi$ after $\phi$ is the composite function $\psi\circ\phi:\dom f\to\dom h$._

```

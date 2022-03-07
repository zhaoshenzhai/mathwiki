<br />
<br />

Date Created: 25/02/2022 19:36:21
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. The **coslice category of $\cat{C}$ under $X$** is the category $\l(X\downarrow\cat{C}\r)$ defined by the following data:_
* _The objects are pairs $\l\langle C,f\r\rangle$ where $C\in\obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\dom f=X$; that is,_
$$\begin{equation}
    \obj\l(X\downarrow\cat{C}\r)\coloneqq\l\{f\in\hom_\cat{C}\!\l(X,C\r)\mid C\in\obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* _For all $\l(X\downarrow\cat{C}\r)$-objects $\l\langle C,f\r\rangle$ and $\l\langle C',f'\r\rangle$, the morphisms from $\l\langle C,f\r\rangle$ to $\l\langle C',f'\r\rangle$ are $\cat{C}$-morphisms $\phi:C\to C'$ such that the diagram_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-07_161830/image.svg"></center>

![[../Images/2022-03-07_161830/image.svg]]
  _commutes; that is,_$$\begin{equation}
      \hom_{\l(X\downarrow\cat{C}\r)}\!\l(\l\langle C,f\r\rangle,\l\langle C',f'\r\rangle\r)\coloneqq\l\{\phi\in\hom_\cat{C}\!\l(C,C'\r)\mid f'=\phi\circ f\r\}.
  \end{equation}$$
* _For all $\l(X\downarrow\cat{C}\r)$-objects $\l\langle C,f\r\rangle$, the identity morphism on $\l\langle C,f\r\rangle$ is the $\cat{C}$-identity $\id_C$._
* _For all $\l(X\downarrow\cat{C}\r)$-morphisms $\phi:\l\langle C_1,f_1\r\rangle\to\l\langle C_2,f_2\r\rangle$ and $\phi':\l\langle C_2,f_2\r\rangle\to\l\langle C_3,f_3\r\rangle$, the composite morphism of $\phi'$ after $\phi$ is the $\cat{C}$-composite morphism $\phi'\circ\phi:C_1\to C_3$._

```

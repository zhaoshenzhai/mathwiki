<br />
<br />

Date Created: 25/02/2022 19:36:21
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: [[Comma Category]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Coslice category is comma category of inclusion over identity]]
Justifications: [[Coslice category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. The **coslice category of $\cat{C}$ under $C$** is the category $\l(C\downarrow\cat{C}\r)$ defined by the following data:_
* _The objects are pairs $\l\langle X,f\r\rangle$ where $X\in\obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\dom f=C$; that is,_
$$\begin{equation}
    \obj\l(C\downarrow\cat{C}\r)\coloneqq\l\{f\in\hom_\cat{C}\!\l(C,X\r)\mid X\in\obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* _For all $\l(C\downarrow\cat{C}\r)$-objects $\l\langle X,f\r\rangle$ and $\l\langle X',f'\r\rangle$, the morphisms from $\l\langle X,f\r\rangle$ to $\l\langle X',f'\r\rangle$ are $\cat{C}$-morphisms $\psi:X\to X'$ such that the diagram_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-07_161830/image.svg", width=180></center>

  _commutes; that is,_$$\begin{equation}
      \hom_{\l(C\downarrow\cat{C}\r)}\!\l(\l\langle X,f\r\rangle,\l\langle X',f'\r\rangle\r)\coloneqq\l\{\psi\in\hom_\cat{C}\!\l(X,X'\r)\mid f'=\psi\circ f\r\}.
  \end{equation}$$
* _For all $\l(C\downarrow\cat{C}\r)$-objects $\l\langle X,f\r\rangle$, the identity morphism on $\l\langle X,f\r\rangle$ is the $\cat{C}$-identity $\id_X$._
* _For all $\l(C\downarrow\cat{C}\r)$-morphisms $\psi:\l\langle X_1,f_1\r\rangle\to\l\langle X_2,f_2\r\rangle$ and $\psi':\l\langle X_2,f_2\r\rangle\to\l\langle X_3,f_3\r\rangle$, the composite morphism of $\psi'$ after $\psi$ is the $\cat{C}$-composite morphism $\psi'\circ\psi:X_1\to X_3$._

```

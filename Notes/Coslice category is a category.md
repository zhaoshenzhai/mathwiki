<div class="topSpace"></div>

Date Created: 07/03/2022 16:24:13
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: [[Comma category is a category]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the coslice category $\l(C\downarrow\cat{C}\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $\tpl{X,f}\in\obj\l(C\downarrow\cat{C}\r)$ and consider the identity $\id_{\tpl{X,f}}\coloneqq\id_X$. The fact that $f=f\circ\id_X$ follows directly from $\axicat[2]$ of $\cat{C}$ and thus $\id_\tpl{X,f}\in\edm\l(\tpl{X,f}\r)$.
* Take $\tpl{X_i,f_i}\in\obj\l(C\downarrow\cat{C}\r)$ for $i\in\l\{1,2,3\r\}$ and consider the morphisms $\psi:X_1\to X_2$ and $\psi':X_2\to X_3$; we need to prove that the diagram
    <center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-07_162637/image.svg", width=220></center>

    commutes; that is, we need $f_3=\l(\psi'\circ\psi\r)\circ f_1$. To do so, observe that 

$\begin{alignat}{2}
    f_3&=\psi'\circ f_2&&\psi'\in\hom\l(\tpl{X_2,f_2},\tpl{X_3,f_3}\r)\\
    &=\psi'\circ\l(\psi\circ f_2\r)&&\psi\in\hom\l(\tpl{X_1,f_1},\tpl{X_2,f_2}\r)\\
    &=\l(\psi'\circ\psi\r)\circ f_1.\ \ \ \ \ \ \ \ &&\axicat[1]\textrm{ of }\cat{C}\qedin
\end{alignat}$

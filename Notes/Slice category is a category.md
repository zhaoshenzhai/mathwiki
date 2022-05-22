<br />
<br />

Date Created: 25/02/2022 17:37:38
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: [[Comma category is a category]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow C\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $\tpl{X,f}\in\obj\l(\cat{C}\downarrow C\r)$ and consider the identity $\id_{\tpl{X,f}}\coloneqq\id_X$. The fact that $f=f\circ\id_X$ follows directly from $\axicat[2]$ of $\cat{C}$ and thus $\id_\tpl{X,f}\in\edm\l(\tpl{X,f}\r)$.
* Take $\tpl{X_i,f_i}\in\obj\l(\cat{C}\downarrow C\r)$ for $i\in\l\{1,2,3\r\}$ and consider the morphisms $\phi:X_1\to X_2$ and $\phi':X_2\to X_3$; we need to prove that the diagram
    <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-25_175305/image.svg", width=220></center>

    commutes; that is, we need $f_1=f_3\circ\l(\phi'\circ\phi\r)$. To do so, observe that
    
$\begin{align}
    f_1&=f_2\circ\phi&&\phi\in\hom\l(\tpl{X_1,f_1},\tpl{X_2,f_2}\r)\\
    &=\l(f_3\circ\phi'\r)\circ\phi&&\phi'\in\hom\l(\tpl{X_2,f_2},\tpl{X_3,f_3}\r)\\
    &=f_3\circ\l(\phi'\circ\phi\r).&&\axicat[1]\textrm{ of }\cat{C}\qedin
\end{align}$

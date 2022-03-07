<br />
<br />

Date Created: 25/02/2022 17:37:38
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: [[Comma category is a category]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow X\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $\l\langle C,f\r\rangle\in\obj\l(\cat{C}\downarrow X\r)$ and consider the identity $\id_{\l\langle C,f\r\rangle}\coloneqq\id_C$. The fact that $f=f\circ\id_C$ follows directly from $\axicat[2]$ of $\cat{C}$ and thus $\id_\l\langle C,f\r\rangle\in\hom\l(\l\langle C,f\r\rangle,\l\langle C,f\r\rangle\r)$.
* Take $\l\langle C_i,f_i\r\rangle\in\obj\l(\cat{C}\downarrow X\r)$ for $i\in\l\{1,2,3\r\}$ and consider the morphisms $\phi:C_1\to C_2$ and $\phi':C_2\to C_3$; we need to prove that the diagram
    <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-25_175305/image.svg", width=220></center>

    commutes, that is, we need $f_1=f_3\circ\l(\phi'\circ\phi\r)$. To do so, observe that$$\begin{alignat}{2}
        f_1&=f_2\circ\phi&&\phi\in\hom\l(\l\langle C_1,f_1\r\rangle,\l\langle C_2,f_2\r\rangle\r)\\
        &=\l(f_3\circ\phi'\r)\circ\phi&&\phi'\in\hom\l(\l\langle C_2,f_2\r\rangle,\l\langle C_3,f_3\r\rangle\r)\\
        &=f_3\circ\l(\phi'\circ\phi\r).\ \ \ \ \ \ \ \ &&\axicat[1]\textrm{ of }\cat{C}\qedin
    \end{alignat}$$

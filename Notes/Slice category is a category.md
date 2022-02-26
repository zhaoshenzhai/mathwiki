<br />
<br />

Date Created: 25/02/2022 17:37:38
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow X\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $f\in\obj\l(\cat{C}\downarrow X\r)$ and consider the identity $\id_f\coloneqq\id_{\dom f}$. The fact that $f=f\circ\id_{\dom f}$ follows directly from $\axicat{2}$ of $\cat{C}$ and thus $\id_f\in\hom\l(f,f\r)$.
* Take $f,g,h\in\obj\l(\cat{C}\downarrow X\r)$ and consider the morphisms $\phi:\dom f\to\dom g$ and $\psi:\dom g\to\dom h$; we need to prove that the diagram
    <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/25-02-2022_175305/image.svg", width=270></center>

    commutes, that is, we need $f=h\circ\l(\psi\circ\phi\r)$. To do so, observe that$$\begin{alignat}{2}
        f&=g\circ\phi&&\phi\in\hom\l(f,g\r)\\
        &=\l(h\circ\psi\r)\circ\phi&&\psi\in\hom\l(g,h\r)\\
        &=h\circ\l(\psi\circ\phi\r).\ \ \ \ \ \ \ \ &&\axicat{1}\textrm{ of }\cat{C}\qedin
    \end{alignat}$$

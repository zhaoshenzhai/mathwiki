<br />
<br />

Date Created: 21/02/2022 19:26:38
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,\leq\r\rangle$ be a preordered set. Then the preorder category_ $\cat{C}\l\langle X,\leq\r\rangle$ _it incudes is a category._


```

_Proof_. We first need to check that the composition is closed; that is, if $f\in\hom\l(x,y\r)$ and $g\in\hom\l(y,z\r)$ for $x,y,z\in X$, then $g\circ f\in\hom\l(x,z\r)$. This statement is vacuously true if $x\not\leq y$ or $y\not\leq z$, so assume otherwise and thus $f=\l\langle x,y\r\rangle$ and $g=\l\langle y,z\r\rangle$. Since $\leq$ is transitive on $X$, we see that $x\leq z$ from which it follows that $\hom\l(x,z\r)=\l\{\l\langle x,z\r\rangle\r\}$. Observe then that $g\circ f\coloneqq\l\langle x,z\r\rangle\in\hom\l(x,z\r)$. Furthermore, for all $x\in X$, the morphism $\id_x$ is indeed in $\hom\l(x,x\r)$ since $\leq$ is reflexive.

We now verify the axioms of a category.
* ($\axicat[1]$): Take $x,y,z,w\in X$ and consider morphisms $f\in\hom\l(x,y\r)$, $g\in\hom\l(y,z\r)$, and $h\in\hom\l(z,w\r)$. It follows that $g\circ f\in\hom\l(x,z\r)$ and $h\circ g\in\hom\l(y,w\r)$, and, similarly, that$$\begin{equation}
        h\circ\l(g\circ f\r)\in\hom\l(x,w\r)\ \ \ \ \textrm{and}\ \ \ \ \l(h\circ g\r)\circ f\in\hom\l(x,w\r).
    \end{equation}$$
Since $\hom\l(x,w\r)=\l\{\l\langle x,w\r\rangle\r\}$ is a singleton, the two morphisms must coincide.

* ($\axicat[2]$): Take $x,y\in X$ and a morphism $f\in\hom\l(x,y\r)$, so $f=\l\langle x,y\r\rangle$. Since $\id_x\coloneqq\l\langle x,x\r\rangle$ and $\id_y\coloneqq\l\langle y,y\r\rangle$, we see that
$$\begin{equation}
    f\circ\id_x=\l\langle x,y\r\rangle\circ\l\langle x,x\r\rangle=\l\langle x,y\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \id_y\circ f=\l\langle y,y\r\rangle\circ\l\langle x,y\r\rangle=\l\langle x,y\r\rangle
\end{equation}$$
by definition of the composition. Since $\hom\l(x,y\r)=\l\{\l\langle x,y\r\rangle\r\}$ is a singleton, both must coincide with $\l\langle x,y\r\rangle=f$.<span style="float:right;">$\blacksquare$</span> 

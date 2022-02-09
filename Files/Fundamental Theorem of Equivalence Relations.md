<br />
<br />

Date Created: 29/01/2022 16:31:03
Tags: #Theorem #Closed 

Proved by: [[Relation induced by a partition is an equivalence relation]], [[Quotient set is a partition]], [[Same equivalence class iff related]]
Generalizations: _Not Applicable_

!!! ad-Theorem Theorem.

_Let $X$ be a set._
1. _Let $\Pi$ be a partition on $X$. Then the binary relation_ $R_\Pi$ _induced by $\Pi$ is an equivalence relation on $X$._
2. _Let $R$ be an equivalence relation on $X$. Then the quotient set $X/R$ is a partition of $X$._

_Furthermore, we have_ $X/R_\Pi=\Pi$ _and_ $R_{X/R}=R$_._

--- admonition

_Proof_. Statements $\#1$ and $\#2$ are proven; it suffices to show that $X/R_\Pi=\Pi$ and $R_{X/R}=R$.

Proof that $X/R_\Pi=\Pi$:
* ($\subseteq$): Take $x\in X$ so that $\l[x\r]_{R_\Pi}\in X/R_\Pi$. Let $y\in\l[x\r]_{R_\Pi}$ so $yR_\Pi x$, that is, there exists $P\in\Pi$ such that $x,y\in P$; we shall prove that $\l[x\r]_{R_\Pi}=P\in\Pi$. To this end, take $z\in\l[x\r]_{R_\Pi}$. Observe that $zR_\Pi x$ and thus $zR_\Pi y$ too. It follows that there exists $P'\in\Pi$ such that $y\in P'\land z\in P'$, but, since $P\cap P'=\em$ if $P\neq P'$, this forces $P=P'$ and thus $z\in P$. Conversely, note that $P\in\Pi\subseteq\mc{P}\l(X\r)$ and so $P\subseteq X$. Therefore, for all $p\in P$, we have $p\in X$ and thus, by definition of $R_\Pi$, we have $pR_\Pi x$. It follows that $p\in\l[x\r]_{R_\Pi}$.
* ($\supseteq$): Take $P\in\Pi$. Since $P\neq\em$ by $\axipartition{1}$, take $p\in P$. Recall that $P\subseteq X$, so $p\in X$ and thus $p\in\l[p\r]_{R_\Pi}$. It follows that $P\subseteq\l[p\r]_{R_\Pi}$. By the argument above, we have $\l[p\r]_{R_\Pi}\subseteq P$ and thus $P=\l[p\r]_{R_\Pi}\in X/R_\Pi$.

Proof that $R_{X/R}=R$:
* ($\subseteq$): Take $x,y\in X$ such that $\l\langle x,y\r\rangle\in R_{X/R}$, which, by definition, implies that there exists $P\in X/R$ such that $x,y\in P$. However, the set $P$ is also an equivalence class of the form $\l[t\r]_R$ for some $t\in X$ such that $xRt$ and $yRt$. It follows that $xRy$ and hence $R_{X/R}\subseteq R$.
* ($\supseteq$): Take $x,y\in X$ such that $xRy$ from which it follows that $\l[x\r]_R=\l[y\r]_R$. Since $\l[x\r]_R,\l[y\r]_R\in X/R$ and $X/R$ is a partition on $X$, set $P\coloneqq\l[x\r]_R=\l[y\r]_R\in X/R$ and observe that $x,y\in P$. It follows, by definition of $R_{X/R}$, that $\l\langle x,y\r\rangle\in R_{X/R}$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The relationship between partitions, their induced relations, equivalences, and their quotient sets, can be visualized with the following schematic diagram.

<center><img src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bmatrix%7D%0A%5Cusetikzlibrary%7Bpositioning%7D%0A%5Cusetikzlibrary%7Bpatterns%7D%0A%5Cusetikzlibrary%7Bdecorations.markings%7D%0A%5Cusetikzlibrary%7Barrows%7D%0A%5Cusetikzlibrary%7Barrows.meta%7D%0A%5Cusetikzlibrary%7Bbackgrounds%7D%0A%5Cusetikzlibrary%7Bmath%7D%0A%5Cdefinecolor%7BtextColor%7D%7Brgb%7D%7B0.973%2C%200.973%2C%201%7D%0A%5Cdefinecolor%7BbgColor%7D%7BRGB%7D%7B29%2C%2032%2C%2038%7D%0A%5Cbegin%7Btikzpicture%7D%5Bcolor%3DtextColor%5D%0A%5Cpgfmathsetmacro%7B%5Cscale%7D%7B5%7D%0A%5Cnode%20(Pt)%20at%20(0%2C0)%20%7B%5Cfootnotesize%7BPartition%20%24%5CPi%24%7D%7D%3B%0A%5Cnode%20(Ir)%20at%20(%5Cscale%2C2)%20%7B%5Cfootnotesize%7BInduced%20relation%20%24R_%5CPi%24%7D%7D%3B%0A%5Cnode%20(Er)%20at%20(2*%5Cscale%2C0)%20%7B%5Cfootnotesize%7BEquivalence%20relation%20%24R%24%7D%7D%3B%0A%5Cnode%20(Qs)%20at%20(%5Cscale%2C-2)%20%7B%5Cfootnotesize%7BQuotient%20set%20%24X%2FR%24%7D%7D%3B%0A%5Cpath%5B-%3E%5D%0A(Pt)%20edge%20node%5Bsloped%2C%20anchor%3Dcenter%2C%20above%5D%20%7B%5Cfootnotesize%7Binduces%20an%7D%7D%20(Ir)%0A(Ir)%20edge%20node%5Bsloped%2C%20anchor%3Dcenter%2C%20above%5D%20%7B%5Cfootnotesize%7Bis%20an%7D%7D%20(Er)%0A(Er)%20edge%20node%5Bsloped%2C%20anchor%3Dcenter%2C%20below%5D%20%7B%5Cfootnotesize%7Binduces%20a%7D%7D%20(Qs)%0A(Qs)%20edge%20node%5Bsloped%2C%20anchor%3Dcenter%2C%20below%5D%20%7B%5Cfootnotesize%7Bis%20a%7D%7D%20(Pt)%3B%0A%5Cdraw%5B-%3E%5D%20(Ir)%20to%20%5Bout%3D-90%2C%20in%3D0%2C%20looseness%3D1.1%5D%20(Pt)%3B%0A%5Cdraw%5B-%3E%5D%20(Qs)%20to%20%5Bout%3D90%2C%20in%3D0%2C%20looseness%3D1.1%5D%20(Pt)%3B%0A%5Cdraw%5B-%3E%5D%20(Ir)%20to%20%5Bout%3D-90%2C%20in%3D180%2C%20looseness%3D1.2%5D%20(Er)%3B%0A%5Cdraw%5B-%3E%5D%20(Qs)%20to%20%5Bout%3D90%2C%20in%3D180%2C%20looseness%3D1.2%5D%20(Er)%3B%0A%5Cnode%5Bfill%3DbgColor%5D%20at%20(%5Cscale%2F2%2C0)%20%7B%5Cfootnotesize%7B%24X%2FR_%5CPi%24%7D%7D%3B%0A%5Cnode%5Bfill%3DbgColor%5D%20at%20(3*%5Cscale%2F2%2C0)%20%7B%5Cfootnotesize%7B%24R_%7BX%2FR%7D%24%7D%7D%3B%0A%5Cend%7Btikzpicture%7D%0A"/></center>

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_2220/image.svg"></center>

The statements $X/R_\Pi=\Pi$ and $R_{X/R}=R$ are then viewed as $\textrm{`}$compatibility statements$\textrm{'}$, guaranteeing that the
* quotient set of the relation induced by $\Pi$ is $\Pi$ itself, and that the
* relation induced by the quotient set of a relation $R$ is $R$ itself.<span style="float:right;">$\blacklozenge$</span>

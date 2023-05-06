<div class="topSpace"></div>

Date Created: 01/06/2022 17:22:00
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Action of linear map repr under basis left-multiplication of matrix representation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional $K$-vector spaces, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$. For a linear map $T:V\to W$, let $A,A'\in\mat{m\times n}{K}$ be the matrix representations of $T$ under bases $\mc{B}$, $\mc{B}'$ and $\mc{C}$, $\mc{C}'$ of $V$ and $W$, respectively. Then the left-multiplication maps have the form_
$$\begin{equation}
    L_A=\phi_\mc{C}\circ T\circ\phi_\mc{B}^{-1}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ L_{A'}=\phi_{\mc{C}'}\circ T\circ\phi_{\mc{B}'}^{-1},
\end{equation}$$
_and_ $A'=P_{\mc{C}\to\mc{C}'}AQ_{\mc{B}'\to\mc{B}}$ _where_ $P_{\mc{C}\to\mc{C}'}\!\coloneqq\l[\id_W\r]_\mc{C}^{\mc{C}'}$ _and_ $Q_{\mc{B}'\to\mc{B}}\!\coloneqq\l[\id_V\r]_{\mc{B}'}^\mc{B}$ _are the change of basis matrices from $\mc{C}$ to $\mc{C}'$ and from $\mc{B}'$ to $\mc{B}$, respectively._

```

**Remark.** A useful special case is when $V=W=K^n$ and we wish to change from the standard basis $\mc{S}$ of $K^n$ to some other basis $\mc{B}$ of $K^n$. In this case, we have $A'=Q^{-1}AQ$ where $Q\coloneqq Q_{\mc{B}\to\mc{S}}=\l[\id_{K^n}\r]_\mc{B}^\mc{S}$ is the change of basis matrix whose $j^\textrm{th}$ column is precisely the $j^\textrm{th}$ vector of $\mc{B}'$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** The statement can then be rephrased to saying that the diagram
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-06-01_174406/image.svg", width=260></center>

commutes.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. For all $\v{v}\in K^n$, there exists a unique $v\in V$ such that $\v{v}=\phi_\mc{B}\!\l(v\r)$. Then
$$\begin{equation}
    L_A\!\l(\v{v}\r)=A\v{v}=A\phi_\mc{B}\l(v\r)=\l[T\r]_\mc{B}^\mc{C}\l[v\r]_\mc{B}=\l[T\l(v\r)\r]_\mc{C}=\phi_\mc{C}\!\l(T\l(v\r)\r)=\l(\phi_\mc{C}\circ T\circ\phi_\mc{B}^{-1}\r)\l(\v{v}\r),
\end{equation}$$
so $L_A=\phi_\mc{C}\circ T\circ\phi_\mc{B}^{-1}$. Similarly, we have that $L_{A'}=\phi_{\mc{C}'}\circ T\circ\phi_{\mc{B}'}^{-1}$. Note then that
$$\begin{equation}
    L_{A'}=\phi_{\mc{C}'}\circ\phi_\mc{C}^{-1}\circ L_A\circ\phi_\mc{B}\circ\phi_{\mc{B}'}^{-1},
\end{equation}$$
so the corresponding matrices coincide.<span style="float:right;">$\blacksquare$</span>

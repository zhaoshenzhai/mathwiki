<div class="topSpace"></div>

Date Created: 01/06/2022 17:22:00
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Composition of linear maps repr under basis matrix product of representations]], [[Basic properties of left-multiplication of matrices]], [[Basis transition map acts as left-multiplication by change of basis matrix]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $\mc{B},\mc{B}'$ and $\mc{C},\mc{C}'$ be bases for $V$ and $W$, respectively. Then, for all $T:V\to W$, we have_
$$\begin{equation}
    \l[T\r]_{\mc{B}'}^{\mc{C}'}=P_{\mc{C}\to\mc{C}'}\l[T\r]_\mc{B}^\mc{C}Q_{\mc{B}'\to\mc{B}},
\end{equation}$$
_where_ $P_{\mc{C}\to\mc{C}'}\!\coloneqq\l[\id_W\r]_\mc{C}^{\mc{C}'}$ _and_ $Q_{\mc{B}'\to\mc{B}}\!\coloneqq\l[\id_V\r]_{\mc{B}'}^\mc{B}$ _are the change of basis matrices from $\mc{C}$ to $\mc{C}'$ and from $\mc{B}'$ to $\mc{B}$, respectively._

```

_Proof_. Simply insert identities and expand:
$$\begin{align}
    \l[T\r]_{\mc{B}'}^{\mc{C}'}&=\l[\id_W\circ\ T\!\circ\id_V\r]_{\mc{B}'}^{\mc{C}'} && \textrm{Insert identities} \\
    &=\l[\id_W\r]_\mc{C}^{\mc{C}'}\l[T\r]_\mc{B}^\mc{C}\l[\id_V\r]_{\mc{B}'}^\mc{B} && \textrm{Composition repr. as matrix multiplication} \\
    &=P_{\mc{C}\to\mc{C}'}\l[T\r]_\mc{B}^\mc{C}Q_{\mc{B}'\to\mc{B}}. && \textrm{Definitions of }P_{\mc{C}\to\mc{C}'}\textrm{ and }Q_{\mc{B}'\to\mc{B}}\qedin
\end{align}$$

---

**Remark.** For ease of notation, let $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$ and $A'\coloneqq\l[T\r]_{\mc{B}'}^{\mc{C}'}$, and consider the function $\mc{L}$ that sends matrices to their left-multiplication map. The statement can then be rephrased to saying that the diagram

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-06-01_174406/image.svg", width=260></center>

commutes. To see this, let $\mc{S}_n$ and $\mc{S}_m$ denote the standard bases of $K^n$ and $K^m$, respectively, and let $\Phi$ be the matrix representation function. Observe then that
$$\begin{equation}
    \begin{aligned}
        L_{A'}&=\mc{L}\l(P_{\mc{C}\to\mc{C}'}AQ_{\mc{B}'\to\mc{B}}\r) && \textrm{Change of basis for linear maps} \\
        &=\mc{L}\l(P_{\mc{C}\to\mc{C}'}\r)\circ L_A\circ\mc{L}\l(Q_{\mc{B}'\to\mc{B}}\r) && \textrm{$\mc{L}$ respects products} \\
        &=\mc{L}\l(\l[\psi_{\mc{C}\to\mc{C}'}\r]_{\mc{S}_m}\r)\circ L_A\circ\mc{L}\l(\l[\psi_{\mc{B}'\to\mc{B}}\r]_{\mc{S}_n}\r) && \textrm{Repr. of }\psi\textrm{ under standard bases} \\
        &=\psi_{\mc{C}\to\mc{C}'}\circ L_A\circ\psi_{\mc{B}'\to\mc{B}} && \mc{L}=\Phi_\mc{S}^{-1} \\
        &=\phi_{\mc{C}'}\circ\phi_\mc{C}^{-1}\circ L_A\circ\phi_{\mc{B}}\circ\phi_{\mc{B}'}^{-1}. && \textrm{Definition of basis transition maps}
    \end{aligned}
\end{equation}$$
Thus the outer loop commutes; the fact that the inner ones commute too are proven. This shows us how to compute $L_{A'}$ in terms of (a perhaps simpler) $L_A$.<span style="float:right;">$\blacklozenge$</span>

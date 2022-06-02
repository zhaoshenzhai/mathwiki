<br />
<br />

Date Created: 01/06/2022 17:22:00
Tags: #Proposition #Closed

Proved by: [$\phi_\mc{B}:V\simto K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md), [Action of linear map $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ left-multiplication of matrix representation](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md), [$\psi_{\mc{B}\to\mc{B}'}$ is represented under standard basis by $\l[\id_V\r]_\mc{B}^{\mc{B}'}$](Basis%20transition%20map%20acts%20as%20left-multiplication%20by%20change%20of%20basis%20matrix.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $\mc{B},\mc{B}'$ and $\mc{C},\mc{C}'$ be bases for $V$ and $W$, respectively. Then, for all $T:V\to W$, we have_
$$\begin{equation}
    \l[T\r]_{\mc{B}'}^{\mc{C}'}=P_{\mc{C}\to\mc{C}'}\l[T\r]_\mc{B}^\mc{C}Q_{\mc{B}'\to\mc{B}},
\end{equation}$$
_where_ $P_{\mc{C}\to\mc{C}'}\in\mat{m}{K}$ _and_ $Q_{\mc{B}'\to\mc{C}}\in\mat{n}{K}$ _are the change of basis matrices from $\mc{C}$ to $\mc{C}'$ and from $\mc{B}'$ to $\mc{B}$, respectively._

```

**Remark.** Let $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$ and $A'\coloneqq\l[T\r]_{\mc{B}'}^{\mc{C}'}$. The statement can then be rephrase by saying that the diagram

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-06-01_174406/image.svg", width=260></center>

commutes, since, for all $\v{v}\in K^n$, there exists a unique $v\in V$ such that $\l[v\r]_{\mc{B}'}=K^n$ and which satisfies
$$\begin{equation}
    \begin{aligned}
        L_{A'}\l(\v{v}\r)&=L_{A'}\l(\l[v\r]_{\mc{B}'}\r) && \textrm{Substitution} \\
        &=\l[T\r]_{\mc{B}'}^{\mc{C}'}\l[v\r]_{\mc{B}'} && \textrm{Substitution; definition of $L_{A'}$} \\
        &=\l[T\l(v\r)\r]_{\mc{C}'} && \textrm{Action of linear map} \\
        &=\psi_{\mc{C}\to\mc{C}'}\l(\l[T\l(v\r)\r]_\mc{C}\r) && \textrm{Basis transition map} \\
        &=\psi_{\mc{C}\to\mc{C}'}\l(\l[T\r]_\mc{B}^\mc{C}\l[v\r]_\mc{B}\r) && \textrm{Action of linear map} \\
        &=\psi_{\mc{C}\to\mc{C}'}\l(L_A\l(\l[v\r]_\mc{B}\r)\r) && \textrm{Substitution; definition of $L_A$} \\
        &=\psi_{\mc{C}\to\mc{C}'}\l(L_A\l(\psi_{\mc{B}'\to\mc{B}}\l(\l[v\r]_{\mc{B}'}\r)\r)\r) && \textrm{Basis transition map} \\
        &=\l(\psi_{\mc{C}\to\mc{C}'}\circ L_A\circ\psi_{\mc{B}'\to\mc{B}}\r)\l(\l[v\r]_{\mc{B}'}\r) && \textrm{Definition of $\circ$} \\
        &=\l(\psi_{\mc{C}\to\mc{C}'}\circ L_A\circ\psi_{\mc{B}'\to\mc{B}}\r)\l(\v{v}\r) && \textrm{Substitution} \\
        &=\l(\phi_{\mc{C}'}\circ\phi_\mc{C}^{-1}\circ L_A\circ\phi_{\mc{B}}\circ\phi_{\mc{B}'}^{-1}\r)\l(\v{v}\r). && \textrm{Definition of basis transition maps}
    \end{aligned}
\end{equation}$$
Thus the outer loop commutes; the fact that the inner ones commute too are proven. This shows us how to compute $L_{A'}$ in terms of (a perhaps simpler) $L_A$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $\v{v}\in K^n$. Since $L_{A'}\l(\v{v}\r)=\l[T\r]_{\mc{B}'}^{\mc{C}'}\v{v}$, we may use the remark above to show that
$$\begin{equation}
    \begin{aligned}
        \l[T\r]_{\mc{B}'}^{\mc{C}'}\v{v}&=\l(\psi_{\mc{C}\to\mc{C}'}\circ L_A\circ\psi_{\mc{B}'\to\mc{B}}\r)\l(\v{v}\r) && \textrm{Remark} \\
        &=\l(\psi_{\mc{C}\to\mc{C}'}\circ L_A\r)\l(Q_{\mc{B}'\to\mc{B}}\v{v}\r) && \textrm{Change of basis matrix} \\
        &=\psi_{\mc{C}\to\mc{C}'}\l(\l[T\r]_\mc{B}^\mc{C}Q_{\mc{B}'\to\mc{B}}\v{v}\r) && \textrm{Definition of $L_A$} \\
        &=P_{\mc{C}\to\mc{C}'}\l[T\r]_\mc{B}^\mc{C}Q_{\mc{B}'\to\mc{B}}\v{v}. && \textrm{Change of basis matrix}
    \end{aligned}
\end{equation}$$
Since $\v{v}\in K^n$ is arbitrary, the matrices coincide.<span style="float:right;">$\blacksquare$</span>

<br />
<br />

Date Created: 23/05/2022 23:48:31
Tags: #Proposition #In_Progress

Proved by: [[Criteria for equality of linear maps via spanning set]], [Matrix multiplication (columns$\slash$rows)](Matrix%20multiplication%20(columns%20and%20rows).md), [$\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)](Identity%20function%20on%20a%20vector%20space%20is%20represented%20by%20the%20identity%20matrix.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider the function_
$$\begin{equation}
    \mc{L}_{m\times n}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r)\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
_for some fixed $m,n\in\N^\ast$. Then the following algebraic identities hold._
* _($\mc{L}$ is linear):_ $\mc{L}\l(\alpha A+B\r)=\alpha\mc{L}\l(A\r)+\mc{L}\l(B\r)$_ for all $A,B\in\mat{m\times n}{K}$ and $\alpha\in K$._

* _($\mc{L}$ respects matrix multiplication):_ $\mc{L}_{m\times p}\l(AC\r)=\mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(C\r)$_ for all $A\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$ for some fixed $p\in\N^\ast$._
* _($\mc{L}$ preserves identity):_ $\mc{L}_n\l(I_n\r)=\id_{K^n}$_ where_ $\mc{L}_n\coloneqq\mc{L}_{n\times n}$_._

```

_Proof_. Let $\mc{B}\coloneqq\l\{\v{e}_1,\dots,\v{e}_n\r\}$ be the standard basis of $K^n$.
* ($\mc{L}$ is linear): 

* ($\mc{L}$ respects matrix multiplication): Take $A\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$ for some fixed $p\in\N^\ast$. Observe that
$$\begin{equation}
    \mc{L}_{m\times p}\l(AC\r)=L_{AC}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \mc{L}_{m\times n}\l(A\r)\circ\mc{L}_{n\times p}\l(C\r)=L_A\circ L_C,
\end{equation}$$
so it suffices to show that $L_{AC}=L_A\circ L_C$. Since $\mc{B}$ is a basis of $K^n$, it further suffices to show that
$$\begin{equation}
    L_{AC}\l(\v{e}_j\r)=\l(L_A\circ L_C\r)\l(\v{e}_j\r)
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. By definition, we have $L_{AC}\l(\v{e}_j\r)=\l(AC\r)\v{e}_j$ and $\l(L_A\circ L_C\r)\l(\v{e}_j\r)=A\l(C\v{e}_j\r)$, and since the $j^\textrm{th}$ column $\l(AC\r)\v{e}_j$ of $AC$ is $A\v{c}_j$ where $\v{c}_j=C\v{e}_j$ is the $j^\textrm{th}$ column of $C$, the result follows.
* ($\mc{L}$ preserves identity): Since $I_n=\l[\id_{K^n}\r]_\mc{B}$, we see that
$$\begin{equation}
    \mc{L}_n\l(I_n\r)=\mc{L}_n\l(\l[\id_{K^n}\r]_\mc{B}\r)=\mc{L}_n\l(\Phi_\mc{B}^\mc{B}\l(\id_{K^n}\r)\r)=\id_{K^n},
\end{equation}$$
where the last expression evaluates to $\id_{K^n}$ since $\mc{L}_n$ and $\Phi_\mc{B}^\mc{B}$ are inverses of each other. The result follows.<span style="float:right;">$\blacksquare$</span>

<br />
<br />

Date Created: 08/04/2022 05:23:47
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of matrix operations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all matrices $B,C\in\mat{m\times n}{K}$ and invertible matrices $A\in\mat{m}{K}$, the cancellation laws hold:_
* _(Left-cancellation): $AB=AC\Rightarrow B=C$._
* _(Right-cancellation): $BA=CA\Rightarrow B=C$._

```

_Proof_. Assuming either $AB=AC$ (resp. $BA=CA$), we left-multiply (resp. right-multiply) both sides by $A^{-1}$ to obtain
$$\begin{align}
    AB&=AC \hspace{1.78in}BA\hspace{-0.8in}&&=CA \hspace{0.2in}&& \textrm{Assumption} \\
    A^{-1}\l(AB\r)&=A^{-1}\l(AC\r) \hspace{0.8in}\l(BA\r)A^{-1}\hspace{-0.4in}&&=\l(CA\r)A^{-1} \hspace{0.2in}&& \textrm{Substitution} \\
    \l(A^{-1}A\r)B&=\l(A^{-1}A\r)C \hspace{0.8in}B\l(AA^{-1}\r)\hspace{-0.4in}&&=C\l(AA^{-1}\r) \hspace{0.2in}&& \textrm{Associativity of matrix multiplication} \\
    IB&=IC \hspace{1.87in}BI\hspace{-0.37in}&&=CI \hspace{0.2in}&& \textrm{Definition of inverse matrix} \\
    B&=C \hspace{2.05in}B\hspace{-0.8in}&&=C. \hspace{0.2in}&& \textrm{Identity matrix is the identity of matrix multiplication}\qedin
\end{align}$$

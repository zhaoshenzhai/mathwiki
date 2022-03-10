<br />
<br />

Date Created: 08/03/2022 13:44:59
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow C\r)$ is isomorphic to the comma category_ $\l(\Id_\cat{C}\downarrow\ms{I}\r)$ _where $\ms{I}:\bf{1}\to\cat{C}$ is the inclusion functor and $\bf{1}$ is the discrete category with $\obj\l(\bf{1}\r)=\l\{C\r\}$ and $\hom\l(\bf{1}\r)=\l\{\id_C\r\}$._

```

_Proof_. The obvious functor to consider is $\ms{F}:\l(\cat{C}\downarrow C\r)\to\l(\Id_\cat{C}\downarrow\ms{I}\r)$ mapping
$$\begin{equation}
    \ms{F}_{\obj}\l\langle X,f\r\rangle\coloneqq\l\langle X,C,f\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \ms{F}\l(\phi\r)\coloneqq\l\langle\phi,\id_C\r\rangle
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,C\r)$, $f'\in\hom_\cat{C}\!\l(X',C\r)$, and $\phi:\l\langle X,f\r\rangle\to\l\langle X',f'\r\rangle$; we need to verify that this indeed constitutes a functor, then find a suitable (strict) inverse thereof. To justify, note that $\dom\ms{F}_{\obj}$, in the sense of class functions, is indeed the class $\obj\l(\cat{C}\downarrow C\r)$ since $\l\langle X,f\r\rangle$ is a general element thereof; similarly for $\dom\ms{F}_{\hom}$. We now need to check the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $\l\langle X,f\r\rangle\in\obj\l(\cat{C}\downarrow C\r)$; we need to prove that $\ms{F}\l(\id_{\l\langle C,f\r\rangle}\r)=\id_{\ms{F}\l\langle X,f\r\rangle}$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}\l(\id_{\l\langle X,f\r\rangle}\r)&=\ms{F}\l(\id_X\r)&&\textrm{Definition of $\l(\cat{C}\downarrow C\r)$-identity}\\
        &=\l\langle\id_X,\id_C\r\rangle&&\textrm{Definition of $\ms{F}$}
    \end{alignedat}
\end{equation}$$

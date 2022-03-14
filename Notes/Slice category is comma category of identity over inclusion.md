<br />
<br />

Date Created: 08/03/2022 13:44:59
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow C\r)$ is isomorphic to the comma category_ $\l(\Id_\cat{C}\downarrow\ms{I}\r)$
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-10_135528/image.svg", width=140></center>

_where $\ms{I}:\bf{1}\to\cat{C}$ is the inclusion functor and $\bf{1}$ is the discrete category with $\obj\l(\bf{1}\r)\coloneqq\l\{C\r\}$ and $\hom\l(\bf{1}\r)\coloneqq\l\{\id_C\r\}$._

```

_Proof_. The obvious functor to consider is $\ms{F}:\l(\cat{C}\downarrow C\r)\to\l(\Id_\cat{C}\downarrow\ms{I}\r)$ mapping
$$\begin{equation}
    \ms{F}_{\obj}\l\langle X,f\r\rangle\coloneqq\l\langle X,C,f\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \ms{F}_{\hom}\l(\phi\r)\coloneqq\l\langle\phi,\id_C\r\rangle
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,C\r)$, $f'\in\hom_\cat{C}\!\l(X',C\r)$, and $\phi:\l\langle X,f\r\rangle\to\l\langle X',f'\r\rangle$; we need to verify that this indeed constitutes a functor and find a (strict) inverse thereof. We first verify the data of $\ms{F}$.
* Note that $\dom\ms{F}_{\obj}$, in the sense of class functions, is indeed the class $\obj\l(\cat{C}\downarrow C\r)$ since $\l\langle X,f\r\rangle$ is a general element thereof; similarly for $\dom\ms{F}_{\hom}$.
* For $\cdm\ms{F}_{\obj}$, it is clear that $C\in\obj\l(\bf{1}\r)$, so $f\in\hom_\cat{C}\!\l(X,C\r)=\hom_\cat{C}\!\l(\Id_\cat{C}\l(X\r),\ms{I}\l(C\r)\r)$ and thus $\l\langle X,C,f\r\rangle\in\obj\l(\Id_\cat{C}\downarrow\ms{I}\r)$.
* For $\cdm\ms{F}_{\hom}$, we need to verify that the diagram
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-10_164625/image.svg", width=200></center>

    commutes, but this reduces to checking that $f=f'\circ\phi$ which holds since $\phi\in\hom_{\l(\cat{C}\downarrow C\r)}\l(\l\langle X,f\r\rangle,\l\langle X',f'\r\rangle\r)$.

We now need to check the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $\l\langle X,f\r\rangle\in\obj\l(\cat{C}\downarrow C\r)$; we need to prove that $\ms{F}_{\hom}\l(\id_{\l\langle X,f\r\rangle}\r)=\id_{\ms{F}_{\obj}\l\langle X,f\r\rangle}$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}_{\hom}\l(\id_{\l\langle X,f\r\rangle}\r)&=\ms{F}_{\hom}\l(\id_X\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of $\l(\cat{C}\downarrow C\r)$-identity}\\
        &=\l\langle\id_X,\id_C\r\rangle&&\textrm{Definition of $\ms{F}_{\hom}$}\\
        &=\id_{\l\langle X,C,f\r\rangle}&&\textrm{Definition of $\l(\Id_\cat{C}\downarrow\ms{I}\r)$-identity}\\
        &=\id_{\ms{F}_{\obj}\l\langle X,f\r\rangle}.&&\textrm{Definition of $\ms{F}_{\obj}$}
    \end{alignedat}
\end{equation}$$
* ($\axifunctor[2]$): Take $\l\langle X_i,f_i\r\rangle\in\obj\l(\cat{C}\downarrow C\r)$ for $i\in\l\{1,2,3\r\}$ and morphisms $\phi:\l\langle X_1,f_1\r\rangle\to\l\langle X_2,f_2\r\rangle$ and $\phi':\l\langle X_2,f_2\r\rangle\to\l\langle X_3,f_3\r\rangle$; we need to prove that $\ms{F}_{\hom}\l(\phi'\circ\phi\r)=\ms{F}_{\hom}\l(\phi'\r)\circ\ms{F}_{\hom}\l(\phi\r)$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}_{\hom}\l(\phi'\circ\phi\r)&=\l\langle\phi'\circ\phi,\id_C\r\rangle&&\textrm{Definition of $\ms{F}_{\hom}$}\\
        &=\l\langle\phi'\circ\phi,\id_C\circ\id_C\r\rangle&&\textrm{$\axicat[2]$ of $\cat{C}$}\\
        &=\l\langle\phi',\id_C\r\rangle\circ\l\langle\phi,\id_C\r\rangle&&\textrm{Definition of $\l(\Id_\cat{C}\downarrow\ms{I}\r)$-composite}\\
        &=\ms{F}_{\hom}\l(\phi'\r)\circ\ms{F}_{\hom}\l(\phi\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of $\ms{F}_{\hom}$}
    \end{alignedat}
\end{equation}$$

The candidate inverse functor $\ms{G}:\l(\Id_\cat{C}\downarrow\ms{I}\r)\to\l(\cat{C}\downarrow C\r)$ is also defined in the obvious way, mapping
$$\begin{equation}
    \ms{G}_{\obj}\l\langle X,C,f\r\rangle\coloneqq\l\langle X,f\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \ms{G}_{\hom}\l\langle\phi,\psi\r\rangle\coloneqq\phi
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,C\r)$, $f'\in\hom_\cat{C}\!\l(X',C\r)$, and $\l\langle\phi,\psi\r\rangle:\l\langle X,C,f\r\rangle\to\l\langle X',C,f'\r\rangle$; the important points that justify this construction are that $C$ is the unique object in $\obj\l(\bf{1}\r)$ and, with $\phi:C\to C$ being a morphism in $\bf{1}$, $\phi$ is the identity morphism $\id_C$. The fact that $\ms{G}$ satisfies the axioms of a covariant functor is essentially the same as above, just chasing definitions. It remains to check that $\ms{G}=\ms{F}^{-1}$.
* ($\ms{G}$ is a left inverse of $\ms{F}$): Take $\l\langle X,f\r\rangle\in\obj\l(\cat{C}\downarrow C\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)_{\obj}\l\langle X,f\r\rangle&=\ms{G}_{\obj}\l(\ms{F}_{\obj}\l\langle X,f\r\rangle\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}_{\obj}\l\langle X,C,f\r\rangle&&\textrm{Definition of $\ms{F}_{\obj}$}\\
        &=\l\langle X,f\r\rangle.&&\textrm{Definition of $\ms{G}_{\obj}$}
    \end{alignedat}
\end{equation}$$
Similarly, take $\phi:\l\langle X,f\r\rangle\to\l\langle X',f'\r\rangle$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)_{\hom}\l(\phi\r)&=\ms{G}_{\hom}\l(\ms{F}_{\hom}\l(\phi\r)\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}_{\hom}\l\langle\phi,\id_C\r\rangle&&\textrm{Definition of $\ms{F}_{\hom}$}\\
        &=\phi.&&\textrm{Definition of $\ms{G}_{\hom}$}
    \end{alignedat}
\end{equation}$$
* ($\ms{G}$ is a right inverse of $\ms{F}$): The object part of the proof follows as above. For the morphism part, take $\l\langle\phi,\psi\r\rangle:\l\langle X,C,f\r\rangle\to\l\langle X',C,f'\r\rangle$, which is a general morphism in $\l(\Id_\cat{C}\downarrow\ms{I}\r)$, and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\ms{G}\r)_{\hom}\l\langle\phi,\psi\r\rangle&=\ms{F}_{\hom}\l(\ms{G}_{\hom}\l\langle\phi,\psi\r\rangle\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{F}_{\hom}\l(\phi\r)&&\textrm{Definitionn of $\ms{G}_{\hom}$}\\
        &=\l\langle\phi,\id_C\r\rangle&&\textrm{Definition of $\ms{F}_{\hom}$}\\
        &=\l\langle\phi,\psi\r\rangle&&\psi=\id_C
    \end{alignedat}
\end{equation}$$
where the last equality follows from $\psi\in\hom\l(\bf{1}\r)=\l\{\id_C\r\}$.<span style="float:right;">$\blacksquare$</span>

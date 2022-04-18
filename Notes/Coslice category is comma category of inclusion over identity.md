<br />
<br />

Date Created: 10/03/2022 17:35:45
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the coslice category $\l(C\downarrow\cat{C}\r)$ is isomorphic to the comma category_ $\l(\ms{I}\downarrow\Id_\cat{C}\r)$
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-10_173659/image.svg", width=140></center>

where $\ms{I}:\bf{1}\to\cat{C}$ is the inclusion functor and $\bf{1}$ is the discrete category with $\obj\l(\bf{1}\r)\coloneqq\l\{C\r\}$ and $\hom\l(\bf{1}\r)\coloneqq\l\{\id_C\r\}$.

```

_Proof_. The obvious functor to consider is $\ms{F}:\l(C\downarrow\cat{C}\r)\to\l(\ms{I}\downarrow\Id_\cat{C}\r)$ mapping
$$\begin{equation}
    \ms{F}^{\obj}\l\langle X,f\r\rangle\coloneqq\l\langle C,X,f\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \ms{F}^{\hom}\l(\psi\r)\coloneqq\l\langle\id_C,\psi\r\rangle
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(C,X\r)$, $f'\in\hom_\cat{C}\!\l(C,X'\r)$, and $\psi:\l\langle X,f\r\rangle\to\l\langle X',f'\r\rangle$; we need to verify that this indeed constitutes a functor and find a (strict) inverse thereof. We first verify the data of $\ms{F}$.
* Note that $\dom\ms{F}^{\obj}$, in the sense of class functions, is indeed the class $\obj\l(C\downarrow\cat{C}\r)$ since $\l\langle X,f\r\rangle$ is a general element thereof; similarly for $\dom\ms{F}^{\hom}$.
* For $\cdm\ms{F}^{\obj}$, it is clear that $C\in\obj\l(\bf{1}\r)$, so $f\in\hom_\cat{C}\!\l(C,X\r)=\hom_\cat{C}\!\l(\ms{I}\l(C\r),\Id_\cat{C}\l(X\r)\r)$ and thus $\l\langle C,X,f\r\rangle\in\obj\l(\ms{I}\downarrow\Id_\cat{C}\r)$.
* For $\cdm\ms{F}^{\hom}$, we need to verify that the diagram
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-10_175541/image.svg", width=200></center>

    commutes, but this reduces to checking that $f'=\psi\circ f$ which holds since $\psi\in\hom_{\l(C\downarrow\cat{C}\r)}\l(\l\langle X,f\r\rangle,\l\langle X',f'\r\rangle\r)$.

We now need to check the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $\l\langle X,f\r\rangle\in\obj\l(C\downarrow\cat{C}\r)$; we need to prove that $\ms{F}^{\hom}\l(\id_{\l\langle X,f\r\rangle}\r)=\id_{\ms{F}^{\obj}\l\langle X,f\r\rangle}$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\hom}\l(\id_{\l\langle X,f\r\rangle}\r)&=\ms{F}^{\hom}\l(\id_X\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of $\l(C\downarrow\cat{C}\r)$-identity}\\
        &=\l\langle\id_C,\id_X\r\rangle&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\id_{\l\langle C,X,f\r\rangle}&&\textrm{Definition of $\l(\ms{I}\downarrow\Id_\cat{C}\r)$-identity}\\
        &=\id_{\ms{F}^{\obj}\l\langle X,f\r\rangle}.&&\textrm{Definition of $\ms{F}^{\obj}$}
    \end{alignedat}
\end{equation}$$
* ($\axifunctor[2]$): Take $\l\langle X_i,f_i\r\rangle\in\obj\l(C\downarrow\cat{C}\r)$ for $i\in\l\{1,2,3\r\}$ and morphisms $\psi:\l\langle X_1,f_1\r\rangle\to\l\langle X_2,f_2\r\rangle$ and $\psi':\l\langle X_2,f_2\r\rangle\to\l\langle X_3,f_3\r\rangle$; we need to prove that $\ms{F}^{\hom}\l(\psi'\circ\psi\r)=\ms{F}^{\hom}\l(\psi'\r)\circ\ms{F}^{\hom}\l(\psi\r)$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\hom}\l(\psi'\circ\psi\r)&=\l\langle\id_C,\psi'\circ\psi\r\rangle&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\l\langle\id_C\circ\id_C,\psi'\circ\psi\r\rangle&&\textrm{$\axicat[2]$ of $\cat{C}$}\\
        &=\l\langle\id_C,\psi'\r\rangle\circ\l\langle\id_C,\psi\r\rangle&&\textrm{Definition of $\l(\ms{I}\downarrow\Id_\cat{C}\r)$-composite}\\
        &=\ms{F}^{\hom}\l(\psi'\r)\circ\ms{F}^{\hom}\l(\psi\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of $\ms{F}^{\hom}$}
    \end{alignedat}
\end{equation}$$

The candidate inverse functor $\ms{G}:\l(\ms{I}\downarrow\Id_\cat{C}\r)\to\l(C\downarrow\cat{C}\r)$ is also defined in the obvious way, mapping
$$\begin{equation}
    \ms{G}^{\obj}\l\langle C,X,f\r\rangle\coloneqq\l\langle X,f\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \ms{G}^{\hom}\l\langle\phi,\psi\r\rangle\coloneqq\psi
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(C,X\r)$, $f'\in\hom_\cat{C}\!\l(C,X'\r)$, and $\l\langle\phi,\psi\r\rangle:\l\langle C,X,f\r\rangle\to\l\langle C,X',f'\r\rangle$; the important points that justify this construction are that $C$ is the unique object in $\obj\l(\bf{1}\r)$ and, with $\phi:C\to C$ being a morphism in $\bf{1}$, $\phi$ is the identity morphism $\id_C$. The fact that $\ms{G}$ satisfies the axioms of a covariant functor is essentially the same as above, just chasing definitions. It remains to check that $\ms{G}=\ms{F}^{-1}$.
* ($\ms{G}$ is a left-inverse of $\ms{F}$): Take $\l\langle X,f\r\rangle\in\obj\l(C\downarrow\cat{C}\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\obj}\l\langle X,f\r\rangle&=\ms{G}^{\obj}\l(\ms{F}^{\obj}\l\langle X,f\r\rangle\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\obj}\l\langle C,X,f\r\rangle&&\textrm{Definition of $\ms{F}^{\obj}$}\\
        &=\l\langle X,f\r\rangle.&&\textrm{Definition of $\ms{G}^{\obj}$}
    \end{alignedat}
\end{equation}$$
Similarly, take $\psi:\l\langle X,f\r\rangle\to\l\langle X',f'\r\rangle$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\hom}\l(\psi\r)&=\ms{G}^{\hom}\l(\ms{F}^{\hom}\l(\psi\r)\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\hom}\l\langle\id_C,\psi\r\rangle&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\psi.&&\textrm{Definition of $\ms{G}^{\hom}$}
    \end{alignedat}
\end{equation}$$
* ($\ms{G}$ is a right-inverse of $\ms{F}$): The object part of the proof follows as above. For the morphism part, take $\l\langle\phi,\psi\r\rangle:\l\langle C,X,f\r\rangle\to\l\langle C,X',f'\r\rangle$, which is a general morphism in $\l(\ms{I}\downarrow\Id_\cat{C}\r)$, and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\ms{G}\r)^{\hom}\l\langle\phi,\psi\r\rangle&=\ms{F}^{\hom}\l(\ms{G}^{\hom}\l\langle\phi,\psi\r\rangle\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{F}^{\hom}\l(\psi\r)&&\textrm{Definitionn of $\ms{G}^{\hom}$}\\
        &=\l\langle\id_C,\psi\r\rangle&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\l\langle\phi,\psi\r\rangle&&\phi=\id_C
    \end{alignedat}
\end{equation}$$
where the last equality follows from $\phi\in\hom\l(\bf{1}\r)=\l\{\id_C\r\}$.<span style="float:right;">$\blacksquare$</span>

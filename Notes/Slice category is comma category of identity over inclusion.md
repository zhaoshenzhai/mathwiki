<div class="topSpace"></div>

Date Created: 08/03/2022 13:44:59
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. Then the slice category $\l(\cat{C}\downarrow C\r)$ is isomorphic to the comma category_ $\l(\Id_\cat{C}\downarrow\ms{I}\r)$
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-10_135528/image.svg", width=140></center>

_where $\ms{I}:\bf{1}\to\cat{C}$ is the inclusion functor and $\bf{1}$ is the discrete category with $\obj\l(\bf{1}\r)\coloneqq\l\{C\r\}$ and $\hom\l(\bf{1}\r)\coloneqq\l\{\id_C\r\}$._

```

_Proof_. The obvious functor to consider is $\ms{F}:\l(\cat{C}\downarrow C\r)\to\l(\Id_\cat{C}\downarrow\ms{I}\r)$ mapping
$$\begin{equation}
    \ms{F}^{\obj}\tpl{X,f}\coloneqq\tpl{X,C,f}\ \ \ \ \textrm{and}\ \ \ \ \ms{F}^{\hom}\l(\phi\r)\coloneqq\tpl{\phi,\id_C}
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,C\r)$, $f'\in\hom_\cat{C}\!\l(X',C\r)$, and $\phi:\tpl{X,f}\to\tpl{X',f'}$; we need to verify that this indeed constitutes a functor and find a (strict) inverse thereof. We first verify the data of $\ms{F}$.
* Note that $\dom\ms{F}^{\obj}$, in the sense of class functions, is indeed the class $\obj\l(\cat{C}\downarrow C\r)$ since $\tpl{X,f}$ is a general element thereof; similarly for $\dom\ms{F}^{\hom}$.
* For $\cdm\ms{F}^{\obj}$, it is clear that $C\in\obj\l(\bf{1}\r)$, so $f\in\hom_\cat{C}\!\l(X,C\r)=\hom_\cat{C}\!\l(\Id_\cat{C}\l(X\r),\ms{I}\l(C\r)\r)$ and thus $\tpl{X,C,f}\in\obj\l(\Id_\cat{C}\downarrow\ms{I}\r)$.
* For $\cdm\ms{F}^{\hom}$, we need to verify that the diagram
  <center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-10_164625/image.svg", width=200></center>

    commutes, but this reduces to checking that $f=f'\circ\phi$ which holds since $\phi\in\hom_{\l(\cat{C}\downarrow C\r)}\l(\tpl{X,f},\tpl{X',f'}\r)$.

We now need to check the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $\tpl{X,f}\in\obj\l(\cat{C}\downarrow C\r)$; we need to prove that $\ms{F}^{\hom}\l(\id_{\tpl{X,f}}\r)=\id_{\ms{F}^{\obj}\tpl{X,f}}$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\hom}\l(\id_{\tpl{X,f}}\r)&=\ms{F}^{\hom}\l(\id_X\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of $\l(\cat{C}\downarrow C\r)$-identity}\\
        &=\tpl{\id_X,\id_C}&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\id_{\tpl{X,C,f}}&&\textrm{Definition of $\l(\Id_\cat{C}\downarrow\ms{I}\r)$-identity}\\
        &=\id_{\ms{F}^{\obj}\tpl{X,f}}.&&\textrm{Definition of $\ms{F}^{\obj}$}
    \end{alignedat}
\end{equation}$$
* ($\axifunctor[2]$): Take $\tpl{X_i,f_i}\in\obj\l(\cat{C}\downarrow C\r)$ for $i\in\l\{1,2,3\r\}$ and morphisms $\phi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\phi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$; we need to prove that $\ms{F}^{\hom}\l(\phi'\circ\phi\r)=\ms{F}^{\hom}\l(\phi'\r)\circ\ms{F}^{\hom}\l(\phi\r)$. This is readily seen via
$$\begin{equation}
    \begin{alignedat}{2}
        \ms{F}^{\hom}\l(\phi'\circ\phi\r)&=\tpl{\phi'\circ\phi,\id_C}&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\tpl{\phi'\circ\phi,\id_C\circ\id_C}&&\textrm{$\axicat[2]$ of $\cat{C}$}\\
        &=\tpl{\phi',\id_C}\circ\tpl{\phi,\id_C}&&\textrm{Definition of $\l(\Id_\cat{C}\downarrow\ms{I}\r)$-composite}\\
        &=\ms{F}^{\hom}\l(\phi'\r)\circ\ms{F}^{\hom}\l(\phi\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of $\ms{F}^{\hom}$}
    \end{alignedat}
\end{equation}$$

The candidate inverse functor $\ms{G}:\l(\Id_\cat{C}\downarrow\ms{I}\r)\to\l(\cat{C}\downarrow C\r)$ is also defined in the obvious way, mapping
$$\begin{equation}
    \ms{G}^{\obj}\tpl{X,C,f}\coloneqq\tpl{X,f}\ \ \ \ \textrm{and}\ \ \ \ \ms{G}^{\hom}\tpl{\phi,\psi}\coloneqq\phi
\end{equation}$$
for all $X,X'\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,C\r)$, $f'\in\hom_\cat{C}\!\l(X',C\r)$, and $\tpl{\phi,\psi}:\tpl{X,C,f}\to\tpl{X',C,f'}$; the important points that justify this construction are that $C$ is the unique object in $\obj\l(\bf{1}\r)$ and, with $\phi:C\to C$ being a morphism in $\bf{1}$, $\phi$ is the identity morphism $\id_C$. The fact that $\ms{G}$ satisfies the axioms of a covariant functor is essentially the same as above, just chasing definitions. It remains to check that $\ms{G}=\ms{F}^{-1}$.
* ($\ms{G}$ is a left-inverse of $\ms{F}$): Take $\tpl{X,f}\in\obj\l(\cat{C}\downarrow C\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\obj}\tpl{X,f}&=\ms{G}^{\obj}\l(\ms{F}^{\obj}\tpl{X,f}\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\obj}\tpl{X,C,f}&&\textrm{Definition of $\ms{F}^{\obj}$}\\
        &=\tpl{X,f}.&&\textrm{Definition of $\ms{G}^{\obj}$}
    \end{alignedat}
\end{equation}$$
Similarly, take $\phi:\tpl{X,f}\to\tpl{X',f'}$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{G}\circ\ms{F}\r)^{\hom}\l(\phi\r)&=\ms{G}^{\hom}\l(\ms{F}^{\hom}\l(\phi\r)\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{G}^{\hom}\tpl{\phi,\id_C}&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\phi.&&\textrm{Definition of $\ms{G}^{\hom}$}
    \end{alignedat}
\end{equation}$$
* ($\ms{G}$ is a right-inverse of $\ms{F}$): The object part of the proof follows as above. For the morphism part, take $\tpl{\phi,\psi}:\tpl{X,C,f}\to\tpl{X',C,f'}$, which is a general morphism in $\l(\Id_\cat{C}\downarrow\ms{I}\r)$, and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\ms{G}\r)^{\hom}\tpl{\phi,\psi}&=\ms{F}^{\hom}\l(\ms{G}^{\hom}\tpl{\phi,\psi}\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}\\
        &=\ms{F}^{\hom}\l(\phi\r)&&\textrm{Definitionn of $\ms{G}^{\hom}$}\\
        &=\tpl{\phi,\id_C}&&\textrm{Definition of $\ms{F}^{\hom}$}\\
        &=\tpl{\phi,\psi}&&\psi=\id_C
    \end{alignedat}
\end{equation}$$
where the last equality follows from $\psi\in\hom\l(\bf{1}\r)=\l\{\id_C\r\}$.<span style="float:right;">$\blacksquare$</span>

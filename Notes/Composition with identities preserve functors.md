<br />
<br />

Date Created: 09/03/2022 11:25:02
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ and $\cat{D}$ be categories and consider a covariant functor $\ms{F}:\cat{C}\to\cat{D}$. Then_ $\ms{F}\circ\Id_\cat{C}=\ms{F}=\Id_\cat{D}\circ\ms{F}$_. In other words, the diagram_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-09_122512/image.svg", width=240></center>

_commutes._

```

_Proof_. We need to prove that
$$\begin{equation}
    \l(\ms{F}\circ\Id_\cat{C}\r)_{\obj}=\ms{F}_{\obj}=\l(\Id_\cat{D}\circ\ms{F}\r)_{\obj}
\end{equation}$$
and, for all $X,Y\in\obj\l(\cat{C}\r)$, that
$$\begin{equation}
    \begin{gathered}
        \dom\l(\ms{F}\circ\Id_\cat{C}\r)_{\hom}=\dom\l(\ms{F}_{\hom}\r)=\dom\l(\Id_\cat{D}\circ\ms{F}\r)_{\hom}\\
        \cdm\l(\ms{F}\circ\Id_\cat{C}\r)_{\hom}=\cdm\l(\ms{F}_{\hom}\r)=\cdm\l(\Id_\cat{D}\circ\ms{F}\r)_{\hom},\textrm{ and}\\
        \l(\ms{F}\circ\Id_\cat{C}\r)_{\hom}=\ms{F}_{\hom}=\l(\Id_\cat{D}\circ\ms{F}\r)_{\hom}.
    \end{gathered}
    \tag{$\ast$}
\end{equation}$$
* Let $\mc{I}_\cat{C}:\obj\l(\cat{C}\r)\to\obj\l(\cat{C}\r)$ be the identity class function on $\cat{C}$; that is, let $\mc{I}\l(X,Y\r)$ be the formula that holds exactly when $X,Y\in\obj\l(\cat{C}\r)$ and $X=Y$. Similarly, define $\mc{I}_\cat{D}:\cat{D}\to\cat{D}$. Take $X\in\obj\l(\cat{C}\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\Id_\cat{C}\r)_{\obj}\l(X\r)&=\ms{F}_{\obj}\l(\mc{I}_\cat{C}\l(X\r)\r)&&\textrm{Definition of composition of functors}\\
        &=\ms{F}_{\obj}\l(X\r)&&\textrm{Definition of identity class function}\\
        &=\mc{I}_\cat{D}\l(\ms{F}_{\obj}\l(X\r)\r)&&\ms{F}_{\obj}\l(X\r)\in\obj\l(\cat{D}\r)\textrm{; definition of identity functor}\\
        &=\l(\Id_\cat{D}\circ\ms{F}\r)_{\obj}\l(X\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}
    \end{alignedat}
    \tag{$\,1\,$}
\end{equation}$$
* Take $X,Y\in\obj\l(\cat{C}\r)$ and recall that
$$\begin{equation}
    \begin{aligned}
        \ms{F}_{\hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\ms{F}_{\obj}\l(X\r),\ms{F}_{\obj}\l(Y\r)\r)\\
        f&\mapsto\ms{F}_{\hom}\l(f\r).
    \end{aligned}
\end{equation}$$
By definition, the morphism part of the composite functors are the morphisms
$$\begin{equation}
    \begin{aligned}
        \l(\ms{F}\circ\Id_\cat{C}\r)_{\hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\l(\ms{F}\circ\Id_\cat{C}\r)_{\obj}\l(X\r),\l(\ms{F}\circ\Id_\cat{C}\r)_{\obj}\l(Y\r)\r)\\
        f&\mapsto\ms{F}_{\hom}\l(\id_{\hom_\cat{C}\l(X,Y\r)}\l(f\r)\r)
    \end{aligned}
\end{equation}$$
and
$$\begin{equation}
    \begin{aligned}
        \l(\Id_\cat{D}\circ\ms{F}\r)_{\hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\l(\Id_\cat{D}\circ\ms{F}\r)_{\obj}\l(X\r),\l(\Id_\cat{D}\circ\ms{F}\r)_{\obj}\l(Y\r)\r)\\
        f&\mapsto\id_{\hom_\cat{D}\l(X,Y\r)}\l(\ms{F}_{\hom}\l(f\r)\r).
    \end{aligned}
\end{equation}$$
The assertions in ($\,\ast\,$) are immediately seen by simplifying and applying the results from ($\,1\,$).<span style="float:right;">$\blacksquare$</span>

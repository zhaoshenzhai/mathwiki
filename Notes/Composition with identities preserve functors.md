<br />
<br />

Date Created: 09/03/2022 11:25:02
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ and $\cat{D}$ be categories and consider a covariant functor $\ms{F}:\cat{C}\to\cat{D}$. Then_ $\ms{F}\circ\Id_\cat{C}=\ms{F}=\Id_\cat{D}\circ\ms{F}$_. In other words, the diagram_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-09_122512/image.svg"></center>

_commutes._

```

_Proof_. We need to prove that
$$\begin{equation}
    \l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Obj}=\ms{F}_\textrm{Obj}=\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Obj}
\end{equation}$$
and, for all $X,Y\in\obj\l(\cat{C}\r)$, that
$$\begin{equation}
    \begin{gathered}
        \dom\l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Hom}=\dom\l(\ms{F}_\textrm{Hom}\r)=\dom\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Hom}\\
        \cdm\l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Hom}=\cdm\l(\ms{F}_\textrm{Hom}\r)=\cdm\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Hom},\textrm{ and}\\
        \l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Hom}=\ms{F}_\textrm{Hom}=\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Hom}.
    \end{gathered}
    \tag{$\ast$}
\end{equation}$$
* Let $\mc{I}_\cat{C}:\obj\l(\cat{C}\r)\to\obj\l(\cat{C}\r)$ be the identity class function on $\cat{C}$; that is, let $\mc{I}\l(X,Y\r)$ be the formula that holds exactly when $X,Y\in\obj\l(\cat{C}\r)$ and $X=Y$. Similarly, define $\mc{I}_\cat{D}:\cat{D}\to\cat{D}$. Take $X\in\obj\l(\cat{C}\r)$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Obj}\l(X\r)&=\ms{F}_\textrm{Obj}\l(\mc{I}_\cat{C}\l(X\r)\r)&&\textrm{Definition of composition of functors}\\
        &=\ms{F}_\textrm{Obj}\l(X\r)&&\textrm{Definition of identity class function}\\
        &=\mc{I}_\cat{D}\l(\ms{F}_\textrm{Obj}\l(X\r)\r)&&\ms{F}_\textrm{Obj}\l(X\r)\in\obj\l(\cat{D}\r)\textrm{; definition of identity functor}\\
        &=\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Obj}\l(X\r).\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functors}
    \end{alignedat}
    \tag{$\,1\,$}
\end{equation}$$
* Take $X,Y\in\obj\l(\cat{C}\r)$ and recall that
$$\begin{equation}
    \begin{aligned}
        \ms{F}_\textrm{Hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\ms{F}_\textrm{Obj}\l(X\r),\ms{F}_\textrm{Obj}\l(Y\r)\r)\\
        f&\mapsto\ms{F}_\textrm{Hom}\l(f\r).
    \end{aligned}
\end{equation}$$
By definition, the morphism part of the composite functors are the morphisms
$$\begin{equation}
    \begin{aligned}
        \l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Obj}\l(X\r),\l(\ms{F}\circ\Id_\cat{C}\r)_\textrm{Obj}\l(Y\r)\r)\\
        f&\mapsto\ms{F}_\textrm{Hom}\l(\id_{\hom_\cat{C}\l(X,Y\r)}\l(f\r)\r)
    \end{aligned}
\end{equation}$$
and
$$\begin{equation}
    \begin{aligned}
        \l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{D}\!\l(\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Obj}\l(X\r),\l(\Id_\cat{D}\circ\ms{F}\r)_\textrm{Obj}\l(Y\r)\r)\\
        f&\mapsto\id_{\hom_\cat{D}\l(X,Y\r)}\l(\ms{F}_\textrm{Hom}\l(f\r)\r).
    \end{aligned}
\end{equation}$$
The assertions in ($\,\ast\,$) are immediately seen by simplifying and applying the results from ($\,1\,$).<span style="float:right;">$\blacksquare$</span>

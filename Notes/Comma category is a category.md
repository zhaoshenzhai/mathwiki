<br />
<br />

Date Created: 06/03/2022 17:54:05
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and fix two functors_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-07_144906/image.svg", width=140></center>

_Then the comma category $\l(\ms{F}\downarrow\ms{G}\r)$ is a category._

```

_Proof_. It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{E}$ and $\cat{D}$.
* Take $\tpl{E,D,f}\in\obj\l(\ms{F}\downarrow\ms{G}\r)$ and consider the identity $\tpl{\id_E,\id_D}$; we need to prove that $\ms{G}\l(\id_D\r)\circ f=f\circ\ms{F}\l(\id_E\r)$. From $\axifunctor[1]$ of $\ms{F}$, we see that $\ms{F}\l(\id_E\r)=\id_{\ms{F}\l(E\r)}$ which, by definition of $\ms{F}$, is a morphism in $\cat{C}$. Similarly, $\ms{G}\l(\id_D\r)=\id_{\ms{G}\l(D\r)}\in\hom\l(\cat{C}\r)$. Since $f$ is a morphism in $\cat{C}$ with $\dom f=\ms{F}\l(E\r)$ and $\cdm f=\ms{G}\l(D\r)$, the composition is defined and equality holds via $\axicat[2]$ of $\cat{C}$.

* Take $\tpl{E_i,D_i,f_i}\in\obj\l(\ms{F}\downarrow\ms{G}\r)$ for $i\in\l\{1,2,3\r\}$ and consider the morphisms
$$\begin{equation}
    \tpl{\phi,\psi}:\tpl{E_1,D_1,f_1}\to\tpl{E_2,D_2,f_2}\ \ \ \ \textrm{and}\ \ \ \ \tpl{\phi',\psi'}:\tpl{E_2,D_2,f_2}\to\tpl{E_3,D_3,f_3}\tag{$\ast$}
\end{equation}$$
in $\hom\l(\ms{F}\downarrow\ms{G}\r)$; we need to prove that $\phi'\circ\phi\in\hom_\cat{C}\!\l(E_1,E_3\r)$, $\psi'\circ\psi\in\hom_\cat{D}\!\l(D_1,D_3\r)$, and that the diagram
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-09_101429/image.svg", width=350></center>

  commutes; that is, that$$\begin{equation}
      \ms{G}\l(\psi'\circ\psi\r)\circ f_1=f_3\circ\ms{F}\l(\phi'\circ\phi\r).
  \end{equation}$$
  The first two are evident by the definition of the composite morphisms in $\cat{E}$ and $\cat{D}$. For the third, observe from the definition of ($\,\ast\,$) that$$\begin{equation}
      \ms{G}\l(\psi\r)\circ f_1=f_2\circ\ms{F}\l(\phi\r)\tag{$\,1\,$}
  \end{equation}$$
  and$$\begin{equation}
      \ms{G}\l(\psi'\r)\circ f_2=f_3\circ\ms{F}\l(\phi'\r),\tag{$\,2\,$}
  \end{equation}$$
  respectively. The codomain of the morphisms on each side of $(\,1\,)$ is $\ms{G}\l(D_2\r)$, so we can compose $\ms{G}\l(\psi'\r)$, whose domain is $\ms{G}\l(D_2\r)$, on the left to obtain$$\begin{equation}
      \begin{alignedat}{2}
          \ms{G}\l(\psi'\r)\circ\l[\ms{G}\l(\psi\r)\circ f_1\r]&=\ms{G}\l(\psi'\r)\circ\l[f_2\circ\ms{F}\l(\phi\r)\r]&&(\,1\,)\\
          \l[\ms{G}\l(\psi'\r)\circ\ms{G}\l(\psi\r)\r]\circ f_1&=\l[\ms{G}\l(\psi'\r)\circ f_2\r]\circ\ms{F}\l(\phi\r)&&\axicat[1]\textrm{ of }\cat{C}\\
          \ms{G}\l(\psi'\circ\psi\r)\circ f_1&=\l[\ms{G}\l(\psi'\r)\circ f_2\r]\circ\ms{F}\l(\phi\r).\ \ \ \ \ \ \ \ &&\axifunctor[2]\textrm{ of }\ms{G}
      \end{alignedat}
  \end{equation}$$
  For the right hand side of the last equation, we have$$\begin{equation}
      \begin{alignedat}{2}
          \l[\ms{G}\l(\psi'\r)\circ f_2\r]\circ\ms{F}\l(\phi\r)&=\l[f_3\circ\ms{F}\l(\phi\r)'\r]\circ\ms{F}\l(\phi\r)&&(\,2\,)\\
          &=f_3\circ\l[\ms{F}\l(\phi'\r)\circ\ms{F}\l(\phi\r)\r]\ \ \ \ \ \ \ \ &&\axicat[1]\textrm{ of }\cat{C}\\
          &=f_3\circ\ms{F}\l(\phi'\circ\phi\r)&&\axifunctor[2]\textrm{ of }\ms{F}
      \end{alignedat}
  \end{equation}$$
  and thus equality holds. It follows then that $\tpl{\phi'\circ\phi,\psi'\circ\psi}$ is indeed a morphism from $\tpl{E_1,D_1,f_1}$ to $\tpl{E_3,D_3,f_3}$.<span style="float:right;">$\blacksquare$</span>
